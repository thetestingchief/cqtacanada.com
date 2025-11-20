import Hero from "../../components/Hero";

const TEAM = [
  {
    name: "Parasar Saha",
    title: "Founder and CEO, Digy4",
    image: "/about/parasar-saha.jpg",
  },
  {
    name: "Chandni Tibrewal",
    title: "Sr. Quality Engineering Manager | Moneris",
    image: "/about/chandni-tibrewal.jpg",
  },
  {
    name: "Juan Orlarte",
    title: "Founder and CEO, Digita11yAccessible",
    image: "/about/juan-orlarte.jpg",
  },
  {
    name: "Vicky Hicks",
    title: "Director, Global Quality Engineering (QE) Practice",
    image: "/about/vicky-hicks.jpg",
  },
  {
    name: "Ari Rowland",
    title: "Accenture QE Practice Head",
    image: "/about/ari-rowland.jpg",
  },
  {
    name: "Sanjeev Balodia",
    title: "QA & AI Evangelist – HCL",
    image: "/about/sanjeev-balodia.jpg",
  },
  {
    name: "Navya Vohra",
    title: "iOS App Developer Mentor at Apple and CEC",
    image: "/about/navya-vohra.jpg",
  },
  {
    name: "Sivakumar Ganesan",
    title: "Senior Manager, Quality Engineering",
    image: "/about/sivakumar-ganesan.jpg",
  },
  {
    name: "Pushpinder Malhotra",
    title: "Senior QA Automation Manager for Northbridge Insurance",
    image: "/about/pushpinder-malhotra.jpg",
  },
  {
    name: "Ayush Anand",
    title: "Quality Engineering and DevOps leader",
    image: "/about/ayush-anand.jpg",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero
        title="Empowering Excellence, Elevating Quality: Canada's Hub for Testing Innovation"
        subtitle=""
        image="/about-hero.jpg"
        overlay="red"
        ctaText="Join the Community"
        ctaLink="https://ca.linkedin.com/company/canadian-quality-and-testing-association"
      />

      {/* What We Stand For */}
      <section className="py-16">
        <div className="site-container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center text-canada-red">What We Stand For</h2>
          <p className="text-gray-700 text-lg text-center mb-8">
            CQTA is dedicated to advancing software quality engineering and building a thriving community of testing professionals across Canada. We believe in mentorship, collaboration, and innovation to elevate the standards of quality engineering nationwide.
          </p>
        </div>
      </section>

      {/* Team Behind the Scene */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="site-container max-w-6xl mx-auto">
          <h2 className="text-3xl font-extrabold mb-10 text-center" style={{ color: '#fff' }}>Team Behind the Scene</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center">
            {TEAM.map((member) => (
              <div key={member.name} className="flex flex-col items-center text-center">
                <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full object-cover mb-4 shadow-md border-4 border-white" />
                <div className="font-bold text-lg text-white">{member.name}</div>
                <div className="text-gray-300 text-sm mt-1">{member.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Pillars */}
      <section className="py-16">
        <div className="site-container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center text-canada-red">Our Pillars</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-gray-100 rounded-lg p-6 text-center shadow">
              <h3 className="text-xl font-bold mb-2 text-canada-red">Connect</h3>
              <p className="text-gray-700">Mentorship, networking, and events to foster professional growth and strengthen the Canadian IT sector.</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 text-center shadow">
              <h3 className="text-xl font-bold mb-2 text-canada-red">Collaborate</h3>
              <p className="text-gray-700">Promoting collaboration and knowledge sharing to advance quality engineering practices.</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 text-center shadow">
              <h3 className="text-xl font-bold mb-2 text-canada-red">Build</h3>
              <p className="text-gray-700">Building a vibrant, innovative, and inclusive community for quality engineering professionals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-canada-red">
        <div className="site-container max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Let's Start the Conversation</h2>
          <p className="text-white text-lg mb-8">Ready to connect, collaborate, or build with us? Reach out and join the CQTA community today.</p>
          <a
            href="https://ca.linkedin.com/company/canadian-quality-and-testing-association"
            target="_blank"
            rel="noopener noreferrer"
            className="carousel-btn px-8 py-4 rounded-lg font-bold text-lg shadow-lg transition-colors inline-block"
          >
            Join the Community
          </a>
        </div>
      </section>
    </div>
  );
}