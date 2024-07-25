using crud_angular.API.Models;

namespace crud_angular.API.Repositories.Interface
{
    public interface IEmployeeRepository
    {
       
        
        Task AddEmployeeAsync(Employee employee);
        Task<IEnumerable<Employee>> GetAllEmployees();
        Task<Employee> GetEmployeeById(int id);

        Task UpdateEmployeeAsync(int id, Employee employee);
        Task DeleteEmployee(int id);
        // Task<Employee> UpdateEmployee(Employee employee);


    }
}
