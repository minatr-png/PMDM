using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AE2.Models
{
    public class Apuestas
    {
        public Apuestas(int idApuesta, int mercadoApu, int tipo, float cuota, float dinero, DateTime fecha, string emailUsu, string overUnder)
        {
            this.idApuesta  = idApuesta;
            this.mercadoApu = mercadoApu;
            this.tipo       = tipo;
            this.cuota      = cuota;
            this.dinero     = dinero;
            this.fecha      = fecha;
            this.emailUsu   = emailUsu;
            this.overUnder  = overUnder;
        }

        public int      idApuesta  { get; set; }
        public int      mercadoApu { get; set; }
        public int      tipo       { get; set; }
        public float    cuota      { get; set; }
        public float    dinero     { get; set; }
        public DateTime fecha      { get; set; }
        public string   emailUsu   { get; set; }
        public string   overUnder  { get; set; }
    }

    public class ApuestasDTO
    {
        public ApuestasDTO(int tipo, float cuota, float dinero, DateTime fecha, string emailUsu, string overUnder)
        {
            this.tipo      = tipo;
            this.cuota     = cuota;
            this.dinero    = dinero;
            this.fecha     = fecha;
            this.emailUsu  = emailUsu;
            this.overUnder = overUnder;
        }

        public int      tipo      { get; set; }
        public float    cuota     { get; set; }
        public float    dinero    { get; set; }
        public DateTime fecha     { get; set; }
        public string   emailUsu  { get; set; }
        public string   overUnder { get; set; }
    }

    public class ApuestasMercadoEmail
    {
        public ApuestasMercadoEmail(int tipo, string overUnder, float cuota, float dinero)
        {
            this.tipo = tipo;
            this.overUnder = overUnder;
            this.cuota = cuota;
            this.dinero = dinero;
        }

        public int    tipo      { get; set; }
        public string overUnder { get; set; }
        public float  cuota     { get; set; }
        public float  dinero    { get; set; }
    }
}