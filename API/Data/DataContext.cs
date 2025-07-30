using API.Models;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class DataContext(DbContextOptions options) : DbContext(options)
{
    public DbSet<Plant> Plants { get; set; }
    public DbSet<PlantType> PlantType { get; set; }
};