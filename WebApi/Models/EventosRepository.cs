using Microsoft.Ajax.Utilities;
using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Web;

namespace AE2.Models
{
    public class EventosRepository
    {
        private MySqlConnection Connect()
        {
            string connString = "Server=127.0.0.1;Port=3306;DataBase=placemybet;UID=root;password=;SslMode=none";
            MySqlConnection con = new MySqlConnection(connString);

            return con;
        }

        internal List<Eventos> Retrieve()
        {
            MySqlConnection con  = Connect();
            MySqlCommand command = con.CreateCommand();
            command.CommandText  = "select * from eventos";

            try
            {
                con.Open();
                MySqlDataReader res = command.ExecuteReader();

                List<Eventos> eves = new List<Eventos>();

                while (res.Read()) eves.Add(new Eventos(res.GetInt32(0), res.GetString(1), res.GetString(2), res.GetDateTime(3)));

                con.Close();

                return eves;
            }
            catch(MySqlException e)
            {
                Debug.WriteLine("Se ha producido un error: " + e);
                return null;
            }
        }

        internal List<EventosDTO> RetrieveDTO()
        {
            MySqlConnection con  = Connect();
            MySqlCommand command = con.CreateCommand();
            command.CommandText  = "select * from eventos";

            try
            {
                con.Open();
                MySqlDataReader res = command.ExecuteReader();

                List<EventosDTO> eves = new List<EventosDTO>();

                while (res.Read()) eves.Add(new EventosDTO(res.GetString(1), res.GetString(2), res.GetDateTime(3)));

                con.Close();

                return eves;
            }
            catch (MySqlException e)
            {
                Debug.WriteLine("Se ha producido un error: " + e);
                return null;
            }
        }
    }
}