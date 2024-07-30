import { useLayoutEffect, useState } from 'react';
import { useTheme } from 'styled-components';

// Render two different Header components depending on viewport width
export const useCheckViewportWidth = () => {
  const theme = useTheme();
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    const checkViewportWidth = () => {
      if (window.innerWidth <= parseInt(theme.mobile)) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    window.addEventListener('resize', checkViewportWidth);

    return () => {
      window.removeEventListener('resize', checkViewportWidth);
    };
  }, [window.innerWidth]);

  return isMobile;
};
