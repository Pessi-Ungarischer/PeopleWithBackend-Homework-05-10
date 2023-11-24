using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PeopleBackend.Data
{
        public class PeopleDataContextFactory : IDesignTimeDbContextFactory<PersonDbContext>
        {
            public PersonDbContext CreateDbContext(string[] args)
            {
                var config = new ConfigurationBuilder()
                   .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), $"..{Path.DirectorySeparatorChar}Homework 05-10 PeopleWithBackend.Web"))
                   .AddJsonFile("appsettings.json")
                   .AddJsonFile("appsettings.local.json", optional: true, reloadOnChange: true).Build();

                return new PersonDbContext(config.GetConnectionString("ConStr"));
            }
      
    }
}
