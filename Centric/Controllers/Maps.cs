using Microsoft.AspNetCore.Mvc;

namespace Centric.Controllers
{
    public class MapsController : Controller
    {
        public IActionResult Google()
        {
            return View();
        }
        public IActionResult GoogleFull()
        {
            return View();
        }
        public IActionResult Vector()
        {
            return View();
        }
        public IActionResult Datamaps()
        {
            return View();
        }
    }
}