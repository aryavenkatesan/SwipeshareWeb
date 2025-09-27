import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const TermsOfService = () => {
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

                <h1 className="text-4xl font-bold mb-8 text-gray-900">Terms of Service</h1>

                <div className="bg-white rounded-xl shadow-sm p-8 space-y-6">
                    <p className="text-sm text-gray-600">Effective Date: [Date]</p>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-gray-900">1. Lorem Ipsum Dolor</h2>
                        <p className="text-gray-700">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-gray-900">2. Sit Amet Consectetur</h2>
                        <p className="text-gray-700">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-gray-900">3. Adipiscing Elit</h2>
                        <p className="text-gray-700">
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default TermsOfService;