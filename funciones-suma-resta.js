var modVecPrimero = ["<a href='#' id='modulo11' class='modulo'>M&oacute;dulo 1: Sumas y Restas</a>"];

/*función moduloPrimero, muestro el modVecPrimero que contiene al módulo 1, sumas y restas*/
function moduloPrimero() {
    $('#encabezado2').show('slow');
    $('#modulos').empty();
    $('#contenido-principal').hide('slow');

    for (var i = 0; i < modVecPrimero.length; i++) {
        $('#modulos').append(modVecPrimero[i]);
    }
    $('#modulo11').click(primeroMenu);
}

var dificultad = ['b13', 'Avanzado', 'b12', 'Intermedio', 'b11', 'Basico'];

/*funcion primeroMenu, cargo y muestro vector dificultad, básico, intermedio y avanzado */
function primeroMenu() {

    $('#contenido-principal').show();
    //$('#contenedor-nivel').show();
    $('#cuerpo-operaciones').hide();
    $('#conversiones').hide();
    // $('#encabezado').show('slow');
    //$('#contenido-principal').show('slow');

    var menuprimero = '';
    menuprimero += "<ul id='nivel'>";
    for (var i = 0; i < dificultad.length; i = i + 2) {
        menuprimero += "<li><a id='" + dificultad[i] + "' href='#' class='con-borde'>";
        menuprimero += dificultad[i + 1] + "</a></li>";
    }
    /*
    menuprimero+="<li><a id='b13' href='#'>Avanzado</a></li>";
    menuprimero+="<li><a id='b12' href='#' class='con-borde'>Intermedio</a></li>";
    menuprimero+="<li><a id='b11' href='#' class='con-borde'>Básico</a></li>";
    */
    menuprimero += "</ul>";

    $('#dificultades').html(menuprimero);
    $('#b13').removeClass();

    var menucrumbs = '';
    menucrumbs += "<p><a href='modulo-matematico-operaciones.html'>Inicio > </a>";
    menucrumbs += "<a href='#'>Primer Año</a> > <a href='#'>Sumas y Restas</a></p>";

    $('#breadcrumbs').html(menucrumbs);

    botones();

}

/*función botones, donde haciendo click en sus respectivos id llama a las funciones
 *básico, intermedio y avanzado*/
function botones() {

    $('#b11').click(basico);
    $('#b12').click(intermedio);
    $('#b13').click(avanzado);
}

var numeroEjercicios = 10;
var resSumasRestas = [];
var sumaoresta = 0;
var primerTermino = [];
var segundoTermino = [];
var signoSoR = [];

/*función calcB que crea número aleatorio hasta 2 dígitos y retorna numero*/
function calcB() {
    var numero = Math.floor(Math.random() * 100);
    return (numero);
}

/*función calcI que crea número aleatorio hasta 3 dígitos y retorna numero*/
function calcI() {
    var numero = Math.floor(Math.random() * 1000);
    return (numero);
}

/*función calcA que crea número aleatorio más de 4 dígitos y retorna numero*/
function calcA() {
    var numero = Math.floor(Math.random() * 100000);
    return (numero);
}

/*función sumaresta que crea var 1 o 2 aleatoriamente,
 *donde 1 será asignado como suma y 2 será asignado como resta*/
function sumaresta() {
    sumaoresta = Math.ceil(Math.random() * 2);
}

/*función imagenSoR, recibe x, donde x es 1 o 2. 
 *si x es 1 entonces retorna imagen del signo suma
 *si x es 2 entonces retorna imagen del signo resta*/
function imagenSoR(x) {
    var imagen = '';
    if (x == 1) {
        imagen = "<img src='img/signo-suma.png' width='40' height='40' alt='Signo de suma' />";
        return imagen;
    }
    if (x == 2) {
        imagen = "<img src='img/signo-resta.png' width='40' height='40' alt='Signo de resta' />";
        return imagen;
    }
}

