    //Setup
    //TODO OnloadOrchestration
    let tempFiles = window.localStorage;   
    let myCart; 
    UpdateCart(tempFiles);
    
    //TODO populateCourses.
        // Read from JSON Config file and add the Banner CTA List. Attatch the events

    //Functions
    //TODO PackageItem
        //stringifies an items payload

        // Read LocalStorage. If item is not there, add then Push to Cart. If item is there, dont add and alert user.
        function Add2Cart(){
            console.log('button pressed');
            let i;
            let item = 'test';
            if (localStorage.getItem(item) != null ){
                alert('Ya estas anotado! Verifica Tus Cursos.');
            }
            else {
                console.log('Before Adding'+localStorage.length);
                localStorage.setItem(item,'payload');
                console.log('After Adding');
                UpdateCart(localStorage);
            }
        }
        
        function UpdateCart(tempFiles){
            // If Empty, do nothing. If Has Something,  enable Cart
            if (tempFiles.length === 0){
                console.log('Local Storage is Empty');
                document.getElementById('MisCursos').className= 'navbar-link-disabled';
                document.getElementById('MisCursos').innerHTML = 'Mis Cursos (0)';
            }
            else{
                console.log('Local Storage has something in it')
                document.getElementById('MisCursos').className= 'navbar-link';
                document.getElementById('MisCursos').innerHTML= 'Mis Cursos ('+ tempFiles.length +')';
                
            }
        }
    //TODO ShowCart
        //displays all elements in the cart
    function ShowCart(tempFiles){
        let i;
        for(i=0; i<tempFiles.length;i++){
            console.log(tempFiles.key(i));

        }
    }


    
