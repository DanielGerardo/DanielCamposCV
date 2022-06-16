document.addEventListener('DOMContentLoaded',() => {
const imgLightBox = document.querySelectorAll('.materialboxed');
M.Materialbox.init(imgLightBox,{
 inDuration: 500, outDuration: 500
});
});
let proyectos = document.querySelectorAll("#proyectos");
let contacto = document.querySelectorAll("#contacto");
let informacion = document.querySelectorAll(".informacion");
let tecnologias = document.querySelectorAll("#tecnologias");

let btnProyectos = document.getElementById("btnProyectos");
let btnContacto = document.getElementById("btnContacto");
let btnInicio = document.getElementById("btnInicio");
let btnTecnologias = document.getElementById("btnTecnologias");

let barraSass = document.getElementById('Sass');
let barraJava = document.getElementById('java');
let barraSQLServer = document.getElementById('SQLServer');
let barraMysql = document.getElementById('MySQL');
let barraJs = document.getElementById('Js');
let barraPhp = document.getElementById('php');

let topProyecto = document.getElementById('pro-header');


function mostrarProyectos(){
    let scrollTop = document.documentElement.scrollTop;
    for(var i=0; i <proyectos.length;i++){
        let alturaProyectos = proyectos[i].offsetTop;
        if(alturaProyectos - 150< scrollTop){
            proyectos[i].style.opacity = 1;
            proyectos[i].style.animation = 'mostarArriba 2s';
            btnProyectos.style.borderBottom = '2px solid rgb(0, 89, 255)';
        }else{
            proyectos[i].style.opacity = 0;
            btnProyectos.style.borderBottom = 'none';
            proyectos[i].style.animation = 'none';
        }
        
    }
    for(var i=0; i <tecnologias.length;i++){
        let alturaTecnologias = tecnologias[i].offsetTop;
        if(alturaTecnologias - 200<= scrollTop&&alturaTecnologias +400> scrollTop){
            tecnologias[i].style.opacity = 1;
            tecnologias[i].style.animation = 'mostarArriba 2s';
            btnTecnologias.style.borderBottom = '2px solid rgb(0, 89, 255)';
            
            barraSass.style.animation = 'mostarDerechaJs 3s';
            barraJava.style.animation = 'mostarDerecha 3s';
            barraSQLServer.style.animation = 'mostarDerecha 3s';
            barraMysql.style.animation = 'mostarDerecha 3s';
            barraJs.style.animation = 'mostarDerechaJs 3s';
            barraPhp.style.animation = 'mostarDerechaJs 3s';
        }else{
            tecnologias[i].style.opacity = 0;
            btnTecnologias.style.borderBottom = 'none';
            tecnologias[i].style.animation = 'none';
            barraSass.style.animation = 'none';
            barraJava.style.animation = 'none';
            barraSQLServer.style.animation = 'none';
            barraMysql.style.animation = 'none';
            barraJs.style.animation = 'none';
            barraPhp.style.animation = 'none';
        }
        
    }
    for(var i=0;i<contacto.length;i++){
        let alturaContacto = contacto[i].offsetTop;
        if(alturaContacto - 500 < scrollTop){
          btnContacto.style.borderBottom = '2px solid rgb(0, 89, 255)';
          
        }else{
           btnContacto.style.borderBottom = 'none';
        }
    }
    for(var i=0;i<informacion.length;i++){
        let alturaInformacion = informacion[i].offsetTop;
        if(alturaInformacion <= scrollTop&&alturaInformacion + 500 >scrollTop){
           btnInicio.style.borderBottom = '2px solid rgb(0, 89, 255)';
           informacion[i].style.opacity = 1;
           informacion[i].style.animation = "mostarArriba 1s";
        }else{
           btnInicio.style.borderBottom = 'none';
           informacion[i].style.opacity = 0;
           informacion[i].style.animation = "none";
        }
    }
}
window.addEventListener('scroll',mostrarProyectos);

ScrollReveal().reveal('#proyectos',{delay: 600});
ScrollReveal().reveal('#contacto',{delay: 700});
ScrollReveal().reveal('.pro-gym',{delay: 800});
ScrollReveal().reveal('.pro-appgym',{delay: 1000});

