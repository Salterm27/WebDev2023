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
        function Add2Cart(item){
            let myCart = document.getElementById('cart');

            if (localStorage.getItem(item) != null ){
                alert('Ya estas anotado! Verifica Tus Cursos.');
            }
            else {
                //add2LocalStorage
                localStorage.setItem(item,'payload');

                //add2CartDisplay
                //create a new node
                let myNewItem = SimpleElementBuilder('li','cart-item','');
                    myNewItem.id = item;

                    //create the description
                    let itsChild = SimpleElementBuilder ('h4','cart-item-text',item);
                    myNewItem.appendChild(itsChild);
                    
                    // create the button for the cart remove
                    itsChild = SimpleElementBuilder('button','cart-item-remove','Desinscribirme');
                    //attatch the buttons event listener
                    itsChild.addEventListener('click', (e) => {RemoveFromCart(item)});
                    
                    myNewItem.appendChild(itsChild);
                    

                //insert the new node with its content into the cart

                myCart.appendChild(myNewItem);
                
                UpdateCart(localStorage);
            }
        }

        function SimpleElementBuilder(aType, aClass, anAttribute){
            let newElement = document.createElement(aType);
                if(aClass != ''){
                    newElement.className = aClass;
                }
                if(anAttribute != ''){
                    newElement.innerHTML = anAttribute;
                }                
            return newElement;
        }

        
        function UpdateCart(tempFiles){
            // If Empty, do nothing. If Has Something,  enable Cart
            if (tempFiles.length === 0){
                document.getElementById('MisCursos').className= 'navbar-link-disabled';
                document.getElementById('MisCursos').innerHTML = 'Mis Cursos (0)';


            }
            else{
                document.getElementById('MisCursos').className= 'navbar-link';
                document.getElementById('MisCursos').innerHTML= 'Mis Cursos ('+ tempFiles.length +')';

            }
        }
        //logs all elements in the cart
    function LogCart(tempFiles){
        let i;
        for(i=0; i<tempFiles.length;i++){
            console.log(tempFiles.key(i));

        }
    }
    
    // Removes a Line in a Table
    function RemoveFromCart (item){
            if (localStorage.getItem(item) === null ){
                alert('No estas anotado! Anotate desde el Home.');
            }
            else {
                //remove from LS
                localStorage.removeItem(item);
                
                //remove from Cart Display
                let myCartItem = document.getElementById(item);
                myCartItem.remove();

                //updateCart
                UpdateCart(localStorage);
            }
            

    }

    function flushCart(){
        
        while (localStorage.key(0)!=null){
            
            //console.log(localStorage.key(0));
            RemoveFromCart(localStorage.key(0));
            
        }
        
    }


    
