namespace API.Models;

public class PlantType
{
    public required int Id { get; set; }
    public required string Name { get; set; }
    public string? Description { get; set; }
    
    public IEnumerable<Plant> Plants { get; set; }
}