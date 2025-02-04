using sda.backend.minimalapi.Core.Games.Interfaces;
using sda.backend.minimalapi.Core.Games.Models;

namespace sda.backend.minimalapi.Core.Games.Services
{
    public class FakeInMemoryGetAllGameService : IGetAllGameService
    {
        #region Public methods
        public IEnumerable<Game> GetAll()
        {
            List<Game> games = new()
            {
                new Game { Id = 1, BeginDate = DateTime.Now, Character = "Aragorn"},
                new Game { Id = 2, BeginDate = DateTime.Now.AddMonths(-2), Character = "Legolas"}
            };

            return games;
        }
        #endregion
    }
}
