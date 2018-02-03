using Microsoft.AspNetCore.Mvc;

namespace Centric.Controllers
{
    public class Admin : Controller
    {
        public IActionResult NewComponent()
        {
            return View();
        }
        
    }
}