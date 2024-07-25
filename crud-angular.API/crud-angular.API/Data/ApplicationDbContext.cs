using crud_angular.API.Models;
using Microsoft.EntityFrameworkCore;

namespace crud_angular.API.Data
{
    public class ApplicationDbContext:DbContext
    {


        public ApplicationDbContext(DbContextOptions<ApplicationDbContext>options):base(options)
        {
             
        }

        public DbSet<Employee> Employees { get; set; }
    }
}
