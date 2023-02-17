const tutdoc = document.querySelector('#datosgen')

export const configdoctut = (data) => {
    const tutores = document.querySelector('#tutor');
    tutores.addEventListener('click', async () => {
        if (data.length) {
            let html = `<tr>
                <th>Número de Cédula</th>
                <th>Nombre del Docente</th>
                <th>Curso Designado</th>
                <th>Número de Aula</th>
                <th>Número de estudiantes</th>
                <th>Asignatura Principal</th>
                <th>Horario de clases</th>
            </tr>`
            data.forEach(doc => {
                const tut = doc.data();
                const li = `
                    <tr>
                        <td><br>${tut.N_cedula}</td>
                        <td><br>${doc.id}</td>
                        <td><br>${tut.Curso_tut}</td>
                        <td><br>${tut.N_aula}</td>
                        <td><br>${tut.N_alumnos}</td>
                        <td><br>${tut.Asignatura}</td>
                        <td><a href="https://drive.google.com/file/d/1yEiOHKD3KfgEq0EZYzmJH4HdeetFT2lt/view?usp=sharing" target="_blank"><br>CLICK AQUÍ</a></td>
                    </tr>`
                html += li
            });
            tutdoc.innerHTML = html
        } else {
            tutdoc.innerHTML = '<p>No hay datos del estudiante</p>'
        }
    });
}