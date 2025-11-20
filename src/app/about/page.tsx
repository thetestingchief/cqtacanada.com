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
      <section className="py-16 bg-white">
        <div className="site-container max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-14" style={{ color: '#23242a' }}>What We Stand For</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Vision */}
            <div className="flex flex-col items-center bg-gray-50 rounded-2xl p-10 shadow-md">
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-lg mb-8 border-2 border-gray-200">
                {/* Bulb Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" width="40" height="40">
                  <path d="M16 22v2m-2 0h4" stroke="#cc0000" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M16 20c-3.314 0-6-2.686-6-6 0-3.314 2.686-6 6-6s6 2.686 6 6c0 3.314-2.686 6-6 6z" stroke="#cc0000" strokeWidth="2"/>
                  <circle cx="16" cy="16" r="1.5" fill="#cc0000" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#23242a' }}>Vision</h3>
              <p className="text-lg text-center text-gray-800">
                Create a dynamic ecosystem that inspires growth, empowers individuals, advances quality, cultivates excellence, and ignites Canadian productivity and innovation.
              </p>
            </div>
            {/* Mission */}
            <div className="flex flex-col items-center bg-gray-50 rounded-2xl p-10 shadow-md">
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-lg mb-8 border-2 border-gray-200">
                {/* Target Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" width="40" height="40">
                  <circle cx="16" cy="16" r="10" stroke="#cc0000" strokeWidth="2" />
                  <circle cx="16" cy="16" r="4" stroke="#cc0000" strokeWidth="2" />
                  <path d="M16 6v2m0 16v2m10-10h-2M6 16H4" stroke="#cc0000" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#23242a' }}>Mission</h3>
              <p className="text-lg text-center text-gray-800">
                Create a place where individuals are empowered to learn, connect with industry peers, and contribute to the advancement of quality practices!
              </p>
            </div>
            {/* Goal */}
            <div className="flex flex-col items-center bg-gray-50 rounded-2xl p-10 shadow-md">
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-lg mb-8 border-2 border-gray-200">
                {/* Diamond Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" width="40" height="40">
                  <path d="M6 16l10-10 10 10-10 16-10-16z" stroke="#cc0000" strokeWidth="2" fill="none" />
                  <path d="M12 16l4 6 4-6" stroke="#cc0000" strokeWidth="2" fill="none" />
                  <path d="M16 6v20" stroke="#cc0000" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#23242a' }}>Goal</h3>
              <p className="text-lg text-center text-gray-800">
                Build awareness of the latest trends, tools, and strategies in quality engineering, and elevate the success stories of Canadian Quality leaders to inspire innovation.
              </p>
            </div>
          </div>
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