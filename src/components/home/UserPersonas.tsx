import { Link } from 'react-router-dom';

const UserPersonas = () => {
  const screenwriterImage = '/images/writer.webp';
  const producerImage = '/images/producer.webp';
  const directorImage = '/images/director.webp';
  const shieldImage = '/images/shield.webp';

  return (
    <section className="bg-[#151b22] text-white">
      {/* Screenwriter Persona */}
      <div className="py-16 px-4 md:px-10 lg:px-20 relative">
        <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 relative">
            <img src={screenwriterImage} alt="Screenwriter" className="rounded-lg shadow-xl w-full" />
          </div>
          <div className="order-1 md:order-2">
            <h4 className="text-2xl font-bold mb-2">Enhance your</h4>
            <h4 className="text-2xl font-bold mb-4">screenwriting experience</h4>
            <p className="text-gray-300 mb-8">
              providing tailored solutions to overcome writer's block and streamlining your creative process.
            </p>
            <Link to="/features?persona=screenwriters" className="bg-[#1f6cdb] hover:bg-blue-600 text-white px-6 py-3 rounded-md font-medium inline-block transition-colors">
              Discover for Screenwriters
            </Link>
          </div>
        </div>
      </div>

      {/* Producer Persona */}
      <div className="py-16 px-4 md:px-10 lg:px-20 bg-[#182d4c] relative">
        <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h4 className="text-2xl font-bold mb-2">Save time</h4>
            <h4 className="text-2xl font-bold mb-4">cutting down on trivial tasks</h4>
            <p className="text-gray-300 mb-8">
              revolutionizing the filmmaking process for producers: cutting costs and resources by automating script analysis. Helping create outstanding pitch decks resonating with your project
            </p>
            <Link to="/features?persona=producers" className="bg-[#1f6cdb] hover:bg-blue-600 text-white px-6 py-3 rounded-md font-medium inline-block transition-colors">
              Explore for Producers
            </Link>
          </div>
          <div className="relative">
            <img src={producerImage} alt="Producer" className="rounded-lg shadow-xl w-full" />
          </div>
        </div>
      </div>

      {/* Director Persona */}
      <div className="py-16 px-4 md:px-10 lg:px-20 relative">
        <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 relative">
            <img src={directorImage} alt="Director" className="rounded-lg shadow-xl w-full" />
          </div>
          <div className="order-1 md:order-2">
            <h4 className="text-2xl font-bold mb-2">Have full control over the</h4>
            <h4 className="text-2xl font-bold mb-4">creative process</h4>
            <p className="text-gray-300 mb-8">
              saving you valuable time by automating repetitive tasks and facilitating seamless collaboration with the rest of your team. Assisting in crafting the perfect schedule for a smooth production workflows of your creative vision.
            </p>
            <Link to="/features?persona=directors" className="bg-[#1f6cdb] hover:bg-blue-600 text-white px-6 py-3 rounded-md font-medium inline-block transition-colors">
              Discover for Directors
            </Link>
          </div>
        </div>
      </div>

      {/* Security Section */}
      <div className="py-16 px-4 md:px-10 lg:px-20 bg-[#182d4c] relative">
        <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h4 className="text-2xl font-bold mb-4">Secure</h4>
            <p className="text-gray-300 mb-4">Don't worry, your data is secure and encrypted with VloomAi</p>
            <p className="text-gray-300 text-sm">
              We take your privacy and the ownership of your work very seriously. We respect your creative content and have no rights over it. We do not use your work for training our models or for any other purposes without your explicit consent. Your scripts and content remain your intellectual property. So, when you create/upload or edit content using our software, you retain full ownership of the intellectual property. We do not claim any rights to your scripts or any other content you produce. Your creative work is yours and yours alone!
            </p>
          </div>
          <div className="relative">
            <img src={shieldImage} alt="Security Shield" className="w-full max-w-xs mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserPersonas;
