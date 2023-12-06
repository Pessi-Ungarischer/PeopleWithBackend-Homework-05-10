using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PeopleBackend.Data;
using static System.Net.Mime.MediaTypeNames;

namespace Homework_05_10_PeopleWithBackend.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PeopleController : ControllerBase
    {
        private string _connectionString;

        public PeopleController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("conStr");
        }

        [Route("addperson")]
        [HttpPost]
        public void AddPerson(Person p)
        {
            PeopleRopository pr = new(_connectionString);
            pr.AddPerson(p);
        }

        [Route("GetAllPeople")]
        public List<Person> GetAllPeople()
        {
            Thread.Sleep(1000);
            PeopleRopository pr = new(_connectionString);
            return pr.GetAllPeople();
             
        }

        [Route("DeleteById")]
        [HttpPost]
        public int DeleteById(int id)
        {
            PeopleRopository pr = new(_connectionString);
            pr.DeleteById(id);
            return id;
        }

    }
}
