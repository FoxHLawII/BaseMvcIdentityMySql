using EntityFramework.DynamicFilters;
using Merckk.Data.Helpers;
using Merckk.Data.Identity;
using Merckk.Domain;
using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Merckk.Data {
	[DbConfigurationType(typeof(MySql.Data.Entity.MySqlEFConfiguration))]
	public class ApplicationDbContext : IdentityDbContext<ApplicationUser> {
		public ApplicationDbContext()
			: base("DefaultConnection", throwIfV1Schema: false) {
			Configuration.ProxyCreationEnabled = false;
			Configuration.LazyLoadingEnabled = false;
		}

		public DbSet<ApplicationUser> ApplicationUser { get; set; }
		public DbSet<ApplicationRole> ApplicationRole { get; set; }
		public DbSet<ApplicationUserRole> ApplicationUserRole { get; set; }

		protected override void OnModelCreating(DbModelBuilder modelBuilder) {
			AddMyFilters(ref modelBuilder);
			base.OnModelCreating(modelBuilder);

			// email address doesn't need to be in unicode, check it spec
			modelBuilder.Entity<ApplicationUser>().Property(u => u.UserName).IsUnicode(false);
			modelBuilder.Entity<ApplicationUser>().Property(u => u.Email).IsUnicode(false);
			modelBuilder.Entity<IdentityRole>().Property(r => r.Name).HasMaxLength(255);
		}
		public override int SaveChanges()
        {
            MakeAudit();
            return base.SaveChanges();
        }

        public static ApplicationDbContext Create()
        {
            return new ApplicationDbContext();
        }

        private void MakeAudit()
        {
            var modifiedEntries = ChangeTracker.Entries().Where(
                x => x.Entity is AuditEntity
                    && (
                    x.State == EntityState.Added
                    || x.State == EntityState.Modified
                    || x.State == EntityState.Deleted
                )
            );

            foreach (var entry in modifiedEntries)
            {
                var entity = entry.Entity as AuditEntity;
                if (entity != null)
                {
                    var date = DateTime.Now;
                    var userId = CurrentUserHelper.Get != null ? CurrentUserHelper.Get.UserId : null;

                    if (entry.State == EntityState.Added)
                    {
                        entity.CreatedAt = date;
                        entity.CreatedBy = userId;
                    }
                    else if (entity is ISoftDeleted && ((ISoftDeleted)entity).IsDeleted)
                    {
                        entity.DeletedAt = date;
                        entity.DeletedBy = userId;
                    }

                    Entry(entity).Property(x => x.CreatedAt).IsModified = false;
                    Entry(entity).Property(x => x.CreatedBy).IsModified = false;

                    entity.UpdatedAt = date;
                    entity.UpdatedBy = userId;
                }
            }
        }

        private void AddMyFilters(ref DbModelBuilder modelBuilder)
        {
            modelBuilder.Filter(Enums.MyFilters.IsDeleted.ToString(), (ISoftDeleted ea) => ea.IsDeleted, false);
        }
	}
}
