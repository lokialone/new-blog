import { useEffect, useState } from 'react';
import { throttle } from 'lodash';

const useScrollAtTop = (initial, throttleTime) => {
  const [isAtTop, setIsAtTop] = useState(initial);
  const scrollFn = () => {
    if (
      document.body.scrollTop !== 0 ||
      document.documentElement.scrollTop !== 0
    ) {
      setIsAtTop(false);
    } else {
      setIsAtTop(true);
    }
  };
  const throtteFn = throttle(scrollFn, throttleTime || 1000);
  useEffect(() => {
    window.addEventListener('scroll', throtteFn);
    return () => {
      window.removeEventListener('scroll', throtteFn);
    };
  }, []);
  return isAtTop;
};

export default useScrollAtTop;
