import React from "react";

const features = [
  {
    title: "Personalized Career Roadmap",
    description:
      "Users select their target job role and receive a step-by-step skill path.",
  },
  {
    title: "Gamified Checkpoints",
    description:
      "Skill milestones become checkpoints with points to boost motivation.",
  },
  {
    title: "Skill Verification Tests",
    description:
      "Mini tests ensure the user has actually learned before progressing.",
  },
  {
    title: "Progress Tracker & Motivation",
    description:
      "Visual bars, streaks, and points help track progress and stay consistent.",
  },
  {
    title: "Job & Internship Opportunities",
    description:
      "Real job/internship listings integrated from trusted platforms.",
  },
  {
    title: "User Profile & Goal Tracking",
    description:
      "Users can track completed skills, timestamps, and overall journey.",
  },
];

const FeatureSection = () => {
  return (
    <section className="bg-[#da573c] py-16 px-6 md:px-20 ">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
        Features & Specifications
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {features.map((feature, i) => (
          <div
            key={i}
            className="bg-white backdrop-blur shadow-md p-6 rounded-lg border-l-4 border-black transform transition-transform duration-300 hover:scale-105"
          >
            <h3 className="text-xl font-semibold text-gray-800">
              {feature.title}
            </h3>
            <p className="text-gray-600 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
