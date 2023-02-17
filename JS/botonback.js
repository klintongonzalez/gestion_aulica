const botones = document.querySelector('#primerbox');
const botonback = document.querySelector('#botonback');
botonback.addEventListener('click', back)

function back() {
    let buttones = `
        <button id="octa" class="btn-1" type="submit">Octavo "A"</button>
        <button id="octb" class="btn-2" type="submit">Octavo "B"</button>
        <button id="octc" class="btn-3" type="submit">Octavo "C"</button>
        <button id="octd" class="btn-4" type="submit">Octavo "D"</button>
    `
    botones.innerHTML = buttones;
}