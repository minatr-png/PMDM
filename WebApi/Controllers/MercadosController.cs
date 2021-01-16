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
        public IEnumerable<MercadoDTO> Get()
        {
            var repo = new MercadosRepository();
            List<MercadoDTO> mercs = repo.RetrieveDTO();

            return mercs;
        }

        // GET: api/Mercados/5
        public Mercado Get(int id)
        {
            var repo = new MercadosRepository();
            Mercado merc = repo.Retrieve(id);
            return merc;
        }

        // POST: api/Apuestas
        public void Post(Mercado mercado)
        {
            var repo = new MercadosRepository();
            repo.Save(mercado);
        }

        // PUT: api/Mercados/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Mercados/5
        public void Delete(int idEvento)
        {
            var repo = new MercadosRepository();
            repo.DeleteFromEvento(idEvento);
        }
    }
}
