import { useEffect } from 'react';

export const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      // Do nothing if clicking ref's element or descendants
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      // Call the handler function when clicked outside of the ref
      handler(event);
    };

    // Add event listener
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    // Clean up the event listener on unmount
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};
