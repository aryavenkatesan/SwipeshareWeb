import { useInView } from "react-intersection-observer"

const TestimonialSection = () => {
    const testimonials = [
        {
            name: "Sarah Johnson",
            title: "CEO, TechStart Inc.",
            quote: "SwipeShare transformed how we approach social commerce. Our engagement rates have tripled, and the rewards system keeps our customers coming back.",
        },
        {
            name: "Michael Chen",
            title: "Marketing Director, Bloom Fashion",
            quote: "The community-building features are game-changing. We're not just selling products anymore; we're creating meaningful connections with our customers.",
        },
        {
            name: "Emily Rodriguez",
            title: "Founder, Artisan Collective",
            quote: "As a small business owner, SwipeShare gave us the tools to compete with larger brands. The platform is intuitive and our sales have grown 200%.",
        },
    ]

    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: true,
    })

    return (
        <section
            className="w-full py-12 sm:py-16 lg:py-20 bg-gray-50"
            id="testimonials"
            ref={ref}
        >
            <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        What Our Clients Say
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                        Discover how businesses are thriving with SwipeShare's innovative social commerce platform
                    </p>
                </div>

                {/* Testimonial Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className={`
                bg-white rounded-lg shadow-lg p-6 sm:p-8 
                transform transition-all duration-700 ease-out
                ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
              `}
                            style={{
                                transitionDelay: `${index * 200}ms`, // stagger by 200ms
                            }}
                        >
                            {/* Quote Icon */}
                            <div className="mb-4">
                                <svg
                                    className="w-8 h-8 text-purple-500 opacity-50"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                </svg>
                            </div>

                            {/* Quote */}
                            <p className="text-gray-700 mb-6 italic leading-relaxed">
                                "{testimonial.quote}"
                            </p>

                            {/* Author Info */}
                            <div className="mt-auto">
                                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                                <p className="text-sm text-gray-600">{testimonial.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TestimonialSection