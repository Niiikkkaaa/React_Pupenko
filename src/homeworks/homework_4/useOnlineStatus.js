import React, { useEffect, useState } from 'react';

function useOnlineStatus () {

  const [isOnlone, setIsOnline] = useState(null);

  useEffect(() => {
    setIsOnline(navigator.onLine);

    function updateOnlineStatus() {
      setIsOnline(navigator.onLine);
    }

    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);

    return () => {
      window.removeEventListener('online', updateOnlineStatus);
      window.removeEventListener('offline', updateOnlineStatus);
    };
  }, []);

  return isOnlone;
}
  
  export default useOnlineStatus;