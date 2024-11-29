export default function Card () {
    return (
        <div className='w-full bg-white-border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
            <a href="/">
                <img className='p-8 rounded-t-lg' src="https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?cs=srgb&dl=pexels-pixabay-159304.jpg&fm=jpg&w=1280&h=853" alt="" />
            </a>
            <div className='px-5 pb-5'>
                <a href="/">
                    <div className="flex items-center justify-center">
                        <h5 className='text-xl font-semibold tracking-tight text-gray-900 dark:text-white'>
                            Welcome to the Internet
                        </h5>
                    </div>
                </a>
                <div className='flex items-center justify-center mt-10'>
                    <span className='text-3xl font-bold text-gray-900 dark:text-white'></span>
                    <a href="/" className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg
                    text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Know More</a>
                </div>
            </div>
        </div>
    )
}