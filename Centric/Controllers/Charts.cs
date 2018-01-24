using Microsoft.AspNetCore.Mvc;

namespace Centric.Controllers
{
    public class ChartsController : Controller
    {
        public IActionResult Flot()
        {
            return View();
        }
        public IActionResult Radial()
        {
            return View();
        }
        public IActionResult Rickshaw()
        {
            return View();
        }

    }
}