using sda.backend.minimalapi.Core.Games.Interfaces;
using sda.backend.minimalapi.Core.Games.Services;
using sda.backend.minimalapi.Core.Games.Services.Models;
using sda.backend.minimalapi.ui;
using Microsoft.EntityFrameworkCore;
using sda.backend.minimalapi.Core.Auths.IF;
using sda.backend.minimalapi.Core.Auths.Models;
using sda.backend.minimalapi.Core.Auths.Services;
using Microsoft.OpenApi.Models;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAllHeaders",
    builder =>
    {
        builder.AllowAnyOrigin()
                .AllowAnyHeader()
                .AllowAnyMethod();
    });
});

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();

#region Parametrage swagger + bearer dans swagger
builder.Services.AddSwaggerGen(options =>
{
    //Définition
    options.AddSecurityDefinition("Bearer", new Microsoft.OpenApi.Models.OpenApiSecurityScheme()
    {
        In = ParameterLocation.Header,
        Description = "Please enter a valid token",
        Name = "Authorization",
        Type = SecuritySchemeType.Http,
        BearerFormat = "JWT",
        Scheme = "Bearer"
    });

    options.AddSecurityRequirement(new OpenApiSecurityRequirement()
    {
        {
            new OpenApiSecurityScheme
            {
                Reference = new OpenApiReference
                {
                    Type = ReferenceType.SecurityScheme,
                    Id = "Bearer"
                }
            },
            Array.Empty<string>()
        }
    });
});
#endregion

string? connectionString = builder.Configuration.GetConnectionString("sda.backoffice.database");
builder.Services.AddDbContext<GameDbContext>(options =>
{
        options.UseSqlServer(connectionString, b => b.MigrationsAssembly("sda.backend.minimalapi.ui"));
});

builder.Services.AddDbContext<AuthenticationDbContext>(options =>
{
    options.UseSqlServer(connectionString, b => b.MigrationsAssembly("sda.backend.minimalapi.ui"));
});

//builder.Services.AddDbContext<GameDbContext>(options =>
//{
//    options.UseSqlServer(connectionString, b => b.MigrationsAssembly("sda.backend.minimalapi.ui"));
//});

builder.Services.AddIdentityCore<AuthenticationUser>(options =>
                {
                    //options.SignIn.RequireConfirmedEmail = true;
                })
                .AddEntityFrameworkStores<AuthenticationDbContext>();

IConfigurationSection jwtsection = builder.Configuration.GetSection("JwtTokenSettings");

builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
}).AddJwtBearer(options =>
{
    options.IncludeErrorDetails = true;

    options.TokenValidationParameters = new TokenValidationParameters()
    {
        ClockSkew = TimeSpan.Zero,
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidateLifetime = true,
        ValidateIssuerSigningKey = true,
        ValidIssuer = jwtsection["ValidIssuer"],
        ValidAudience = jwtsection["ValidAudience"],
        IssuerSigningKey = new SymmetricSecurityKey(
            Encoding.UTF8.GetBytes(jwtsection["SymmetricSecurityKey"]!))
    };
});

builder.Services.AddAuthorization();

builder.Services.AddScoped<ITokenService, JwtTokenService>();
//builder.Services.AddScoped<IGetAllGameService, FakeInMemoryGetAllGameService>();
builder.Services.AddScoped<IGetAllGameService, SqlServerGetAllGameService>();

builder.Services.AddScoped<IPostGameService, SqlServerPostGameService>();

var app = builder.Build();

// Configure the HTTP request pipeline. use --> middleware
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("AllowAllHeaders");

app.UseHttpsRedirection();

app.UseAuthentication();
app.UseAuthorization();
//

app.MapGameEndpoints();

app.MapCreationUserEndpoints();

app.MapLoginUserEndpoints();

app.Run();