/*función dinamicoB recibe indice i, llama a la función calcB 
 *crea los numero1 numero2, llama a la función sumaresta para crear signo
 *muestra sus respectivos numero terminos y signo dentro del html
 *para la resta, si el termino 1 es menor que el termino 2, creo
 *una tercera variable aux para cambiar los terminos.
 *Retorna resultado entre suma o resta de numero1 y numero2*/
function dinamicoB(i) {
    var numero1 = calcB();
    var numero2 = calcB();

    var resultado = 0;
    sumaresta();

    if (sumaoresta == 1) {
        $('#numero' + i + '1').html(numero1);
        $('#numero' + i + '2').html(numero2);
        resultado = numero1 + numero2;
        primerTermino[primerTermino.length] = numero1;
        segundoTermino[segundoTermino.length] = numero2;
        signoSoR[signoSoR.length] = '+';
        $('#signo' + i).html(imagenSoR(1));
        return (resultado);

    } else {
        if (numero1 < numero2) {
            var aux = 0;
            aux = numero1;
            numero1 = numero2;
            numero2 = aux;
        }

        $('#signo' + i).html(imagenSoR(2));
        $('#numero' + i + '1').html(numero1);
        $('#numero' + i + '2').html(numero2);
        resultado = numero1 - numero2;
        primerTermino[primerTermino.length] = numero1;
        segundoTermino[segundoTermino.length] = numero2;
        signoSoR[signoSoR.length] = '-';
        return (resultado);
    }
}

/*función dinamicoI recibe indice i, llama a la función calcI
 *crea los numero1 numero2, llama a la función sumaresta para crear signo
 *muestra sus respectivos numero terminos y signo dentro del html
 *para la resta, si el termino 1 es menor que el termino 2, creo
 *una tercera variable aux para cambiar los terminos.
 *Retorna resultado entre suma o resta de numero1 y numero2*/
function dinamicoI(i) {
    var numero1 = calcI();
    var numero2 = calcI();
    if (numero1 < 99) {
        numero1 = numero1 * 10;
    }
    if (numero2 < 99) {
        numero2 = numero2 * 10;
    }

    var resultado = 0;
    sumaresta();

    if (sumaoresta == 1) {
        $('#numero' + i + '1').html(numero1);
        $('#numero' + i + '2').html(numero2);
        resultado = numero1 + numero2;
        primerTermino[primerTermino.length] = numero1;
        segundoTermino[segundoTermino.length] = numero2;
        signoSoR[signoSoR.length] = '+';
        $('#signo' + i).html(imagenSoR(1));
        return (resultado);

    } else {
        if (numero1 < numero2) {
            var aux = 0;
            aux = numero1;
            numero1 = numero2;
            numero2 = aux;
        }

        $('#signo' + i).html(imagenSoR(2));
        $('#numero' + i + '1').html(numero1);
        $('#numero' + i + '2').html(numero2);
        resultado = numero1 - numero2;
        primerTermino[primerTermino.length] = numero1;
        segundoTermino[segundoTermino.length] = numero2;
        signoSoR[signoSoR.length] = '-';
        return (resultado);
    }

}

/*función dinamicoA recibe indice i, llama a la función calcA 
 *crea los numero1 numero2, llama a la función sumaresta para crear signo
 *muestra sus respectivos numero terminos y signo dentro del html
 *para la resta, si el termino 1 es menor que el termino 2, creo
 *una tercera variable aux para cambiar los terminos.
 *Retorna resultado entre suma o resta de numero1 y numero2*/
function dinamicoA(i) {
    var numero1 = calcA();
    var numero2 = calcA();


    var resultado = 0;
    sumaresta();

    if (sumaoresta == 1) {
        $('#numero' + i + '1').html(numero1);
        $('#numero' + i + '2').html(numero2);
        resultado = numero1 + numero2;
        primerTermino[primerTermino.length] = numero1;
        segundoTermino[segundoTermino.length] = numero2;
        signoSoR[signoSoR.length] = '+';
        $('#signo' + i).html(imagenSoR(1));
        return (resultado);

    } else {
        if (numero1 < numero2) {
            var aux = 0;
            aux = numero1;
            numero1 = numero2;
            numero2 = aux;
        }

        $('#signo' + i).html(imagenSoR(2));
        $('#numero' + i + '1').html(numero1);
        $('#numero' + i + '2').html(numero2);
        resultado = numero1 - numero2;
        primerTermino[primerTermino.length] = numero1;
        segundoTermino[segundoTermino.length] = numero2;
        signoSoR[signoSoR.length] = '-';
        return (resultado);
    }
}

