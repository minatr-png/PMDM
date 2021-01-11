using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AE2.Models
{
    public class Usuarios
    {
        public Usuarios(string email, string nombre, string apellidos, int edad, int cuentaUsu)
        {
            this.email     = email;
            this.nombre    = nombre;
            this.apellidos = apellidos;
            this.edad      = edad;
            this.cuentaUsu = cuentaUsu;
        }

        public string email     { get; set; }
        public string nombre    { get; set; }
        public string apellidos { get; set; }
        public int    edad      { get; set; }
        public int    cuentaUsu { get; set; }
    }
}