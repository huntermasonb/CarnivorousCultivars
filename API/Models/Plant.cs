namespace API.Models;

public class Plant
{
    public required int Id { get; set; }
    public required int PlantTypeId { get; set; }
    public required string Name { get; set; }
    public string ?Description { get; set; }
    public required int Stock { get; set; }

    public PlantType PlantType { get; set; } = null!;
}

/*public class PlantForDto
{
    public required string Name { get; set; }
    public required string PlantType { get; set; }
    public string ?Description { get; set; }
    public required int Stock { get; set; }
}*/