/*función vaciarInput que al hacer click en el input para ingresar resultado
 * borra cualquier numero o letra ingresado previamente */
function vaciarInput() {
    $('.campo-resultado').val('');
}

/*función basico que muestra el cuerpo de operaciones, cada vez que apretamos
 *el boton basico vacía los vectores 
 *resSumasRestas primerTermino segundoTermino signoSoR,
 *llama a la función vaciarInput y dinamicoB y agrega los 10 resultados
 * al vector resSumasRestas y llama a la función botonCalc*/
function basico() {
    $('#cuerpo-operaciones').show('slow');

    resSumasRestas = [];
    primerTermino = [];
    segundoTermino = [];
    signoSoR = [];
    // var d=$('#d1');
    // d.empty();
    var i = 1;
    for (i; i <= numeroEjercicios; i++) {
        //   alert($('#input'+i).val());
        vaciarInput();
        $('#validacion' + i).empty();
        $('#validacion' + i).removeClass();
        //    $('#input'+i).val().empty();
        resSumasRestas[resSumasRestas.length] = dinamicoB(i);
    }
    botonCalc();
}


function intermedio() {
    $('#cuerpo-operaciones').show('slow');
    resSumasRestas = [];
    primerTermino = [];
    segundoTermino = [];
    signoSoR = [];
    // var d=$('#d1');
    // d.empty();
    var i = 1;
    for (i; i <= numeroEjercicios; i++) {
        //   alert($('#input'+i).val());
        vaciarInput();
        $('#validacion' + i).empty();
        $('#validacion' + i).removeClass();
        //    $('#input'+i).val().empty();
        resSumasRestas[resSumasRestas.length] = dinamicoI(i);
    }
    botonCalc();
}

function avanzado() {
    $('#cuerpo-operaciones').show('slow');
    resSumasRestas = [];
    primerTermino = [];
    segundoTermino = [];
    signoSoR = [];
    // var d=$('#d1');
    // d.empty();
    var i = 1;
    for (i; i <= numeroEjercicios; i++) {
        //   alert($('#input'+i).val());
        vaciarInput();
        $('#validacion' + i).empty();
        $('#validacion' + i).removeClass();
        //    $('#input'+i).val().empty();
        resSumasRestas[resSumasRestas.length] = dinamicoA(i);
    }
    botonCalc();
}

/*función botonCalc donde haciendo click en el boton terminé
 *calcula todas las 10 soluciones llamando a verificarRes.
 *haciendo click en el input resultado llama a la función eliminartexto*/
function botonCalc() {
    //  $('.ingresar').blur(letra);
    $('#termine').click(verificarRes);
    $('.campo-resultado').click(eliminartexto);
    //  $('#verificar'+i).click(verificar2);
    //return i
}

/*función eliminartexto que al hacer click en el input para ingresar resultado
 * borra cualquier numero o letra ingresado previamente */
function eliminartexto() {
    $(this).attr('value', '')
}

/*función verificarRes compara el resultado ingresado 
 *con las soluciones de cada operación, llamando a las funciones correcto
 *incorrecto vacio o letra. En caso incorrecto llama a función muestraAyuda 1 o 2*/
