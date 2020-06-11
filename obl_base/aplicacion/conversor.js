/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

//$(document).ready(iniEventos);  //inicializo jQuery

/* asigno evento click para los botones basico,
 *medio y avanzadoos */

function iniEventos()
{          
$('#b1').click(basicos);
$('#b2').click(intermedios);
$('#b3').click(avanzados);
}

/* declaro un vector "unidades" con las unidades a utilizar, luego genero las
 * combinaciones posibles cargandolas por pares en otro vector "vecComb"  
 * en vecComb cada indice es otro vector con un par de unidades */

var unidades=['mm','cm','dm','m','dam','hm','km'];
var vecComb=[];
var cantEjer=10;
for(var i=0;i<unidades.length;i++){
    for(var x=0;x<unidades.length;x++){
        parUni=[unidades[i],unidades[x]];
        vecComb[vecComb.length]=parUni;
    }
}

/* creo una funcion numAleatEnt, con parametros de entrada maximo y minimo,
 * retorna un entero entre max y min */

function numAleatEnt(max,min){
   var aleatEnt=Math.floor(Math.random()*((max+1)-min))+min;
   return aleatEnt;
}

/* creo una funcion numAleatDec que toma como parametro
 * un numero, el cual sera la cantidad de decimales que tenga el 
 * numero retornado, tambien puede retornar 0 o 1 */

function numAleatDec(num){
    return Math.random().toFixed(num);
    }

/*  creo funcion auxConv, toma un string que es la unidad (sin superindice)
 *  retorna el valor asignado a la unidad, con el cual se calcula el factor 
 *  de conversion*/

function auxConv(unidad){
    var mult=0;
	switch(unidad){
        case 'mm':
                  mult=1;
                  break;
        case 'cm':
                  mult=100;
                  break;
        case 'dm':
                  mult=10000;
                  break;
        case 'm':
                  mult=1000000;
                  break;
        case 'dam':
                  mult=100000000;
                  break;
        case 'hm' :
                  mult=10000000000;
                  break;
        case 'km':
                  mult=1000000000000;
                  break;
    }
    return mult;
}

/* creo funcion cargoUnidades, recibe como parametros dos numeros
 * con los cuales se evalua la relacion entre las unidades
 * la funcion llama a la funcion numAleatEnt, le pasa como maximo
 * el largo del vector vecComb -1 y minimo 0.
 * se utiliza para extraer una unidad aleatoria del vecComb
 * retorna la unidad si la relacion es menor o igual a dto2
 * y si el par de unidades extraidas no se repite */

function cargoUnidades(dto1,dto2){
    var indComb=0;
    var unidades=[];
    var valorUni1=0;
    var valorUni2=0;
    var factor=0;
    factor=dto1;
    while(factor>dto2||valorUni1==valorUni2){
            indComb=numAleatEnt((vecComb.length-1),0);
            unidades=vecComb[indComb];
            valorUni1=auxConv(unidades[0]);
            valorUni2=auxConv(unidades[1]);
            if(valorUni1>valorUni2){
                factor=(valorUni1/valorUni2);
                }else{
                    factor=valorUni2/valorUni1;
                    }
        }
     return unidades;    
}

/* funcion que recibe un indice, el numero propuesto de cada ejerc. y las unidades
 * retorna el append para cargar el ejercicio a las funciones de ejercicios basico o no basico */
    

function ejercicio(nI,uniI,uniO,ind){
    return $('#ejercicios').append('<div id="dv'+ind+'"> <spam id="spn'+ind+'">'+nI+'</spam> <spam id="spui'+ind+'">'+uniI+'</spam><sup>2</sup>  son   <input id="tx'+ind+'" class="valor" type="text" value="Ingrese resultado"/> <spam id="spuo'+ind+'">'+uniO+'</spam><sup>2</sup> <input id="bt'+ind+'" class="calcular" value="Calcular" type="button"/></div>');
}

/* funcion llamada por las funciones de ejercicios para inicializar eventos
 * eliminar texto de las cajas de texto, alertar si no se carga valor y llamar
 * a la funcion verificoRes para el calculo y vericacion de resultado*/

function cargoEventos(){
    $('.valor').click(eliminarTxt);
    $('.valor').blur(valorNoVacio);
    $('.calcular').click(verificoRes);
}

/*  funcion de ejercicios basicos, llama a la funcion cargoUnidades
 *  pasando como parametro la relacion aceptada max entre unidades y 
 *  un valor por encima para la primer condicion
 *  llama a las fuciones de numeros aleatorios para definir el numero
 *   a proponer. Llama a la funcion ejercicio y recibe el append y por ultimo
 *   carga los eventos dela funcion cargoEventos  */

