using AE2.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AE2.Controllers
{
    public class UsuariosController : ApiController
    {
        // GET: api/Usuarios
        public IEnumerable<Usuario> Get()
        {
            var repo = new UsuariosRepository();
            List<Usuario> usu = repo.Retrieve();

            return usu;
        }

        // GET: api/Usuarios/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Usuarios
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Usuarios/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Usuarios?id=x
        public void Delete(string id)
        {
            var repo = new UsuariosRepository();
            repo.Delete(id);
        }

    }
}
