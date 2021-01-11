using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Web;

namespace AE2.Models
{
    public class ApuestasRepository
    {
        private MySqlConnection Connect()
        {
            string connString = "Server=127.0.0.1;Port=3306;DataBase=placemybet;UID=root;password=;SslMode=none";
            MySqlConnection con = new MySqlConnection(connString);

            return con;
        }

        internal List<Apuestas> Retrieve()
        {
            MySqlConnection con = Connect();
            MySqlCommand command = con.CreateCommand();
            command.CommandText = "select * from apuestas";

            try
            {
                con.Open();
                MySqlDataReader res = command.ExecuteReader();

                List<Apuestas> apus = new List<Apuestas>();

                while (res.Read()) apus.Add(new Apuestas(res.GetInt32(0), res.GetInt32(1), res.GetInt32(2), res.GetFloat(3), res.GetFloat(4), res.GetDateTime(5), res.GetString(6), res.GetString(7)));

                con.Close();

                return apus;
            }
            catch (MySqlException e)
            {
                Debug.WriteLine("Se ha producido un error: " + e);
                return null;
            }
        }

        internal List<ApuestasDTO> RetrieveDTO()
        {
            MySqlConnection con = Connect();
            MySqlCommand command = con.CreateCommand();
            command.CommandText = "SELECT apuestas.*, mercados.tipo FROM apuestas INNER JOIN mercados ON mercados.idMercado = apuestas.mercadoApu;";

            try
            {
                con.Open();
                MySqlDataReader res = command.ExecuteReader();

                List<ApuestasDTO> apus = new List<ApuestasDTO>();

                while (res.Read()) apus.Add(new ApuestasDTO(res.GetInt32(7), res.GetFloat(2), res.GetFloat(3), res.GetDateTime(4), res.GetString(5), res.GetString(6))); 

                con.Close();

                return apus;
            }
            catch (MySqlException e)
            {
                Debug.WriteLine("Se ha producido un error: " + e);
                return null;
            }
        }

        internal List<ApuestasMercadoEmail> RetrieveByEmailAndMercado(int mercado, string email)
        {
            MySqlConnection con = Connect();
            MySqlCommand command = con.CreateCommand();
            command.CommandText = "SELECT a.*, m.tipo FROM apuestas a INNER JOIN mercados m ON m.idMercado = a.mercadoApu WHERE a.mercadoApu = @A AND a.emailUsu = @A2;";
            command.Parameters.AddWithValue("@A", mercado);
            command.Parameters.AddWithValue("@A2", email);

            try
            {
                con.Open();
                MySqlDataReader res = command.ExecuteReader();

                List<ApuestasMercadoEmail> apus = new List<ApuestasMercadoEmail>();

                while (res.Read()) apus.Add(new ApuestasMercadoEmail(res.GetInt32(7), res.GetString(6), res.GetFloat(2), res.GetFloat(3)));

                con.Close();
                return apus;
            }
            catch (MySqlException e)
            {
                Debug.WriteLine("Se ha producido un error: " + e);
                return null;
            }
        }

        internal void Save(Apuestas apu)
        {
            MySqlConnection con = Connect();
            MySqlCommand command = con.CreateCommand();

            command.CommandText = "SELECT apu.overUnder, mer.cuotaOver, mer.cuotaUnder, mer.dineroOver, mer.dineroUnder, apu.tipo FROM apuestas apu INNER JOIN mercados mer WHERE apu.idApuesta = 1 AND mer.idMercado = apu.mercadoApu;";

            try
            {
                con.Open();
                MySqlDataReader res = command.ExecuteReader();

                double cuota = 0;
                int    tipo  = 0;

                while (res.Read())
                {
                    if (res.GetString(0) == "over")
                    {
                        cuota = res.GetFloat(3) / (res.GetFloat(3) + res.GetFloat(4));

                        cuota = (1 / cuota) * 0.95;
                    }
                    else
                    {
                        cuota = res.GetFloat(4) / (res.GetFloat(3) + res.GetFloat(4));

                        cuota = (1 / cuota) * 0.95;
                    }

                    tipo = res.GetInt32(5);
                }

                con.Close();

                DateTime myDateTime = DateTime.Now;
                string sqlFormattedDate = myDateTime.ToString("yyyy-MM-dd");

                command.CommandText = "insert into apuestas(mercadoApu, tipo, cuota, dinero, fecha, emailUsu, overUnder) values ('" + apu.mercadoApu + "','"
                    + tipo + "','" + cuota + "','" + apu.dinero + "','" + sqlFormattedDate + "','" + apu.emailUsu + "','" + apu.overUnder + "');"; 

                try
                {
                    con.Open();
                    command.ExecuteNonQuery();
                    con.Close();
                }
                catch (MySqlException e) { Debug.WriteLine("Se ha producido un error de conexión"); }
            }
            catch (MySqlException e) { Debug.WriteLine("Se ha producido un error de conexión"); }
        }
    }
}