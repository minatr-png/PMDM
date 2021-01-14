using AE2.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PlaceMyBetApp.Models
{
    public class PlaceMyBetContext : DbContext
    {
        public DbSet<Cuenta>  Cuentas  { get; set; }
        public DbSet<Usuario> Usuarios { get; set; }
        public DbSet<Apuesta> Apuestas { get; set; }
        public DbSet<Mercado> Mercados { get; set; }
        public DbSet<Evento>  Eventos  { get; set; }

        public PlaceMyBetContext()
        {
        }

        public PlaceMyBetContext(DbContextOptions options)
        : base(options)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseMySql("Server=localhost;Database=PlaceMyBet2;Uid=root;Pwd=''; SslMode = none");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Cuenta>().HasData(new Cuenta(1, 1000, "Sabadell", "juanjo@gmail.com"));
            modelBuilder.Entity<Usuario>().HasData(new Usuario("juanjo@gmail.com", "Juanjo", "Navarro Molero", 32));
            modelBuilder.Entity<Apuesta>().HasData(new Apuesta(1, 2, 24, 50, DateTime.Now, "over", "juanjo@gmail.com"));
            modelBuilder.Entity<Mercado>().HasData(new Mercado(1, 2, 14, 10, 20, 32, 1));
            modelBuilder.Entity<Evento>().HasData(new Evento(1, "Valencia", "Real Madrid", DateTime.Now));
        }
    }
}
