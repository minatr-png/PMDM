using Microsoft.EntityFrameworkCore;
using PlaceMyBetApp.Models;
using System.Collections.Generic;
using System.Linq;

namespace AE2.Models
{
    public class UsuariosRepository
    {
        internal List<Usuario> Retrieve()
        {
            List<Usuario> usuario = new List<Usuario>();
            using (PlaceMyBetContext context = new PlaceMyBetContext())
            {
                usuario = context.Usuarios.ToList();
            }

            return usuario;
        }

        internal Usuario Retrieve(string id)
        {
            Usuario usuario;
            using (PlaceMyBetContext context = new PlaceMyBetContext())
            {
                usuario = context.Usuarios.Where(s => s.UsuarioId == id).FirstOrDefault();
            }

            return usuario;
        }

        internal void Delete(string id)
        {
            PlaceMyBetContext context = new PlaceMyBetContext();

            context.Usuarios.Remove(Retrieve(id));
            context.SaveChanges();
        }
    }
}