using System.Text.Json.Serialization;

namespace crud_angular.API.Models
{
    public class Employee
    {
        //[JsonIgnore]
        //ignor the id input in  Swagger API UI
        public int Id { get; set; } 
       // [JsonPropertyName("firstname")]
        public string Name { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string Age { get; set; }
        public string Salary { get; set; }

    }
}
