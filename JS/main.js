import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"
import { autz } from './firebase.js'
import './signines.js'
import './logout.js'

onAuthStateChanged(autz, async (user) => {
    console.log(user);
})
