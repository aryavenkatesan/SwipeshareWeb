import { useEffect, useState } from "react"
import heroIllustration from '/assets/heroIllustration.png'
import heroIllustrationFlipped from '/assets/heroIllustrationFlipped.png'

function Hero() {
    const [loaded, setLoaded] = useState(false)
    const [revealed, setRevealed] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setLoaded(true), 100)
        return () => clearTimeout(timer)
    }, [])

    // Trigger circle-expand reveal shortly after load
    useEffect(() => {
        if (!loaded) return
        const timer = setTimeout(() => setRevealed(true), 400)
        return () => clearTimeout(timer)
    }, [loaded])

    return (
        <section
            className="relative"
            id="home"
            style={{ height: "clamp(580px, 93svh, 760px)", overflow: "clip", background: "#E2ECF9" }}
        >
            {/* ── Mobile layout ─────────────────────────────────────── */}
            <div className="lg:hidden relative h-full flex flex-col pt-24 pb-0">
                {/* Heading */}
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
                                    transition: "clip-path 1s ease-out 2.6s",
                                }}
                            />
                        </svg>
                    </span>
                </h1>

                {/* Illustration – CSS circle-expand reveal */}
                <div
                    className="absolute"
                    style={{
                        bottom: "clamp(-180px, -17.8svh, -92px)",
                        right: "-8vh",
                        width: "53vh",
                    }}
                >
                    <img
                        src={heroIllustrationFlipped}
                        alt="Students sharing meal swipes"
                        className="w-full block"
                        fetchPriority="high"
                        style={{
                            clipPath: revealed
                                ? "circle(150% at 65% 40%)"
                                : "circle(0% at 65% 40%)",
                            transition: "clip-path 1.8s ease-in-out",
                            animation: "float 4s ease-in-out infinite",
                        }}
                        onError={(e) => {
                            const img = e.currentTarget
                            img.onerror = null
                            setTimeout(() => { img.src = heroIllustrationFlipped }, 800)
                        }}
                    />
                </div>

                {/* Download Now – pinned to bottom */}
                <a
                    href="#"
                    className={`absolute bottom-6 left-6 right-6 text-center text-white rounded-xl z-10 transition-all duration-300 hover:opacity-90 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
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
            <div className="hidden lg:flex h-full flex-row items-center justify-center gap-20 pt-32 pb-0">
                <div
                    className={`flex flex-col w-96 transition-all duration-1000 ease-out ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
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
                    className={`flex justify-center transition-all duration-1000 ease-out ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                    style={{ transitionDelay: loaded ? "0.15s" : "0s" }}
                >
                    <img
                        src={heroIllustration}
                        alt="Students sharing meal swipes"
                        className="w-full max-w-lg xl:max-w-xl"
                        fetchPriority="high"
                        style={{ animation: "float 4s ease-in-out infinite" }}
                        onError={(e) => {
                            const img = e.currentTarget
                            img.onerror = null
                            setTimeout(() => { img.src = heroIllustration }, 800)
                        }}
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero
