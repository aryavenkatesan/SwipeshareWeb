import { useEffect, useRef, useState } from "react"
import heroIllustration from '/assets/heroIllustration.png'
import heroIllustrationFlipped from '/assets/heroIllustrationFlipped.png'

// Build a counterclockwise pie-sector path starting at 0° (right).
// angleRad: how far counterclockwise to sweep (0 → 2π = full circle).
function arcPath(cx: number, cy: number, r: number, angleRad: number): string {
    if (angleRad <= 0) return ""
    if (angleRad >= Math.PI * 2 - 0.001) {
        // Full reveal — use a rect so there's no gap
        return `M 0 0 H ${cx * 2} V ${cy * 2} H 0 Z`
    }
    // Start point: 0° = right = (cx + r, cy)
    const sx = cx + r
    const sy = cy
    // End point: counterclockwise by angleRad
    // In SVG (y-axis down): CCW → x = cx+r·cos θ, y = cy − r·sin θ
    const ex = cx + r * Math.cos(angleRad)
    const ey = cy - r * Math.sin(angleRad)
    const largeArc = angleRad > Math.PI ? 1 : 0
    // sweep-flag 0 = counter-clockwise in SVG screen space
    return `M ${cx} ${cy} L ${sx} ${sy} A ${r} ${r} 0 ${largeArc} 0 ${ex} ${ey} Z`
}

function easeInOut(t: number) {
    return -(Math.cos(Math.PI * t) - 1) / 2
}

function Hero() {
    const [loaded, setLoaded] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)
    const pathRef = useRef<SVGPathElement>(null)
    const rafRef = useRef<number>(null)

    useEffect(() => {
        const timer = setTimeout(() => setLoaded(true), 100)
        return () => clearTimeout(timer)
    }, [])

    // Arc reveal animation — fires once text has had time to appear (~1s)
    useEffect(() => {
        if (!loaded) return

        const DELAY = 400        // ms — waits for text to fade in
        const DURATION = 1800    // ms — sweep duration

        const delay = setTimeout(() => {
            const container = containerRef.current
            const path = pathRef.current
            if (!container || !path) return

            const W = container.offsetWidth
            const H = container.offsetHeight
            const cx = W / 2 + 65   // shifted right
            const cy = H / 2 - 30   // shifted up (half as much)
            // Radius large enough to cover all corners
            const r = Math.sqrt(W * W + H * H) / 2 + 4

            const start = performance.now()

            const tick = (now: number) => {
                const t = easeInOut(Math.min((now - start) / DURATION, 1))
                path.setAttribute("d", arcPath(cx, cy, r, t * Math.PI * 2))
                if (t < 1) rafRef.current = requestAnimationFrame(tick)
            }

            rafRef.current = requestAnimationFrame(tick)
        }, DELAY)

        return () => {
            clearTimeout(delay)
            if (rafRef.current) cancelAnimationFrame(rafRef.current)
        }
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

                {/* Illustration – arc-reveal clip + float */}
                <div
                    ref={containerRef}
                    className="absolute"
                    style={{
                        bottom: "clamp(-180px, -17.8svh, -92px)",
                        right: "-8vh",
                        width: "53vh",
                    }}
                >
                    {/* Hidden SVG that owns the clipPath definition */}
                    <svg
                        style={{ position: "absolute", width: 0, height: 0, overflow: "visible", pointerEvents: "none" }}
                    >
                        <defs>
                            <clipPath id="arc-reveal-clip">
                                <path ref={pathRef} />
                            </clipPath>
                        </defs>
                    </svg>
                    <img
                        src={heroIllustrationFlipped}
                        alt="Students sharing meal swipes"
                        className="w-full block"
                        style={{
                            clipPath: "url(#arc-reveal-clip)",
                            animation: "float 4s ease-in-out infinite",
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
                        style={{ animation: "float 4s ease-in-out infinite" }}
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero
