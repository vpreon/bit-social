import { useEffect, useState } from 'react';

import storage from '@/utils/storage';

export const useUser = () => {
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = storage.getUser();
    const getToken = storage.getToken();

    if (getUser) {
      setUser(getUser);
    }
    if (getToken) {
      setIsLoggedin(true);
    }
  }, []);

  return { isLoggedin, user };
};
