import { signOut } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import { autz } from "./firebase.js";

const logout = document.querySelector('#closese');

logout.addEventListener('click', async () => {
    await signOut(autz); 
    console.log('usuario cerrar sesion');
    window.location = 'index.html'
})