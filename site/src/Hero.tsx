import handMockup from '../public/assets/handMockup.png';

function Hero() {
    return (
        <>
            <div className="flex flex-row place-content-between pl-16 pt-32 pr-0"
                style={{
                    background: 'radial-gradient(ellipse 120% 250% at top right, rgba(183,129,225,0.8) 0%, white 60%)'
                }}>

                <div className='flex flex-col justify-center flex-1 font-light pb-32' style={{ fontFamily: 'Instrument Sans', fontWeight: 400 }}>
                    {/* text section  */}
                    <h1 className='text-4xl pb-8'>Hero Copy</h1>
                    <h2 className='text-2xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum lorem non mi dictum.</h2>
                    <div className='h-12' />
                    <h2 className='text-[#A98CE4] text-2xl pb-4'>Join the waitlist</h2>

                    <input
                        type="email"
                        placeholder="name@email.address"
                        className="px-4 py-1 border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#A98CE4] w-96"
                    />

                </div>
                <img className="max-w-[50vw] max-h-lvh h-fit" src={handMockup} alt="hand mockup" />
                <div className="absolute -bottom-32 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
            </div>
        </>
    )
}

export default Hero