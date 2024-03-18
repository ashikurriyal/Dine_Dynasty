import './Banner.css'

const Banner = () => {
    return (
        <div className="container mx-auto banner-bg bg-repeat-round lg:h-[680px] flex flex-col justify-center lg:p-0 p-4">

            <div className='flex flex-col items-center text-center  space-y-8'>
                <h1 className='font-lexend font-bold lg:text-5xl text-3xl text-white lg:w-2/3'>
                    Ignite Your Passion for Food with <span className='text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400'>Dine Dynasty!</span>
                </h1>
                <p className='font-lexend font-normal text-xl text-white lg:w-2/3'>
                    Spark the culinary passion with our exceptional flavors. Dive into a world of delicious experiences tailored just for you.
                </p>
                <div className="flex  lg:gap-8 gap-4">
                    <button className="btn rounded-full bg-green-400 font-lexend font-semibold text-xl">
                        Explore Now
                    </button>
                    <button className="btn rounded-full bg-transparent font-lexend font-semibold text-xl text-white">
                        Our Feedback
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Banner;