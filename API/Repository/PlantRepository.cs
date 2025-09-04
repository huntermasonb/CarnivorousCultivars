using System.Runtime.InteropServices.JavaScript;
using API.Data;
using API.DTOs;
using API.Extensions;
using API.Interfaces;
using API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Repository;

public class PlantRepository(DataContext context): IPlantRepository
{
    public async Task<IEnumerable<PlantDto?>> GetAllPlantsAsync()
    {
        var plants = await context.Plants
            .Include(p => p.PlantType)
            .ToListAsync();
        var dto = plants?.Select(x => x.MapToPlantForDto());
        return dto.ToList();
    }

    public async Task<PlantDto?> GetPlantAsync(string name)
    {
        var plant = await context.Plants
            .Include(pt => pt.PlantType)
            .SingleOrDefaultAsync(x => x.Name.ToLower() == name.ToLower());
        var dto = plant?.MapToPlantForDto();
        return dto;
    }

    public async Task<IEnumerable<PlantDto?>> GetRandomPlantsAsync(int count)
    {
        //Ensure count isn't negative or a large number, this is only for carousel so limited objects
        if (count < 0) count = 0;
        count = Math.Min(count, 10);
        
        var totalPlants = await context.Plants.CountAsync();
        var random = new Random();
        
        //Ensure skipCount is not negative
        var skipCount = random.Next(0, Math.Max(0, totalPlants - count));
        if (skipCount < 0) skipCount = 0;
        
        var plants = await context.Plants
            .Include(p => p.PlantType)
            .Skip(skipCount)
            .Take(count)
            .OrderBy(p => p.Name)
            .ToListAsync();
        var dto = plants?.Select(x => x.MapToPlantForDto());
        return dto?.ToList();
    }
}