using Microsoft.AspNetCore.Mvc;

namespace Centric.Controllers
{
    public class DashboardController : Controller
    {
        public IActionResult Dashboard()
        {
            return View();
        }
    }
}