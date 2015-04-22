using System.Web;
using System.Web.Mvc;

namespace ui_boilerplate_dotNet_MVC4
{
	public class FilterConfig
	{
		public static void RegisterGlobalFilters(GlobalFilterCollection filters)
		{
			filters.Add(new HandleErrorAttribute());
		}
	}
}