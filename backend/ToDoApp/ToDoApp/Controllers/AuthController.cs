using Microsoft.AspNetCore.Mvc;

namespace ToDoApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AuthController : Controller
    {
        [HttpGet("login")]
        public IActionResult Authenticate()
        {
            return Ok(new { message = "Came"});
        }
    }
}
