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
        public string AddPerson(Person p)
        {
            PeopleRopository pr = new(_connectionString);
            pr.AddPerson(p);
            return p.FirstName;
        }

        [Route("GetAllPeople")]
        public List<Person> GetAllPeople()
        {
            PeopleRopository pr = new(_connectionString);
            List<Person> pl =  pr.GetAllPeople();
            return pl;
        }

       
    }
}
