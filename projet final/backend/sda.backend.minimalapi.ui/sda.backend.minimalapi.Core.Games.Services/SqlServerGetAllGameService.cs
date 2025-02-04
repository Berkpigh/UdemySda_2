using sda.backend.minimalapi.Core.Games.Interfaces;
using sda.backend.minimalapi.Core.Games.Models;
using sda.backend.minimalapi.Core.Games.Services.Models;

namespace sda.backend.minimalapi.Core.Games.Services
{
    public class SqlServerGetAllGameService : IGetAllGameService
    {
        private readonly GameDbContext _dbContext;

        #region Constructors
        public SqlServerGetAllGameService(GameDbContext context) 
        { 
            _dbContext = context;
        }
        #endregion
        
        #region Public methods
        public IEnumerable<Game> GetAll()
        {
            var query = from item in _dbContext.Games
                        where item.Character != null
                        select item;

            //return this._dbContext.Games.Where(item => item.Character != null).ToList();
            return query.ToList();
        }
        #endregion
    }
}
