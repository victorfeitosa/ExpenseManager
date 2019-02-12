import { firebase, googleAuthProvider } from '../firebase/firebase';

export const login = (uid) => ({
   type: 'LOGIN',
   uid
});

export const logout = () => ({
   type: 'LOGOUT'
});

export const startLogin = (authProvider) => {
   switch (authProvider.toLowerCase()) {
      case 'google':
         authProvider = new firebase.auth.GoogleAuthProvider();
         authProvider.addScope('profile');
         authProvider.addScope('email');
         break;
      case 'github':
         authProvider = new firebase.auth.GithubAuthProvider();
         authProvider.addScope('repo');
         break;
   }
   return () => {
      return firebase.auth().signInWithPopup(authProvider);
   };
};

export const startLogout = () => {
   return () => {
      return firebase.auth().signOut();
   }
}