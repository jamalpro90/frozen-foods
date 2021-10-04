// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, onAuthStateChanged, signOut, signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAwXQrZeJS2OcVavK6tvGJz-_OfXX9DMTg',
  authDomain: 'frozen-foods-99.firebaseapp.com',
  projectId: 'frozen-foods-99',
  storageBucket: 'frozen-foods-99.appspot.com',
  messagingSenderId: '1006765664009',
  appId: '1:1006765664009:web:579bdf74ddd7e83da695d8',
  measurementId: 'G-TVWC4ZTLFN',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

// Fungsi cek apakah suah login
export const funcLoginStatus = (router) => {
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      router.push('/login');
    }
  });
};

// Fungsi Registrasi
export const funcRegister = (router, email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      sendEmailVerification(auth.currentUser)
        .then(() => {
          alert('Cek Email Untuk Verifikasi');
          router.push('/login');
        })
        .catch((error) => {
          alert(error.message);
        });
    })
    .catch((error) => {
      alert(error.message);
    });
};

// Fungsi Login
export const funcLoginEmail = (router, email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      if (user.emailVerified) {
        router.push('/');
      } else {
        alert('Verifikasi Email Terlebih Dahulu');
        signOut(auth)
          .then(() => {})
          .catch((error) => {
            alert(error.message);
          });
      }
    })
    .catch((error) => {
      alert(error.message);
    });
};

// Fungsi Log Out
export const funcLogOut = () => {
  signOut(auth)
    .then(() => {})
    .catch((error) => {
      alert(error.message);
    });
};

// Fungsi lupa password
export const funcResetPassword = (router, email) => {
  sendPasswordResetEmail(auth, email)
    .then(() => {
      alert('Cek Email Anda Untuk Merubah Password');
      router.push('/login');
    })
    .catch((error) => {
      alert(error.message);
    });
};
