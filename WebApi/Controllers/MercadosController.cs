using AE2.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AE2.Controllers
{
    public class MercadosController : ApiController
    {
        // GET: api/Mercados
        public IEnumerable<Mercado> Get()
        {
            var repo = new MercadosRepository();
            List<Mercado> mercs = repo.Retrieve();

            return mercs;
        }

        // GET: api/Mercados/5
        public Mercado Get(int id)
        {
            var repo = new MercadosRepository();
            Mercado merc = repo.Retrieve(id);
            return merc;
        }

        // POST: api/Mercados
        public void Post(Mercado mercado)
        {
            var repo = new MercadosRepository();
            repo.Save(mercado);
        }

        // PUT: api/Mercados/5
        public void Put(int id, bool blocked)
        {
            var repo = new MercadosRepository();
            repo.UpdateDate(id, blocked);
        }

        // DELETE: api/Mercados/5
        public void Delete(int idEvento)
        {
            var repo = new MercadosRepository();
            repo.DeleteFromEvento(idEvento);
        }
    }
}
