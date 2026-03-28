import { useState, useEffect } from "react"

const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL as string

const WaitlistPopup = () => {
    const [visible, setVisible] = useState(false)
    const [email, setEmail] = useState("")
    const [submitting, setSubmitting] = useState(false)
    const [submitted, setSubmitted] = useState(false)

    useEffect(() => {
        if (localStorage.getItem("waitlist_joined")) return
        const timer = setTimeout(() => setVisible(true), 5000)
        return () => clearTimeout(timer)
    }, [])

    const dismiss = () => {
        setVisible(false)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!email.trim()) return
        setSubmitting(true)
        try {
            await fetch(GOOGLE_SCRIPT_URL, {
                method: "POST",
                mode: "no-cors",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: email.trim(), timestamp: new Date().toISOString() }),
            })
            setSubmitted(true)
            localStorage.setItem("waitlist_joined", "1")
        } finally {
            setSubmitting(false)
        }
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

                    <div className="px-8 py-10">
                        {submitted ? (
                            <div className="text-center py-4">
                                <h2
                                    style={{
                                        fontFamily: "'League Spartan', sans-serif",
                                        fontWeight: 700,
                                        fontSize: "26px",
                                        color: "#6130A6",
                                        lineHeight: 1.1,
                                    }}
                                >
                                    You're on the list!
                                </h2>
                                <p
                                    className="mt-2"
                                    style={{ fontFamily: "'Lexend', sans-serif", fontWeight: 300, fontSize: "15px", color: "#6130A6" }}
                                >
                                    We'll reach out when we launch.
                                </p>
                            </div>
                        ) : (
                            <>
                                <h2
                                    style={{
                                        fontFamily: "'League Spartan', sans-serif",
                                        fontWeight: 700,
                                        fontSize: "clamp(24px, 5vw, 30px)",
                                        color: "#6130A6",
                                        lineHeight: 1.15,
                                    }}
                                >
                                    Sign up for the waitlist!
                                </h2>

                                <p
                                    className="mt-6 mb-6"
                                    style={{ fontFamily: "'Lexend', sans-serif", fontWeight: 300, fontSize: "15px", color: "#6130A6" }}
                                >
                                    Be the first to know when Swipeshare launches at UNC!
                                </p>

                                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                                    <input
                                        type="email"
                                        required
                                        placeholder="your@email.com"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        className="w-full rounded-xl px-4 outline-none border-2 border-transparent focus:border-[#6130A6] transition-colors"
                                        style={{
                                            fontFamily: "'Lexend', sans-serif",
                                            fontWeight: 300,
                                            fontSize: "15px",
                                            height: "48px",
                                            background: "#E8E4FF",
                                            color: "#6130A6",
                                        }}
                                    />
                                    <div className="gap-x-3"/>
                                    <button
                                        type="submit"
                                        disabled={submitting}
                                        className="w-full rounded-xl text-white hover:opacity-90 transition-opacity disabled:opacity-60"
                                        style={{
                                            fontFamily: "'Lexend', sans-serif",
                                            fontWeight: 400,
                                            fontSize: "16px",
                                            height: "48px",
                                            background: "#6130A6",
                                        }}
                                    >
                                        {submitting ? "Joining…" : "Join the waitlist"}
                                    </button>
                                </form>

                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default WaitlistPopup
