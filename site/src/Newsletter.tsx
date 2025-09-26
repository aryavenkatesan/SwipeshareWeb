import React, { useState } from "react"
import { toast } from "./Toast.ts"
import { useInView } from "react-intersection-observer"

const Newsletter = () => {
    const [email, setEmail] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)
    const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL || "";

    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: true, // animate only once
    })

    const validateEmail = (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!email) {
            toast({
                title: "Please enter your email address",
                variant: "destructive",
            })
            return
        }

        if (!validateEmail(email)) {
            toast({
                title: "Please enter a valid email address",
                variant: "destructive",
            })
            return
        }

        setIsSubmitting(true)

        try {
            // Using Google Apps Script Web App

            const response = await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    timestamp: new Date().toISOString()
                })
            });
            console.log(response)

            // With no-cors, we can't read the response, so we assume success
            toast({
                title: "Thank you for subscribing!",
                description: "You'll receive updates about Swipeshare soon.",
            })
            setEmail("")
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            toast({
                title: "Something went wrong",
                description: "Please try again later.",
                variant: "destructive",
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section
            id="newsletter"
            className="bg-white py-24 px-4"
        >
            <div
                ref={ref}
                className={`max-w-6xl mx-auto transition-all duration-1000 ease-out transform ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
            >
                <h2 className="text-5xl font-display font-bold mb-4 text-left">
                    Subscribe to the newsletter
                </h2>
                <p className="text-xl text-gray-700 mb-10 text-left">
                    Be first to hear about breakthroughs, partnerships, and deployment opportunities
                </p>

                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col md:flex-row gap-4 items-start md:items-center"
                >
                    <div className="relative flex-grow">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email address"
                            className="w-full px-6 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-violet-500 text-gray-700"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-violet-400 hover:bg-violet-500 text-white font-medium py-4 px-10 rounded-full transition-all duration-300 md:ml-4 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? "Submitting..." : "Submit"}
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Newsletter