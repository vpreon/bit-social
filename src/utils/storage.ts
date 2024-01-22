const storagePrefix = 'bit_social_';

const storage = {
  getToken: () => {
    return localStorage.getItem(`${storagePrefix}_token`);
  },
  setToken: (token: string) => {
    localStorage.setItem(`${storagePrefix}_token`, token);
  },
  clearToken: () => {
    localStorage.removeItem(`${storagePrefix}_token`);
  },

  getUser: () => {
    return JSON.parse(localStorage.getItem(`${storagePrefix}_user`) as string);
  },
  setUser: (user: object) => {
    localStorage.setItem(`${storagePrefix}_user`, JSON.stringify(user));
  },

  clearUser: () => {
    localStorage.removeItem(`${storagePrefix}_user`);
  },
};

export default storage;
