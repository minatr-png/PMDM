using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AE2.Models
{
    public class Mercado
    {
        public Mercado(int mercadoId, int tipo, float cuotaOver, float cuotaUnder, float dineroOver, float dineroUnder, int eventoId, bool bloqueado)
        {
            MercadoId   = mercadoId;
            Tipo        = tipo;
            CuotaOver   = cuotaOver;
            CuotaUnder  = cuotaUnder;
            DineroOver  = dineroOver;
            DineroUnder = dineroUnder;
            EventoId    = eventoId;
            Bloqueado   = bloqueado;
        }

        public int   MercadoId   { get; set; }
        public int   Tipo        { get; set; }
        public float CuotaOver   { get; set; }
        public float CuotaUnder  { get; set; }
        public float DineroOver  { get; set; }
        public float DineroUnder { get; set; }
        public bool  Bloqueado   { get; set; }

        public Evento        Evento   { get; set; }
        public int           EventoId { get; set; }
        public List<Apuesta> Apuestas { get; set; }
    }

    public class MercadoDTO
    {
        public MercadoDTO(int tipo, float cuotaOver, float cuotaUnder)
        {
            Tipo       = tipo;
            CuotaOver  = cuotaOver;
            CuotaUnder = cuotaUnder;
        }

        public int   Tipo       { get; set; }
        public float CuotaOver  { get; set; }
        public float CuotaUnder { get; set; }
    }
}