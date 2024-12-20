import {useState, useEffect} from 'react';


function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState({x: 0, y: 0});
  useEffect(() => {
    const handleScroll = () => {
        setScrollPosition({x: window.scrollX, y: window.scrollY});
    };

    window.addEventListener('scroll', handleScroll);
        // Cleanup the event listener on unmount
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };

   
  }, []);
  return scrollPosition;
}

export default useScrollPosition;