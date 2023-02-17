import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"
//Firestore
import { getDocs, collection, doc , setDoc } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js"

import { autz, db } from './firebase.js'
import { configdatest } from "./datos.js"
import './logout.js'

onAuthStateChanged(autz, async (user) => {
    if (user) {
        const querysnapshot = await getDocs(collection(db, '8VO'));
        configdatest(querysnapshot.docs);
    } else {
    }
})