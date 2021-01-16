using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AE2.Models
{
    public class Evento
    {
        public Evento(int eventoId, string nomLocal, string nomVisitante, DateTime fecha)
        {
            EventoId     = eventoId;
            NomLocal     = nomLocal;
            NomVisitante = nomVisitante;
            Fecha        = fecha;
        }

        public Evento() { }

        public int      EventoId     { get; set; }
        public string   NomLocal     { get; set; }
        public string   NomVisitante { get; set; }
        public DateTime Fecha        { get; set; }

        public List<Mercado> Mercado { get; set; }
    }
}