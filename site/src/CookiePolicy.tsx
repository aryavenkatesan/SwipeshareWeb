import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CookiePolicy = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 py-20">
            <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
                <button
                    onClick={() => navigate("/")}
                    className="mb-8 text-purple-600 hover:text-purple-700 flex items-center gap-2"
                >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back
                </button>

                <h1 className="text-4xl font-bold mb-8 text-gray-900">Cookie Policy</h1>

                <div className="bg-white rounded-xl shadow-sm p-8 space-y-6">
                    <p className="text-sm text-gray-600">Last updated: [Date]</p>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-gray-900">Lorem Ipsum</h2>
                        <p className="text-gray-700">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default CookiePolicy;