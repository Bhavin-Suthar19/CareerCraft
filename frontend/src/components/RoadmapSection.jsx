// components/RoadmapSection.jsx
const roadmaps = [
  {
    title: "Web Development",
    image: "wbdv.jpg", // Put image in public/images/
    description: "Learn HTML, CSS, JavaScript, and modern frameworks to become a full-stack web developer.",
  },
  {
    title: "Data Science",
    image: "apdv.jpg",
    description: "Master data analysis, visualization, machine learning and Python programming.",
  },
  {
    title: "DevOps",
    image: "Devops.jpeg",
    description: "Explore CI/CD, Docker, Kubernetes, and deployment pipelines.",
  },
];

const RoadmapSection = () => {
  return (
    <section className="py-12 bg-[#f9f1e5]">
      <h2 className="text-3xl font-bold text-center mb-8">Explore Roadmaps</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 md:px-16">
        {roadmaps.map((roadmap, index) => (
          <div
            key={index}
            className="bg-[#da573c] rounded-xl shadow-lg overflow-hidden hover:scale-102 shadow-lg transition-transform duration-300"
          >
            <img src={roadmap.image} alt={roadmap.title} className="h-48 w-full object-cover" />
            <div className="p-5">
              <h3 className="text-xl text-white font-semibold mb-2">{roadmap.title}</h3>
              <p className="text-white mb-4">{roadmap.description}</p>
              <button className="bg-white text-[#da573c] px-4 py-2 rounded-full hover:bg-white hover:px-[44%] transition-all duration-700 ease-in-out ">
                Start
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RoadmapSection;
