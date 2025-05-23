import { Link } from 'react-router-dom';

const features = [
  {
    icon: 'savings',
    title: 'AI Budgeting',
    description: 'Generate accurate film budgets with AI-powered analysis. VloomAi reviews your script to identify cost drivers, providing data-driven budget projections.',
    link: '/features/ai-film-budgeting'
  },
  {
    icon: 'drive_file_rename_outline',
    title: 'AI Co-Pilot Editor',
    description: 'Overcome writers block with AI-driven prompts and suggestions, ensuring a seamless writing flow.',
    link: '/features/the-industry-standard-editor'
  },
  {
    icon: 'movie_filter',
    title: 'AI Pitch Deck',
    description: 'Create compelling pitch decks effortlessly with ready-made templates. VloomAi extracts crucial details to suggest casts and visualize your story.',
    link: '/features/pitch-deck'
  },
  {
    icon: 'query_stats',
    title: 'Analytics',
    description: 'Instantly identify plot holes and receive thorough script coverage analysis. Perfect your screenplay with targeted insights and scores.',
    link: '/features/ai-script-coverage-reporting'
  },
  {
    icon: 'translate',
    title: 'Multilingual',
    description: 'Work seamlessly in Spanish, French, Portuguese, or Russian - no language barriers to hold back your projects.',
    link: '/'
  },
  {
    icon: 'list_alt',
    title: 'Automated Breakdown',
    description: 'Streamline pre-production with automatic breakdowns that quickly organize script elements for efficient planning.',
    link: '/features/automatic-script-breakdown'
  }
];

const FeaturesGrid = () => {
  return (
    <section className="py-12 px-4 md:px-10 lg:px-20 bg-[#182d4c]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Link
              to={feature.link}
              key={feature.title}
              className="bg-[#151b22] hover:bg-opacity-80 rounded-xl p-6 transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <span className="material-icons text-[#1f6cdb] text-3xl mr-2">
                    {feature.icon}
                  </span>
                  <h3 className="text-white text-xl font-semibold">{feature.title}</h3>
                </div>
                <p className="text-gray-300 flex-grow text-sm">
                  {feature.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/login?t=signup"
            className="bg-[#1f6cdb] hover:bg-blue-600 text-white px-6 py-3 rounded-md font-medium inline-block transition-colors"
          >
            Sign Up For Free
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
