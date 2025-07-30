using API.Interfaces;
using API.Models;


namespace API.Services;

public class TokenService(IConfiguration config) : ITokenService
{
    public string CreateToken(User user)
    {
        return "";
        //var token = 
    }
}