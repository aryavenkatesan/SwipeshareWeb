import { useEffect, useState } from "react"
import heroIllustration from '/assets/heroIllustration.png'
import heroIllustrationFlipped from '/assets/heroIllustrationFlipped.png'

function Hero() {
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setLoaded(true), 100)
        return () => clearTimeout(timer)
    }, [])

    return (
        <section
            className="relative bg-white"
            id="home"
            style={{ height: "clamp(580px, 93svh, 760px)", overflow: "clip" }}
        >
            {/* ── Mobile layout ─────────────────────────────────────── */}
            <div className="lg:hidden relative h-full flex flex-col pt-24 pb-0">
                <h1
                    className={`relative z-10 px-6 transition-all duration-1000 ease-out ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                    style={{
                        fontFamily: "'League Spartan', sans-serif",
                        fontWeight: 700,
                        fontSize: "clamp(28px, 10vw, 42px)",
                        lineHeight: 1.05,
                        color: "#6130A6",
                    }}
                >
                    Where extra<br />swipes find<br />hungry<br />
                    <span className="relative inline-block">
                        friends
                        <svg
                            className="absolute -bottom-1 left-0 w-full overflow-visible pointer-events-none"
                            height="10"
                            viewBox="0 0 100 10"
                            preserveAspectRatio="none"
                            fill="none"
                        >
                            <path
                                d="M2 7 Q 25 2, 50 6 Q 75 10, 98 5"
                                stroke="#A7B8FE"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                fill="none"
                                style={{
                                    clipPath: `inset(0 ${loaded ? "0%" : "100%"} 0 0)`,
                                    transition: "clip-path 1s ease-out 0.6s",
                                }}
                            />
                        </svg>
                    </span>
                </h1>

                {/* Illustration – overlaps heading area, bleeds off right edge */}
                <div
                    className={`absolute transition-all duration-1000 ease-out ${loaded ? "opacity-100" : "opacity-0"}`}
                    style={{
                        bottom: "clamp(-180px, -17.8svh, -92px)",
                        right: "-8vh",
                        width: "53vh",
                        transitionDelay: loaded ? "0.15s" : "0s",
                    }}
                >
                    <img
                        src={heroIllustrationFlipped}
                        alt="Students sharing meal swipes"
                        className="w-full"
                        style={{ animation: "float 4s ease-in-out infinite" }}
                    />
                </div>

                {/* Download Now – pinned to bottom */}
                <a
                    href="#"
                    className={`absolute bottom-6 left-6 right-6 text-center text-white rounded-xl py-3 z-10 transition-all duration-300 hover:opacity-90 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                    style={{
                        fontFamily: "'Lexend', sans-serif",
                        fontWeight: 300,
                        fontSize: "clamp(15px, 5vw, 18px)",
                        height: "clamp(44px, 6.5vh, 94px)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "#6130A6",
                        transitionDelay: loaded ? "0.3s" : "0s",
                        letterSpacing: "0.02em",
                    }}
                >
                    Download Now
                </a>
            </div>

            {/* ── Desktop layout ────────────────────────────────────── */}
            <div className="hidden lg:flex h-full flex-row items-center justify-between px-16 pt-32 pb-0">
                <div
                    className={`flex flex-col flex-1 max-w-lg transition-all duration-1000 ease-out ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                >
                    <h1
                        className="relative inline-block mb-10"
                        style={{
                            fontFamily: "'League Spartan', sans-serif",
                            fontWeight: 700,
                            fontSize: "clamp(36px, 4vw, 56px)",
                            lineHeight: 1.1,
                            color: "#6130A6",
                        }}
                    >
                        Where extra swipes find hungry{" "}
                        <span className="relative inline-block">
                            friends
                            <svg
                                className="absolute -bottom-2 left-0 w-full overflow-visible pointer-events-none"
                                height="10"
                                viewBox="0 0 100 10"
                                preserveAspectRatio="none"
                                fill="none"
                            >
                                <path
                                    d="M2 7 Q 25 2, 50 6 Q 75 10, 98 5"
                                    stroke="#A7B8FE"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    fill="none"
                                    style={{
                                        clipPath: `inset(0 ${loaded ? "0%" : "100%"} 0 0)`,
                                        transition: "clip-path 1s ease-out 0.6s",
                                    }}
                                />
                            </svg>
                        </span>
                    </h1>

                    <a
                        href="#"
                        className={`self-start text-white rounded-full px-10 hover:opacity-90 transition-all duration-300 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                        style={{
                            fontFamily: "'Lexend', sans-serif",
                            fontWeight: 400,
                            fontSize: "16px",
                            height: "44px",
                            display: "flex",
                            alignItems: "center",
                            background: "#6130A6",
                            transitionDelay: loaded ? "0.3s" : "0s",
                        }}
                    >
                        Download Now
                    </a>
                </div>

                <div
                    className={`flex-1 flex justify-end transition-all duration-1000 ease-out ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                    style={{ transitionDelay: loaded ? "0.15s" : "0s" }}
                >
                    <img
                        src={heroIllustration}
                        alt="Students sharing meal swipes"
                        className="w-full max-w-lg xl:max-w-xl"
                        style={{ animation: "float 4s ease-in-out infinite" }}
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero
