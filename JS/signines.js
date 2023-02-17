import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"
const singines = document.querySelector('#signines');
import { autz } from './firebase.js'
import { errores } from "./mensajeserror.js";


singines.addEventListener('submit', async (e)=> {
    e.preventDefault();
    const singinescor = document.querySelector('#usuario').value;
    const singinespas= document.querySelector('#password').value;

    console.log(singinescor, singinespas);

    try {
        const credenciales = await signInWithEmailAndPassword(autz, singinescor, singinespas);
        window.location = "estudiante.html";

    } catch (error) {

        if (error.code === 'auth/user-not-found') {
            errores("Correo incorrecto", "error");
        } else if (error.code === 'auth/wrong-password') {
            errores("Contraseña Incorrecta", "error")
        }
    }

});

