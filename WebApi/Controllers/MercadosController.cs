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
        public IEnumerable<MercadosDTO> Get()
        {
            var repo = new MercadosRepository();
            List<MercadosDTO> mercs = repo.RetrieveDTO();
            return mercs;
        }

        // GET: api/Mercados?eventoMer=valor1&tipo=valor2
        public IEnumerable<MercadosDTO> GetEventoTipo(int eventoMer, int tipo)
        {
            var repo = new MercadosRepository();
            List<MercadosDTO> mercs = repo.RetrieveByEventoAndTipo(eventoMer, tipo);
            return mercs;
        }

        // GET: api/Mercados/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Mercados
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Mercados/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Mercados/5
        public void Delete(int id)
        {
        }
    }
}
