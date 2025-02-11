using sda.backend.minimalapi.Core.Games.Interfaces;
using sda.backend.minimalapi.Core.Games.Models;
using sda.backend.minimalapi.Core.Games.Services.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace sda.backend.minimalapi.Core.Games.Services
{
    public class SqlServerPostGameService : IPostGameService
    {
        #region Fields
        private readonly GameDbContext _dbContext;
        #endregion

        #region Constructors
        public SqlServerPostGameService(GameDbContext context)
        {
            _dbContext = context;
        }
        #endregion

        #region Public methods
        public void PostOne(Game game)
        {
            this._dbContext.Games.Add(game);

            this._dbContext.SaveChanges();
        }
        public Task PostOneAsync(Game game)
        {
            this._dbContext.Games.Add(game);

            return this._dbContext.SaveChangesAsync();
        }
        #endregion
    }
}
