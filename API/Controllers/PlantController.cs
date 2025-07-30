using API.Data;
using API.DTOs;
using API.Extensions;
using API.Interfaces;
using API.Models;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[ApiController]
[Route("[controller]")]
public class PlantsController(IPlantRepository plantRepo) : BaseApiController
{
    [HttpGet]
    public async Task<ActionResult<IEnumerable<PlantDto?>>> GetAllPlantsAsync()
    {
        return await plantRepo.GetAllPlantsAsync();
    }

    [HttpGet("{name}")]
    public async Task<ActionResult<PlantDto?>> GetPlantAsync(string name)
    {
        return await plantRepo.GetPlantAsync(name);
    }
    
}
