let misCursos = [];

addCourse("Leadership Onboarding", "Nov 24", "10");
addCourse("Leadership Onboarding", "Nov 30", "10");
addCourse("Leadership Onboarding", "Dec 4", "10");
addCourse("Leadership Culture", "Nov 28", "10");
addCourse("Leadership Culture", "Nov 2", "10");
addCourse("Leadership Culture", "Dec 13", "10");
mountCourses();

function addCourse (unTitulo, unaFecha, unHorario){
    let elCurso = [];
    elCurso[0] = unTitulo;
    elCurso[1] = unaFecha;
    elCurso[2]= unHorario;
    misCursos[misCursos.length]=elCurso;
}

function mountCourses(){
    let i;
    for (i=0;i<misCursos.length;i++){
        let unCurso = misCursos[i];
        createCourseDisplay(unCurso[0],unCurso[1],unCurso[2]);
    }

}

function createCourseDisplay(unTitulo, unaFecha, unHorario){
    console.log(unTitulo + " el " + unaFecha + " a las " + unHorario + " hs.");
}

function SimpleElementBuilder(aType, aClass, anAttribute){
    //simplifies the creation of html elements
    let newElement = document.createElement(aType);
        if(aClass != ''){
            newElement.className = aClass;
        }
        if(anAttribute != ''){
            newElement.innerHTML = anAttribute;
        }                
    return newElement;
}