import { useInView } from "react-intersection-observer"

const MissionSection = () => {
    const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

    return (
        <section className="py-24 px-6 relative overflow-hidden" style={{ background: "#FFFFFF" }}>

            {/* ── Corner doodles ─────────────────────────────────────── */}

            {/* Top-left: hand-drawn asterisk */}
            <svg
                className="absolute top-8 left-8 lg:top-12 lg:left-16 opacity-30"
                width="36" height="36" viewBox="0 0 36 36" fill="none"
            >
                <path d="M18 3 L18 33" stroke="#6130A6" strokeWidth="2.2" strokeLinecap="round" />
                <path d="M3 18 L33 18" stroke="#6130A6" strokeWidth="2.2" strokeLinecap="round" />
                <path d="M6 6 L30 30" stroke="#6130A6" strokeWidth="2.2" strokeLinecap="round" />
                <path d="M30 6 L6 30" stroke="#6130A6" strokeWidth="2.2" strokeLinecap="round" />
            </svg>

            {/* Top-right: scattered dots */}
            <svg
                className="absolute top-10 right-10 lg:right-20 opacity-40"
                width="44" height="44" viewBox="0 0 44 44" fill="none"
            >
                <circle cx="6"  cy="6"  r="3"   fill="#A7B8FE" />
                <circle cx="24" cy="10" r="2.2" fill="#C0CCFF" />
                <circle cx="38" cy="4"  r="2.5" fill="#9A6CD9" />
                <circle cx="14" cy="26" r="1.8" fill="#A7B8FE" />
                <circle cx="34" cy="28" r="3"   fill="#C0CCFF" />
                <circle cx="6"  cy="38" r="2"   fill="#9A6CD9" />
            </svg>

            {/* Bottom-left: wavy squiggle */}
            <svg
                className="absolute bottom-10 left-6 lg:left-14 opacity-35"
                width="72" height="20" viewBox="0 0 72 20" fill="none"
            >
                <path
                    d="M2 12 Q10 4, 18 12 Q26 20, 34 12 Q42 4, 50 12 Q58 20, 66 12 Q69 8, 70 10"
                    stroke="#A7B8FE" strokeWidth="2.2" strokeLinecap="round" fill="none"
                />
            </svg>

            {/* Bottom-right: small star */}
            <svg
                className="absolute bottom-8 right-10 lg:right-20 opacity-30"
                width="28" height="28" viewBox="0 0 28 28" fill="none"
            >
                <path
                    d="M14 2 L16.5 10.5 L25 10.5 L18.5 16 L21 24.5 L14 19.5 L7 24.5 L9.5 16 L3 10.5 L11.5 10.5 Z"
                    stroke="#9A6CD9" strokeWidth="1.8" strokeLinejoin="round" fill="none"
                />
            </svg>

            {/* ── Main content ────────────────────────────────────────── */}
            <div
                ref={ref}
                className={`max-w-2xl mx-auto text-center relative transition-all duration-700 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
                {/* Headline */}
                <div className="relative inline-block mb-8">
                    <h2
                        style={{
                            fontFamily: "'League Spartan', sans-serif",
                            fontWeight: 700,
                            fontSize: "clamp(30px, 5vw, 50px)",
                            color: "#6130A6",
                            lineHeight: 1.1,
                        }}
                    >
                        No swipe left behind.
                    </h2>
                    {/* Animated hand-drawn underline */}
                    <svg
                        className="absolute -bottom-3 left-0 w-full overflow-visible"
                        height="12"
                        viewBox="0 0 300 12"
                        preserveAspectRatio="none"
                        fill="none"
                    >
                        <path
                            d="M3 9 Q 50 2, 100 8 Q 150 13, 200 7 Q 250 2, 297 8"
                            stroke="#A7B8FE"
                            strokeWidth="3"
                            strokeLinecap="round"
                            style={{
                                strokeDasharray: 360,
                                strokeDashoffset: inView ? 0 : 360,
                                transition: "stroke-dashoffset 1.1s ease-out 0.4s",
                            }}
                        />
                    </svg>
                </div>

                {/* Body text */}
                <p
                    className="mb-4"
                    style={{ fontFamily: "'Lexend', sans-serif", fontWeight: 300, fontSize: "17px", color: "#000000" }}
                >
                    Hundreds of meal swipes go unused every semester while{" "}
                    <span className="relative inline-block">
                        students struggle
                        {/* <svg
                            className="absolute -bottom-1 left-0 w-full overflow-visible"
                            height="6" viewBox="0 0 100 6" preserveAspectRatio="none" fill="none"
                        >
                            <path
                                d="M1 4 Q25 1, 50 4 Q75 6, 99 3"
                                stroke="#9A6CD9" strokeWidth="2" strokeLinecap="round"
                                style={{
                                    strokeDasharray: 115,
                                    strokeDashoffset: inView ? 0 : 115,
                                    transition: "stroke-dashoffset 0.8s ease-out 1.0s",
                                }}
                            />
                        </svg> */}
                    </span>
                    {" "}to find affordable and nutritious food.
                </p>
                <p
                    className="mb-10"
                    style={{ fontFamily: "'Lexend', sans-serif", fontWeight: 300, fontSize: "17px", color: "#000000" }}
                >
                    Swipeshare offers a solution by empowering{" "}
                    <span className="relative inline-block">
                        students to support one another
                        <svg
                            className="absolute -bottom-1 left-0 w-full overflow-visible"
                            height="6" viewBox="0 0 100 6" preserveAspectRatio="none" fill="none"
                        >
                            <path
                                d="M1 4 Q25 1, 50 4 Q75 6, 99 3"
                                stroke="#A7B8FE" strokeWidth="2" strokeLinecap="round"
                                style={{
                                    strokeDasharray: 115,
                                    strokeDashoffset: inView ? 0 : 115,
                                    transition: "stroke-dashoffset 0.8s ease-out 1.3s",
                                }}
                            />
                        </svg>
                    </span>.
                </p>

                {/* CTA + arrow doodle */}
                <div className="relative inline-block">
                    {/* Small curved arrow pointing at the button */}
                    {/* <svg
                        className="absolute -top-9 -right-12 pointer-events-none"
                        width="44" height="40" viewBox="0 0 44 40" fill="none"
                        style={{
                            opacity: inView ? 0.65 : 0,
                            transition: "opacity 0.5s ease 1.8s",
                        }}
                    >
                        <path
                            d="M6 4 Q 18 4, 26 14 Q 32 22, 30 34"
                            stroke="#9A6CD9" strokeWidth="2" strokeLinecap="round" fill="none"
                        />
                        {/* Arrowhead 
                        <path
                            d="M24 30 L30 36 L36 28"
                            stroke="#9A6CD9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"
                        />
                    </svg> 
                    */}

                    {/* Button */}

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

                {/* Caption */}
                <p
                    className="mt-5"
                    style={{
                        fontFamily: "'Lexend', sans-serif",
                        fontWeight: 300,
                        fontSize: "13px",
                        color: "#9A6CD9",
                        letterSpacing: "0.1em",
                        opacity: inView ? 0.7 : 0,
                        transition: "opacity 0.6s ease 2s",
                    }}
                >
                    ✦ &nbsp;by students, for students&nbsp; ✦
                </p>
            </div>
        </section>
    )
}

export default MissionSection
