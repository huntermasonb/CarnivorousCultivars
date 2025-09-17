using API.DTOs;
using API.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Interfaces;

public interface IPlantRepository
{
    Task<IEnumerable<PlantDto?>> GetAllPlantsAsync();
    Task<PlantDto?> GetPlantAsync(string name);
    Task<IEnumerable<PlantDto?>> GetRandomPlantsAsync(int number);
    Task<IEnumerable<PlantDto?>> GetPlantTypesAsync(int type);
}