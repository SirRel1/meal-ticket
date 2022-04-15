<<<<<<< HEAD
// use this to decode a token and get the user's information out of it
import decode from 'jwt-decode';

// create a new class to instantiate for a user
class AuthService {
  // get user data
=======

import decode from 'jwt-decode';

class AuthService {
>>>>>>> 990f9126bd827ae09e3aa7e878411b2662383222
  getProfile() {
    return decode(this.getToken());
  }

<<<<<<< HEAD
  // check if user's logged in
  loggedIn() {
    // Checks if there is a saved token and it's still valid
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token); // handwaiving here
  }

  // check if token is expired
  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else return false;
    } catch (err) {
      return false;
    }
  }

  getToken() {
    // Retrieves the user token from localStorage
=======
  loggedIn() {
    const token = this.getToken();
    return token && !this.isTokenExpired(token) ? true : false;
  }

  isTokenExpired(token) {
    const decoded = decode(token);
    if (decoded.exp < Date.now() / 1000) {
      localStorage.removeItem('id_token');
      return true;
    }
    return false;
  }

  getToken() {
>>>>>>> 990f9126bd827ae09e3aa7e878411b2662383222
    return localStorage.getItem('id_token');
  }

  login(idToken) {
<<<<<<< HEAD
    // Saves user token to localStorage
=======
>>>>>>> 990f9126bd827ae09e3aa7e878411b2662383222
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');
  }

  logout() {
<<<<<<< HEAD
    // Clear user token and profile data from localStorage
    localStorage.removeItem('id_token');
    // this will reload the page and reset the state of the application
    window.location.assign('/');
  }
}

export default new AuthService();
=======
    localStorage.removeItem('id_token');
    window.location.reload();
  }
}

export default new AuthService();
>>>>>>> 990f9126bd827ae09e3aa7e878411b2662383222
