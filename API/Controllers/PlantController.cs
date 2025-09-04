using API.Data;
using API.DTOs;
using API.Extensions;
using API.Interfaces;
using API.Models;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.RateLimiting;

namespace API.Controllers;


[ApiController]
[EnableRateLimiting("PublicApi")]
[Route("[controller]")]
public class PlantsController(IPlantRepository plantRepo) : BaseApiController
{
    [HttpGet]
    public async Task<ActionResult<IEnumerable<PlantDto?>>> GetAllPlantsAsync()
    {
        var plants = await plantRepo.GetAllPlantsAsync();
        return Ok(plants);
    }

    [HttpGet("{name}")]
    public async Task<ActionResult<PlantDto?>> GetPlantAsync(string name)
    {
        var plant = await plantRepo.GetPlantAsync(name);
        return Ok(plant);
    }

    [HttpGet("random")]
    public async Task<ActionResult<IEnumerable<PlantDto?>>> GetRandomPlantsAsync([FromQuery]int count)
    {
        var plants = await plantRepo.GetRandomPlantsAsync(count);
        return Ok(plants);
    }
}
