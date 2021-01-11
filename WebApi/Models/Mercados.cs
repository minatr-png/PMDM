using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AE2.Models
{
    public class Mercados
    {
        public Mercados(int idMercado, int tipo, float cuotaOver, float cuotaUnder, float dineoroOver, float dineroUnder, int eventoMer)
        {
            this.idMercado   = idMercado;
            this.tipo        = tipo;
            this.cuotaOver   = cuotaOver;
            this.cuotaUnder  = cuotaUnder;
            this.dineoroOver = dineoroOver;
            this.dineroUnder = dineroUnder;
            this.eventoMer   = eventoMer;
        }

        public int   idMercado   { get; set; }
        public int   tipo        { get; set; }
        public float cuotaOver   { get; set; }
        public float cuotaUnder  { get; set; }
        public float dineoroOver { get; set; }
        public float dineroUnder { get; set; }
        public int   eventoMer   { get; set; }
    }

    public class MercadosDTO
    {
        public MercadosDTO(int tipo, float cuotaOver, float cuotaUnder)
        {
            this.tipo = tipo;
            this.cuotaOver = cuotaOver;
            this.cuotaUnder = cuotaUnder;
        }

        public int   tipo       { get; set; }
        public float cuotaOver  { get; set; }
        public float cuotaUnder { get; set; }
    }
}