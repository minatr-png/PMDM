using AE2.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AE2.Controllers
{
    public class ApuestasController : ApiController
    {
        // GET: api/Apuestas
        public IEnumerable<ApuestasDTO> Get()
        {
            var repo = new ApuestasRepository();
            List<ApuestasDTO> apus = repo.RetrieveDTO();
            return apus;
        }

        // GET: api/Apuestas?emailUsu=valor1&mercadoApu=valor2
        [Authorize(Roles="Admin")]
        public IEnumerable<ApuestasMercadoEmail> GetMercadoEmail(int mercadoApu, string emailUsu)
        {
            var repo = new ApuestasRepository();
            List<ApuestasMercadoEmail> apus = repo.RetrieveByEmailAndMercado(mercadoApu, emailUsu);
            return apus;
        }

        // GET: api/Apuestas/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Apuestas
        [Authorize]
        public void Post([FromBody]Apuestas apuesta)
        {
            var repo = new ApuestasRepository();
            repo.Save(apuesta);
        }

        // PUT: api/Apuestas/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Apuestas/5
        public void Delete(int id)
        {
        }
    }
}
