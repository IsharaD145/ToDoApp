using Microsoft.AspNetCore.Mvc;
using ToDoApp.Models;
using ToDoApp.Services;

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

        [HttpPost("signup")]
        public IActionResult Signup([FromBody] User user) { 
            UserServices.AddUser(user);
        }

    }
}
