using Newtonsoft.Json;

namespace CarCheck24.Models
{
    public class Rectangle : IShape
    {
        int a;
        int b;

        [JsonConstructor]
        public Rectangle(int a, int b)
        {
            this.a = a;
            this.b = b;
        }

        public double CalculateCircumference()
        {
            return a * 2 + b * 2;
        }
    }
}
