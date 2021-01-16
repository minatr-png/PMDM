using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace PlaceMyBetApp.Migrations
{
    public partial class m1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Eventos",
                columns: table => new
                {
                    EventoId = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    NomLocal = table.Column<string>(nullable: true),
                    NomVisitante = table.Column<string>(nullable: true),
                    Fecha = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Eventos", x => x.EventoId);
                });

            migrationBuilder.CreateTable(
                name: "Usuarios",
                columns: table => new
                {
                    UsuarioId = table.Column<string>(nullable: false),
                    Nombre = table.Column<string>(nullable: true),
                    Apellidos = table.Column<string>(nullable: true),
                    Edad = table.Column<int>(nullable: false),
                    FechaAlta = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Usuarios", x => x.UsuarioId);
                });

            migrationBuilder.CreateTable(
                name: "Mercados",
                columns: table => new
                {
                    MercadoId = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Tipo = table.Column<int>(nullable: false),
                    CuotaOver = table.Column<float>(nullable: false),
                    CuotaUnder = table.Column<float>(nullable: false),
                    DineroOver = table.Column<float>(nullable: false),
                    DineroUnder = table.Column<float>(nullable: false),
                    Bloqueado = table.Column<bool>(nullable: false),
                    EventoId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Mercados", x => x.MercadoId);
                    table.ForeignKey(
                        name: "FK_Mercados_Eventos_EventoId",
                        column: x => x.EventoId,
                        principalTable: "Eventos",
                        principalColumn: "EventoId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Cuentas",
                columns: table => new
                {
                    CuentaId = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Saldo = table.Column<decimal>(nullable: false),
                    Banco = table.Column<string>(nullable: true),
                    UsuarioId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Cuentas", x => x.CuentaId);
                    table.ForeignKey(
                        name: "FK_Cuentas_Usuarios_UsuarioId",
                        column: x => x.UsuarioId,
                        principalTable: "Usuarios",
                        principalColumn: "UsuarioId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Apuestas",
                columns: table => new
                {
                    ApuestaId = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Tipo = table.Column<int>(nullable: false),
                    Cuota = table.Column<float>(nullable: false),
                    Dinero = table.Column<float>(nullable: false),
                    Fecha = table.Column<DateTime>(nullable: false),
                    OverUnder = table.Column<string>(nullable: true),
                    MercadoId = table.Column<int>(nullable: false),
                    UsuarioId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Apuestas", x => x.ApuestaId);
                    table.ForeignKey(
                        name: "FK_Apuestas_Mercados_MercadoId",
                        column: x => x.MercadoId,
                        principalTable: "Mercados",
                        principalColumn: "MercadoId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Apuestas_Usuarios_UsuarioId",
                        column: x => x.UsuarioId,
                        principalTable: "Usuarios",
                        principalColumn: "UsuarioId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.InsertData(
                table: "Eventos",
                columns: new[] { "EventoId", "Fecha", "NomLocal", "NomVisitante" },
                values: new object[] { 1, new DateTime(2021, 1, 16, 22, 54, 19, 582, DateTimeKind.Local).AddTicks(2346), "Valencia", "Real Madrid" });

            migrationBuilder.InsertData(
                table: "Usuarios",
                columns: new[] { "UsuarioId", "Apellidos", "Edad", "FechaAlta", "Nombre" },
                values: new object[] { "juanjo@gmail.com", "Navarro Molero", 32, new DateTime(2021, 1, 16, 22, 54, 19, 578, DateTimeKind.Local).AddTicks(2365), "Juanjo" });

            migrationBuilder.InsertData(
                table: "Cuentas",
                columns: new[] { "CuentaId", "Banco", "Saldo", "UsuarioId" },
                values: new object[] { 1, "Sabadell", 1000m, "juanjo@gmail.com" });

            migrationBuilder.InsertData(
                table: "Mercados",
                columns: new[] { "MercadoId", "Bloqueado", "CuotaOver", "CuotaUnder", "DineroOver", "DineroUnder", "EventoId", "Tipo" },
                values: new object[] { 1, false, 14f, 10f, 20f, 32f, 1, 2 });

            migrationBuilder.InsertData(
                table: "Apuestas",
                columns: new[] { "ApuestaId", "Cuota", "Dinero", "Fecha", "MercadoId", "OverUnder", "Tipo", "UsuarioId" },
                values: new object[] { 1, 24f, 50f, new DateTime(2021, 1, 16, 22, 54, 19, 581, DateTimeKind.Local).AddTicks(2348), 1, "over", 2, "juanjo@gmail.com" });

            migrationBuilder.CreateIndex(
                name: "IX_Apuestas_MercadoId",
                table: "Apuestas",
                column: "MercadoId");

            migrationBuilder.CreateIndex(
                name: "IX_Apuestas_UsuarioId",
                table: "Apuestas",
                column: "UsuarioId");

            migrationBuilder.CreateIndex(
                name: "IX_Cuentas_UsuarioId",
                table: "Cuentas",
                column: "UsuarioId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Mercados_EventoId",
                table: "Mercados",
                column: "EventoId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Apuestas");

            migrationBuilder.DropTable(
                name: "Cuentas");

            migrationBuilder.DropTable(
                name: "Mercados");

            migrationBuilder.DropTable(
                name: "Usuarios");

            migrationBuilder.DropTable(
                name: "Eventos");
        }
    }
}
