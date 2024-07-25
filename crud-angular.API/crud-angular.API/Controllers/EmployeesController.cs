using crud_angular.API.Models;
using crud_angular.API.Repositories.Interface;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace crud_angular.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeesController : ControllerBase
    {
        private readonly IEmployeeRepository _repository;
        public EmployeesController(IEmployeeRepository repository)
        {
            _repository = repository;
        }


        [HttpPost]
        public async Task<ActionResult>AddEmployee(Employee model)
        {
            try
            {
                await _repository.AddEmployeeAsync(model);
                return Ok();
            }
            catch(Exception e )
            {
                return BadRequest(e.Message);
            }
        }
        // GET: api/Employees
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Employee>>> GetEmployees()
        {
            var employeList = await _repository.GetAllEmployees();
            return Ok(employeList);
        }


        // GET: api/Employees/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Employee>> GetEmployee(int id)
        {
            var employee = await _repository.GetEmployeeById(id);

            if (employee == null)
            {
                return NotFound();
            }

            return Ok(employee);
        }
        [HttpPut("{id}")]
        public async Task <ActionResult>UpdateEmployee([FromRoute] int id,[FromBody] Employee employee)
        {
            
                 await _repository.UpdateEmployeeAsync(id, employee);
                return Ok(); // using  void repository method
            
            
        }

        // POST: api/Employees
        //[HttpPost]
        //public async Task<ActionResult<Employee>> PostEmployee(Employee employee)
        //{
        //    var newEmployee = await _repository.AddEmployee(employee);
        //    return CreatedAtAction(nameof(GetEmployee), new { id = newEmployee.Id }, newEmployee);
        //}

        //PUT: api/Employees/5
        //[HttpPut("{id}")]
        //public async Task<IActionResult> PutEmployee(int id, Employee employee)
        //{
        //    if (id != employee.Id)
        //    {
        //        return BadRequest();
        //    }

        //    await _repository.UpdateEmployee(employee);

        //    return NoContent();
        //}

       // DELETE: api/Employees/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEmployee(int id)
        {
           await _repository.DeleteEmployee(id);
         

            return Ok();


        }


    }
} 
