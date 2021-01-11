using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Web;

namespace AE2.Models
{
    public class MercadosRepository
    {
        private MySqlConnection Connect()
        {
            string connString = "Server=127.0.0.1;Port=3306;DataBase=placemybet;UID=root;password=;SslMode=none";
            MySqlConnection con = new MySqlConnection(connString);

            return con;
        }

        internal List<Mercados> Retrieve()
        {
            MySqlConnection con = Connect();
            MySqlCommand command = con.CreateCommand();
            command.CommandText = "select * from mercados";

            try
            {
                con.Open();
                MySqlDataReader res = command.ExecuteReader();

                List<Mercados> mercs = new List<Mercados>();

                while (res.Read()) mercs.Add(new Mercados(res.GetInt32(0), res.GetInt32(1), res.GetFloat(2), res.GetFloat(3), res.GetFloat(4), res.GetFloat(5), res.GetInt32(6)));

                con.Close();
                return mercs;
            }
            catch (MySqlException e)
            {
                Debug.WriteLine("Se ha producido un error: " + e);
                return null;
            }
        }

        internal List<MercadosDTO> RetrieveDTO()
        {
            MySqlConnection con = Connect();
            MySqlCommand command = con.CreateCommand();
            command.CommandText = "select * from mercados";

            try
            {
                con.Open();
                MySqlDataReader res = command.ExecuteReader();

                List<MercadosDTO> mercs = new List<MercadosDTO>();

                while (res.Read()) mercs.Add(new MercadosDTO(res.GetInt32(1), res.GetFloat(2), res.GetFloat(3)));

                con.Close();
                return mercs;
            }
            catch (MySqlException e)
            {
                Debug.WriteLine("Se ha producido un error: " + e);
                return null;
            }
        }

        internal List<MercadosDTO> RetrieveByEventoAndTipo(int evento, int tipo)
        {
            MySqlConnection con = Connect();
            MySqlCommand command = con.CreateCommand();
            command.CommandText = "SELECT * FROM mercados WHERE eventoMer = @A AND tipo = @A2;";
            command.Parameters.AddWithValue("@A", evento);
            command.Parameters.AddWithValue("@A2", tipo);

            try
            {
                con.Open();
                MySqlDataReader res = command.ExecuteReader();

                List<MercadosDTO> mercs = new List<MercadosDTO>();

                while (res.Read()) mercs.Add(new MercadosDTO(res.GetInt32(1), res.GetFloat(2), res.GetFloat(3)));

                con.Close();
                return mercs;
            }
            catch (MySqlException e)
            {
                Debug.WriteLine("Se ha producido un error: " + e);
                return null;
            }
        }
    }
}