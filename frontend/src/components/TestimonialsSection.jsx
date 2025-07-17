import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const testimonials = [
    {
        name: "Anjali Sharma",
        feedback: "This platform helped me improve my skills. Clear and beginner-friendly!",
        image: "pf1.jpg",
    },
    {
        name: "Ravi Mehta",
        feedback: "I landed an internship using this! Everything is well-structured.",
        image: "pf3.jpg",
    },
    {
        name: "Sara Ali",
        feedback: "The community and roadmap is amazing. Highly recommended!",
        image: "pf2.jpg",
    },
    {
        name: "Neha Singh",
        feedback: "Really enjoyed the interactive tasks and gamified experience!",
        image: "pf4.jpg",
    },
    {
        name: "Karan Verma",
        feedback: "The skill test feature helped me get interview-ready.",
        image: "pf5.jpg",
    },
];

const TestimonialsSlider = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
        });
    }, []);

    return (
        <section className="bg-[#da573c] py-12 px-4" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-center mb-8 text-white">What Users Say</h2>

            <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                navigation
            >
                {testimonials.map((t, index) => (
                    <SwiperSlide key={index} className="flex">
                        <div
                            className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-between w-full h-full min-h-[280px] max-h-[280px]"
                            data-aos="zoom-in"
                            data-aos-delay={index * 100}
                        >
                            <img
                                src={t.image}
                                alt={t.name}
                                className="w-28 h-28 rounded-full mb-4 object-cover border-4 border-[#da573c]"
                            />
                            <h3 className="font-semibold text-lg text-center">{t.name}</h3>
                            <p className="text-gray-600 mt-2 text-sm text-center">{t.feedback}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default TestimonialsSlider;
