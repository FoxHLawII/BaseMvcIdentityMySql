using System.Web;
using System.Web.Optimization;

namespace Merckk {
	public class BundleConfig {
		// Para obtener más información sobre las uniones, visite https://go.microsoft.com/fwlink/?LinkId=301862
		public static void RegisterBundles(BundleCollection bundles) {
			bundles.Add(new StyleBundle("~/Css/Layout").Include(
					  "~/Content/css/normalize.css",
					  "~/Content/css/bootstrap.css",
					  "~/Content/css/animate.css",
					  "~/Content/css/jquery.steps.css",
					  "~/Content/css/main.css",
					  "~/Content/css/magic.css"));

			bundles.Add(new ScriptBundle("~/Js/Layout").Include(
					  "~/Content/js/jquery-3.2.1.min.js",
					  "~/Content/js/Services/Const.js",
					  "~/Content/js/Services/Utils.js",
					  "~/Content/js/modernizr.min.js",
					  "~/Content/js/bootstrap.min.js",
					  "~/Content/js/jquery.emojiRatings.js",
					  "~/Content/js/jquery.countdown.min.js",
					  "~/Content/js/jquery.steps.min.js",
					  "~/Content/js/jquery.serializejson.js",
					  "~/Content/js/main-forms.js",
					  "~/Content/js/main.js"
					  ));
		}
	}
}
