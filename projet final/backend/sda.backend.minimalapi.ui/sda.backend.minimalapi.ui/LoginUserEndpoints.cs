using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.OpenApi;
using NuGet.Common;
using sda.backend.minimalapi.Core.Auths.IF;
using sda.backend.minimalapi.Core.Auths.Models;
namespace sda.backend.minimalapi.ui;

public static class LoginUserEndpoints
{
    public static void MapLoginUserEndpoints (this IEndpointRouteBuilder routes)
    {
        var group = routes.MapGroup("/api/Login").WithTags(nameof(LoginUser));

        group.MapPost("/", async (LoginUser model, UserManager<AuthenticationUser> userManager, ITokenService tokenService) =>
        {
            IResult result = TypedResults.BadRequest("Login ou Mot de passe erroné");

            var user = await userManager.FindByEmailAsync(model.Login);
            if (user != null)
            {
                bool passwordIsValid = await userManager.CheckPasswordAsync(user, model.Password);
                if (passwordIsValid)
                {
                    var token = tokenService.Create(user);
                    result = TypedResults.Ok(new { Email = model.Login, UserName = user.UserName, Token = token });
                }
            }

            return result;

        })
        .WithName("CreateLoginUser")
        .WithOpenApi();

    }
}
