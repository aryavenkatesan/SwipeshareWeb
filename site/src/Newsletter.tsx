import React, { useState } from "react";
import { toast } from "./Toast.ts";
const Newsletter = () => {
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) {
            toast({
                title: "Please enter your email address",
                variant: "destructive"
            });
            return;
        }
        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            toast({
                title: "Thank you for subscribing!",
                description: "You'll receive updates about Swipeshare soon."
            });
            setEmail("");
            setIsSubmitting(false);
        }, 200);
    };
    return <section id="newsletter" className="bg-white py-24 px-4">
        <div className="section-container opacity-0 animate-on-scroll">
            <div className="max-w-6xl mx-auto">

                <h2 className="text-5xl font-display font-bold mb-4 text-left">Subscribe to the newsletter</h2>
                <p className="text-xl text-gray-700 mb-10 text-left">
                    Be first to hear about breakthroughs, partnerships, and deployment opportunities
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 items-start md:items-center">
                    <div className="relative flex-grow">
                        <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email address" className="w-full px-6 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-violet-500 text-gray-700" required />
                    </div>
                    <button type="submit" disabled={isSubmitting} className="bg-violet-400/100 hover:bg-violet-500/80 text-white font-medium py-4 px-10 rounded-full transition-all duration-300 md:ml-4">
                        {isSubmitting ? "Submit" : "Submit"}
                    </button>
                </form>
            </div>
        </div>
    </section>;
};
export default Newsletter;