function verificarRes() {
    // alert(resSumasRestas);
    //   alert('calculando');
    var i = 1;
    for (i; i <= numeroEjercicios; i++) {
        var resIngresado = $('#input' + i).val();
        //alert(resIngresado);
        //alert($('#'))
        if ($.isNumeric(resIngresado)) {
            if (resIngresado == resSumasRestas[i - 1]) {
                correcto(i);
            } else {
                incorrecto(i);
                if (i < 6) {
                    $("#" + i + "incorrecto").click(muestraAyuda1);
                }
                if (i > 5) {
                    $("#" + i + "incorrecto").click(muestraAyuda2);
                }
            }
        } else {
            if (resIngresado == '') {
                vacio(i)
            } else {
                letra(i);
            }
        }
    }
}

/*función correcto recibe indice para saber cual de los 10 ej es, 
 *agrega la clase validacion-ok y muestra
 *el mensaje el resultado es correcto, muy bien*/
function correcto(indice) {
    $('#validacion' + indice).empty();
    $('#validacion' + indice).removeClass();
    $('#validacion' + indice).addClass('validacion-ok');

    $('#validacion' + indice).html("<div class='mensaje-validacion'>El resultado es correcto. ¡Muy bien!</div>");
}

/*función incorrecto, recibe indice, agrega la clase validacion-error
 *y muestra el mensaje podes intentar de nuevo.
 *Llama a la función ayudaID pasándole indice.*/
function incorrecto(indice) {
    $('#validacion' + indice).empty();
    $('#validacion' + indice).removeClass();
    $('#validacion' + indice).addClass('validacion-error');

    $('#validacion' + indice).html("<div class='mensaje-validacion'>Podés intentar de nuevo.\n\
                             <a " + ayudaID(indice) + " id='" + indice + "incorrecto' style='color: blue' title='Entrar a la ayuda'><u><b> click ayuda</b></u></a></div>");

}

/*función ayudaID que recibe indice y retorna href #ayuda1 que
 *te lleva la pantalla a la ayuda en el medio. 
 *#pie te lleva la pantalla para abajo de la página.*/
function ayudaID(indice) {

    if (indice < 6) {
        return "href='#ayuda1'";
    }
    if (indice > 5) {
        //return "href='#ayuda2'";
        return "href='#pie'";
    }
}

/*función vacio, recibe indice para saber cual ejercicios es de los 10
 * y remueve la clase agregando clase validacion que no muestra nada*/
function vacio(indice) {
    //  alert('esta vacio'+indice);
    // $('#r'+indice).empty();
    //   $('#vac'+indice).empty();
    //  $('#img'+indice).remove();
    //  return $('#v'+indice).after("<label id='vac"+indice+"' class='vacio"+indice+"'> Ingrese un Valor </label>");
    //alert("Ingrese un valor");  
    $('#validacion' + indice).empty();
    $('#validacion' + indice).removeClass();
    $('#validacion' + indice).addClass('validacion');

}

/*función letra, recibe indice, agrega clase validacion-error
 *y muestra mensaje Ingrese solamente números*/
function letra(indice) {
    //  alert('esto es letra'+indice);
    //  $('#vac'+indice).empty();
    //  alert("Debe ingresar un Número");   
    $('#validacion' + indice).empty();
    $('#validacion' + indice).removeClass();
    $('#validacion' + indice).addClass('validacion-error');

    $('#validacion' + indice).html("<div class='mensaje-validacion'>Ingrese solamente n&uacute;meros.</div>");

}

/*función muestraAyuda1, numeroEj calcula el indice de cada ejercicio,
 *muestra la ayuda en el medio de la página html.*/