function basicos(){
    $('#ejercicios').empty();
    var unidad=cargoUnidades(10001,10000);
    var cantDec=0;
    var numDec=0;
    var numEnt=0;
    numIn=0;
    for(var i=0;i<cantEjer;i++){
        cantDec=numAleatEnt(1,0);
        numDec=parseFloat(numAleatDec(cantDec));
        numEnt=parseFloat(numAleatEnt(99,0));
        numIn=numEnt+numDec;
        ejercicio(numIn,unidad[0],unidad[1],i);
    }
    cargoEventos();
}

/* funcion de ejercicios no basicos recibe parametros de las 
 * funciones de ejercicios medio y avanzado
 * evalua que las unidades recibidas no se repitan
 * llama a la funcion ejercicio y carga eventos */

function noBasico(vl1,vl2,vl3,vl4,vl5,vl6){
    $('#ejercicios').empty();
    var auxV='si';
    var auxUni=[];
    
    for(var i=0;i<cantEjer;i++){
        unidad=cargoUnidades(vl1,vl2);
        for(x=0;x<auxUni.length+1;x++){
            if(unidad==auxUni[x]){
                auxV='no'
            }
        }
        if(auxV=='si'){
            auxUni[auxUni.length]=unidad;
            cantDec=numAleatEnt(vl5,vl6);
            numDec=parseFloat(numAleatDec(cantDec));
            numEnt=parseFloat(numAleatEnt(vl3,vl4));
            numIn=numEnt+numDec;
            ejercicio(numIn,unidad[0],unidad[1],i);
            }else{i=i-1;
                  auxV='si';
              }
              }
    
    cargoEventos();
 }    

/* funcion de ejercicios nivel medio
 * pasa parametros a la funcion noBasicos */

function intermedios(){
    noBasico(1000001,1000000,99,0,2,0);
    }

/*  funcion ejercicios nivel avanzado, idem anterior*/

function avanzados(){
    noBasico(10000000001,10000000000,999,100,3,2);
    }
/*  funcion con la que verifico no vacio y alerto */

function valorNoVacio(){
    if($(this).val()==''){
        alert('¡No ingresó el resultado!');
    }
}

/* funcion que retorna el after para resultado correcto */

function correcto1(dato){
    return $('#bt'+dato).after('<label id="lb'+dato+'" class="bien">¡Correcto!</label>');
}

/* funcion que retorna el after para incorrecto */

function incorrecto1(dato){
    return $('#bt'+dato).after('<label id="lb'+dato+'" class="mal">¡Incorrecto! <br><br><p id="p'+dato+'"> Para obtener ayuda haga <a style="color: blue" title="Entrar a la ayuda"><u><b> click aqui </b></u></a></p><br>');
}

/*  funcion que extrae unidades y numer propuesto
 *  calcula resultado evalua teniendo en cuenta el error 
 *  de punto flotante y llama a las funciones correcto o incorrecto 
 *  si es incorrecto llama a mostrar ayuda 
 *  sino se ingresa resulta o es isNaN alerta */

function verificoRes(){
    var idt=$(this).attr('id').charAt(2);
    $('#lb'+idt).remove();
    uniIn=$('#spui'+idt).text();
    uniOut=$('#spuo'+idt).text();
    var numPro=parseFloat($('#spn'+idt).text());
    var vaUni1=auxConv(uniIn);
    var vaUni2=auxConv(uniOut);
    factConv=vaUni1/vaUni2;
    var result=numPro*factConv;
    var numIng=$('#'+'tx'+idt).val();
    if(!isNaN(numIng)){
        numIng=parseFloat(numIng);
        if((1/numIng)*result<1.0000000001&&(1/numIng)*result>0.9999999999){
                correcto1(idt);
            }else{
                incorrecto1(idt);
                $('#p'+idt).click(mostrarAyuda);
            }
         }else{
                alert('¡No ingresó el resultado!');
                }
      }

/*  elimino valor ingresado */

function eliminarTxt(){
    $(this).attr('value','');
}

/* muestro ayuda si valor ingresado es incorrecto */

function mostrarAyuda(){
    $(this).empty();
    var negrita='<b style="color: black">';
    var supIndice='<sup style="font-size: 9pt">2</sup></b>';
    var uniInicial;
    var uniFinal;
    var factor;
    uniInicial=uniIn
    uniFinal=uniOut
    factor=factConv
   
$(this).after('<div><h3 style="color: blue;"><u>Conversión de unidades de superficie: </u></h3>\n\
                   <p id="recuadroResaltado" style="background-color: #F8F8FF; width: 35%;color: blue;font-size: 14pt;">\n\
                    Debes convertir el número propuesto de: '+negrita+' '+uniInicial+''+supIndice+'\n\
                    a '+negrita+' '+uniFinal+''+supIndice+' <br><br> Recuerda que: <br>\n\
                    1 '+negrita+' '+uniInicial+''+supIndice+' es igual a: '+factor+' '+negrita+' '+uniFinal+''+supIndice+' \n\
                    <br><br>Debes multiplicar el número propuesto por: '+factor+'<br></p></div>');
}
