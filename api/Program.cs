var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllers();
var app = builder.Build();
app.MapGet("/api/orders", () => new[] { new { id = 1, total = 120 } });
app.MapControllers();
app.Run();
