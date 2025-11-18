import Carousel from '../components/Carousel';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - full width background image with overlay */}
      <section className="relative w-full hero-bg">
        <div className="absolute inset-0 hero-overlay"></div>
        <div className="relative z-10 py-28 w-full">
          <div className="site-container text-center text-white">
            <h1 className="hero-title mb-4">Welcome to CQTA Canada</h1>
            <p className="hero-sub max-w-3xl mx-auto mb-8">
              Advancing software quality engineering and supporting testing professionals across Canada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#join" className="cta-primary px-6 py-3 rounded-lg font-semibold inline-block hover:opacity-95">Join Newsletter</a>
              <a href="/partnership" className="cta-secondary px-6 py-3 rounded-lg font-semibold inline-block hover:opacity-95">Become a Partner</a>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Our Mission</h2>
          <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto">
            CQTA Canada is dedicated to fostering a vibrant community of software quality assurance professionals.
            We provide resources, networking opportunities, and advocacy to elevate the standards of software testing
            and quality engineering in Canada. Join us in building a future where quality is paramount in software development.
          </p>
        </div>
      </section>

      {/* Previous Events Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Previous Events</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">CQTA Annual Conference 2024</h3>
              <p className="text-gray-600 mb-2">Date: October 15, 2024</p>
              <p className="text-gray-600 mb-2">Location: Toronto, ON</p>
              <p className="text-gray-700">A comprehensive event featuring keynote speakers, workshops, and networking sessions focused on the latest trends in software quality engineering.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Agile Testing Workshop</h3>
              <p className="text-gray-600 mb-2">Date: August 20, 2024</p>
              <p className="text-gray-600 mb-2">Location: Vancouver, BC</p>
              <p className="text-gray-700">Hands-on workshop exploring agile testing methodologies and best practices for modern development teams.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">AI in Testing Seminar</h3>
              <p className="text-gray-600 mb-2">Date: June 10, 2024</p>
              <p className="text-gray-600 mb-2">Location: Montreal, QC</p>
              <p className="text-gray-700">Discussion on the role of artificial intelligence and machine learning in automated testing and quality assurance.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
