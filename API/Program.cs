using API.Data;
using API.Interfaces;
using API.Repository;
using Microsoft.AspNetCore.RateLimiting;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddDbContext<DataContext>(opt =>
{
    opt.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection"));
});
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddRateLimiter(opt =>
{
    opt.AddFixedWindowLimiter("PublicApi", policy =>
    {
        policy.Window = TimeSpan.FromMinutes(1);
        policy.PermitLimit = 10; //apparently, this is 10 requests PER minute specified above per IP.
        policy.QueueLimit = 0;
    });
});
builder.Services.AddOpenApi();
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAngularApp", policy =>
    {
        policy.WithOrigins("http://localhost:4200", "https://localhost:4200")
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});
builder.Services.AddScoped<IPlantRepository, PlantRepository>();


var app = builder.Build();
app.UseCors("AllowAngularApp");
app.UseRateLimiter();
// Configure the HTTP request pipeline.
/*if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();*/

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
