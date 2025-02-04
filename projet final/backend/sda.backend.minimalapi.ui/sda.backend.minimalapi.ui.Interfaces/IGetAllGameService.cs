using sda.backend.minimalapi.Core.Games.Models;

namespace sda.backend.minimalapi.Core.Games.Interfaces
{
    /// <summary>
    /// Contrat pour récupérer la liste des parties
    /// </summary>
    public interface IGetAllGameService
    {
        IEnumerable<Game> GetAll();
    }
}
