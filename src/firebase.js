import { ref, onUnmounted } from '@vue/runtime-core';
import firebase from "firebase/compat/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/compat/firestore'; 

const config = {
    apiKey: "AIzaSyAZmO_VzSZrgmavyjFvYAZuJcADR0DpuSg",
    authDomain: "expensedeck-90e32.firebaseapp.com",
    projectId: "expensedeck-90e32",
    storageBucket: "expensedeck-90e32.appspot.com",
    messagingSenderId: "488805239366",
    appId: "1:488805239366:web:238c309bd78297b6301847",
    measurementId: "G-3C1QWM179T"
  };

  const firebaseApp = firebase.initializeApp(config);

  // eslint-disable-next-line no-unused-vars
  const analytics = getAnalytics(firebaseApp);
  const db = firebase.firestore();
  const usersCollection = db.collection('users');

  export const createUser = user => {
    return usersCollection.add(user);
  };

  export const getUser = async id => {
    const user = usersCollection.doc(id).get();
    return user.exists ? user.data() : null;
  };

  export const updateUser = (id, user) => {
      return usersCollection.doc(id).update(user);
  };

  export const deleteUser = id => {
    return usersCollection.doc(id).delete();
  };

  export const useLoadUsers = () => {
    const users = ref([]);
    usersCollection.onSnapshot((snapshot) => {
        users.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    });
    onUnmounted(close);
    return users;
  };