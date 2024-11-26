'use client'

export default function AnimatedBackground() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <div className="relative flex-grow w-full overflow-hidden">
        <div className="[background-image:linear-gradient(-60deg,#66cc33_50%,#0099ff_50%)] animate-slide absolute bottom-0 -left-1/2 -right-1/2 top-0 opacity-50" />
        <div className="[background-image:linear-gradient(-60deg,#66cc33_50%,#0099ff_50%)] animate-slide-reverse absolute bottom-0 -left-1/2 -right-1/2 top-0 opacity-50" />
        <div className="[background-image:linear-gradient(-60deg,#66cc33_50%,#0099ff_50%)] animate-slide-slow absolute bottom-0 -left-1/2 -right-1/2 top-0 opacity-50" />
        
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-300 rounded-xl p-8 text-center shadow-lg max-w-4xl w-full">
          <h1 className='tagline text-4xl sm:text-5xl md:text-6xl lg:text-[65px] font-bold mb-6 leading-tight'>
            Bringing people together one event at a time
          </h1>
          <br />
          <h2 className='subtagline text-xl sm:text-2xl md:text-3xl lg:text-[24px] text-gray-700 leading-normal mb-8'>
            Your ultimate hub for unforgettable events, where experiences come to life
          </h2>
          <div className='Buttons flex justify-center space-x-4 flex-wrap'>
            <button className="bb bg-transparent relative py-1 px-4 flex items-center text-lg font-semibold no-underline cursor-pointer border border-black rounded-full overflow-hidden text-black transition-colors duration-300 ease-out hover:text-white hover:border-[#2890f1]">
              <span className="m-2 sm:m-[10px]">Explore Events</span>
            </button>
            <button className="bb bg-transparent relative py-1 px-4 flex items-center text-lg font-semibold no-underline cursor-pointer border border-black rounded-full overflow-hidden text-black transition-colors duration-300 ease-out hover:text-white hover:border-[#2890f1]">
              <span className="m-2 sm:m-[10px]">Host An Event</span>
            </button>
          </div>
        </div>
      </div>
      <style jsx>{`
        .bb::before {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          margin: auto;
          content: '';
          border-radius: 50%;
          display: block;
          width: 20em;
          height: 20em;
          left: -5em;
          text-align: center;
          transition: box-shadow 0.5s ease-out;
          z-index: -1;
        }
        .bb:hover::before {
          box-shadow: inset 0 0 0 10em rgb(40, 144, 241);
        }
      `}</style>
    </div>
  )
}

