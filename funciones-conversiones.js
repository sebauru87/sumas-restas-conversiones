var modVecQuinto = ["<a href='#' id='modulo51' class='modulo'>M&oacute;dulo 1: Conversiones</a>"];

/*función moduloQuinto, muestro el modVecQuinto que contiene al módulo 1, Conversiones*/
function moduloQuinto() {
    $('#encabezado2').show('slow');
    $('#modulos').empty();
    $('#contenido-principal').hide('slow');

    for (var i = 0; i < modVecQuinto.length; i++) {
        $('#modulos').append(modVecQuinto[i]);
    }
    $('#modulo51').click(quintoMenu);
}
var dificultad5 = ['b53', 'Avanzado', 'b52', 'Intermedio', 'b51', 'Basico'];
/*funcion quintoMenu, cargo y muestro vector dificultad, básico, intermedio y avanzado */
function quintoMenu() {

    $('#contenido-principal').show();
    //$('#contenedor-nivel').show();
    $('#cuerpo-operaciones').hide();

    $('#conversiones').hide();

    var menuquinto = '';
    menuquinto += "<ul id='nivel'>";

    for (var i = 0; i < dificultad5.length; i = i + 2) {
        menuquinto += "<li><a id='" + dificultad5[i] + "' href='#' class='con-borde'>";
        menuquinto += dificultad5[i + 1] + "</a></li>";
    }
    menuquinto += "</ul>";

    $('#dificultades').html(menuquinto);
    $('#b53').removeClass();

    var menucrumbs = '';
    menucrumbs += "<p><a href='modulo-matematico-operaciones.html'>Inicio > </a>";
    menucrumbs += "<a href='#'>Quinto Año</a> > <a href='#'>Conversiones</a></p>";

    $('#breadcrumbs').html(menucrumbs);
    //alert('hola');
    //   var conv="<div id='conv1'></div>";
    //   $('#contenido-principal').html(conv);
    //   $('#conv1').append("hola");
    // $('#conversiones').load('obl_base/aplicacion/conversor.html'); 
    iniEventos();
}


/* asigno evento click para los botones basico,
 *medio y avanzadoos */

function iniEventos() {
    //alert('hola');    
    $('#b51').click(basicos);
    $('#b52').click(intermedios);
    $('#b53').click(avanzados);
}

/* declaro un vector "unidades" con las unidades a utilizar, luego genero las
 * combinaciones posibles cargandolas por pares en otro vector "vecComb"  
 * en vecComb cada indice es otro vector con un par de unidades */

var unidades = ['mm', 'cm', 'dm', 'm', 'dam', 'hm', 'km'];
var vecComb = [];
var cantEjer = 10;
for (var i = 0; i < unidades.length; i++) {
    for (var x = 0; x < unidades.length; x++) {
        parUni = [unidades[i], unidades[x]];
        vecComb[vecComb.length] = parUni;
    }
}
var soluciones = [];
var primerUnidad = [];
var segundaUnidad = [];
var conversionesVec = [];
var terminos = [];

/* creo una funcion numAleatEnt, con parametros de entrada maximo y minimo,
 * retorna un entero entre max y min */

function numAleatEnt(max, min) {
    var aleatEnt = Math.floor(Math.random() * ((max + 1) - min)) + min;
    return aleatEnt;
}

/* creo una funcion numAleatDec que toma como parametro
 * un numero, el cual sera la cantidad de decimales que tenga el 
 * numero retornado, tambien puede retornar 0 o 1 */

function numAleatDec(num) {
    return Math.random().toFixed(num);
}

/*  creo funcion auxConv, toma un string que es la unidad (sin superindice)
 *  retorna el valor asignado a la unidad, con el cual se calcula el factor 
 *  de conversion*/

