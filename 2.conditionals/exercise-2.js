const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true},
    {name: 'Lucia Aranda', T1: true, T2: false, T3: true},
    {name: 'Abel Cabeza', T1: false, T2: true, T3: true},
    {name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
    {name: 'Raquel Benito', T1: true, T2: true, T3: true}
];

const Aprobados = (alumno) => {
    const trimestresAprobados = [alumno.T1, alumno.T2, alumno.T3].filter(aprobado => aprobado);
    return trimestresAprobados.length >= 2;
};

alumns.forEach(alumno => {
    alumno.isApproved = Aprobados(alumno);
});

console.log(alumns);
