var posicionAvatarBiologia=0; // almacena la posicion del avatar de la ova para su animacion

/***********************************************************/
/***********************************************************/
/***********************************************************/
/**********************ANIMACIONES**************************/
/***********************************************************/
/***********************************************************/


var animacionAvatarBiologia=null; // almacena la animacion del avatar de biologia

/**
 * Inicia la animacion del avatar de la ova de division celular para el mensaje de bienvenida
 * 
 * 
 * @return {String} Nothing.
 */
function startAnimacionInicioBiologia() {  // use a one-off timer
    stopAnimacionInicioBiologia();
    animacionAvatarBiologia= setInterval(function(){
        moverAvatarBiologia();
    },200);
}

/**
 * Detiene la animacion del avatar de la ova de division celular para el mensaje de bienvenida
 * 
 * 
 * @return {String} Nothing.
 */
function stopAnimacionInicioBiologia() {
    clearTimeout(animacionAvatarBiologia);
}



/**
 * Cambia la animacion del avatar de biologia.
 *  
 * @return {String} Nothing.
 */
function moverAvatarBiologia(){    
    
    if(posicionAvatarBiologia>=limiteAvatar){
        posicionAvatarBiologia =0;
    }
    
    switch(posicionAvatarBiologia){
        case 0:
            document.getElementById('avatarBienvenidaCelula').src = "Vista/imagenes/universo/biologia/avatarBocaCerrada.png";            
            
            break;
        
        case 1:
            document.getElementById('avatarBienvenidaCelula').src = "Vista/imagenes/universo/biologia/avatarNube.png";
            break;  
        
        case 2:
            document.getElementById('avatarBienvenidaCelula').src = "Vista/imagenes/universo/biologia/avatarNube.png";            
            break;                             
    }           
    posicionAvatarBiologia++;            
}





/**
 * Muestra con efecto una determinada imagen oculta con extension png, a partir de su clase
 * 
 * @param {String} clase : Clase del elemento oculto
 * @return {String} Nothing.
 * @description para mas informacion visitar el siguiente enlace http://vagabundia.blogspot.com/2010/01/efectos-elementales-con-jquery.html
 */
function verEtapasMitosis(clase){       
    $('.'+clase).attr('src', 'Vista/imagenes/secuenciacion/divisionCelular/'+clase+'.png');    
    $('.'+clase).fadeIn();
//$('.'+clase).css('display', 'inline');    
}





/******************************************************/
/******************************************************/
/**************PREGUNTAS SELECCION*********************/
/******************************************************/
/******************************************************/



/**
 * Determina si la pregunta contestada es correcta o no
 * 
 * @param {int} pregunta : Numero de la pregunta
 * @return {String} Mensaje de si es correcta la respuesta o no.
 */
function calificarPreguntaCelulas(pregunta){
    
    switch(pregunta){
        case 1:
            if($("input[name='preguntaCelulas']:checked").val()==2){//respuesta correcta la B                
                mensajeGeneral('Muy bien. Ya sabes que los espermatozoides y el ovulo son células haploides. Descubre mucho más sobre la meiosis en este modulo.');                             
                correcto.playclip();
                avanzar('celulas');
            }else{                
                mensajeError("Incorrecto. En este modulo aprenderás que la meiosis asegura la producción de células haploides para permitir la reproducción sexual.");
                error.playclip();
            //avanzar('celulas');
            }
            
            break;
        
        case 2:
            if($("input[name='preguntaCelulas']:checked").val()==4){//respuesta correcta la D
                mensajeGeneral('Muy bien. Ya sabes que la división de células somáticas sirve para mantener nuestro organismo funcionando. Descubre mucho más sobre la mitosis en este modulo.');
                correcto.playclip();
                avanzar('celulas');
            }else{
                mensajeError('Incorrecto. En este modulo aprenderás que la mitosis es la división que utilizan casi todas de células del cuerpo.');
                error.playclip();
            //avanzar('celulas');
            }
            break;
        
        
        case 3:
            if($("input[name='preguntaCelulas']:checked").val()==3){//respuesta correcta la C
                mensajeGeneral('Muy bien. Reconoces que la recombinación genética es la responsable de que los rasgos varíen entre hermanos, ya que se produce totalmente por azar.');
                correcto.playclip();
                avanzar('celulas');
            }else{
                mensajeError('Incorrecto. Más adelante encontraras en este modulo la importancia de la recombinación genética para permitir la variación de los rasgos entre hermanos.');
                error.playclip();
            //avanzar('celulas');
            }
            break;
        
        
        case 4:
            if($("input[name='preguntaCelulas']:checked").val()==1){//respuesta correcta la A
                mensajeGeneral('¡Muy bien!');
                correcto.playclip();
                avanzar('celulas');
            }else{
                mensajeError(' ¡vuelve a intentarlo!');
                error.playclip();
            }
            break;
        
        
        case 5:
            if($("input[name='preguntaCelulas']:checked").val()==3){//respuesta correcta la C
                mensajeGeneral('¡Muy bien!');
                correcto.playclip();
                avanzar('celulas');
            }else{
                mensajeError(' ¡vuelve a intentarlo!');
                error.playclip();
            }
            break;
        
        case 6:
            if($("input[name='preguntaCelulas']:checked").val()==4){//respuesta correcta la D
                mensajeGeneral('¡Muy bien!');
                correcto.playclip();
                avanzar('celulas');
            }else{
                mensajeError(' ¡vuelve a intentarlo!');
                error.playclip();
            }
            break;
        
        case 7:
            if($("input[name='preguntaCelulas']:checked").val()==3){//respuesta correcta la C
                mensajeGeneral('¡Muy bien!');
                correcto.playclip();
                avanzar('celulas');
            }else{
                mensajeError(' ¡vuelve a intentarlo!');
                error.playclip();
            }
            break;
        
        
        
        case 8:
            if($("input[name='preguntaCelulas']:checked").val()==2){//respuesta correcta la B
                mensajeGeneral('¡Muy bien!');
                correcto.playclip();
                avanzar('celulas');
            }else{
                mensajeError(' ¡vuelve a intentarlo!');
                error.playclip();
            }
            break;
    }

}
















/**************************************/
/**************************************/
/***********VENTANAS INDEPENDIENTES****/
/**************************************/
/**************************************/


/**
 * Abre un fancybox en especifico
 * 
 * 
 * @return {String} Nothing.
 */
function abrirZoomMitosis(){
    $.fancybox({
        'showCloseButton': false,
        'transitionIn': 'fade',
        'hideOnOverlayClick':false, //bloquear click externo
        'scrolling': 'no',
        'href': '#divZoomMitosis',
        'onClosed': function () {            
        }
    });
}




function navegacionMenu(pagina,tema){        
    posicionSecuencia= parseInt(pagina);
    secuenciaOva(tema);    
} 