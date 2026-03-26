import { useState } from "react"

const faqData = [
    {
        question: "How does payment work?",
        answer: "Payment details coming soon. We're working on a secure in-app payment system to make transactions seamless for both buyers and sellers.",
    },
    {
        question: "Am I required to go in person?",
        answer: "Yes, because we don't currently have a way of transferring swipes from one card to one card :)",
    },
    {
        question: "Can I share PLUS swipes using the app?",
        answer: "PLUS swipe compatibility details coming soon. Stay tuned for updates!",
    },
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
    const [open, setOpen] = useState(false)

    return (
        <div className="border-b" style={{ borderColor: "#333" }}>
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between py-5 text-left"
            >
                <span
                    style={{
                        fontFamily: "'Lexend', sans-serif",
                        fontWeight: 300,
                        fontSize: "17px",
                        color: "#FFFFFF",
                        paddingRight: "16px",
                    }}
                >
                    {question}
                </span>
                <span
                    className="flex-shrink-0 text-xl"
                    style={{
                        color: "#A7B8FE",
                        transform: open ? "rotate(45deg)" : "rotate(0deg)",
                        transition: "transform 0.3s ease",
                        fontFamily: "'Lexend', sans-serif",
                        fontWeight: 300,
                    }}
                >
                    +
                </span>
            </button>
            <div
                style={{
                    display: "grid",
                    gridTemplateRows: open ? "1fr" : "0fr",
                    transition: "grid-template-rows 0.3s ease-out",
                }}
            >
                <div className="overflow-hidden">
                    <p
                        className="pb-5 pr-8"
                        style={{
                            fontFamily: "'Lexend', sans-serif",
                            fontWeight: 300,
                            fontSize: "13px",
                            color: "#AEDEF2",
                        }}
                    >
                        {answer}
                    </p>
                </div>
            </div>
        </div>
    )
}

const FAQSection = () => {
    return (
        <section className="py-16 px-6" id="faq" style={{ background: "#0F0F1A" }}>
            <div className="max-w-2xl mx-auto">
                <h2
                    className="mb-8"
                    style={{
                        fontFamily: "'League Spartan', sans-serif",
                        fontWeight: 700,
                        fontSize: "clamp(36px, 6vw, 56px)",
                        color: "#FFFFFF",
                        lineHeight: 1,
                    }}
                >
                    FAQ
                </h2>
                {faqData.map((item) => (
                    <FAQItem key={item.question} question={item.question} answer={item.answer} />
                ))}
            </div>
        </section>
    )
}

export default FAQSection
