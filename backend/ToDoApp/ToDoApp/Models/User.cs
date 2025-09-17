using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
namespace ToDoApp.Models
{
    public class User
    {
        [Required(ErrorMessage ="First Name is required")]
        public string FirstName { get; set; }

        [Required(ErrorMessage = "Last Name is required")]
        public string LastName { get; set; }

        [Required(ErrorMessage = "Username is required")]
        [RegularExpression(@"^[a-zA-Z0-9_]+$", ErrorMessage = "Username can only contain letters, numbers, and underscores")]
        [MinLength(5,ErrorMessage ="USername must be at least 5 characters long")]
        public string Username { get; set; }

        [Required(ErrorMessage = "email is required")]
        [EmailAddress(ErrorMessage ="Valid email address required")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Password is required")]
        [MinLength(8,ErrorMessage ="Password must be at least 8 characters long")]
        public string Password { get; set; }
    }
}
