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
            //var query = from item in _dbContext.Games
            //            where item.Character != null
            //            select item;
            //return this._dbContext.Games.Where(item => item.Character != null).ToList();

            this._dbContext.Games.Add(game);

            this._dbContext.SaveChanges();
        }
        #endregion
    }
}
