using Microsoft.AspNetCore.Mvc;

namespace Centric.Controllers
{
    public class CardsController : Controller
    {
        public IActionResult Cards()
        {
            return View();
        }
    }
}