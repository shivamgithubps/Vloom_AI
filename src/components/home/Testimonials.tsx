import { Link } from 'react-router-dom';

const Testimonials = () => {
  const testimonialImage = '/images/testimonial.jpg';

  return (
    <section className="bg-[#182d4c] text-white py-16 px-4 md:px-10 lg:px-20">
      <div className="container mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold mb-12 text-center">What our customers say</h3>

        <div className="max-w-4xl mx-auto bg-[#151b22] rounded-xl p-8 shadow-lg">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/4 flex justify-center">
              <img
                src={testimonialImage}
                alt="Client Testimonial"
                className="rounded-full w-32 h-32 object-cover border-4 border-[#1f6cdb]"
              />
            </div>

            <div className="w-full md:w-3/4">
              <h4 className="text-xl font-bold mb-1">Emma R. Martinez</h4>
              <p className="text-gray-300 mb-4">Writer • Producer • Director</p>

              <p className="text-gray-300 mb-4 italic">
                "I am incredibly pleased with VloomAi for scriptwriting—so much so that I'm recommending it to my college scriptwriting class."
              </p>

              <p className="text-gray-300 mb-4">
                VloomAi offers script editing capabilities, catching spelling and grammar mistakes like most good scriptwriting software. But what truly sets it apart is its Script Coverage. The feedback is incredibly in-depth and almost unbelievable that it's done by AI.
              </p>

              <p className="text-gray-300">
                The higher-tier subscriptions of VloomAi include fantastic features like image generation and storyboarding, which are well worth the investment. Overall, it's the perfect scriptwriting software for me.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            to="/testimonials"
            className="text-[#1f6cdb] hover:text-blue-400 border border-[#1f6cdb] px-6 py-3 rounded-md inline-block transition-colors"
          >
            All Testimonials
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
