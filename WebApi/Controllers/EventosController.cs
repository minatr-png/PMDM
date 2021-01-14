using AE2.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AE2.Controllers
{
    public class EventosController : ApiController
    {
        // GET: api/Eventos
        public IEnumerable<Evento> Get()
        {
            var repo = new EventosRepository();

            List<Evento> eves = repo.Retrieve();

            return eves;
        }

        public void Post(Evento evento)
        {
            var repo = new EventosRepository();
            repo.Save(evento);
        }

        // GET: api/Eventos/5
        public Evento Get(int id)
        {
            /*var repo = new EventosRepository();

            Eventos eve = repo.Retrieve();*/

            return null;
        }

        // POST: api/Eventos
        /*public void Post([FromBody]string value)
        {
        }*/

        // PUT: api/Eventos/5
        public void Put(int id, string nuevo_local, string nuevo_visitante)
        {
            var repo = new EventosRepository();
            repo.Update(id, nuevo_local, nuevo_visitante);
        }

        // DELETE: api/Eventos/id
        public void Delete(int id)
        {
            var repo = new EventosRepository();
            repo.Delete(id);
        }
    }
}
