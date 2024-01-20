const storagePrefix = 'bit_social_';

const storage = {
  getToken: () => {
    return JSON.parse(localStorage.getItem(`${storagePrefix}_token`) as string);
  },
  setToken: (token: string) => {
    localStorage.setItem(`${storagePrefix}_token`, token);
  },
  clearToken: () => {
    localStorage.removeItem(`${storagePrefix}_token`);
  },
};

export default storage;
