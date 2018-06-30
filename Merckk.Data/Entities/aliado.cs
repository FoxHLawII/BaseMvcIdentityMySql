using Merckk.Data.Helpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Merckk.Data.Entities {
	public class aliado : ISoftDeleted {
		public int Id { get; set; }
		public int IdPerson { get; set; }
		public string Name { get; set; }
		public string Nit { get; set; }
		public string WebSite { get; set; }
		public bool IsDeleted { get; set; }
	}
}
