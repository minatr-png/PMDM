using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace PlaceMyBetApp.Migrations
{
    public partial class m2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Eventos",
                columns: new[] { "EventoId", "Fecha", "NomLocal", "NomVisitante" },
                values: new object[] { 1, new DateTime(2020, 11, 12, 22, 41, 6, 34, DateTimeKind.Local).AddTicks(109), "Valencia", "Real Madrid" });

            migrationBuilder.InsertData(
                table: "Usuarios",
                columns: new[] { "UsuarioId", "Apellidos", "CuentaUsu", "Edad", "Nombre" },
                values: new object[] { "juanjo@gmail.com", "Navarro Molero", 1, 32, "Juanjo" });

            migrationBuilder.InsertData(
                table: "Apuestas",
                columns: new[] { "ApuestaId", "Cuota", "Dinero", "Fecha", "MercadoId", "OverUnder", "Tipo", "UsuarioId" },
                values: new object[] { 1, 24f, 50f, new DateTime(2020, 11, 12, 22, 41, 6, 31, DateTimeKind.Local).AddTicks(119), null, "over", 2, "juanjo@gmail.com" });

            migrationBuilder.InsertData(
                table: "Cuentas",
                columns: new[] { "CuentaId", "Banco", "Saldo", "UsuarioId" },
                values: new object[] { 1, "Sabadell", 1000m, "juanjo@gmail.com" });

            migrationBuilder.InsertData(
                table: "Mercados",
                columns: new[] { "MercadoId", "CuotaOver", "CuotaUnder", "DineroOver", "DineroUnder", "EventoId", "Tipo" },
                values: new object[] { 1, 14f, 10f, 20f, 32f, 1, 2 });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Apuestas",
                keyColumn: "ApuestaId",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Cuentas",
                keyColumn: "CuentaId",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Mercados",
                keyColumn: "MercadoId",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Eventos",
                keyColumn: "EventoId",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Usuarios",
                keyColumn: "UsuarioId",
                keyValue: "juanjo@gmail.com");
        }
    }
}
