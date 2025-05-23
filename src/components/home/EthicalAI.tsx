import { Link } from 'react-router-dom';

const EthicalAI = () => {
  return (
    <section className="py-12 px-4 md:px-10 lg:px-20 bg-[#151b22] text-white">
      <div className="container mx-auto text-center max-w-3xl">
        <h3 className="text-2xl font-bold mb-4">Leading the charge in Ethical AI</h3>
        <p className="text-gray-300 mb-6">
          At VloomAi, we prioritize the ethical implications of AI in the creative industry.<br />
          We believe in AI-powered tools that enhance human-driven storytelling.
        </p>
        <Link to="/about-us" className="text-[#1f6cdb] hover:text-blue-400 border border-[#1f6cdb] px-6 py-3 rounded-md inline-block transition-colors">
          Learn More
        </Link>
      </div>

      <div className="container mx-auto text-center mt-16">
        <h3 className="text-2xl font-bold mb-2">From screen writing to pre-production,</h3>
        <h3 className="text-2xl font-bold mb-4">we got you covered!</h3>
      </div>
    </section>
  );
};

export default EthicalAI;
