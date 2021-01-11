using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Web;

namespace AE2.Models
{
    public class UsuariosRepository
    {
        private MySqlConnection Connect()
        {
            string connString = "Server=127.0.0.1;Port=3306;DataBase=placemybet;UID=root;password=;SslMode=none";
            MySqlConnection con = new MySqlConnection(connString);

            return con;
        }

        internal List<Usuarios> Retrieve()
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
        }
    }
}