import { useInView } from "react-intersection-observer"

const TestimonialSection = () => {
    const testimonials = [
        {
            name: "Megan Taylor",
            title: "Off Campus UNC student",
            quote: "I used to skip meals when I ran out of swipes. Now I can grab a bite anytime without breaking my budget. Swipeshare changed the game for off-campus students like me.",
        },
        {
            name: "Saaketh Solasa",
            title: "Student at NC State",
            quote: "Swipeshare makes it easy to help others while helping yourself. I’ve met students I wouldn’t have otherwise, and we’re all eating better because of it.",
        },
        {
            name: "Mason Mines",
            title: "On campus UNC student",
            quote: "I had extra swipes every semester. With Swipeshare, I turned them into cash and helped classmates eat well. It’s simple, smart, and student-run.",
        },
    ]

    // Create individual observers for each testimonial
    const testimonialRefs = testimonials.map(() =>
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useInView({
            threshold: 0.1,
            triggerOnce: true,
        })
    )

    return (
        <section
            className="w-full py-12 sm:py-16 lg:py-20 bg-gray-50"
            id="testimonials"
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
                    {testimonials.map((testimonial, index) => {
                        const { ref, inView } = testimonialRefs[index]

                        return (
                            <div
                                key={index}
                                ref={ref}
                                className={`
                                    bg-white rounded-lg shadow-lg p-6 sm:p-8 
                                    transform transition-all duration-700 ease-out
                                    ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
                                `}
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
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default TestimonialSection