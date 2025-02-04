using sda.backend.minimalapi.Core.Games.Interfaces;
using sda.backend.minimalapi.Core.Games.Services;
using sda.backend.minimalapi.Core.Games.Services.Models;
using sda.backend.minimalapi.ui;
using Microsoft.EntityFrameworkCore;
using sda.backend.minimalapi.Core.Auths.Models;
using Microsoft.AspNetCore.Identity;

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
builder.Services.AddSwaggerGen();

string? connectionString = builder.Configuration.GetConnectionString("sda.backoffice.database");
builder.Services.AddDbContext<GameDbContext>(options =>
{
        options.UseSqlServer(connectionString);
});
//builder.Services.AddScoped<IGetAllGameService, FakeInMemoryGetAllGameService>();
builder.Services.AddScoped<IGetAllGameService, SqlServerGetAllGameService>();


builder.Services.AddDbContext<AuthenticationDbContext>(options =>
{
    options.UseSqlServer(connectionString, b => b.MigrationsAssembly("sda.backend.minimalapi.ui"));
});

builder.Services.AddIdentityCore<AuthenticationUser>(options =>
                {
                    //options.SignIn.RequireConfirmedEmail = true;
                })
                .AddEntityFrameworkStores<AuthenticationDbContext>()
                .AddApiEndpoints();

builder.Services.AddAuthentication().AddBearerToken(IdentityConstants.BearerScheme, options =>
                    {

                    });
builder.Services.AddAuthorizationBuilder();

//builder.Services.AddScoped<IGetAllGameService, FakeInMemoryGetAllGameService>();
builder.Services.AddScoped<IGetAllGameService, SqlServerGetAllGameService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("AllowAllHeaders");

app.UseHttpsRedirection();

app.MapIdentityApi<AuthenticationUser>();

app.MapGameEndpoints();

app.Run();

