const AuthenticationService = {
    isAuthenticated: () => {
      return !!localStorage.getItem("authtoken");
    },
  
    login: (email, password, isClicked) => {
      const fakeToken = `Bearer ${btoa(email + ":" + password)}`;
      if (isClicked) {
        localStorage.setItem("authtoken", fakeToken);
      }
    },

    logout: () => {
      localStorage.removeItem("authtoken");
  
    },

    getAuthenticated: () => {
      return localStorage.getItem("authtoken");
    },
  };
  
  export default AuthenticationService;
