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
    let Onboarding = document.getElementById('OnboardingCourses');
    let Culture = document.getElementById('CultureCourses');
    for (i=0;i<misCursos.length;i++){
        let unCurso = misCursos[i];
        let nuevoDisplayCourse = createCourseDisplay(unCurso[0],unCurso[1],unCurso[2]);


        if (unCurso[0] === "Leadership Onboarding"){
            console.log('Curso de Onboarding detectado');
            Onboarding.appendChild(nuevoDisplayCourse);
        }
        else if (unCurso[0] === "Leadership Culture"){
            console.log('Curso de Cultura detectado');
            Culture.appendChild(nuevoDisplayCourse);

        }
        else{
            console.log('El curso no fue reconocido y fue salteado');
        }
    }

}

function createCourseDisplay(unTitulo, unaFecha, unHorario){
    let myNewItem = SimpleElementBuilder('button','banner-cta',unTitulo +' - '+ unaFecha +' - '+ unHorario + "Hr.");
    myNewItem.id=unTitulo +'.'+ unaFecha +'.'+ unHorario;
    myNewItem.setAttribute('Titulo',unTitulo);
    myNewItem.setAttribute('fecha',unaFecha);
    myNewItem.setAttribute('horario',unHorario);
    return myNewItem;
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