function muestraAyuda1() {
    var numeroEj = parseFloat($(this).attr('id'));
    //alert($(this).attr());
    // alert(i);
    var negrita = '<b style="color: black">';
    $('#ayuda2').hide();
    $('#ayuda1').show();

    //  $('#ayuda1').html('<p id="colorfondo" style="position:relative; position:absolute; float: bottom; background-color: yellow; border: 1px solid #DFDFD0;"><input id="salir1" type="button" value="X" style="float: right; background-color: red;">Aca va la ayuda escrita<br>10+10=20<br>20-10=10</p>');

    //  $('#ayuda1').html('<p id="colorfondo" style=" background-color: white; border: 1px solid #DFDFD0;"><input id="salir1" type="button" value="X" title="Cerrar" style="float: right; background-color: #E1007A; color: #FFFFFF;">Aca va la ayuda escrita<br>10+10=20<br>20-10=10</p>');
    $('#ayuda1').html('<div><h3 style="color: blue;"><u>Ayuda</u></h3>\n\
                    <p id="recuadroResaltado" align="right" style="background-color: #dfdfff; width: 86%;color: blue;font-size: 14pt;">\n\
                    <input id="salir1" type="button" value="X" title="Cerrar" style="float: right; background-color: #E1007A; color: #FFFFFF;">\n\
                     <br>Acordate que para ' + ayudaSoR(numeroEj) + ' :' + negrita + ' \n\
                        <br><b >| ' + digitosF1(numeroEj) + '<br>' + signoSoR[numeroEj - 1] + '| ' + digitosF2(numeroEj) + '</b>\n\
                       <br>entonces<br>' + resuelto(primerTermino[numeroEj - 1], signoSoR[numeroEj - 1], segundoTermino[numeroEj - 1], numeroEj) + '\n\
                       </p></div>');

    //  $('#ayuda1').after('<input id="salir1" type="button" value="salir1">')
    $('#salir1').click(salirayuda);

}

/*función salirayuda se oculta al hacer click en el boton salir1 o salir2*/
function salirayuda() {
    $('#ayuda1').hide();
    $('#ayuda2').hide();
}

/*función muestraAyuda2, numeroEj calcula el indice de cada ejercicio,
 *muestra la ayuda en la parte de abajo de la página html.*/
function muestraAyuda2() {
    //alert($(this).attr('id'));
    var numeroEj = parseFloat($(this).attr('id'));
    //  alert(numeroEj);

    //alert(signoSoR[numeroEj-1]);

    var negrita = '<b style="color: black">';

    $('#ayuda1').hide();
    $('#ayuda2').show();

    //  $('#ayuda1').html('<p id="colorfondo" style="position:relative; position:absolute; float: bottom; background-color: yellow; border: 1px solid #DFDFD0;"><input id="salir1" type="button" value="X" style="float: right; background-color: red;">Aca va la ayuda escrita<br>10+10=20<br>20-10=10</p>');

    //  $('#ayuda2').html('<p id="colorfondo" style=" background-color: white; border: 1px solid #DFDFD0;"><input id="salir2" type="button" value="X" style="float: right; background-color: #E1007A; color: #FFFFFF;">Aca va la ayuda escrita<br>10+10=20<br>20-10=10</p>');
    $('#ayuda2').html('<div><h3 style="color: blue;"><u>Ayuda</u></h3>\n\
                    <p id="recuadroResaltado" align="right" style="background-color: #dfdfff; width: 86%;color: blue;font-size: 14pt;">\n\
                    <input id="salir2" href="#" type="button" value="X" title="Cerrar" style="float: right; background-color: #E1007A; color: #FFFFFF;">\n\
                     <br>Acordate que para ' + ayudaSoR(numeroEj) + ' :' + negrita + ' \n\
                       <br><b >| ' + digitosF1(numeroEj) + '<br>' + signoSoR[numeroEj - 1] + '| ' + digitosF2(numeroEj) + '</b>\n\
                       <br>entonces<br>' + resuelto(primerTermino[numeroEj - 1], signoSoR[numeroEj - 1], segundoTermino[numeroEj - 1], numeroEj) + '\n\
                       </p></div>');

    $('#salir2').click(salirayuda);
}

/*función digitosF1, recibe indice, muestra y retorna
 * digitoA mostrando los digitos del primer término (numero1)*/
function digitosF1(indice) {
    //alert(indice);
    var digito1 = '';
    digito1 += primerTermino[indice - 1];
    var digitoA = '';
    for (var i = 0; i < digito1.length; i++) {
        digitoA += digito1.charAt(i) + '   &nbsp;    | ';
    }

    // alert(digitoA);
    return digitoA;
}

/*función digitosF2, recibe indice, muestra y retorna
 * digitoB mostrando los digitos del segundo término (numero2)*/
