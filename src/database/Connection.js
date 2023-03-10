// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// import { getFirestore } from 'firebase/firestore/lite';
import { getStorage, ref,uploadBytes,uploadBytesResumable,getDownloadURL } from "firebase/storage";
import { getAuth, sendSignInLinkToEmail } from "firebase/auth";


import { getFirestore, collection, doc, setDoc, addDoc, updateDoc, deleteDoc, getDoc, getDocs, where, query } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBCb8j9YEsmjvUxiX5xpDAxM2iUW7L_JIw",
    authDomain: "goodybasket-da7bd.firebaseapp.com",
    projectId: "goodybasket-da7bd",
    storageBucket: "goodybasket-da7bd.appspot.com",
    messagingSenderId: "428641901759",
    appId: "1:428641901759:web:c3c791ef6dee170515ba0a",
    measurementId: "G-45DV44660W"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

const storage = getStorage();

const auth = getAuth();

export async function Insert(collectionName, json) {
    try {
        const result  = await addDoc(collection(db, collectionName), json);
        return result;
    } catch (exception) {
        return false;
    }
}

export async function Update(collectionName, documentId, json) {
    try {
        await updateDoc(doc(db, collectionName, documentId), json)
        return true;
    }
    catch (exception) {
        return false;
    }
}

export async function DeleteById(collectionName, documentId) {
    try {
        await deleteDoc(doc(db, collectionName, documentId));
        return true;
    }
    catch (exception) {
        return false;
    }
}

export async function DeleteByCondition(collectionName, condition) {
    try {
        // var delete_items_list = await db.collection(collectionName).where(condition[0], condition[1], condition[2]);
        var delete_items_list = await getDocs(query(collection(db, collectionName), where(condition[0], condition[1], condition[2])));
        var querySnapshot = await delete_items_list.get();
        querySnapshot.forEach(function (doc) {
            doc.ref.delete();
        });
        return true;
    }
    catch (exception) {
        return false
    }
}

export async function getItemByID(collectionName, documentId) {
    try {

        const docData = await getDoc(doc(db, collectionName, documentId));


        return docData.data();
    }
    catch (exception) {
        return null;
    }
}

export async function getItemByFilter(collectionName, condition) {
    try {

        var docSnap = await getDocs(query(collection(db, collectionName), where(condition[0], condition[1], condition[2])));
        let users = [];
        docSnap.forEach((doc) => {
            users.push({ ...doc.data(), id: doc.id })
        });


        return users;
    }
    catch (exception) {
        return null;
    }
}



export async function getAllItems(collectionName) {
    try {
        

        var docSnap = await getDocs(collection(db, collectionName));
            let users = [];
            docSnap.forEach((doc)=> {
                users.push({ ...doc.data(), id:doc.id })
            });
                  
        
        return users;
    }
    catch (exception) {
        return null;
    }
}

export async function UploadFile(name, file) {
    
   
    const storageRef = ref(storage, 'file/' + name);
   

    const result = await uploadBytesResumable(storageRef, file);
    const url = await getDownloadURL(result.ref);
    return url;

}

export async function emailVerification(email){
    const actionCodeSettings = {
        // URL you want to redirect back to. The domain (www.example.com) for this
        // URL must be in the authorized domains list in the Firebase Console.
        url: 'https://www.example.com/finishSignUp?cartId=1234',
        // This must be true.
        handleCodeInApp: true,
        iOS: {
          bundleId: 'com.example.ios'
        },
        android: {
          packageName: 'com.example.android',
          installApp: true,
          minimumVersion: '12'
        },
        dynamicLinkDomain: 'example.page.link'
      };

      await sendSignInLinkToEmail(auth, email, actionCodeSettings)
}