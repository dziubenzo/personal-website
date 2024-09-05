import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useTheme } from 'styled-components';

// Check if the viewport width if smaller than 768px
export const useCheckIfMobile = () => {
  const theme = useTheme();
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    const checkViewportWidth = () => {
      if (window.innerWidth < parseInt(theme.mobile)) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    checkViewportWidth();
    window.addEventListener('resize', checkViewportWidth);

    return () => {
      window.removeEventListener('resize', checkViewportWidth);
    };
  }, [window.innerWidth]);

  return isMobile;
};

// Check if the viewport width if larger than or equal to 1024px
export const useCheckIfDesktop = () => {
  const theme = useTheme();
  const [isDesktop, setIsDesktop] = useState(false);

  useLayoutEffect(() => {
    const checkViewportWidth = () => {
      if (window.innerWidth >= parseInt(theme.tablet)) {
        setIsDesktop(true);
      } else {
        setIsDesktop(false);
      }
    };

    checkViewportWidth();
    window.addEventListener('resize', checkViewportWidth);

    return () => {
      window.removeEventListener('resize', checkViewportWidth);
    };
  }, [window.innerWidth]);

  return isDesktop;
};

// Obtain header height whenever the page is resized
export const useHeaderHeight = () => {
  const [headerHeight, setHeaderHeight] = useState(0);

  useLayoutEffect(() => {
    const getHeaderHeight = () => {
      // Set header height to 0 if a probable mobile device is in landscape mode as the header is not sticky in this case
      const landscapeAndMobile = window.matchMedia(
        '(orientation: landscape) and (height < 600px)',
      );
      if (landscapeAndMobile.matches) {
        return setHeaderHeight(0);
      }
      const newHeight = document.querySelector('header')?.offsetHeight;
      if (newHeight) {
        setHeaderHeight(newHeight);
      }
    };

    getHeaderHeight();
    window.addEventListener('resize', getHeaderHeight);

    return () => {
      window.removeEventListener('resize', getHeaderHeight);
    };
  }, []);

  return headerHeight;
};

// Close the sidebar on tap outside the sidebar
export const useOutsideTap = (
  setShowSidebar?: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  const sidebarRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function closeSidebar(event: MouseEvent) {
      if (
        sidebarRef.current &&
        setShowSidebar &&
        !sidebarRef.current.contains(event.target as Node) &&
        !(event.target instanceof SVGElement) // Make sure menu icon button works
      ) {
        return setShowSidebar(false);
      }
    }
    document.addEventListener('mousedown', closeSidebar);

    return () => {
      document.removeEventListener('mousedown', closeSidebar);
    };
  }, []);

  return sidebarRef;
};
