using AE2.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PlaceMyBetApp.Models
{
    public class Cuenta
    {
        public Cuenta(int cuentaId, decimal saldo, string banco, string usuarioId)
        {
            CuentaId  = cuentaId;
            Saldo     = saldo;
            Banco     = banco;
            UsuarioId = usuarioId;
        }

        public Cuenta() { }

        public int     CuentaId { get; set; }
        public decimal Saldo     { get; set; }
        public string  Banco     { get; set; }

        public Usuario Usuario   { get; set; }
        public string  UsuarioId { get; set; }
    }
}