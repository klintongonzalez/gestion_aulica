const decimos = document.querySelector('#tablitadec')

export const decimosdatos = (data) => {
    if (data.length) {
        let html = `<tr>
            <th>Número de Cédula</th>
            <th>Bloque del aula</th>
            <th>Capacidad de estudiantes</th>
            <th>Código de Aula</th>
            <th>Piso</th>
            <th>Referencia</th>
        </tr>
        `
        data.forEach(doc => {
            const dec = doc.data();
            const li = `
                    <tr>
                        <td>${doc.id}</td>
                        <td>${dec.Bloque}</td>
                        <td>${dec.Capacidad}</td>
                        <td>${dec.Código}</td>
                        <td>${dec.Piso}</td>
                        <td>${dec.Referencia}</td>
                    </tr>
                `
            html += li
        });
        decimos.innerHTML = html
    } else {
        decimos.innerHTML = '<p>No hay datos del estudiante</p>'
    }
}