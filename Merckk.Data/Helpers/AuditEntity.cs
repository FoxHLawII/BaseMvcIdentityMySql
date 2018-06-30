﻿using Merckk.Data.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Merckk.Data.Helpers {
	public class AuditEntity {
		public DateTime? CreatedAt { get; set; }
		public string CreatedBy { get; set; }
		[ForeignKey("CreatedBy")]
		public ApplicationUser CreatedUser { get; set; }

		public DateTime? UpdatedAt { get; set; }
		public string UpdatedBy { get; set; }
		[ForeignKey("UpdatedBy")]
		public ApplicationUser UpdatedUser { get; set; }

		public DateTime? DeletedAt { get; set; }
		public string DeletedBy { get; set; }
		[ForeignKey("DeletedBy")]
		public ApplicationUser DeletedUser { get; set; }
	}
}
