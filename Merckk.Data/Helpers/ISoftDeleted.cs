using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Merckk.Data.Helpers {
	public interface ISoftDeleted {
		bool IsDeleted { get; set; }
	}
}
