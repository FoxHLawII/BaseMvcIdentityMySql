using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Merckk.Startup))]
namespace Merckk
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
