using Microsoft.EntityFrameworkCore;
using PlaceMyBetApp.Models;
using System.Collections.Generic;
using System.Linq;

namespace AE2.Models
{
    public class ApuestasRepository
    {
        internal List<Apuesta> Retrieve()
        {
            List<Apuesta> apuestas = new List<Apuesta>();
            using (PlaceMyBetContext context = new PlaceMyBetContext())
            {
                apuestas = context.Apuestas.Include(p => p.Mercado).ToList();
            }

            return apuestas;
        }

        internal List<ApuestaDTO> RetrieveDTO()
        {
            List<Apuesta> apuestas = new List<Apuesta>();
            List<ApuestaDTO> apuestasDTO = null;
            using (PlaceMyBetContext context = new PlaceMyBetContext())
            {
                apuestasDTO = context.Apuestas.Include(p => p.Mercado).Select(a => ToDTO(a)).ToList();
            }

            //List<ApuestaDTO> apuestasDTO = new List<ApuestaDTO>();
            //for (int i = 0; i < apuestas.Count; i++) apuestasDTO.Add(ToDTO(apuestas[i]));

            return apuestasDTO;
        }

        internal Apuesta Retrieve(int id)
        {
            Apuesta apuesta;
            using (PlaceMyBetContext context = new PlaceMyBetContext())
            {
                apuesta = context.Apuestas.Where(s => s.ApuestaId == id).FirstOrDefault();
            }

            return apuesta;
        }

        internal void Save(Apuesta apuesta)
        {
            PlaceMyBetContext contextApuesta = new PlaceMyBetContext();
            contextApuesta.Apuestas.Add(apuesta);
            contextApuesta.SaveChanges();

            Mercado mercado;
            using (PlaceMyBetContext contextMercado = new PlaceMyBetContext())
            {
                mercado = contextMercado.Mercados.Where(p => p.MercadoId == apuesta.MercadoId).FirstOrDefault();
                if (apuesta.OverUnder == "over")
                {
                    mercado.DineroOver += apuesta.Dinero;

                    float probabilidad = mercado.DineroOver / (mercado.DineroOver + mercado.DineroUnder);
                    mercado.CuotaOver  = (float)(1 / probabilidad * 0.95); 
                }
                else
                {
                    mercado.DineroUnder += apuesta.Dinero;

                    float probabilidad = mercado.DineroUnder / (mercado.DineroOver + mercado.DineroUnder);
                    mercado.CuotaUnder = (float)(1 / probabilidad * 0.95);
                }

                contextMercado.SaveChanges();
            }
        }

        public static ApuestaDTO ToDTO(Apuesta a)
        {
            return new ApuestaDTO(a.UsuarioId, a.Mercado.EventoId, a.Tipo, a.Cuota, a.Dinero);
        }
    }
}