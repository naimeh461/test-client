import  { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [scrollValue, setScrollValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const pos = window.scrollY;
    const calcHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const newValue = Math.round((pos * 100) / calcHeight);
    setScrollValue(newValue);

    if (pos > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    handleScroll();
  }, [scrollValue]);

  const radius = 14;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = ((100 - scrollValue) / 100) * circumference;

  return (
    isVisible && (
      <div
        
        id="progress"
        className="z-50 fixed bottom-20 right-12 h-14 w-14 grid place-items-center rounded-full bg-red-100 cursor-pointer transition-transform duration-300 ease-in-out  animate-bounce"
        onClick={scrollToTop}
      >
        <svg
          width="60"
          height="52"
          viewBox="0 0 27 32"
          xmlns="http://www.w3.org/2000/svg" 
          className='text-center'
        >
          <circle
            cx="16"
            cy="12"
            r={radius}
            fill="none"
            stroke="#e52828"
            strokeWidth="4"
            strokeDasharray={circumference}
            strokeDashoffset={dashOffset}
            strokeLinecap="round"
            transform="rotate(-90 16 16)"
          />
          <path
              d="M11.996 9.892l5.65 5.654-1.416 1.414-4.238-4.242-4.242 4.242-1.414-1.414z"
              fill="#e52828"
            
            />
        </svg>
      </div>
    )
  );
};

export default ScrollToTopButton;
