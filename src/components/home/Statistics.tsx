import { Link } from 'react-router-dom';

const Statistics = () => {
  return (
    <section className="bg-[#151b22] text-white py-16 px-4 md:px-10 lg:px-20">
      <div className="container mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold mb-12 text-center">Skyrocket your productivity</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
          <div className="text-center">
            <span className="material-icons text-[#1f6cdb] text-5xl mb-4">directions_run</span>
            <h4 className="text-2xl font-bold mb-2">90% faster</h4>
            <p className="text-gray-300">Speed Through Project Completion</p>
          </div>

          <div className="text-center">
            <span className="material-icons text-[#1f6cdb] text-5xl mb-4">savings</span>
            <h4 className="text-2xl font-bold mb-2">80% Lower Costs</h4>
            <p className="text-gray-300">Halve Your Expenses</p>
          </div>

          <div className="text-center">
            <span className="material-icons text-[#1f6cdb] text-5xl mb-4">bolt</span>
            <h4 className="text-2xl font-bold mb-2">Exceptional Quality</h4>
            <p className="text-gray-300">Surpass the Highest Industry Standards</p>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            to="https://discord.gg/Ezfk2RTgX5"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1f6cdb] hover:bg-blue-600 text-white px-6 py-3 rounded-md font-medium inline-block transition-colors"
          >
            Join Us On Discord
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