function auxConv(unidad) {
    var mult = 0;
    switch (unidad) {
        case 'mm':
            mult = 1;
            break;
        case 'cm':
            mult = 100;
            break;
        case 'dm':
            mult = 10000;
            break;
        case 'm':
            mult = 1000000;
            break;
        case 'dam':
            mult = 100000000;
            break;
        case 'hm':
            mult = 10000000000;
            break;
        case 'km':
            mult = 1000000000000;
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

function cargoUnidades(dto1, dto2) {
    var indComb = 0;
    var unidades = [];
    var valorUni1 = 0;
    var valorUni2 = 0;
    var factor = 0;
    factor = dto1;
    while (factor > dto2 || valorUni1 == valorUni2) {
        indComb = numAleatEnt((vecComb.length - 1), 0);
        unidades = vecComb[indComb];
        valorUni1 = auxConv(unidades[0]);
        valorUni2 = auxConv(unidades[1]);
        if (valorUni1 > valorUni2) {
            factor = (valorUni1 / valorUni2);
        } else {
            factor = valorUni2 / valorUni1;
        }
    }
    return unidades;
}

/* funcion que recibe un indice, el numero propuesto de cada ejerc. y las unidades
 * retorna el append para cargar el ejercicio a las funciones de ejercicios basico o no basico */


function ejercicio(nI, uniI, uniO, ind) {
    var divejs = '';
    divejs += '<div class="contenedor-operacion"><div class="operacion">';
    divejs += '<div id="dv' + ind + '" class="contenedor-terminos-operacion5">';
    divejs += '<spam class="primer-termino5" id="spn' + ind + '">' + nI + '</spam>';
    divejs += '<spam id="spui' + ind + '">' + uniI + '</spam><sup>2</sup> ';
    divejs += '<div id="numero512' + ind + '" class="segundo-termino">' + uniO + '<sup>2</sup></div></div>';
    divejs += '<div id="signo511' + ind + '" class="signo-operacion"><img src="img/conversiones.png" width="40" height="40" alt="Signo de suma" /></div>';
    divejs += '</div>';
    divejs += '<div class="barra-resultado"></div>';
    divejs += '<div class="resultado">';
    divejs += '<input id="tx' + ind + '" class="campo-resultado5" type="text" />';
    divejs += '</div>';
    divejs += '<div id="validacion511' + ind + '" class="validacion"></div></div>';



    //  divejs+='<spam class="signo-operacion" id="spuo'+ind+'">';
    //divejs+='<input id="bt'+ind+'" class="calcular" value="Calcular" type="button"/></div>';

    return $('#ejercicios').append(divejs);
}

/* funcion llamada por las funciones de ejercicios para inicializar eventos
 * eliminar texto de las cajas de texto, alertar si no se carga valor y llamar
 * a la funcion verificoRes para el calculo y vericacion de resultado*/

function cargoEventos() {
    $('.campo-resultado5').click(eliminarTxt);
    // $('.campo-resultado').blur(valorNoVacio);
    $('#termine5').click(verificoRes);
}

/*  funcion de ejercicios basicos, llama a la funcion cargoUnidades
 *  pasando como parametro la relacion aceptada max entre unidades y 
 *  un valor por encima para la primer condicion
 *  llama a las fuciones de numeros aleatorios para definir el numero
 *   a proponer. Llama a la funcion ejercicio y recibe el append y por ultimo
 *   carga los eventos dela funcion cargoEventos  */

function basicos() {
    primerUnidad = [];
    segundaUnidad = [];
    conversionesVec = [];
    terminos = [];

    $('#conversiones').show();
    $('#ejercicios').empty();
    var unidad = cargoUnidades(10001, 10000);
    var cantDec = 0;
    var numDec = 0;
    var numEnt = 0;
    numIn = 0;
    for (var i = 0; i < cantEjer; i++) {
        cantDec = numAleatEnt(1, 0);
        numDec = parseFloat(numAleatDec(cantDec));
        numEnt = parseFloat(numAleatEnt(99, 0));
        numIn = numEnt + numDec;
        ejercicio(numIn, unidad[0], unidad[1], i);

        //alert(unidad[0]);
        primerUnidad[primerUnidad.length] = unidad[0];
        segundaUnidad[segundaUnidad.length] = unidad[1];
        // alert(unidad[1]);
        //alert(numIn);
        terminos[terminos.length] = numIn;
    }
    cargoEventos();
}

/* funcion de ejercicios no basicos recibe parametros de las 
 * funciones de ejercicios medio y avanzado
 * evalua que las unidades recibidas no se repitan
 * llama a la funcion ejercicio y carga eventos */

function noBasico(vl1, vl2, vl3, vl4, vl5, vl6) {

    primerUnidad = [];
    segundaUnidad = [];
    conversionesVec = [];
    terminos = [];

    $('#conversiones').show();
    $('#ejercicios').empty();
    var auxV = 'si';
    var auxUni = [];

    for (var i = 0; i < cantEjer; i++) {
        unidad = cargoUnidades(vl1, vl2);
        for (x = 0; x < auxUni.length + 1; x++) {
            if (unidad == auxUni[x]) {
                auxV = 'no'
            }
        }
        if (auxV == 'si') {
            auxUni[auxUni.length] = unidad;
            cantDec = numAleatEnt(vl5, vl6);
            numDec = parseFloat(numAleatDec(cantDec));
            numEnt = parseFloat(numAleatEnt(vl3, vl4));
            numIn = numEnt + numDec;
            ejercicio(numIn, unidad[0], unidad[1], i);

            //    alert(unidad[0]);
            terminos[terminos.length] = numIn;
            primerUnidad[primerUnidad.length] = unidad[0];
            segundaUnidad[segundaUnidad.length] = unidad[1];
            //    alert(unidad[1]);
        } else {
            i = i - 1;
            auxV = 'si';
        }
    }


    cargoEventos();
}

/* funcion de ejercicios nivel medio
 * pasa parametros a la funcion noBasicos */

function intermedios() {
    noBasico(1000001, 1000000, 99, 0, 2, 0);
}

/*  funcion ejercicios nivel avanzado, idem anterior*/

function avanzados() {
    noBasico(10000000001, 10000000000, 999, 100, 3, 2);
}
/*  funcion con la que verifico no vacio y alerto */

function valorNoVacio() {
    if ($(this).val() == '') {
        alert('¡No ingresó el resultado!');
    }
}

/* funcion que retorna el after para resultado correcto */

function correcto1(indice) {
    $('#validacion511' + indice).empty();
    $('#validacion511' + indice).removeClass();
    $('#validacion511' + indice).addClass('validacion-ok');

    $('#validacion511' + indice).html("<div class='mensaje-validacion'>El resultado es correcto. ¡Muy bien!</div>");
    //return $('#bt'+dato).after('<label id="lb'+dato+'" class="bien">¡Correcto!</label>');
}

/* funcion que retorna el after para incorrecto */

function incorrecto1(indice) {
    $('#validacion511' + indice).empty();
    $('#validacion511' + indice).removeClass();
    $('#validacion511' + indice).addClass('validacion-error');

    $('#validacion511' + indice).html("<div class='mensaje-validacion'>Podés intentar de nuevo.<a href='#pie' id='" + indice + "incorrectoC' style='color: blue' title='Entrar a la ayuda'><u><b> click ayuda</b></u></a></div>");

    //return $('#bt'+dato).after('<label id="lb'+dato+'" class="mal">¡Incorrecto! <br><br><p id="p'+dato+'"> Para obtener ayuda haga <a style="color: blue" title="Entrar a la ayuda"><u><b> click aqui </b></u></a></p><br>');
}

function vacio1(indice) {
    $('#validacion511' + indice).empty();
    $('#validacion511' + indice).removeClass();
    $('#validacion511' + indice).addClass('validacion');
}

function letra1(indice) {
    $('#validacion511' + indice).empty();
    $('#validacion511' + indice).removeClass();
    $('#validacion511' + indice).addClass('validacion-error');
    $('#validacion511' + indice).html("<div class='mensaje-validacion'>Ingrese solamente números.</div>");
}
/*  funcion que extrae unidades y numer propuesto
 *  calcula resultado evalua teniendo en cuenta el error 
 *  de punto flotante y llama a las funciones correcto o incorrecto 
 *  si es incorrecto llama a mostrar ayuda 
 *  sino se ingresa resulta o es isNaN alerta */

function verificoRes() {
    soluciones = [];
    var i = 0;
    for (i; i < cantEjer; i++) {
        var idt = i;
        $('#lb' + idt).remove();
        uniIn = $('#spui' + idt).text();
        uniOutTempo = $('#numero512' + idt).text();

        uniOut = unidadSimple(uniOutTempo);
        // uniOut=parseFloat(uniOutTempo);
        // alert(uniOut);

        var numPro = parseFloat($('#spn' + idt).text());
        var vaUni1 = auxConv(uniIn);
        var vaUni2 = auxConv(uniOut);

        //alert(vaUni1);
        // alert(vaUni2);

        factConv = vaUni1 / vaUni2;
        //alert(factConv);
        conversionesVec[conversionesVec.length] = factConv;

        var result = numPro * factConv;
        var numIng = $('#' + 'tx' + idt).val();

        // alert(result);
        if ($.isNumeric(numIng)) {
            //       alert('hola');
            numIng = parseFloat(numIng);
            // if(numIng==result){
            if ((1 / numIng) * result < 1.0000000001 && (1 / numIng) * result > 0.9999999999) {
                correcto1(idt);
            } else {
                incorrecto1(idt);
                $("#" + idt + "incorrectoC").click(mostrarAyuda);
            }
        } else {
            if (numIng == '') {
                vacio1(idt)
            } else {
                letra1(idt);
            }
        }
        /*if(!isNaN(numIng)){
            numIng=parseFloat(numIng);
            if((1/numIng)*result<1.0000000001&&(1/numIng)*result>0.9999999999){
                    correcto1(idt);
                }else{
                    incorrecto1(idt);
                    $('#p'+idt).click(mostrarAyuda);
                }
             }else{
                    vacio1(idt);
                    //alert('¡No ingresó el resultado!');
                    }*/

        // soluciones[soluciones.length]=result;     
    }
}


function unidadSimple(x) {
    var uniOut = '';
    if (x.length == 2) {
        uniOut = x.charAt(0);
    }
    if (x.length == 3) {
        uniOut = x.charAt(0) + x.charAt(1);
    }
    if (x.length == 4) {
        uniOut = x.charAt(0) + x.charAt(1) + x.charAt(2);
    }
    return uniOut;
}


/*  elimino valor ingresado */

function eliminarTxt() {
    $(this).attr('value', '');
}

/* muestro ayuda si valor ingresado es incorrecto */

function mostrarAyuda() {

    var indice = parseFloat($(this).attr('id'));
    //alert(indice);

    //   alert(primerUnidad[indice]);
    //  alert(segundaUnidad[indice]);
    //  alert(conversionesVec[indice]);
    //alert(terminos[indice]);

    //alert(indice);
    //$(this).empty();
    var negrita = '<b style="color: black">';
    var supIndice = '<sup style="font-size: 9pt">2</sup></b>';

    //  var uniInicial;
    //  var uniFinal;
    //  var factor;

    //  uniInicial=uniIn
    //   uniFinal=uniOut
    //   factor=factConv
    // alert(uniInicial);
    //$(this).after('<div><h3
    $('#ayuda3').empty();
    $('#ayuda3').show();
    $('#ayuda3').html('<div><h3 style="color: blue;"><u>Conversión de unidades de superficie: </u></h3>\n\
                    <input id="salir5" type="button" value="X" title="Cerrar" style="float: right; background-color: #E1007A; color: #FFFFFF;">\n\
                   <p id="recuadroResaltado" style="background-color: #dfdfff; width: 100%;color: blue;font-size: 14pt;">\n\
                     Debes convertir ' + negrita + '  ' + terminos[indice] + '</b> de: ' + negrita + ' ' + primerUnidad[indice] + '' + supIndice + '\n\
                    a ' + negrita + ' ' + segundaUnidad[indice] + '' + supIndice + '.  Recuerda que: \n\
                    1 ' + negrita + ' ' + primerUnidad[indice] + '' + supIndice + ' es igual a: ' + conversionesVec[indice] + ' ' + negrita + ' ' + segundaUnidad[indice] + '' + supIndice + '. \n\
                    Debes multiplicar ' + negrita + '  ' + terminos[indice] + '</b> por: ' + negrita + ' ' + conversionesVec[indice] + '</p></div>');
    $('#salir5').click(salirayuda5);
}

function salirayuda5() {
    $('#ayuda51').hide();
    $('#ayuda52').hide();
    // alert('salir');
    $('#ayuda3').hide();

}