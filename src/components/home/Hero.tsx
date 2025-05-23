import { Link } from 'react-router-dom';

const Hero = () => {
  const heroImage = '/images/hero-img.webp';

  return (
    <section className="bg-[#151b22] text-white py-16 px-4 md:px-10 lg:px-20 relative overflow-hidden">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Bring your film project to life
          </h1>
          <h3 className="text-xl md:text-2xl mb-8 text-gray-300">
            from <span className="text-[#1f6cdb]">idea</span> to <span className="text-[#1f6cdb]">production</span>
          </h3>
          <Link to="/login" className="bg-[#1f6cdb] hover:bg-blue-600 text-white px-6 py-3 rounded-md font-medium inline-block transition-colors">
            Start Creating
          </Link>
        </div>
        <div className="relative z-10 flex justify-center">
          <img
            src={heroImage}
            alt="Film Production Visualization"
            className="rounded-lg shadow-2xl max-w-full object-cover"
          />
        </div>
      </div>

      <div className="mt-16 text-center max-w-3xl mx-auto z-10 relative">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          VloomAi is a collaborative film production suite
        </h2>
        <p className="text-md md:text-lg text-gray-300 italic">
          "covering the full film production process from concept creation and screenwriting to planning and stage production"
        </p>
      </div>
    </section>
  );
};

export default Hero;
