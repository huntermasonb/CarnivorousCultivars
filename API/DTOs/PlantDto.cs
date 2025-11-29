namespace API.DTOs;

public class PlantDto
{
    public required string Name { get; set; }
    public required string PlantType { get; set; }
    public string ?Description { get; set; }
    public required int Stock { get; set; }
    public required int Price { get; set; }

}

public class DtoForPlant
{
    public required string Name { get; set; }
    public required string PlantType { get; set; }
    public string ?Description { get; set; }
    public required int Stock { get; set; }
    public required int Price { get; set; }
}