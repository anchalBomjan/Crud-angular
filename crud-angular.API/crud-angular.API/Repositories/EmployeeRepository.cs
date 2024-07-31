using crud_angular.API.Data;
using crud_angular.API.Models;
using crud_angular.API.Repositories.Interface;
using Microsoft.EntityFrameworkCore;

namespace crud_angular.API.Repositories
{
    public class EmployeeRepository:IEmployeeRepository
    {

        private readonly ApplicationDbContext _context;

        public EmployeeRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Employee>> GetAllEmployees()
        {
            return await _context.Employees.ToListAsync();
        }

        public async Task<Employee> GetEmployeeByIdAsync(int id)
        {
            return await _context.Employees.FindAsync(id);
        }


        //public async Task AddEmployee(Employee employee)
        //{
        //    await _context.Set<Employee>().Add(employee);
        //    await _context.SaveChangesAsync();
        //}
        // we can do like this ways also
        public async Task AddEmployeeAsync(Employee employee)
        {
            await _context.Set<Employee>().AddAsync(employee);
            await _context.SaveChangesAsync();
            
        }
        //public async Task UpdateEmployeeAsync(int id, Employee model)
        //{
        //    var employee = await _context.Employees.FindAsync(id);
        //    if (employee == null)
        //    {
        //        throw new Exception("Employee is not found");
        //    }

        //    employee.Name = model.Name;
        //    employee.Email = model.Email;
        //    employee.Phone=model.Phone;
        //    employee.Age = model.Age;
        //    employee.Salary = model.Salary;
        //    // Save the changes to the database
        //    await _context.SaveChangesAsync();

        //    // Return the updated employee if needed
        //    //return employee;
        //}

        public async Task UpdateEmployeeAsync(int id, Employee model)
        {
            var employeee = await _context.Employees.FindAsync(id);
            if (employeee == null)
            {
                throw new Exception("Employee not found");
            }
            employeee.Name = model.Name;
            employeee.Email = model.Email;
            employeee.Phone = model.Phone;
            employeee.Age = model.Age;
            employeee.Salary = model.Salary;
           
            await _context.SaveChangesAsync();
        }

        public async Task DeleteEmployeeAsync(int id)
        {
            var employee = await _context.Employees.FindAsync(id);
            if (employee == null)
            {
                throw new Exception("No Employee found");
            }


            _context.Employees.Remove(employee);
            await _context.SaveChangesAsync();
        }
        //public async Task<Employee> UpdateEmployee(Employee employee)
        //{
        //    _context.Entry(employee).State = EntityState.Modified;
        //    await _context.SaveChangesAsync();
        //    return employee;
        //}


    }
}

