import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"
//Firestore
import { getDocs, collection } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js"

import { autz, db } from './firebase.js'
import { configdoctut } from "./datosdocente.js"
import './logout.js'

onAuthStateChanged(autz, async (user) => {
    if (user) {
        const querysnapshot = await getDocs(collection(db, 'Docentes_6to "C"'));
        configdoctut(querysnapshot.docs);
    } else {
    }
});