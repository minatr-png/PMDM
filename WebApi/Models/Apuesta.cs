using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AE2.Models
{
    public class Apuesta
    {
        public Apuesta(int apuestaId, int tipo, float cuota, float dinero, DateTime fecha, string overUnder, int mercadoId, string usuarioId)
        {
            ApuestaId = apuestaId;
            Tipo      = tipo;
            Cuota     = cuota;
            Dinero    = dinero;
            Fecha     = fecha;
            OverUnder = overUnder;
            UsuarioId = usuarioId;
            MercadoId = mercadoId;
        }

        public Apuesta() { }

        public int      ApuestaId  { get; set; }
        public int      Tipo       { get; set; }
        public float    Cuota      { get; set; }
        public float    Dinero     { get; set; }
        public DateTime Fecha      { get; set; }
        public string   OverUnder  { get; set; }

        public Mercado Mercado   { get; set; }
        public int     MercadoId { get; set; }
        public Usuario Usuario   { get; set; }
        public string  UsuarioId { get; set; }
    }

    public class ApuestaDTO
    {
        public ApuestaDTO(string usuarioID, int eventoId, int tipo, float cuota, float dinero)
        {
            UsuarioId = usuarioID;
            EventoId  = eventoId;
            Tipo      = tipo;
            Cuota     = cuota;
            Dinero    = dinero;
        }

        public int    Tipo      { get; set; }
        public float  Cuota     { get; set; }
        public float  Dinero    { get; set; }
        public int    EventoId  { get; set; }
        public string UsuarioId { get; set; }
    }
}