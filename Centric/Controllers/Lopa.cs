using Microsoft.AspNetCore.Mvc;

namespace Centric.Controllers
{
    public class LopaController : Controller
    {
        public IActionResult Layer1()
        {
            return View();
        }


        public IActionResult Layer2()
        {
            return View();
        }


        public IActionResult Layer3()
        {
            return View();
        }
    }
}