using API.DTOs;
using API.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Interfaces;

public interface IPlantRepository
{
    Task<ActionResult<IEnumerable<PlantDto?>>> GetAllPlantsAsync();
    Task<ActionResult<PlantDto?>> GetPlantAsync(string name);
}