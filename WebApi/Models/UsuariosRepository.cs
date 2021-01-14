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
        /*private MySqlConnection Connect()
        {
            string connString = "Server=127.0.0.1;Port=3306;DataBase=placemybet;UID=root;password=;SslMode=none";
            MySqlConnection con = new MySqlConnection(connString);

            return con;
        }

        internal List<Usuario> Retrieve()
        {
            MySqlConnection con = Connect();
            MySqlCommand command = con.CreateCommand();
            command.CommandText = "select * from usuarios";

            try
            {
                con.Open();
                MySqlDataReader res = command.ExecuteReader();

                List<Usuarios> usus = new List<Usuarios>();

                while (res.Read()) usus.Add(new Usuarios(res.GetString(0), res.GetString(1), res.GetString(2), res.GetInt32(3), res.GetInt32(4)));

                con.Close();

                return usus;
            }
            catch (MySqlException e)
            {
                Debug.WriteLine("Se ha producido un error: " + e);
                return null;
            }
        }*/
    }
}