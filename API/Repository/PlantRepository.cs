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
        var dto = plants.Select(x => x.MapToPlantForDto());
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
        var plants = await context.Plants
            .OrderBy(p => EF.Functions.Random())
            .Include(p => p.PlantType)
            .Take(count)
            .ToListAsync();
        var plantDtos = plants.Select(p => p.MapToPlantForDto());
        return plantDtos.ToList();
    }
    
    public async Task<IEnumerable<PlantDto?>> GetPlantTypesAsync(int type)
    {
        var plants = await context.Plants
            .Include(p => p.PlantType)
            .Where(p => p.PlantTypeId == type)
            .ToListAsync();
        var dto = plants.Select(x => x.MapToPlantForDto());
        return dto.ToList();
    }
    
}