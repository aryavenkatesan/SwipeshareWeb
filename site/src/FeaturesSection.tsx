import { useEffect, useRef, useState } from "react"

const features = [
    { label: "View marketplace", color: "#D6E4F7" },
    { label: "Add to marketplace", color: "#C8D8F5" },
    { label: "Message", color: "#BECCF3" },
    { label: "Meet up at dining hall", color: "#B4C0F0" },
    { label: "Swipe each other in!", color: "#A7B8FE" },
]

const VH_PER_ITEM = 1  // viewports of scrolling required per bullet step

const FeaturesSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null)
    const [activeIndex, setActiveIndex] = useState(0)
    const [isIntersecting, setIsIntersecting] = useState(false)
    const ticking = useRef(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsIntersecting(entry.isIntersecting),
            { threshold: 0.05 }
        )
        const el = sectionRef.current
        if (el) observer.observe(el)

        const handleScroll = () => {
            if (!ticking.current) {
                ticking.current = true
                window.requestAnimationFrame(() => {
                    if (!sectionRef.current) return
                    const rect = sectionRef.current.getBoundingClientRect()
                    // Derive totalScroll from the section's actual rendered height (svh-based, stable)
                    // rather than window.innerHeight which fluctuates when the browser bar hides/shows.
                    const svh = sectionRef.current.offsetHeight / (features.length * VH_PER_ITEM + 1)
                    const totalScroll = svh * features.length * VH_PER_ITEM
                    let progress = 0
                    if (rect.top <= 0) {
                        progress = Math.min(1, Math.max(0, Math.abs(rect.top) / totalScroll))
                    }
                    const idx = Math.min(features.length - 1, Math.floor(progress * features.length))
                    setActiveIndex(idx)
                    ticking.current = false
                })
            }
        }

        window.addEventListener("scroll", handleScroll, { passive: true })
        handleScroll()
        return () => {
            window.removeEventListener("scroll", handleScroll)
            if (el) observer.unobserve(el)
        }
    }, [])

    return (
        <div
            ref={sectionRef}
            className="relative"
            style={{ height: `${(features.length * VH_PER_ITEM + 1) * 100}vh` }}
            id="features"
        >
            <section
                className="sticky top-0 w-full overflow-hidden"
                style={{ height: "100vh", background: "#AEDEF2" }}
            >
                <div className="h-full flex flex-col lg:flex-row px-6 lg:px-16 pt-20 pb-8 gap-8 max-w-6xl mx-auto">
                    {/* Left column: text + bullets */}
                    <div className="flex flex-col justify-center flex-1 min-w-0">
                        <p
                            className="mb-1"
                            style={{ fontFamily: "'Lexend', sans-serif", fontWeight: 300, fontSize: "clamp(14px, 4vw, 22px)", color: "#6130A6" }}
                        >
                            Don't let your extra meal swipes go to waste.
                        </p>
                        <p
                            className="mb-8 lg:mb-12"
                            style={{ fontFamily: "'Lexend', sans-serif", fontWeight: 300, fontSize: "clamp(14px, 4vw, 22px)", color: "#6130A6" }}
                        >
                            Don't overspend on on-campus lunch every day.
                        </p>

                        <div className="relative flex gap-4">
                            {/* Progress bar track */}
                            <div className="relative flex-shrink-0" style={{ width: "4px" }}>
                                <div
                                    className="absolute inset-0 rounded-full"
                                    style={{ background: "#C0CCFF" }}
                                />
                                <div
                                    className="absolute top-0 left-0 right-0 rounded-full"
                                    style={{
                                        background: "#6130A6",
                                        height: `calc(${activeIndex / (features.length - 1)} * 100%)`,
                                        transition: "height 0.4s ease",
                                    }}
                                />
                            </div>

                            {/* Labels */}
                            <ul className="space-y-3 lg:space-y-4 flex-1">
                                {features.map((f, i) => (
                                    <li
                                        key={i}
                                        style={{
                                            opacity: isIntersecting ? (activeIndex === i ? 1 : 0.35) : 0.35,
                                            transition: "opacity 0.4s ease, font-size 0.4s ease",
                                            fontFamily: "'Lexend', sans-serif",
                                            fontWeight: activeIndex === i ? 700 : 300,
                                            fontSize: activeIndex === i ? "clamp(17px, 4.5vw, 26px)" : "clamp(14px, 4vw, 20px)",
                                            color: activeIndex === i ? "#6130A6" : "#000000",
                                        }}
                                    >
                                        {f.label}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right column: phone mockup */}
                    <div className="flex items-center justify-center flex-1 min-w-0 min-h-0">
                        <div
                            className="relative"
                            style={{ width: "clamp(110px, 30vw, 300px)", maxHeight: "38svh", aspectRatio: "9/19" }}
                        >
                            {/* Phone frame */}
                            <div className="absolute inset-0 rounded-[2.5rem] border-[6px] border-gray-800 shadow-2xl z-10" />
                            {/* Notch */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-5 bg-gray-800 rounded-b-xl z-20" />

                            {/* Screens */}
                            {features.map((f, i) => (
                                <div
                                    key={i}
                                    className="absolute inset-0 rounded-[2rem] flex flex-col items-center justify-center"
                                    style={{
                                        background: f.color,
                                        opacity: activeIndex === i ? 1 : 0,
                                        transition: "opacity 0.5s ease-in-out",
                                    }}
                                >
                                    <span
                                        style={{
                                            fontFamily: "'Lexend', sans-serif",
                                            fontWeight: 400,
                                            fontSize: "clamp(10px, 1.5vw, 16px)",
                                            color: "#6130A6",
                                            textAlign: "center",
                                            padding: "0 12px",
                                        }}
                                    >
                                        {f.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FeaturesSection
