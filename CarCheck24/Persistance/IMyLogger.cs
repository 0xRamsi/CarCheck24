namespace CarCheck24.Persistance
{
    public interface IMyLogger
    {
        IEnumerable<string> getData(int limit);
        public void Log(string shape, string parameters, string circumference);
    }
}