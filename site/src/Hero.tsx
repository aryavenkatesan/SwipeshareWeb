function Hero() {
    return (
        <>
            {/* Make the hero container relative so its children can be absolutely positioned */}
            <div
                className="relative flex flex-col lg:flex-row place-content-between px-8 lg:pl-16 pt-32 lg:pt-32 lg:pr-0 "
                style={{
                    background: 'radial-gradient(ellipse 120% 250% at top right, rgba(183,129,225,0.8) 0%, white 60%)'
                }}
            >
                {/* text section */}
                <div className='flex flex-col justify-center flex-1 font-light pb-16 lg:pb-32' style={{ fontFamily: 'Instrument Sans', fontWeight: 400 }}>
                    <h1 className='text-3xl lg:text-4xl xl:text-5xl pb-4 lg:pb-8'>Hero Copy</h1>
                    <h2 className='text-xl lg:text-2xl xl:text-3xl'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum lorem non mi dictum.
                    </h2>
                    <div className='h-8 lg:h-12' />
                    <h2 className='text-xl lg:text-2xl xl:text-3xl pb-4 text-[#A98CE4]'>Join the waitlist</h2>

                    <input
                        type="email"
                        placeholder="name@email.address"
                        className="px-4 py-2 lg:py-1 border border-gray-300 rounded-lg text-gray-700 
                                   placeholder-gray-400 focus:outline-none focus:border-[#A98CE4] 
                                   w-full lg:w-96"
                    />
                </div>

                {/* image */}
                <div>
                    <img
                        className="lg:max-w-[50vw] lg:max-h-lvh h-fit w-full max-w-md mx-auto"
                        src="/assets/handMockup.png"
                        alt="hand mockup"
                    />
                    {/* ✅ gradient pinned to bottom of Hero section */}
                    <div className="absolute bottom-10 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
                </div>
            </div>
        </>
    )
}

export default Hero;