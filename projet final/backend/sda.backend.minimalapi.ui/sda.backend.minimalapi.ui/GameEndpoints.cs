using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.OpenApi;
using sda.backend.minimalapi.Core.Games.Interfaces;
using sda.backend.minimalapi.Core.Games.Models;
using sda.backend.minimalapi.Core.Games.Services.Models;
namespace sda.backend.minimalapi.ui;

public static class GameEndpoints
{
    public static void MapGameEndpoints (this IEndpointRouteBuilder routes)
    {
        var group = routes.MapGroup("/api/Game").WithTags(nameof(Game));

        group.MapGet("/", (IGetAllGameService service) =>
        {
            return service.GetAll();
        })
        .WithName("GetAllGames")
        .RequireAuthorization()
        .WithOpenApi();

        group.MapGet("/{id}", (int id) =>
        {
            //return new Game { ID = id };
        })
        .WithName("GetGameById")
        .WithOpenApi();

        group.MapPut("/{id}", (int id, Game input) =>
        {
            return TypedResults.NoContent();
        })
        .WithName("UpdateGame")

        .WithOpenApi();

        group.MapPost("/", async ( Game model, IPostGameService service) =>
        {
            await service.PostOneAsync(model);
            return TypedResults.Created($"/api/Games/{model.Id}", model);
        })
        .WithName("CreatGame")
        .RequireAuthorization()
        .WithOpenApi();

        group.MapDelete("/{id}", (int id) =>
        {
            //return TypedResults.Ok(new Game { ID = id });
        })
        .WithName("DeleteGame")
        .WithOpenApi();
    }
    private static object Game()
    {
        throw new NotImplementedException();
    }
}
