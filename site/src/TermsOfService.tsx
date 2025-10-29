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
                    <p className="text-sm text-gray-600">Effective Date: October 23, 2025</p>

                    <div className="text-gray-700 leading-relaxed space-y-6">
                        <p>
                            Welcome to <strong>Swipeshare</strong>. These Terms and Conditions (“<strong>Terms</strong>”) govern your access to and use of the Swipeshare mobile application and website (collectively, the “<strong>Platform</strong>”) operated by <strong>Swipeshare</strong> (“we”, “our”, or “us”).
                        </p>
                        <p>
                            By accessing or using the Platform, you (“<strong>you</strong>"" or “<strong>user</strong>”) agree to comply with and be bound by these Terms. If you do not agree with these Terms, you must not use the Platform.
                        </p>
                    </div>

                    <hr className="border-gray-200" />

                    <div id="eligibility" className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-900">
                            1. Eligibility
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Swipeshare is designed for use by current students of the University of North Carolina at Chapel Hill (“UNC”). By creating an account, you confirm that you are an active UNC student with valid UNC credentials.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            The Platform is not limited by age; however, users under 18 must ensure they have obtained any necessary permissions from their parent or guardian before using the Platform.
                        </p>
                    </div>

                    <hr className="border-gray-200" />

                    <div id="purpose" className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-900">
                            2. Purpose of the Platform
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Swipeshare provides a platform that connects UNC students who have extra campus dining meal swipes with students who wish to purchase them. The app facilitates communication between users but does not process any payments or handle any financial transactions during the pilot phase.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            All payments between users occur outside the Platform through third-party services (such as Venmo, PayPal, Cash App, etc.). Swipeshare does not handle or store users’ payment account information.
                        </p>
                    </div>

                    <hr className="border-gray-200" />

                    <div id="relationship" className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-900">
                            3. Relationship Between Users
                        </h2>
                        <div className="text-gray-700 leading-relaxed space-y-4">
                            <p>
                                Swipeshare is not a party to, nor responsible for, any transaction, agreement, or dispute between users. All transactions, including payment and dining hall entry, are conducted solely between the buyer and the seller.
                            </p>
                            <p>
                                Swipeshare does not verify, guarantee, or endorse any user, transaction, or payment method. By using the Platform, you acknowledge that:
                            </p>
                            <ul className="list-disc list-inside pl-4">
                                <li>You engage in transactions at your own risk.</li>
                                <li>Swipeshare is not responsible for payment disputes, failed transactions, loss of funds, or other issues arising from user interactions conducted through or in relation to the Platform.</li>
                            </ul>
                        </div>
                    </div>

                    <hr className="border-gray-200" />

                    <div id="user-conduct" className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-900">
                            4. User Conduct
                        </h2>
                        <div className="text-gray-700 leading-relaxed space-y-4">
                            <p>
                                You agree to use the Platform in good faith and in accordance with all applicable laws and university policies. You must not:
                            </p>
                            <ul className="list-disc list-inside pl-4">
                                <li>Engage in fraud, harassment, or any illegal activity;</li>
                                <li>Impersonate another individual or misrepresent your affiliation with UNC;</li>
                                <li>Post or share content that is false, misleading, inappropriate, or harmful to others;</li>
                                <li>Interfere with other users’ use or enjoyment of the Platform.</li>
                            </ul>
                            <p>
                                Swipeshare reserves the right, at its sole discretion, to suspend, restrict, or terminate any user’s access to the Platform without notice, including (but not limited to) users who are repeatedly reported for misconduct or who violate these Terms.
                            </p>
                        </div>
                    </div>

                    <hr className="border-gray-200" />

                    <div id="privacy" className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-900">
                            5. Privacy
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Your privacy is important to us. Swipeshare collects minimal personal information necessary for user authentication and basic platform functionality. Please refer to our separate <a href="/privacy-policy" onClick={(e) => { e.preventDefault(); navigate('/privacy-policy'); }} className="text-purple-600 hover:underline">Privacy Policy</a> for details on how we collect, use, and protect your data.
                        </p>
                    </div>

                    <hr className="border-gray-200" />

                    <div id="intellectual-property" className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-900">
                            6. Intellectual Property
                        </h2>
                        <div className="text-gray-700 leading-relaxed space-y-4">
                            <p>
                                All content, trademarks, graphics, logos, and other materials on the Platform are the property of Swipeshare or its licensors and are protected by applicable intellectual property laws.
                            </p>
                            <p>
                                Users are granted a limited, non-exclusive, non-transferable, revocable license to use the Platform for its intended purpose. Any unauthorized use, reproduction, or modification of Platform content is prohibited.
                            </p>
                        </div>
                    </div>

                    <hr className="border-gray-200" />

                    <div id="disclaimer" className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-900">
                            7. “Use at Your Own Risk” Disclaimer
                        </h2>
                        <div className="text-gray-700 leading-relaxed space-y-4">
                            <p>
                                Your use of the Platform, including any in-person meetings or transactions arranged through it, is at your own risk.
                            </p>
                            <p>
                                Swipeshare does not control and is not responsible for the actions, omissions, or conduct of any user. Swipeshare makes no warranty, representation, or guarantee regarding:
                            </p>
                            <ul className="list-disc list-inside pl-4">
                                <li>The availability, quality, or safety of any dining hall meal;</li>
                                <li>The reliability or integrity of any user;</li>
                                <li>The accuracy or completeness of any listing or information on the Platform.</li>
                            </ul>
                            <p>
                                The Platform is provided on an “as is” and “as available” basis without warranties of any kind, whether express or implied.
                            </p>
                        </div>
                    </div>

                    <hr className="border-gray-200" />

                    <div id="liability" className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-900">
                            8. Limitation of Liability
                        </h2>
                        <div className="text-gray-700 leading-relaxed space-y-4">
                            <p>
                                To the fullest extent permitted by law, Swipeshare and its team members shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from or relating to your use of (or inability to use) the Platform.
                            </p>
                            <p>
                                This includes, without limitation, damages resulting from loss of payments, data, opportunities, or goodwill.
                            </p>
                        </div>
                    </div>

                    <hr className="border-gray-200" />

                    <div id="modification" className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-900">
                            9. Modification and Termination
                        </h2>
                        <div className="text-gray-700 leading-relaxed space-y-4">
                            <p>
                                Swipeshare reserves the right to modify or update these Terms at any time. Updated versions will be posted on the Platform with a revised “Last Updated” date. Continued use of the Platform after such changes constitutes your acceptance of the revised Terms.
                            </p>
                            <p>
                                Swipeshare may also suspend or discontinue any part of the Platform at any time without notice.
                            </p>
                        </div>
                    </div>

                    <hr className="border-gray-200" />

                    <div id="governing-law" className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-900">
                            10. Governing Law
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            These Terms shall be governed by and construed in accordance with the laws of the State of North Carolina, without regard to its conflicts of law principles. Any disputes arising from these Terms shall be resolved in courts located in Orange County, North Carolina.
                        </p>
                    </div>

                    <hr className="border-gray-200" />

                    <div id="contact-info" className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-900">
                            11. Contact Information
                        </h2>
                        <div className="text-gray-700 leading-relaxed space-y-4">
                            <p>
                                If you have questions, complaints, or disputes regarding these Terms, please contact us at:
                                <br />
                                Email: <a href="mailto:hello@swipeshare.app" className="text-purple-600 hover:underline">hello@swipeshare.app</a>
                            </p>
                            <p>
                                We will do our best to respond promptly to your inquiries.
                            </p>
                        </div>
                    </div>

                    <hr className="border-gray-200" />

                    <p className="pt-4 font-semibold text-gray-800">
                        By using Swipeshare, you acknowledge that you have read, understood, and agree to these Terms and Conditions.
                    </p>

                </div>
            </div>
        </div>
    );
};

export default TermsOfService;