namespace CarCheck24.Models
{
    public class Circle : IShape
    {
        int _raduis;

        public Circle(string radius)
        {
            _raduis = int.Parse(radius);
        }
        public Circle(int radius) {
            _raduis = radius;
        }

        public double CalculateCircumference()
        {
            return 2 * Math.PI * _raduis;
        }
    }
}
