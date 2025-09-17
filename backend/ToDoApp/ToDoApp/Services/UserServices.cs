using ToDoApp.Models;
namespace ToDoApp.Services
{
    public class UserServices
    {
        public static bool AddUser(User user) { 
            var existingUser = TempDataMan.Users.FirstOrDefault(u => u.Username == user.Username);
            if (existingUser != null) {
                return false; // User already exists
            }
            TempDataMan.Users.Add(user);
            return true; // User added successfully
        }
    }
}
