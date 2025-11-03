const EmailVerification = () => {
    return (
        <div className="min-h-[80vh] bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-md text-center">
                <div>
                    <svg
                        className="mx-auto h-16 w-16 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        {/* Circle path */}
                        <path
                            className="animate-draw-circle"
                            d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18z"
                        />
                        {/* Checkmark path - intersects slightly into circle, doesn’t go past */}
                        <path
                            className="animate-draw-check"
                            d="M7.5 12.5l3 3l6-6.5"
                        />
                    </svg>
                </div>

                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Email Verified!
                </h2>

                <p className="mt-2 text-center text-sm text-gray-600">
                    Thank you for verifying your email address. You can now proceed to
                    log in to your account.
                </p>
            </div>
        </div>
    );
};

export default EmailVerification;