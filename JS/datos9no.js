const novenos = document.querySelector('#tablitanov')

export const configdoctut = (data) => {
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
            const nov = doc.data();
            const li = `
                    <tr>
                        <td>${doc.id}</td>
                        <td>${nov.Bloque}</td>
                        <td>${nov.Capacidad}</td>
                        <td>${nov.Código}</td>
                        <td>${nov.Piso}</td>
                        <td>${nov.Referencia}</td>
                    </tr>
                `
            html += li
        });
        novenos.innerHTML = html
    } else {
        novenos.innerHTML = '<p>No hay datos del estudiante</p>'
    }
}