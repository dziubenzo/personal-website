import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useTheme } from 'styled-components';

// Render two different Header components depending on viewport width
export const useCheckViewportWidth = () => {
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

    window.addEventListener('resize', checkViewportWidth);

    return () => {
      window.removeEventListener('resize', checkViewportWidth);
    };
  }, [window.innerWidth]);

  return isMobile;
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
