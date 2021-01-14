using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace PlaceMyBetApp.Migrations
{
    public partial class m3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Apuestas",
                keyColumn: "ApuestaId",
                keyValue: 1,
                column: "Fecha",
                value: new DateTime(2020, 12, 3, 11, 50, 27, 251, DateTimeKind.Local).AddTicks(1579));

            migrationBuilder.UpdateData(
                table: "Eventos",
                keyColumn: "EventoId",
                keyValue: 1,
                column: "Fecha",
                value: new DateTime(2020, 12, 3, 11, 50, 27, 261, DateTimeKind.Local).AddTicks(2741));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Apuestas",
                keyColumn: "ApuestaId",
                keyValue: 1,
                column: "Fecha",
                value: new DateTime(2020, 11, 12, 22, 41, 6, 31, DateTimeKind.Local).AddTicks(119));

            migrationBuilder.UpdateData(
                table: "Eventos",
                keyColumn: "EventoId",
                keyValue: 1,
                column: "Fecha",
                value: new DateTime(2020, 11, 12, 22, 41, 6, 34, DateTimeKind.Local).AddTicks(109));
        }
    }
}
