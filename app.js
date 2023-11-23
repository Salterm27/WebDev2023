    //Setup
    //TODO OnloadOrchestration
    let tempFiles = window.localStorage;   
    let myCart; 
    mountCart();
    
    //TODO populateCourses.
        // Read from JSON Config file and add the Banner CTA List. Attatch the events

    //Functions
    //TODO PackageItem
        //stringifies an items payload

    
    function Add2Cart(item){
        // Read LocalStorage. If item is not there, add then Push to Cart. If item is there, dont add and alert user.
        let myCart = document.getElementById('cart');

        if (localStorage.getItem(item) != null ){
            alert('Ya estas anotado! Verifica Tus Cursos.');
        }
        else {
            //add to LocalStorage
            localStorage.setItem(item,'payload');                           
            //add to cart display list 
            addCartDisplayItem(myCart,item);
            //alert("Gracias por anotarte a " + item + ".");
        }
    }

    function addCartDisplayItem(myCart,item){
        let myNewItem = SimpleElementBuilder('li','cart-item','');
        myNewItem.id = item;
        //create the description
        let itsChild = SimpleElementBuilder ('h5','cart-item-text',item);
        myNewItem.appendChild(itsChild);
        
        // create the button for the cart remove
        itsChild = SimpleElementBuilder('button','cart-item-remove','Desinscribirme');
        
        //attatch the buttons event listener
        itsChild.addEventListener('click', (e) => {RemoveFromCart(item)});
        myNewItem.appendChild(itsChild);
        
        //insert the new node with its content into the cart
        myCart.appendChild(myNewItem);
                
        UpdateCart();
    }


    function RemoveFromCart (item){
        // Removes an item from the cart
        if (localStorage.getItem(item) === null ){
            alert('No estas anotado! Anotate desde el Home.');
        }
        else {
        //remove from LS
        localStorage.removeItem(item);
                
        //remove from Cart Display
        removeCardDisplayItem(item);   
        }
    }

    function removeCardDisplayItem(item){
        //Remove from Cart Display List
        let myCartItem = document.getElementById(item);
        myCartItem.remove();
                
        //updateCart
        UpdateCart();
    }

    function flushCart(){
        //removes everything from the cart

        while (localStorage.key(0)!=null){
            RemoveFromCart(tempFiles.key(0));
        }
        alert("Te has retirado de todos tus cursos.")
        
    }
    function mountCart(){
        let i;
        let myCart = document.getElementById('cart');
        console.log(localStorage.length);
        let max = localStorage.length;
        if (max > 0){
            for(i=0; i<max; i++ ){
                addCartDisplayItem(myCart,localStorage.key(i));
            }
        }
        UpdateCart()

    }
    function UpdateCart(){
        // If Empty, do nothing. If Has Something,  enable Cart
        if (localStorage.length === 0){
            document.getElementById('MisCursos').className= 'navbar-link-disabled';
            document.getElementById('MisCursos').innerHTML = 'Mis Cursos (0)';

        }
        else{
            document.getElementById('MisCursos').className= 'navbar-link';
            document.getElementById('MisCursos').innerHTML= 'Mis Cursos ('+ localStorage.length +')';
        }
    }

    function LogCart(){
        //logs all elements in the cart
        let i;
        for(i=0; i<localStorage.length;i++){
            console.log(localStorage.key(i));
        }
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
