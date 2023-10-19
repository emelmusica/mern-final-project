import decode from 'jwt-decode';

class AuthService { // get user profile
  getProfile() {
    return decode(this.getToken());
  }

  loggedIn() { // check if logged in with token
    const token = this.getToken();
    
    return token && !this.isTokenExpired(token) ? true : false; // Return true if a valid if not then return false
  }

  isTokenExpired(token) { // Check if token is expired.

    const decoded = decode(token);
   
    if (decoded.exp < Date.now() / 1000) {
      localStorage.removeItem('id_token');
      return true;
    }

    return false;
  }

  getToken() {
    return localStorage.getItem('id_token');
  }

  login(idToken) {
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');
  }

  logout() {
    localStorage.removeItem('id_token');
    window.location.reload();
  }
}

export default new AuthService();
