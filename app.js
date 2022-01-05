/* -------------- slider entre page -------------- */

/* 1er deplacement*/
var btndroite = document.querySelector('#droite')  
var page = document.querySelector('#content')           
var dirdroite = function () {                                      
        page.classList.add ('transform')          
}
btndroite.addEventListener('click', dirdroite)        

/* 2eme deplacement*/
var btngauche = document.querySelector('#gauche')       
var dirgauche = function () {                                        
        page.classList.remove ('transform')             
}
btngauche.addEventListener('click', dirgauche)             