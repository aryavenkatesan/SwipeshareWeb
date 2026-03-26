import { useInView } from "react-intersection-observer"

const MissionSection = () => {
    const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

    return (
        <section className="py-20 px-6" style={{ background: "#FFFFFF" }}>
            <div
                ref={ref}
                className={`max-w-2xl mx-auto text-center transition-all duration-700 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
                <p
                    className="mb-4"
                    style={{ fontFamily: "'Lexend', sans-serif", fontWeight: 300, fontSize: "17px", color: "#000000" }}
                >
                    Hundreds of meal swipes go unused every semester while students struggle to find
                    affordable and nutritious food.
                </p>
                <p
                    className="mb-10"
                    style={{ fontFamily: "'Lexend', sans-serif", fontWeight: 300, fontSize: "17px", color: "#000000" }}
                >
                    Swipeshare offers a solution by empowering students to support one another.
                </p>
                <a
                    href="#"
                    className="inline-flex items-center justify-center text-white rounded-full px-10 hover:opacity-90 transition-opacity duration-200"
                    style={{
                        fontFamily: "'Lexend', sans-serif",
                        fontWeight: 400,
                        fontSize: "16px",
                        height: "44px",
                        background: "#6130A6",
                    }}
                >
                    Download Now
                </a>
            </div>
        </section>
    )
}

export default MissionSection
