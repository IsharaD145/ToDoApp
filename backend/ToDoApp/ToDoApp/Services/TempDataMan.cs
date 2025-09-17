using ToDoApp.Models;
namespace ToDoApp.Services
{
    public class TempDataMan
    {
        public static List<User> Users = new List<User>();

        public static void GetAllUsers() { 
        var filePath = File.ReadAllText("users.json");
            if (!string.IsNullOrEmpty(filePath)) {
                Users = System.Text.Json.JsonSerializer.Deserialize<List<User>>(filePath);
            }
        }

    }
}
