import React, { useState, useRef, useEffect } from "react";

const stepsData = [
    {
        title: "Select Your Career Roadmap",
        description: "Description 1",
        videoSrc: "demo video.mp4",
    },
    {
        title: "Learn & Unlock Skill Checkpoints",
        description: "Description 2",
        videoSrc: "demo video2.mp4",
    },
    {
        title: "Take Mini Tests to Unlock Next",
        description: "Description 3",
        videoSrc: "demo video.mp4",
    },
    {
        title: "Track Progress & Build Streak",
        description: "Description 4",
        videoSrc: "demo video2.mp4",
    },
];

const HowItWorks = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const videoRef = useRef(null);

    const handleVideoEnd = () => {
        if (currentStep < stepsData.length - 1) {
            setCurrentStep((prev) => prev + 1);
        }
    };

    const handleStepClick = (index) => {
        setCurrentStep(index);
    };

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.load(); // load the new video
        }
    }, [currentStep]);

    return (
        <div className="flex flex-col items-center p-6 bg-[#f9f1e5]">
            <div className="w-full flex flex-col md:flex-row shadow-lg rounded-lg bg-white overflow-hidden">
                {/* Left Side */}
                <div className="md:w-1/2 p-6">
                    <h2 className="text-2xl font-bold mb-4">{stepsData[currentStep].title}</h2>
                    <p className="text-gray-600 mb-6">{stepsData[currentStep].description}</p>

                    <ul className="space-y-4 w-full">
                        {stepsData.map((step, index) => (
                            <li
                                key={index}
                                className={`cursor-pointer w-full border rounded-lg p-4 transition duration-300 ${index === currentStep
                                        ? "bg-[#da573c] text-white shadow-md"
                                        : "bg-white text-gray-800 hover:bg-gray-100"
                                    }`}
                                onClick={() => handleStepClick(index)}
                            >
                                <h3 className="font-semibold text-lg">{step.title}</h3>
                                <p className="text-sm mt-1">{step.description}</p>
                            </li>
                        ))}
                    </ul>


                    {/* Navigation Buttons */}
                    <div className="flex justify-between mt-6">
                        <button
                            onClick={() =>
                                setCurrentStep((prev) => (prev > 0 ? prev - 1 : prev))
                            }
                            className="px-4 py-2 bg-[#da573c] text-white rounded-md disabled:opacity-50"
                            disabled={currentStep === 0}
                        >
                            ← Prev
                        </button>
                        <button
                            onClick={() =>
                                setCurrentStep((prev) =>
                                    prev < stepsData.length - 1 ? prev + 1 : prev
                                )
                            }
                            className="px-4 py-2 bg-[#da573c] text-white rounded-md disabled:opacity-50"
                            disabled={currentStep === stepsData.length - 1}
                        >
                            Next →
                        </button>
                    </div>
                </div>

                {/* Right Side (Video) */}
                <div className="md:w-1/2 bg-black flex items-center justify-center">
                    <video
                        ref={videoRef}
                        width="100%"
                        controls
                        onEnded={handleVideoEnd}
                        className="rounded-r-lg"
                    >
                        <source src={stepsData[currentStep].videoSrc} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;
