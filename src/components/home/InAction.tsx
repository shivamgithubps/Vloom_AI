import { Link } from 'react-router-dom';

const InAction = () => {
  const posterImage = '/images/poster.webp';

  return (
    <section className="bg-[#151b22] text-white py-16 px-4 md:px-10 lg:px-20">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">VloomAi in Action</h2>
          <div className="max-w-3xl mx-auto">
            <h4 className="text-xl font-medium mb-6">Meet Bryce</h4>
            <p className="text-gray-300 mb-8">
              An independent filmmaker who is utilizing the full power of VloomAi to break down scripts, create pitch decks and storyboards, and reach his ultimate goal.
            </p>
            <p className="text-gray-300">
              With its AI-powered features and user-friendly interface, it can help you bring your stories to life in the most efficient and effective way possible, while respecting your unique creative voice.
            </p>
          </div>
          <div className="mt-8">
            <Link
              to="/pricing"
              className="bg-[#1f6cdb] hover:bg-blue-600 text-white px-6 py-3 rounded-md font-medium inline-flex items-center transition-colors"
            >
              View Pricing Plans
              <span className="material-icons ml-2">arrow_forward</span>
            </Link>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">Up your Game with VloomAi</h3>
          <p className="text-center text-gray-300 max-w-3xl mx-auto mb-12">
            VloomAi is the ultimate tool for filmmakers looking to improve their craft. With its AI-powered features and user-friendly interface, it can help you bring your stories to life in the most efficient and effective way possible, while respecting your unique creative voice.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 border-b border-gray-700 pb-4">
            <div className="text-center md:text-left">
              <h4 className="text-xl text-white font-medium">Screenwriters</h4>
            </div>
            <div className="text-center md:text-left">
              <h4 className="text-xl text-white font-medium">Producers</h4>
            </div>
            <div className="text-center md:text-left">
              <h4 className="text-xl text-white font-medium">Directors</h4>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <span className="material-icons text-[#1f6cdb] text-2xl mr-3 mt-1">draw</span>
                <p className="text-gray-300">Write and experiment for a free script editor with affordable Premium plans.</p>
              </div>
              <div className="flex items-start">
                <span className="material-icons text-[#1f6cdb] text-2xl mr-3 mt-1">emoji_objects</span>
                <p className="text-gray-300">Avoid writer's blocks with AI-powered suggestions.</p>
              </div>
              <div className="flex items-start">
                <span className="material-icons text-[#1f6cdb] text-2xl mr-3 mt-1">psychology_alt</span>
                <p className="text-gray-300">Brainstorm with AI to develop story beats and test out scene and character concepts.</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <span className="material-icons text-[#1f6cdb] text-2xl mr-3 mt-1">cases</span>
                <p className="text-gray-300">Create scripts that look and feel professional without stressing out about the technicalities.</p>
              </div>
              <div className="flex items-start">
                <span className="material-icons text-[#1f6cdb] text-2xl mr-3 mt-1">format_align_center</span>
                <p className="text-gray-300">Cut down on tedious tasks such as formatting with Built-in automated script formatting.</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <span className="material-icons text-[#1f6cdb] text-2xl mr-3 mt-1">workspaces</span>
                <p className="text-gray-300">Collaborate with your team, get suggestions and feedback from your peers and colleagues.</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/features"
              className="text-[#1f6cdb] hover:text-blue-400 border border-[#1f6cdb] px-6 py-3 rounded-md inline-block transition-colors"
            >
              All Features
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InAction;