function digitosF2(indice) {
    var digito2 = '';
    digito2 += segundoTermino[indice - 1];
    var digitoB = '';

    for (var i = 0; i < digito2.length; i++) {
        digitoB += digito2.charAt(i) + '   &nbsp;    | ';
    }
    //  alert(digitoB);
    return digitoB;
}

/*función ayudaSoR, recibe indice, retorna texto de la ayuda dependiendo
 *si es Suma o Resta*/
function ayudaSoR(indice) {
    if (signoSoR[indice - 1] == '+') {
        return "<b style='color: black'>sumar es mejor sumar</b> digito a digito<b style='color: black'>. Si la suma de los numeros individuales te da mas de 10 el resto del numero de la izquierda se los sumas al digito de la izquierda</b>";
    }
    if (signoSoR[indice - 1] == '-') {
        return "<b style='color: black'>restar es mejor restar</b> digito a digito<b style='color: black'> si el digito de arriba es menor que el de abajo, hay que restar 1 al digito de la izquierda y ponerlo al lado del digito de la derecha</b>";
    }
}

/*función resuelto, recibe primerDigito, signo, segundoDigito e indice
 *muestra dentro del div de ayuda los dígitos y calcula mostrando
 *el resultado de los dígitos de la derecha */
function resuelto(primerDigito, signo, segundoDigito, indice) {

    var digito1ult = '';
    digito1ult += primerTermino[indice - 1];
    var ultimo1 = digito1ult.length;
    //alert(digito1ult.charAt(ultimo1-1));
    var digitoAult = digito1ult.charAt(ultimo1 - 1);
    var digitoA2ult = digito1ult.charAt(ultimo1 - 2);

    var digito2ult = '';
    digito2ult += segundoTermino[indice - 1];
    var ultimo2 = digito2ult.length;
    //alert(digito2ult.charAt(ultimo2-1));   
    var digitoBult = digito2ult.charAt(ultimo2 - 1);
    var digitoB2ult = digito2ult.charAt(ultimo2 - 2);

    if (signo == '+') {
        var sumaA = parseInt(digitoAult) + parseInt(digitoBult);
        if (sumaA > 9) {
            sumaA = sumaA - 10;
            return x = '|' + digitoA2ult + ' | ' + digitoAult + '<br>' + signo + '|' + digitoB2ult + ' | &nbsp;' + digitoBult + '<br>igual a:<br>\n\
                       | 1 | &nbsp; ' + sumaA + '<br> | ' + digitoA2ult + ' | &nbsp;&nbsp;&nbsp;&nbsp;<br>\n\
                       | ' + digitoB2ult + ' | &nbsp;&nbsp;&nbsp;&nbsp;<br>igual a:<br>\n\
                       | .. |&nbsp; ' + sumaA + '<br>Donde | .. | es la suma de: 1+' + digitoA2ult + '+' + digitoB2ult;
            //    return x=digitoAult+'<br>'+signo+digitoBult+'<br>igual a:<br>|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;<br>'+sumaA;
        }
        return x = digitoAult + '<br>' + signo + digitoBult + '<br>igual a:<br>' + sumaA;
    }
    if (signo == '-') {
        var restaA = parseInt(digitoAult) - parseInt(digitoBult);
        if (restaA < 0) {
            restaA = 10 + parseInt(digitoAult) - parseInt(digitoBult);
            digitoA2ult = parseInt(digitoA2ult) - 1;
            //  digitoB2ult=parseInt(digitoB2ult);
            return x = '|' + digitoA2ult + ' | 1' + digitoAult + '<br>' + signo + '|' + digitoB2ult + ' | &nbsp;' + digitoBult + '<br>\n\
                       igual a:<br>| .. |&nbsp; ' + restaA + '<br>Donde | .. | es la resta de:' + digitoA2ult + '-' + digitoB2ult;
        }
        return x = digitoAult + '<br>' + signo + digitoBult + '<br>igual a:<br>' + restaA;
    }
}