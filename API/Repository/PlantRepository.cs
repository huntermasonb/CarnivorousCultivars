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
    public async Task<ActionResult<IEnumerable<PlantDto?>>> GetAllPlantsAsync()
    {
        var plants = await context.Plants
            .Include(p => p.PlantType)
            .ToListAsync();
        var dto = plants?.Select(x => x.MapToPlantForDto());
        return dto.ToList();
    }

    public async Task<ActionResult<PlantDto?>> GetPlantAsync(string name)
    {
        var plant = await context.Plants
            .Include(pt => pt.PlantType)
            .SingleOrDefaultAsync(x => x.Name.ToLower() == name.ToLower());
        var dto = plant?.MapToPlantForDto();
        return dto;
    }
}