using crud_angular.API.Models;

namespace crud_angular.API.Repositories.Interface
{
    public interface IEmployeeRepository
    {
       
        
        Task AddEmployeeAsync(Employee employee);
        Task<IEnumerable<Employee>> GetAllEmployees();
        Task<Employee> GetEmployeeByIdAsync(int id);

        Task UpdateEmployeeAsync(int id, Employee model);
        Task DeleteEmployeeAsync(int id);
        // Task<Employee> UpdateEmployee(Employee employee);


    }
}
