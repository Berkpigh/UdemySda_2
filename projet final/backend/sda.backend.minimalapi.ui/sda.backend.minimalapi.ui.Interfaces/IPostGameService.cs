using sda.backend.minimalapi.Core.Games.Models;

namespace sda.backend.minimalapi.Core.Games.Interfaces;
/// <summary>
/// Contrat pour ajouter une nouvelle partie
/// </summary>
public interface IPostGameService
{
    void PostOne(Game game);
}
