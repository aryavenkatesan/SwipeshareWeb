import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PrivacyPolicy = () => {
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

                <h1 className="text-4xl font-bold mb-8 text-gray-900">Privacy Policy</h1>

                <div className="bg-white rounded-xl shadow-sm p-8 space-y-6 text-gray-700 leading-relaxed">
                    <p className="text-sm text-gray-500">Last updated: October 08, 2025</p>

                    <p>
                        This Privacy Notice for <strong>Swipeshare</strong> ("<strong>we</strong>," "<strong>us</strong>, or, "<strong>our</strong>"), describes how and why we might access,
                        collect, store, use, and/or share ("<strong>process</strong>") your personal information when you use our services
                        ("<strong>Services</strong>"), including when you:
                    </p>

                    <ul className="list-disc list-inside space-y-3 pl-4">
                        <li>
                            Visit our website at <a href="https://swipeshare.app" className="text-purple-600 hover:underline" target="_blank" rel="noopener noreferrer">https://swipeshare.app</a> or any website of ours that links to this Privacy Notice.
                        </li>
                        <li>
                            Download and use our mobile application (<strong>Swipeshare</strong>) or any other application of ours that links
                            to this Privacy Notice.
                        </li>
                        <li>
                            Use <strong>Buy/Sell Swipe</strong>. We connect students with too many meal swipes and those with not enough,
                            saving wasted swipes and providing healthy affordable meals.
                        </li>
                        <li>
                            Engage with us in other related ways, including any sales, marketing, or events.
                        </li>
                    </ul>

                    <p>
                        <strong className="text-gray-900">Questions or concerns?</strong> Reading this Privacy Notice will help you understand your privacy rights and
                        choices. We are responsible for making decisions about how your personal information is processed. If
                        you do not agree with our policies and practices, please do not use our Services. If you still have any
                        questions or concerns, please contact us at <a href="mailto:hello@swipeshare.app" className="text-purple-600 hover:underline">hello@swipeshare.app</a>.
                    </p>

                    <hr className="my-8 border-gray-200" />

                    <h2 id="summary" className="text-2xl font-bold text-gray-900 mb-4">
                        SUMMARY OF KEY POINTS
                    </h2>

                    <p className="italic text-gray-600 mb-6">
                        This summary provides key points from our Privacy Notice, but you can find out more details
                        about any of these topics by clicking the link following each key point or by using our{' '}
                        <a href="#toc" className="text-purple-600 hover:underline">
                            table of contents
                        </a>{' '}
                        below to find the section you are looking for.
                    </p>

                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900">What personal information do we process?</h3>
                            <p className="mt-1">
                                When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use. <a href="#info-we-collect" className="text-purple-600 hover:underline">Learn more about personal information you disclose to us.</a>
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-900">Do we process any sensitive personal information?</h3>
                            <p className="mt-1">
                                Some of the information may be considered "special" or "sensitive" in certain jurisdictions, for example your racial or ethnic origins, sexual orientation, and religious beliefs. We do not process sensitive personal information.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-900">Do we collect any information from third parties?</h3>
                            <p className="mt-1">
                                We do not collect any information from third parties.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-900">How do we process your information?</h3>
                            <p className="mt-1">
                                We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so. <a href="#info-processing" className="text-purple-600 hover:underline">Learn more about how we process your information.</a>
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-900">In what situations and with which parties do we share personal information?</h3>
                            <p className="mt-1">
                                We may share information in specific situations and with specific third parties. <a href="#info-sharing" className="text-purple-600 hover:underline">Learn more about when and with whom we share your personal information.</a>
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-900">How do we keep your information safe?</h3>
                            <p className="mt-1">
                                We have adequate organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. <a href="#info-safety" className="text-purple-600 hover:underline">Learn more about how we keep your information safe.</a>
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-900">What are your rights?</h3>
                            <p className="mt-1">
                                Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. <a href="#privacy-rights" className="text-purple-600 hover:underline">Learn more about your privacy rights.</a>
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-900">How do you exercise your rights?</h3>
                            <p className="mt-1">
                                The easiest way to exercise your rights is by visiting [Your Rights Portal Link], or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.
                            </p>
                        </div>

                        <div>
                            <p className="mt-2">
                                Want to learn more about what we do with any information we collect?{' '}
                                <a href="#full-policy" className="text-purple-600 hover:underline">Review the Privacy Notice in full.</a>
                            </p>
                        </div>
                    </div>

                    <hr className="my-8 border-gray-200" />

                    <div id="toc">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            TABLE OF CONTENTS
                        </h2>
                        <ol className="list-decimal list-inside space-y-2">
                            <li><a href="#info-we-collect" className="text-purple-600 hover:underline">WHAT INFORMATION DO WE COLLECT?</a></li>
                            <li><a href="#info-processing" className="text-purple-600 hover:underline">HOW DO WE PROCESS YOUR INFORMATION?</a></li>
                            <li><a href="#info-sharing" className="text-purple-600 hover:underline">WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</a></li>
                            <li><a href="#info-retention" className="text-purple-600 hover:underline">HOW LONG DO WE KEEP YOUR INFORMATION?</a></li>
                            <li><a href="#info-safety" className="text-purple-600 hover:underline">HOW DO WE KEEP YOUR INFORMATION SAFE?</a></li>
                            <li><a href="#minors" className="text-purple-600 hover:underline">DO WE COLLECT INFORMATION FROM MINORS?</a></li>
                            <li><a href="#privacy-rights" className="text-purple-600 hover:underline">WHAT ARE YOUR PRIVACY RIGHTS?</a></li>
                            <li><a href="#dnt-features" className="text-purple-600 hover:underline">CONTROLS FOR DO-NOT-TRACK FEATURES</a></li>
                            <li><a href="#us-rights" className="text-purple-600 hover:underline">DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</a></li>
                            <li><a href="#updates" className="text-purple-600 hover:underline">DO WE MAKE UPDATES TO THIS NOTICE?</a></li>
                            <li><a href="#contact" className="text-purple-600 hover:underline">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</a></li>
                            <li><a href="#review-update-delete" className="text-purple-600 hover:underline">HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</a></li>
                        </ol>
                    </div>

                    <hr className="my-8 border-gray-200" />

                    <div id="info-we-collect" className="space-y-6 scroll-mt-20">
                        <h2 className="text-2xl font-bold text-gray-900">
                            1. WHAT INFORMATION DO WE COLLECT?
                        </h2>

                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-gray-800">
                                Personal information you disclose to us
                            </h3>
                            <p className="italic text-gray-600">
                                <strong>In Short:</strong> We collect personal information that you provide to us.
                            </p>
                            <p>
                                We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.
                            </p>
                            <p>
                                <strong>Personal Information Provided by You.</strong> The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:
                            </p>
                            <ul className="list-disc list-inside pl-4 space-y-1">
                                <li>names</li>
                                <li>email addresses</li>
                                <li>usernames</li>
                                <li>passwords</li>
                                <li>contact or authentication data</li>
                            </ul>
                            <p>
                                <strong>Sensitive Information.</strong> We do not process sensitive information.
                            </p>
                            <p>
                                <strong>Application Data.</strong> If you use our application(s), we also may collect the following information if you choose to provide us with access or permission:
                            </p>
                            <ul className="list-disc list-inside pl-4 space-y-2">
                                <li>
                                    <strong>Mobile Device Data.</strong> We automatically collect device information (such as your mobile device ID, model, and manufacturer), operating system, version information and system configuration information, device and application identification numbers, browser type and version, hardware model Internet service provider and/or mobile carrier, and Internet Protocol (IP) address (or proxy server). If you are using our application(s), we may also collect information about the phone network associated with your mobile device, your mobile device’s operating system or platform, the type of mobile device you use, your mobile device’s unique device ID, and information about the features of our application(s) you accessed.
                                </li>
                                <li>
                                    <strong>Push Notifications.</strong> We may request to send you push notifications regarding your account or certain features of the application(s). If you wish to opt out from receiving these types of communications, you may turn them off in your device's settings.
                                </li>
                            </ul>
                            <p>
                                This information is primarily needed to maintain the security and operation of our application(s), for troubleshooting, and for our internal analytics and reporting purposes.
                            </p>
                            <p>
                                All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.
                            </p>
                        </div>

                        <div className="space-y-4 pt-4">
                            <h3 className="text-xl font-semibold text-gray-800">
                                Information automatically collected
                            </h3>
                            <p className="italic text-gray-600">
                                <strong>In Short:</strong> Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.
                            </p>
                            <p>
                                We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.
                            </p>
                            <p>
                                The information we collect includes:
                            </p>
                            <ul className="list-disc list-inside pl-4">
                                <li>
                                    <strong>Log and Usage Data.</strong> Log and usage data is service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Services and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type, and settings and information about your activity in the Services (such as the date/time stamps associated with your usage, pages and files viewed, searches, and other actions you take such as which features you use), device event information (such as system activity, error reports (sometimes called "crash dumps"), and hardware settings).
                                </li>
                            </ul>
                        </div>

                        <div className="space-y-4 pt-4">
                            <h3 className="text-xl font-semibold text-gray-800">
                                Google API
                            </h3>
                            <p>
                                Our use of information received from Google APIs will adhere to Google API Services User Data Policy, including the Limited Use requirements.
                            </p>
                        </div>
                    </div>

                    <hr className="my-8 border-gray-200" />

                    <div id="info-processing" className="space-y-6 scroll-mt-20">
                        <h2 className="text-2xl font-bold text-gray-900">
                            2. HOW DO WE PROCESS YOUR INFORMATION?
                        </h2>

                        <p className="italic text-gray-600">
                            <strong>In Short:</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.
                        </p>

                        <p>
                            We process your personal information for a variety of reasons, depending on how you interact with our Services, including:
                        </p>

                        <ul className="list-disc list-inside space-y-4 pl-4">
                            <li>
                                <strong>To facilitate account creation and authentication and otherwise manage user accounts.</strong> We may process your information so you can create and log in to your account, as well as keep your account in working order.
                            </li>
                            <li>
                                <strong>To deliver and facilitate delivery of services to the user.</strong> We may process your information to provide you with the requested service.
                            </li>
                            <li>
                                <strong>To respond to user inquiries/offer support to users.</strong> We may process your information to respond to your inquiries and solve any potential issues you might have with the requested service.
                            </li>
                            <li>
                                <strong>To enable user-to-user communications.</strong> We may process your information if you choose to use any of our offerings that allow for communication with another user.
                            </li>
                            <li>
                                <strong>To request feedback.</strong> We may process your information when necessary to request feedback and to contact you about your use of our Services.
                            </li>
                            <li>
                                <strong>To send you marketing and promotional communications.</strong> We may process the personal information you send to us for our marketing purposes, if this is in accordance with your marketing preferences. You can opt out of our marketing emails at any time. For more information, see "<a href="#privacy-rights" className="text-purple-600 hover:underline">WHAT ARE YOUR PRIVACY RIGHTS?</a>" below.
                            </li>
                            <li>
                                <strong>To administer prize draws and competitions.</strong> We may process your information to administer prize draws and competitions.
                            </li>
                            <li>
                                <strong>To identify usage trends.</strong> We may process information about how you use our Services to better understand how they are being used so we can improve them.
                            </li>
                            <li>
                                <strong>To determine the effectiveness of our marketing and promotional campaigns.</strong> We may process your information to better understand how to provide marketing and promotional campaigns that are most relevant to you.
                            </li>
                        </ul>
                    </div>

                    <hr className="my-8 border-gray-200" />

                    <div id="info-sharing" className="space-y-6 scroll-mt-20">
                        <h2 className="text-2xl font-bold text-gray-900">
                            3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
                        </h2>

                        <p className="italic text-gray-600">
                            <strong>In Short:</strong> We may share information in specific situations described in this section and/or with the following third parties.
                        </p>

                        <p>
                            We may need to share your personal information in the following situations:
                        </p>

                        <ul className="list-disc list-inside space-y-4 pl-4">
                            <li>
                                <strong>Business Transfers.</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.
                            </li>
                            <li>
                                <strong>Other Users.</strong> When you share personal information or otherwise interact with public areas of the Services, such personal information may be viewed by all users and may be publicly made available outside the Services in perpetuity. Similarly, other users will be able to view descriptions of your activity, communicate with you within our Services, and view your profile.
                            </li>
                        </ul>
                    </div>

                    <hr className="my-8 border-gray-200" />

                    <div id="info-retention" className="space-y-6 scroll-mt-20">
                        <h2 className="text-2xl font-bold text-gray-900">
                            4. HOW LONG DO WE KEEP YOUR INFORMATION?
                        </h2>
                        <p className="italic text-gray-600">
                            <strong>In Short:</strong> We keep your information for as long as necessary to fulfill the purposes outlined in this Privacy Notice unless otherwise required by law.
                        </p>
                        <p>
                            We will only keep your personal information for as long as it is necessary for the purposes set out in this Privacy Notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than the period of time in which users have an account with us.
                        </p>
                        <p>
                            When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.
                        </p>
                    </div>

                    <hr className="my-8 border-gray-200" />

                    <div id="info-safety" className="space-y-6 scroll-mt-20">
                        <h2 className="text-2xl font-bold text-gray-900">
                            5. HOW DO WE KEEP YOUR INFORMATION SAFE?
                        </h2>
                        <p className="italic text-gray-600">
                            <strong>In Short:</strong> We aim to protect your personal information through a system of organizational and technical security measures.
                        </p>
                        <p>
                            We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.
                        </p>
                    </div>

                    <hr className="my-8 border-gray-200" />

                    <div id="minors" className="space-y-6 scroll-mt-20">
                        <h2 className="text-2xl font-bold text-gray-900">
                            6. DO WE COLLECT INFORMATION FROM MINORS?
                        </h2>
                        <p className="italic text-gray-600">
                            <strong>In Short:</strong> We do not knowingly collect data from or market to children under 18 years of age.
                        </p>
                        <p>
                            We do not knowingly collect, solicit data from, or market to children under 18 years of age, nor do we knowingly sell such personal information. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent’s use of the Services. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under age 18, please contact us at <a href="mailto:hello@swipeshare.app" className="text-purple-600 hover:underline">hello@swipeshare.app</a>.
                        </p>
                    </div>

                    <hr className="my-8 border-gray-200" />

                    <div id="privacy-rights" className="space-y-6 scroll-mt-20">
                        <h2 className="text-2xl font-bold text-gray-900">
                            7. WHAT ARE YOUR PRIVACY RIGHTS?
                        </h2>

                        <p className="italic text-gray-600">
                            <strong>In Short:</strong> You may review, change, or terminate your account at any time, depending on your country, province, or state of residence.
                        </p>

                        <div className="space-y-4">
                            <p>
                                <strong>Withdrawing your consent:</strong> If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section "<a href="#contact" className="text-purple-600 hover:underline">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</a>" below.
                            </p>
                            <p>
                                However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.
                            </p>
                            <p>
                                <strong>Opting out of marketing and promotional communications:</strong> You can unsubscribe from our marketing and promotional communications at any time by clicking on the unsubscribe link in the emails that we send, or by contacting us using the details provided in the section "<a href="#contact" className="text-purple-600 hover:underline">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</a>" below. You will then be removed from the marketing lists. However, we may still communicate with you — for example, to send you service-related messages that are necessary for the administration and use of your account, to respond to service requests, or for other non-marketing purposes.
                            </p>
                        </div>

                        <div className="space-y-4 pt-2">
                            <h3 className="text-xl font-semibold text-gray-800">Account Information</h3>
                            <p>
                                If you would at any time like to review or change the information in your account or terminate your account, you can:
                            </p>
                            <ul className="list-disc list-inside pl-4 space-y-2">
                                <li>
                                    Log in to your account settings and update your user account.
                                </li>
                                <li>
                                    Contact us using the contact information provided.
                                </li>
                            </ul>
                            <p>
                                Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms and/or comply with applicable legal requirements.
                            </p>
                        </div>

                        <p>
                            If you have questions or comments about your privacy rights, you may email us at <a href="mailto:hello@swipeshare.app" className="text-purple-600 hover:underline">hello@swipeshare.app</a>.
                        </p>
                    </div>

                    <hr className="my-8 border-gray-200" />

                    <div id="dnt-features" className="space-y-6 scroll-mt-20">
                        <h2 className="text-2xl font-bold text-gray-900">
                            8. CONTROLS FOR DO-NOT-TRACK FEATURES
                        </h2>
                        <p>
                            Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage, no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this Privacy Notice.
                        </p>
                        <p>
                            California law requires us to let you know how we respond to web browser DNT signals. Because there currently is not an industry or legal standard for recognizing or honoring DNT signals, we do not respond to them at this time.
                        </p>
                    </div>

                    <hr className="my-8 border-gray-200" />

                    <div id="us-rights" className="space-y-6 scroll-mt-20">
                        <h2 className="text-2xl font-bold text-gray-900">
                            9. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
                        </h2>

                        <p className="italic text-gray-600">
                            <strong>In Short:</strong> If you are a resident of California, Colorado, Connecticut, Delaware, Florida, Indiana, Iowa, Kentucky, Maryland, Minnesota, Montana, Nebraska, New Hampshire, New Jersey, Oregon, Rhode Island, Tennessee, Texas, Utah, or Virginia, you may have the right to request access to and receive details about the personal information we maintain about you and how we have processed it, correct inaccuracies, get a copy of, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law. More information is provided below.
                        </p>

                        <div className="space-y-4 pt-2">
                            <h3 className="text-xl font-semibold text-gray-800">
                                Categories of Personal Information We Collect
                            </h3>
                            <p>
                                The table below shows the categories of personal information we have collected in the past twelve (12) months. The table includes illustrative examples of each category and does not reflect the personal information we collect from you. For a comprehensive inventory of all personal information we process, please refer to the section "<a href="#info-we-collect" className="text-purple-600 hover:underline">WHAT INFORMATION DO WE COLLECT?</a>"
                            </p>
                        </div>
                    </div>

                    <div className="overflow-x-auto pt-4">
                        <table className="min-w-full divide-y divide-gray-200 border border-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Examples</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Collected</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200 text-sm">
                                <tr>
                                    <td className="px-6 py-4 align-top font-medium text-gray-900">A. Identifiers</td>
                                    <td className="px-6 py-4 align-top">Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address, and account name</td>
                                    <td className="px-6 py-4 align-top">YES</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 align-top font-medium text-gray-900">B. Personal information as defined in the California Customer Records statute</td>
                                    <td className="px-6 py-4 align-top">Name, contact information, education, employment, employment history, and financial information</td>
                                    <td className="px-6 py-4 align-top">YES</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 align-top font-medium text-gray-900">C. Protected classification characteristics under state or federal law</td>
                                    <td className="px-6 py-4 align-top">Gender, age, date of birth, race and ethnicity, national origin, marital status, and other demographic data</td>
                                    <td className="px-6 py-4 align-top">NO</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 align-top font-medium text-gray-900">D. Commercial information</td>
                                    <td className="px-6 py-4 align-top">Transaction information, purchase history, financial details, and payment information</td>
                                    <td className="px-6 py-4 align-top">YES</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 align-top font-medium text-gray-900">E. Biometric information</td>
                                    <td className="px-6 py-4 align-top">Fingerprints and voiceprints</td>
                                    <td className="px-6 py-4 align-top">NO</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 align-top font-medium text-gray-900">F. Internet or other similar network activity</td>
                                    <td className="px-6 py-4 align-top">Browsing history, search history, online behavior, interest data, and interactions with our and other websites, applications, systems, and advertisements</td>
                                    <td className="px-6 py-4 align-top">NO</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 align-top font-medium text-gray-900">G. Geolocation data</td>
                                    <td className="px-6 py-4 align-top">Device location</td>
                                    <td className="px-6 py-4 align-top">NO</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 align-top font-medium text-gray-900">H. Audio, electronic, sensory, or similar information</td>
                                    <td className="px-6 py-4 align-top">Images and audio, video or call recordings created in connection with our business activities</td>
                                    <td className="px-6 py-4 align-top">NO</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 align-top font-medium text-gray-900">I. Professional or employment-related information</td>
                                    <td className="px-6 py-4 align-top">Business contact details in order to provide you our Services at a business level or job title, work history, and professional qualifications if you apply for a job with us</td>
                                    <td className="px-6 py-4 align-top">NO</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 align-top font-medium text-gray-900">J. Education Information</td>
                                    <td className="px-6 py-4 align-top">Student records and directory information</td>
                                    <td className="px-6 py-4 align-top">NO</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 align-top font-medium text-gray-900">K. Inferences drawn from collected personal information</td>
                                    <td className="px-6 py-4 align-top">Inferences drawn from any of the collected personal information listed above to create a profile or summary about, for example, an individual's preferences and characteristics</td>
                                    <td className="px-6 py-4 align-top">NO</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 align-top font-medium text-gray-900">L. Sensitive personal information</td>
                                    <td className="px-6 py-4 align-top"></td>
                                    <td className="px-6 py-4 align-top">NO</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="space-y-6 pt-6">
                        <p>
                            We may also collect other personal information outside of these categories through instances where you interact with us in person, online, or by phone or mail in the context of:
                        </p>
                        <ul className="list-disc list-inside pl-4 space-y-2">
                            <li>Receiving help through our customer support channels;</li>
                            <li>Participation in customer surveys or contests; and</li>
                            <li>Facilitation in the delivery of our Services and to respond to your inquiries.</li>
                        </ul>
                        <p>
                            We will use and retain the collected personal information as needed to provide the Services or for:
                        </p>
                        <ul className="list-disc list-inside pl-4 space-y-2">
                            <li><strong>Category A</strong> - As long as the user has an account with us</li>
                            <li><strong>Category B</strong> - As long as the user has an account with us</li>
                            <li><strong>Category D</strong> - As long as the user has an account with us</li>
                        </ul>

                        <div className="space-y-2">
                            <h3 className="text-xl font-semibold text-gray-800">Sources of Personal Information</h3>
                            <p>Learn more about the sources of personal information we collect in "<a href="#info-we-collect" className="text-purple-600 hover:underline">WHAT INFORMATION DO WE COLLECT?</a>"</p>
                        </div>

                        <div className="space-y-2">
                            <h3 className="text-xl font-semibold text-gray-800">How We Use and Share Personal Information</h3>
                            <p>Learn more about how we use your personal information in the section, "<a href="#info-processing" className="text-purple-600 hover:underline">HOW DO WE PROCESS YOUR INFORMATION?</a>"</p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-gray-800">Will your information be shared with anyone else?</h3>
                            <p>
                                We may disclose your personal information with our service providers pursuant to a written contract between us and each service provider. Learn more about how we disclose personal information in the section, "<a href="#info-sharing" className="text-purple-600 hover:underline">WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</a>"
                            </p>
                            <p>
                                We may use your personal information for our own business purposes, such as for undertaking internal research for technological development and demonstration. This is not considered to be "selling" of your personal information.
                            </p>
                            <p>
                                We have not disclosed, sold, or shared any personal information to third parties for a business or commercial purpose in the preceding twelve (12) months. We will not sell or share personal information in the future belonging to website visitors, users, and other consumers.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-6 pt-6">
                        <h3 className="text-xl font-semibold text-gray-800">Your Rights</h3>
                        <p>
                            You have rights under certain US state data protection laws. However, these rights are not absolute, and in certain cases, we may decline your request as permitted by law. These rights include:
                        </p>
                        <ul className="list-disc list-inside pl-4 space-y-2">
                            <li><strong>Right to know</strong> whether or not we are processing your personal data</li>
                            <li><strong>Right to access</strong> your personal data</li>
                            <li><strong>Right to correct</strong> inaccuracies in your personal data</li>
                            <li><strong>Right to request</strong> the deletion of your personal data</li>
                            <li><strong>Right to obtain a copy</strong> of the personal data you previously shared with us</li>
                            <li><strong>Right to non-discrimination</strong> for exercising your rights</li>
                            <li><strong>Right to opt out</strong> of the processing of your personal data if it is used for targeted advertising (or sharing as defined under California’s privacy law), the sale of personal data, or profiling in furtherance of decisions that produce legal or similarly significant effects ("profiling")</li>
                        </ul>
                        <p>
                            Depending upon the state where you live, you may also have the following rights:
                        </p>
                        <ul className="list-disc list-inside pl-4 space-y-2">
                            <li>Right to access the categories of personal data being processed (as permitted by applicable law, including the privacy law in Minnesota)</li>
                            <li>Right to obtain a list of the categories of third parties to which we have disclosed personal data (as permitted by applicable law, including the privacy law in California, Delaware, and Maryland)</li>
                            <li>Right to obtain a list of specific third parties to which we have disclosed personal data (as permitted by applicable law, including the privacy law in Minnesota and Oregon)</li>
                            <li>Right to review, understand, question, and correct how personal data has been profiled (as permitted by applicable law, including the privacy law in Minnesota)</li>
                            <li>Right to limit use and disclosure of sensitive personal data (as permitted by applicable law, including the privacy law in California)</li>
                            <li>Right to opt out of the collection of sensitive data and personal data collected through the operation of a voice or facial recognition feature (as permitted by applicable law, including the privacy law in Florida)</li>
                        </ul>

                        <div className="space-y-4 pt-4">
                            <h3 className="text-xl font-semibold text-gray-800">How to Exercise Your Rights</h3>
                            <p>
                                To exercise these rights, you can contact us by visiting <a href="https://docs.google.com/forms/d/e/1FAIpQLSfTmI3DIHP85a78MlNmQ9gUicQhjff5Tj34pWsUhvN6ATzGXg/viewform" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">this link</a>, by emailing us at <a href="mailto:hello@swipeshare.app" className="text-purple-600 hover:underline">hello@swipeshare.app</a>, or by referring to the contact details at the bottom of this document.
                            </p>
                            <p>
                                Under certain US state data protection laws, you can designate an authorized agent to make a request on your behalf. We may deny a request from an authorized agent that does not submit proof that they have been validly authorized to act on your behalf in accordance with applicable laws.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-6 pt-6">
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-gray-800">Request Verification</h3>
                            <p>
                                Upon receiving your request, we will need to verify your identity to determine you are the same person about whom we have the information in our system. We will only use personal information provided in your request to verify your identity or authority to make the request. However, if we cannot verify your identity from the information already maintained by us, we may request that you provide additional information for the purposes of verifying your identity and for security or fraud-prevention purposes.
                            </p>
                            <p>
                                If you submit the request through an authorized agent, we may need to collect additional information to verify your identity before processing your request and the agent will need to provide a written and signed permission from you to submit such request on your behalf.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-gray-800">Appeals</h3>
                            <p>
                                Under certain US state data protection laws, if we decline to take action regarding your request, you may appeal our decision by emailing us at <a href="mailto:hello@swipeshare.app" className="text-purple-600 hover:underline">hello@swipeshare.app</a>. We will inform you in writing of any action taken or not taken in response to the appeal, including a written explanation of the reasons for the decisions. If your appeal is denied, you may submit a complaint to your state attorney general.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-gray-800">California "Shine The Light" Law</h3>
                            <p>
                                California Civil Code Section 1798.83, also known as the "Shine The Light" law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us by using the contact details provided in the section "<a href="#contact" className="text-purple-600 hover:underline">HOW CAN YOU CONTACT US ABOUT THIS NOTICE</a>".
                            </p>
                        </div>
                    </div>

                    <hr className="my-8 border-gray-200" />

                    <div id="updates" className="space-y-6 scroll-mt-20">
                        <h2 className="text-2xl font-bold text-gray-900">
                            10. DO WE MAKE UPDATES TO THIS NOTICE?
                        </h2>
                        <p className="italic text-gray-600">
                            <strong>In Short:</strong> Yes, we will update this notice as necessary to stay compliant with relevant laws.
                        </p>
                        <p>
                            We may update this Privacy Notice from time to time. The updated version will be indicated by an updated "Revised" date at the top of this Privacy Notice. If we make material changes to this Privacy Notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this Privacy Notice frequently to be informed of how we are protecting your information.
                        </p>
                    </div>

                    <hr className="my-8 border-gray-200" />

                    <div id="contact" className="space-y-6 scroll-mt-20">
                        <h2 className="text-2xl font-bold text-gray-900">
                            11. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
                        </h2>
                        <p>
                            If you have questions or comments about this notice, you may email us at <a href="mailto:hello@swipeshare.app" className="text-purple-600 hover:underline">hello@swipeshare.app</a> or contact us by post at:
                        </p>
                        <p className="not-italic">
                            Swipeshare<br />
                            875 M.L.K. Jr Blvd, Chapel Hill, NC 27514, USA<br />
                            Chapel Hill, NC 27514<br />
                            United States
                        </p>
                    </div>

                    <hr className="my-8 border-gray-200" />

                    <div id="review-update-delete" className="space-y-6 scroll-mt-20">
                        <h2 className="text-2xl font-bold text-gray-900">
                            12. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?
                        </h2>
                        <p>
                            Based on the applicable laws of your country or state of residence in the US, you may have the right to request access to the personal information we collect from you, details about how we have processed it, correct inaccuracies, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law. To request to review, update, or delete your personal information, please visit <a href="https://docs.google.com/forms/d/e/1FAIpQLSfTmI3DIHP85a78MlNmQ9gUicQhjff5Tj34pWsUhvN6ATzGXg/viewform" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">this link</a>.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;