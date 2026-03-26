import { useEffect, useRef, useState } from "react"

const features = [
    { label: "View marketplace", color: "#D6E4F7" },
    { label: "Add to marketplace", color: "#C8D8F5" },
    { label: "Message", color: "#BECCF3" },
    { label: "Meet up at dining hall", color: "#B4C0F0" },
    { label: "Swipe each other in!", color: "#A7B8FE" },
]

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
                    const totalScroll = window.innerHeight * (features.length + 1)
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
            style={{ height: `${(features.length + 2) * 100}vh` }}
            id="features"
        >
            <section
                className="sticky top-0 w-full overflow-hidden"
                style={{ height: "100vh", background: "#E2ECF9" }}
            >
                <div className="h-full flex flex-col lg:flex-row px-6 lg:px-16 pt-20 pb-8 gap-8 max-w-6xl mx-auto">
                    {/* Left column: text + bullets */}
                    <div className="flex flex-col justify-center flex-1 min-w-0">
                        <p
                            className="text-black mb-1"
                            style={{ fontFamily: "'Lexend', sans-serif", fontWeight: 300, fontSize: "clamp(14px, 2vw, 17px)" }}
                        >
                            Don't let your extra meal swipes go to waste.
                        </p>
                        <p
                            className="mb-8 lg:mb-12"
                            style={{ fontFamily: "'Lexend', sans-serif", fontWeight: 300, fontSize: "clamp(14px, 2vw, 17px)", color: "#000000" }}
                        >
                            Don't overspend on on-campus lunch every day.
                        </p>

                        <ul className="space-y-3 lg:space-y-4">
                            {features.map((f, i) => (
                                <li
                                    key={i}
                                    className="flex items-center gap-3"
                                    style={{
                                        opacity: isIntersecting ? (activeIndex === i ? 1 : 0.35) : 0.35,
                                        transform: activeIndex === i ? "translateX(8px)" : "translateX(0)",
                                        transition: "opacity 0.4s ease, transform 0.4s ease",
                                        fontFamily: "'Lexend', sans-serif",
                                        fontWeight: activeIndex === i ? 400 : 300,
                                        fontSize: "clamp(15px, 2.2vw, 20px)",
                                        color: activeIndex === i ? "#6130A6" : "#000000",
                                    }}
                                >
                                    <span
                                        className="w-2 h-2 rounded-full flex-shrink-0"
                                        style={{
                                            background: activeIndex === i ? "#6130A6" : "#9A6CD9",
                                            transform: activeIndex === i ? "scale(1.4)" : "scale(1)",
                                            transition: "background 0.4s ease, transform 0.4s ease",
                                        }}
                                    />
                                    {f.label}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right column: phone mockup */}
                    <div className="flex items-center justify-center flex-1 min-w-0 min-h-0">
                        <div
                            className="relative"
                            style={{ width: "min(220px, 35vw)", aspectRatio: "9/19" }}
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
                                            fontSize: "clamp(10px, 1.5vw, 13px)",
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
