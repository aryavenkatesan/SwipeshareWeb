import { useInView } from "react-intersection-observer"
import { useState } from "react"
import { toast } from "./Toast.ts"

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL_CONTACT || "";

    const { ref: sectionRef, inView: sectionInView } = useInView({
        threshold: 0.1,
        triggerOnce: true
    })

    const { ref: formRef, inView: formInView } = useInView({
        threshold: 0.2,
        triggerOnce: true
    })

    const validateEmail = (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        // Validation
        if (!formData.name.trim()) {
            toast({
                title: "Please enter your name",
                variant: "destructive",
            })
            return
        }

        if (!formData.email.trim()) {
            toast({
                title: "Please enter your email address",
                variant: "destructive",
            })
            return
        }

        if (!validateEmail(formData.email)) {
            toast({
                title: "Please enter a valid email address",
                variant: "destructive",
            })
            return
        }

        if (!formData.message.trim()) {
            toast({
                title: "Please enter your message",
                variant: "destructive",
            })
            return
        }

        setIsSubmitting(true)

        try {
            const response = await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    timestamp: new Date().toISOString()
                })
            })
            console.log(response)

            // With no-cors, we can't read the response, so we assume success
            toast({
                title: "Thank you for reaching out!",
                description: "We'll get back to you soon.",
            })

            // Clear form
            setFormData({
                name: "",
                email: "",
                message: ""
            })

        } catch (error) {
            console.error("Error submitting form:", error)
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
            id="contact"
            className="w-full py-12 sm:py-16 lg:py-20 bg-gray-50"
            ref={sectionRef}
        >
            <div className="container px-4 sm:px-6 lg:px-8 pt-12 mx-auto">
                {/* Section Header */}
                <div className={`text-center mb-12 sm:mb-16 transform transition-all duration-700 ease-out
                    ${sectionInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-display">
                        Get In Touch
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                        Have questions about Swipeshare? We'd love to hear from you.
                    </p>
                </div>

                {/* Contact Form */}
                <div
                    ref={formRef}
                    className={`max-w-2xl mx-auto transform transition-all duration-700 ease-out
                        ${formInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                >
                    <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
                        <div className="space-y-5">
                            {/* Name Input */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    disabled={isSubmitting}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
                                    placeholder="John Doe"
                                />
                            </div>

                            {/* Email Input */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    disabled={isSubmitting}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
                                    placeholder="john@example.com"
                                />
                            </div>

                            {/* Message Textarea */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    disabled={isSubmitting}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                                    placeholder="Tell us how we can help..."
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-violet-400 hover:bg-violet-500 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 transform hover:scale-[1.02] active:scale-[0.98] disabled:bg-gray-400 disabled:cursor-not-allowed disabled:transform-none"
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ContactSection