import { useInView } from "react-intersection-observer"
import bg2 from '/assets/bg2.png'
import bg3 from '/assets/bg3.png'

const DetailsSection = () => {
    // Separate intersection observers for each card
    const { ref: leftCardRef, inView: leftCardInView } = useInView({
        threshold: 0.15,
        triggerOnce: true
    })

    const { ref: rightCardRef, inView: rightCardInView } = useInView({
        threshold: 0.2,
        triggerOnce: true
    })

    return (
        <section id="how-it-works" className="w-full bg-white pb-8">
            <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
                <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2">
                    {/* Left Card - For Buyers */}
                    <div
                        ref={leftCardRef}
                        className={`rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant text-left sm:text-right transform transition-all duration-700 ease-out
            ${leftCardInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                    >
                        {/* Header */}
                        <div
                            className="relative h-24 sm:h-48 p-6 sm:p-8 flex items-center sm:items-end justify-end"
                            style={{
                                backgroundImage: `url(${bg3})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            <h2 className="text-2xl sm:text-3xl font-display text-white font-bold">
                                For Buyers
                            </h2>
                        </div>

                        {/* Content */}
                        <div
                            className="bg-white p-4 sm:p-8"
                            style={{
                                backgroundColor: "#FFFFFF",
                                border: "1px solid #ECECEC",
                            }}
                        >
                            <h3 className="text-lg font-display mb-6 sm:mb-8 px-4 sm:px-0 sm:pl-16 text-center sm:text-right">
                                The app allows students to purchase singular meal swipes at a lower price. Whether it's because they ran out of swipes before the end of the semester or they just don't feel like cooking that day, buyers are able to eat in the dining halls without the hassle of an expensive meal plan.
                            </h3>

                            <div className="space-y-4 sm:space-y-6">
                                {[
                                    "On Demand Food Options",
                                    "Flexible Timing",
                                    "No long term commitment",
                                ].map((text, i) => (
                                    <div className="flex items-start gap-3" key={i}>
                                        <div className="sm:w-6 sm:h-6 rounded-full bg-dark-900 flex items-center justify-center mt-1 flex-shrink-0">

                                        </div>
                                        <div className="flex-1">
                                            <div className="p-3 rounded-lg bg-gray-50/80 backdrop-blur-sm border border-gray-100 text-center sm:text-right">
                                                <span className="font-semibold text-base">{text}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Card - For Sellers */}
                    <div
                        ref={rightCardRef}
                        className={`rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant transform transition-all duration-700 ease-out
            ${rightCardInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                    >
                        {/* Header */}
                        <div
                            className="relative h-24 sm:h-48 p-6 sm:p-8 flex flex-col items-center sm:items-start"
                            style={{
                                backgroundImage: `url(${bg2})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            <h2 className="text-2xl sm:text-3xl font-display text-white font-bold mt-auto">
                                For Sellers
                            </h2>
                        </div>

                        {/* Content */}
                        <div
                            className="bg-white p-4 sm:p-8"
                            style={{
                                backgroundColor: "#FFFFFF",
                                border: "1px solid #ECECEC",
                            }}
                        >
                            <h3 className="text-lg font-display mb-6 sm:mb-8 px-4 sm:px-0 sm:pr-16 text-center sm:text-left">
                                Instead of letting unused meal swipes go to waste at the end of each semester, sellers list their swipes for other students to buy. The app lets sellers find and connect with the best match based on preferred meetup time and dining hall location and get paid.
                            </h3>

                            <div className="space-y-4 sm:space-y-6">
                                {[
                                    "Swipe Reimbursement",
                                    "Consistent Revenue",
                                    "Conveniently help your peers",
                                ].map((text, i) => (
                                    <div className="flex items-start gap-3" key={i}>
                                        <div className="flex-1">
                                            <div className="p-3 rounded-lg bg-gray-50/80 backdrop-blur-sm border border-gray-100 text-center sm:text-left">
                                                <span className="font-semibold text-base">{text}</span>
                                            </div>
                                        </div>
                                        <div className="sm:w-6 sm:h-6 rounded-full bg-dark-900 flex items-center justify-center mt-1 flex-shrink-0">

                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DetailsSection