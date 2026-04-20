import { useState, useEffect } from "react"

const APP_STORE_URL = "https://apps.apple.com/us/app/swipeshare-meal-sharing-app/id675425796"

const WaitlistPopup = () => {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        if (localStorage.getItem("app_cta_dismissed")) return
        const timer = setTimeout(() => setVisible(true), 20000)
        return () => clearTimeout(timer)
    }, [])

    const dismiss = () => {
        localStorage.setItem("app_cta_dismissed", "1")
        setVisible(false)
    }

    if (!visible) return null

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 z-[60]"
                onClick={dismiss}
                style={{ background: "rgba(0,0,0,0.45)", backdropFilter: "blur(3px)" }}
            />

            {/* Modal */}
            <div className="fixed inset-0 z-[61] flex items-center justify-center px-5 pointer-events-none">
                <div
                    className="relative w-full max-w-md rounded-xl shadow-2xl pointer-events-auto overflow-hidden"
                    style={{ background: "#E9E9E9" }}
                >
                    {/* Close button */}
                    <button
                        onClick={dismiss}
                        className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-xl hover:bg-black/10 transition-colors"
                        style={{ color: "#6130A6", fontSize: "16px", fontFamily: "'Lexend', sans-serif", fontWeight: 300 }}
                        aria-label="Close"
                    >
                        ✕
                    </button>

                    <div className="px-8 py-10 text-center">
                        <h2
                            style={{
                                fontFamily: "'League Spartan', sans-serif",
                                fontWeight: 700,
                                fontSize: "clamp(24px, 5vw, 30px)",
                                color: "#6130A6",
                                lineHeight: 1.15,
                            }}
                        >
                            Download the app!
                        </h2>

                        <p
                            className="mt-4 mb-8"
                            style={{ fontFamily: "'Lexend', sans-serif", fontWeight: 300, fontSize: "15px", color: "#6130A6" }}
                        >
                            Swipeshare is live on the App Store — start sharing meal swipes with fellow UNC students today.
                        </p>

                        <a
                            href={APP_STORE_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={dismiss}
                            className="w-full rounded-xl text-white hover:opacity-90 transition-opacity inline-flex items-center justify-center"
                            style={{
                                fontFamily: "'Lexend', sans-serif",
                                fontWeight: 400,
                                fontSize: "16px",
                                height: "48px",
                                background: "#6130A6",
                            }}
                        >
                            Download on the App Store
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WaitlistPopup
