using Newtonsoft.Json;

namespace CarCheck24.Models
{
    public class ShapesFactory
    {
        public static IShape GetShape(string shpaeName, string parameters) {
            switch (shpaeName.ToLower())
            {
                case "circle": {
                    return new Circle(parameters);
                }
                case "triangle": {
                    return JsonConvert.DeserializeObject<Triangle>(parameters);
                    }
                case "rectangle": {
                        //return new Rectangle(parameters);
                        return JsonConvert.DeserializeObject<Rectangle>(parameters);
                }
                default: {
                    return null;
                }
            }
        }
    }
}
