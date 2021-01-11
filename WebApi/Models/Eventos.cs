using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AE2.Models
{
    public class Eventos
    {
        public Eventos(int idEvento, string nomLocal, string nomVisitante, DateTime fecha)
        {
            this.idEvento     = idEvento;
            this.nomLocal     = nomLocal;
            this.nomVisitante = nomVisitante;
            this.fecha        = fecha;
        }

        public int      idEvento     { get; set; }
        public string   nomLocal     { get; set; }
        public string   nomVisitante { get; set; }
        public DateTime fecha        { get; set; }
    }

    public class EventosDTO
    {
        public EventosDTO(string nomLocal, string nomVisitante, DateTime fecha)
        {
            this.nomLocal     = nomLocal;
            this.nomVisitante = nomVisitante;
            this.fecha        = fecha;
        }

        public string nomLocal     { get; set; }
        public string nomVisitante { get; set; }
        public DateTime fecha      { get; set; }
    }
}