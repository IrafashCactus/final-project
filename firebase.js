// Initialize Firebase with your config
const firebaseConfig = {
    apiKey: "AIzaSyYOUR_API_KEY_HERE",
    authDomain: "your-project-id.firebaseapp.com",
    projectId: "your-project-id",
    storageBucket: "your-project-id.appspot.com",
    messagingSenderId: "123456789012",
    appId: "1:123456789012:web:abcdef1234567890"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Auth Functions
  export const auth = firebase.auth();
  export const googleProvider = new firebase.auth.GoogleAuthProvider();
  
  // Example auth state listener
  auth.onAuthStateChanged((user) => {
    if (user) {
      console.log("User logged in:", user.email);
      document.getElementById('auth-status').innerHTML = `
        <span>Welcome, ${user.displayName || user.email}</span>
        <button onclick="logout()" class="hover:underline">Logout</button>
      `;
    } else {
      console.log("User logged out");
      document.getElementById('auth-status').innerHTML = `
        <button onclick="login()" class="hover:underline">Login</button>
      `;
    }
  });
  
  // Auth functions
  export function login() {
    return auth.signInWithPopup(googleProvider);
  }
  
  export function logout() {
    return auth.signOut();
  } 
  export {
    auth,
    googleProvider,
    emailLogin,
    emailSignup,
    sendPasswordReset,
    login,
    logout
  };