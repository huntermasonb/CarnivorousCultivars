using API.DTOs;
using API.Models;

namespace API.Extensions;

public static class Extension
{
    public static PlantDto MapToPlantForDto(this Plant plant)
    {
        return new PlantDto
        {
            Name = plant.Name,
            PlantType = plant.PlantType.Name,
            Description = plant.Description,
            Stock = plant.Stock,
            Price = plant.Price
        };
    }
    
    public static DtoForPlant MapDtoForPlant( PlantDto plantDto)
    {
        return new DtoForPlant
        {
            Name = plantDto.Name,
            PlantType = plantDto.PlantType,
            Description = plantDto.Description,
            Stock = plantDto.Stock,
            Price = plantDto.Price
        };
    }
}