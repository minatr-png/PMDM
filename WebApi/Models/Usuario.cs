using PlaceMyBetApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AE2.Models
{
    public class Usuario
    {
        public Usuario(string usuarioId, string nombre, string apellidos, int edad)
        {
            UsuarioId = usuarioId;
            Nombre    = nombre;
            Apellidos = apellidos;
            Edad      = edad;
        }

        public string UsuarioId { get; set; }
        public string Nombre    { get; set; }
        public string Apellidos { get; set; }
        public int    Edad      { get; set; }
        
        public Cuenta        Cuenta   { get; set; }
        public List<Apuesta> Apuestas { get; set; }
    }
}