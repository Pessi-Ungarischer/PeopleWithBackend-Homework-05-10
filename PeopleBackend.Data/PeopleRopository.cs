using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static System.Net.Mime.MediaTypeNames;

namespace PeopleBackend.Data
{
    public class PeopleRopository
    {
        private string _connectionString;

        public PeopleRopository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public void AddPerson(Person p)
        {
            using PersonDbContext context = new(_connectionString);
            context.People.Add(p);
            context.SaveChanges();
        }

        public List<Person> GetAllPeople()
        {
            using PersonDbContext context = new(_connectionString);
            return context.People.ToList();
        }



        public void DeleteById(int id)
        {
            using PersonDbContext context = new(_connectionString);
            context.Database.ExecuteSqlInterpolated($"DELETE FROM People WHERE Id = {id}");
        }
    }
}
