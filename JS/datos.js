const cedula = document.querySelector('#tablita');
const novenos = document.querySelector('#segundobox');
const decimos = document.querySelector('#tercerabox');



export const configdatest = (data) => {
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
            const est = doc.data();
            const li = `
                    <tr>
                        <td>${doc.id}</td>
                        <td>${est.Bloque}</td>
                        <td>${est.Referencia }</td>
                        <td>${est.Código}</td>
                        <td>${est.Piso}</td>
                        <td>${est.Referencia }</td>
                    </tr>
                `
            html += li
        });
        cedula.innerHTML = html
    } else {
        cedula.innerHTML = '<p>No hay datos del estudiante</p>'
    }
}
