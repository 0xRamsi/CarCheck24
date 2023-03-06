using Newtonsoft.Json;

namespace CarCheck24.Models
{
    public class Triangle : IShape
    {
        int a;
        int b;
        int c;

        [JsonConstructor]
        public Triangle(int a, int b, int c)
        {
            this.a = a;
            this.b = b;
            this.c = c;
        }

        public double CalculateCircumference()
        {
            return a + b + c;
            //return sides.Aggregate((sum, a) => sum+a);
        }
    }
}
