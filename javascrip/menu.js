document.addEventListener('DOMContentLoaded', init);

function init() {
  
    var a1 = document.createElement("a"); // CERRAR
    var a2 = document.createElement("a"); // INICIO
    var a3 = document.createElement("a"); // BOOKS ACTORES
    var a4 = document.createElement("a"); // RETRATOS
    var a5 = document.createElement("a"); // MODELOS
    var a6 = document.createElement("a"); // CELEBRITIES
    var a7 = document.createElement("a"); // #RETANDOADARIO
    var a8 = document.createElement("a"); // ENTRE TU Y YO
    var a9 = document.createElement("a"); // EQUIPO
    var a10 = document.createElement("a"); // PRIDE
    var a11 = document.createElement("a"); // SESIONES
    var a12 = document.createElement("a"); // RODAJES
    var a13 = document.createElement("a"); // CONTACTO
    var div1 =document.createElement("div"); // BLOQUE 1 ACTORES
    var div11 =document.createElement("div"); // BLOQUE BOOKS Y RETRATOS
    var div2 =document.createElement("div"); // BLOQUE 2 PROYECTOS
    var div21 =document.createElement("div"); // BLOQUE RETANDO, ENTRE TU Y YO + PRIDE
    var div3 =document.createElement("div"); // BLOQUE 3 MODELOS
    var div31 =document.createElement("div"); // BLOQUE BOOKS MODELOS Y CELEBRITIES
    var button1 = document.createElement("button"); //BOTON BLOQUE 1 ACTORES
    var button2 = document.createElement("button"); // BOTON BLOQUE 2 PROYECTOS
    var button3 = document.createElement("button"); // BOTON BLOQUE 3 MODELOS
    var nav;
    var logoInicio = document.createElement("img"); // imagen logo  
    logoInicio.id ="logoImg";
    var header =document.getElementsByTagName("header");
    header[0].id="logoHeader";
    var logoHeader = document.getElementById("logoHeader");  
    //logoInicio.style.width="30%";
    logoInicio.style.marginLeft="30px"
    
    // INICIA EL MENU Y SUS ELEMENTOS
    crearMenu();
    definicionElementos();
    enlaces();

    //PERSONALIZACION DE LOS ELEMENTOS EN FUNCION DE LA PAGINA MOSTRADA. A TRAVES DEL TITULO
    switch (document.title) {
        case "Dario | Inicio": 
            a2.className +=" w3-dark-gray";
            a2.href="#";
            break;
        case "Dario | Books":
            button1.style="background-color: #383838; color: white;"
            a3.className += " w3-dark-gray";
            div11.className=" w3-show";            
            a3.href="#";            
            break;
        case "Dario | Retratos":
            button1.style="background-color: #383838; color: white;"
            a4.className +=" w3-dark-gray";
            div11.className=" w3-show";
            a4.href="#";
            break;
        case "Dario | Rodajes":
            button1.style="background-color: #383838; color: white;"
            a12.className +=" w3-dark-gray";
            div11.className=" w3-show";
            a12.href="#";
            break;


        case "Dario | Modelos":
            button3.style="background-color: #383838; color: white;"
            div31.className=" w3-show";
            a5.className +=" w3-dark-gray";            
            a5.href="#";
            break;
    
        case "Dario | Celebrities":   
            button3.style="background-color: #383838; color: white;"  
            div31.className=" w3-show";
            a6.className +=" w3-dark-gray";
            a6.href="#";
            break;
        
        case "Dario | #RetandoaDario":
            button2.style="background-color: #383838; color: white;"
            a7.className +=" w3-dark-gray";
            div21.className=" w3-show";
            a7.href="#";
            break;    
        case "Dario | Entre Tú y Yo":
            button2.style="background-color: #383838; color: white;"
            a8.className +=" w3-dark-gray";
            div21.className=" w3-show";
            a8.href="#";
            break;
        case "Dario | Equipo":
            a9.className +=" w3-dark-gray";            
            a9.href="#";
            break;
        case "Dario | Pride":
            button2.style="background-color: #383838; color: white;"
            div21.className=" w3-show";
            a10.className +=" w3-dark-gray";            
            a10.href="#";
            break;                    
            
        case "Dario | Sesiones":            
            a11.className +=" w3-dark-gray";            
            a11.href="#";
            break;

        case "Dario | Contacto":            
            a13.className +=" w3-dark-gray";            
            a13.href="#";
            break;
            
        default:
            break;
    }

    //ENLACES DE TODAS LAS REFERENCIAS. 
    function enlaces() {

        switch (document.title) {
            case "Dario | Inicio":
                a2.href = "../index.html";
                a3.href = "paginas/menu actores.html";
                a4.href = "paginas/menu actoresRetratos.html";
                a5.href = "paginas/menu modelos.html";
                a6.href = "paginas/menu celebrities.html";
                a7.href = "paginas/menu retando.html";
                a8.href = "paginas/menu EntreTuyYo.html";
                a9.href = "paginas/menu equipo.html";
                a10.href ="paginas/menu pride.html";
                a11.href ="paginas/menu sesiones.html";
                a12.href ="paginas/menu rodaje.html";
                a13.href ="paginas/menu contacto.html";
                logoInicio.src="fotos/logoInicio/LogoAlargado.png";
                break;
        
            default:
                a2.href = "../index.html";
                a3.href = "menu actores.html";
                a4.href = "menu actoresRetratos.html";
                a5.href = "menu modelos.html";
                a6.href = "menu celebrities.html";
                a7.href = "menu retando.html";
                a8.href = "menu EntreTuyYo.html";
                a9.href = "menu equipo.html";
                a10.href ="menu pride.html";
                a11.href ="menu sesiones.html"; 
                a12.href ="menu rodaje.html";           
                a13.href ="menu contacto.html";
                logoInicio.src="../fotos/logoInicio/LogoAlargado.png";
                break;
        }
    
    
    }

    //CREACION DEL NAV DEL MENU
    function crearNav() {
        nav = document.createElement("nav");
        nav.id="mySidebar";
        nav.className="w3-sidebar w3-bar-block w3-animate-right w3-top w3-text-light-gray w3-large"
        document.body.appendChild(nav);        
    }

    // CREACION DE LOS ELEMENTOS MENU EN EL NAV
    function crearMenu() {
        logoHeader.appendChild(logoInicio);
        crearNav(); 

        nav.appendChild(a1); // CERRAR
        nav.appendChild(a2); // INICIO  

        nav.appendChild(div1); //  LISTA - BLOQUE ACTORES
        div1.appendChild(button1); //BOTON BLOQUE 1 ACTORES
        div1.appendChild(div11); // BLOQUE BOOK ACTORES Y RETRATOS ACTORES
        div11.appendChild(a3); // BOOK ACTORES
        div11.appendChild(a4); // RETRATOS ACTORES 
        div11.appendChild(a12); // RODAJES

        nav.appendChild(div3); // LISTA - BLOQUE MODELOS    
        div3.appendChild(button3); // BOTON BLOQUE 3 MODELOS
        div3.appendChild(div31); // BLOQUE BLOQUE BOOK MODELOS Y CELEBRITIES
        div31.appendChild(a5); // MODELOS
        div31.appendChild(a6); // CELEBRITIES

        
        nav.appendChild(div2); // LISTA -BLOQUE PROYECTOS 
        div2.appendChild(button2); // BOTON BLOQUE 2 PROYECTOS
        div2.appendChild(div21); // BLOQUE RETANDO, ENTRE TU Y YO + PRIDE
        div21.appendChild(a10); // PRIDE
        div21.appendChild(a7); // RETANDODARIO
        div21.appendChild(a8); // ENTRE TU Y YO
        

        nav.appendChild(a11); // SESIONES
        nav.appendChild(a9); // EQUIPO          
        nav.appendChild(a13); // CONTACTO
        

    }
    
    // DEFINICION DE CADA ELEMENTO CON SUS ATRIBUTOS 
    function definicionElementos() {
        a1.className="w3-bar-item w3-button w3-center w3-padding-32";
        a1.id="close";
        a1.innerHTML="CERRAR";
        a1.href="#";

        a2.className="w3-bar-item w3-button w3-center w3-padding-16";
        a2.id="inicio";
        a2.innerHTML="INICIO";
        a2.href="#";

        div1.className="w3-dropdown-click";
        div2.className="w3-dropdown-click";
        div3.className="w3-dropdown-click";

        button1.className="w3-button w3-center";
        button1.id="retratos";  
        button1.innerHTML="ACTORES";

        div11.className="w3-dropdown-content w3-bar-block w3-card w3-animate-left";
        div11.id="demoDropRetratos"; // ver javascript.js y intro.js
        
        a3.className="w3-bar-item w3-button w3-right-align";        
        a3.innerHTML="BOOKS";
        
        a4.className="w3-bar-item w3-button w3-right-align";        
        a4.innerHTML="RETRATOS";        
        
        a5.id="modelos"; 
        a5.className="w3-bar-item w3-button w3-right-align";
        a5.innerHTML="BOOK";        

        a6.innerHTML="CELEBRITIES";
        a6.id="celebrities";
        a6.className= "w3-bar-item w3-button w3-right-align";
        
        button2.className="w3-button w3-center";
        button2.id="proyectos";
        button2.innerHTML="PROYECTOS";

        button3.className="w3-button w3-center";
        button3.id="modelo";
        button3.innerHTML="MODELOS";

        div21.id ="demoDrop"; // ver javascript.js y intro.js
        div21.className="w3-dropdown-content w3-bar-block w3-card w3-animate-left";

        div31.id ="demoDrop1"; // ver javascript.js y intro.js
        div31.className="w3-dropdown-content w3-bar-block w3-card w3-animate-left";

        a7.innerHTML="#RETANDOADARIO";
        a7.className= "w3-bar-item w3-button w3-right-align";

        a8.innerHTML="ENTRE TÚ Y YO";        
        a8.className= "w3-bar-item w3-button w3-right-align";

        a9.innerHTML="EQUIPO";        
        a9.className="w3-bar-item w3-button w3-center w3-padding-16";

        a10.innerHTML="PRIDE";        
        a10.className="w3-bar-item w3-button w3-right-align";;

        a11.innerHTML="SESIONES";        
        a11.className="w3-bar-item w3-button w3-center w3-padding-16";

        a12.className="w3-bar-item w3-button w3-right-align";        
        a12.innerHTML="RODAJES";

        a13.className="w3-bar-item w3-button w3-center w3-padding-16";
        a13.innerHTML="CONTACTO";

        
    }



};