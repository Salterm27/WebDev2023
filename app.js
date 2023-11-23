    //Setup
    //OnloadOrchestration
    let tempFiles = window.localStorage;   
    let myCart; 
    mountCart();
    attatchEvents2Courses( document.getElementById('OnboardingCourses'));
    attatchEvents2Courses(document.getElementById('CultureCourses'));
    
    
    function Add2Cart(item, aTitle, aDate, aTime){
        // Read LocalStorage. If item is not there, add then Push to Cart. If item is there, dont add and alert user.
        let myCart = document.getElementById('cart');
        
        if (localStorage.getItem(item) != null ){
            alert('Ya estas anotado! Verifica Tus Cursos.');
        }
        else {
            let payload = JSON.stringify([aTitle,aDate,aTime]);
            //add to LocalStorage
            localStorage.setItem(item,payload);                           
            //add to cart display list 
            addCartDisplayItem(myCart,item, aTitle, aDate, aTime);
            //alert("Gracias por anotarte a " + item + ".");
        }
    }

    function addCartDisplayItem(myCart,item, Title, Time, Date){
        let myNewItem = SimpleElementBuilder('li','cart-item','');
        myNewItem.id = 'c'+item;
        
        //create the description
        let itsTextBox = SimpleElementBuilder ('div','cart-item-Body','');
        myNewItem.appendChild(itsTextBox);
        //create the title
        let itsTitle = SimpleElementBuilder ('h5','cart-item-text',Title);
        itsTextBox.appendChild(itsTitle);
        //create the title Description
        let itsDetails = SimpleElementBuilder ('p','cart-item-text',Time + ' - ' + Date);
        itsTextBox.appendChild(itsDetails);
        
        myNewItem.appendChild(itsTextBox);
        
        // create the button for the cart remove
        let itsChild = SimpleElementBuilder('button','cart-item-remove','Desinscribirme');
        
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
        let myCartItem = document.getElementById('c'+item);
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
        
        let max = localStorage.length;
        if (max > 0){
            for(i=0; i<max; i++ ){
                let myPayload = JSON.parse(localStorage.getItem(localStorage.key(i)));
                addCartDisplayItem(myCart,localStorage.key(i),myPayload[0],myPayload[1],myPayload[2]);
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
    
function attatchEvents2Courses(CourseList){
    let aChild = CourseList.firstElementChild ;
    while (aChild != null){
        let itsID = aChild.getAttribute('id');
        let itsTitle = aChild.getAttribute('Titulo');
        let itsDate = aChild.getAttribute('Fecha');
        let itsTime = aChild.getAttribute('Horario');
        aChild.addEventListener('click', (e) => {Add2Cart(itsID, itsTitle, itsDate, itsTime)});
        aChild=aChild.nextElementSibling;
    }
}