
using Microsoft.EntityFrameworkCore;
using sda.backend.minimalapi.Core.Games.Models;

namespace sda.backend.minimalapi.Core.Games.Services.Models
{
    public class GameDbContext : DbContext
    {
        #region Constructors
        public GameDbContext(DbContextOptions<GameDbContext> options) : base(options)
        {
        }

        protected GameDbContext()
        {
        }
        #endregion

        #region  Internal methods
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Game>().ToTable("Game");
        }

        #endregion
        #region Properties
        public DbSet<Game> Games { get; set; }
        #endregion
    }
}
