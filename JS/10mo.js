import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"
//Firestore
import { getDocs, collection } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js"

import { autz, db } from './firebase.js'
import { decimosdatos } from "./datos10mo.js"
import './logout.js'

onAuthStateChanged(autz, async (user) => {
    if (user) {
        const querysnapshot = await getDocs(collection(db, '10MO'));
        decimosdatos(querysnapshot.docs);
    } else {
    }
});