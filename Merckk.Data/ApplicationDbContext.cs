using Merckk.Data.Identity;
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

		public static ApplicationDbContext Create() {
			return new ApplicationDbContext();
		}

		protected override void OnModelCreating(DbModelBuilder modelBuilder) {
			base.OnModelCreating(modelBuilder);

			// email address doesn't need to be in unicode, check it spec
			modelBuilder.Entity<ApplicationUser>().Property(u => u.UserName).IsUnicode(false);
			modelBuilder.Entity<ApplicationUser>().Property(u => u.Email).IsUnicode(false);
			modelBuilder.Entity<IdentityRole>().Property(r => r.Name).HasMaxLength(255);
		}
	}
}
