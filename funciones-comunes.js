$(document).ready(eventos);

var vectorMenu = ['primerano', 'Primer A&ntilde;o', 'segundoano', 'Segundo A&ntilde;o', 'tercerano', 'Tercer A&ntilde;o', 'cuartoano', 'Cuarto A&ntilde;o', 'quintoano', 'Quinto A&ntilde;o', 'sextoano', 'Sexto A&ntilde;o'];

/* función eventos donde cargo vectorMenu para mostrar los Menus de Primero hasta Sexto Año*/
function eventos() {
    $('#encabezado2').hide();
    $('#contenido-principal').hide();
    var encabezado = '';
    var pie = '';
    var i = 0;
    for (i = vectorMenu.length - 1; i > 0; i = i - 2) {
        //alert(i);
        encabezado += "<li><a href='#' id='" + vectorMenu[i - 1] + "' class='con-borde'>";
        encabezado += vectorMenu[i] + "<img src='img/flecha-dropdown.png' width='10' height='12' alt='' class='flecha-dropdown' /></a></li>";

    }
    /*
    encabezado+="<li><a href='#' id='sextoano'>Sexto Ano<img src='img/flecha-dropdown.png' width='10' height='12' alt='' class='flecha-dropdown' /></a></li>";
    encabezado+="<li><a href='#' id='quintoano' class='con-borde'>Quinto Ano<img src='img/flecha-dropdown.png' width='10' height='12' alt='' class='flecha-dropdown' /></a></li>";
    encabezado+="<li><a href='#' id='cuartoano' class='con-borde'>Cuarto Ano<img src='img/flecha-dropdown.png' width='10' height='12' alt='' class='flecha-dropdown' /></a></li>";
    encabezado+="<li><a href='#' id='tercerano' class='con-borde'>Tercer Ano<img src='img/flecha-dropdown.png' width='10' height='12' alt='' class='flecha-dropdown' /></a></li>";
    encabezado+="<li><a href='#' id='segundoano' class='con-borde'>Segundo Ano<img src='img/flecha-dropdown.png' width='10' height='12' alt='' class='flecha-dropdown' /></a></li>";
    encabezado+="<li><a href='#' id='primerano' class='con-borde'>Primer Ano<img src='img/flecha-dropdown.png' width='10' height='12' alt='' class='flecha-dropdown' /></a></li>";
    */

    $('#nav').html(encabezado);
    $('#sextoano').removeClass();

    pie += "<ul>";
    for (i = 0; i < vectorMenu.length - 1; i = i + 2) {
        // alert(i);
        pie += "<li><a href='#' id='pie" + vectorMenu[i] + "'>";
        pie += vectorMenu[i + 1] + "</a></li>";
        if (i == 4) {
            pie += "</ul><ul>";
        }
    }
    /*
    pie+="<li><a href='#' id='primerano'>Primer Ano</a></li>";
    pie+="<li><a href='#' id='segundoano'>Segundo Ano</a></li>";
    pie+="<li><a href='#' id='tercerano'>Tercer Ano</a></li>";
    pie+="</ul>";
    pie+="<ul>";
    pie+="<li><a href='#' id='cuartoano'>Cuarto Ano</a></li>";
    pie+="<li><a href='#' id='quintoano'>Quinto Ano</a></li>";
    pie+="<li><a href='#' id='sextoano'>Sexto Ano</a></li>";
      */

    pie += "</ul>";

    $('#nav-pie').html(pie);
    menu();
}

/*función menu que asocia cada boton a su respectivo módulo Primer año o Quinto año*/
function menu() {
    $('#primerano,#pieprimerano').click(moduloPrimero);
    $('#segundoano,#piesegundoano').click(ocultar);
    $('#tercerano,#pietercerano').click(ocultar);
    $('#cuartoano,#piecuartoano').click(ocultar);
    $('#quintoano,#piequintoano').click(moduloQuinto);
    $('#sextoano,#piesextoano').click(ocultar);
}

/*función ocultar, oculta el contenedor principal, porque aún no se asoció nada a estos años*/
function ocultar() {
    $('#encabezado2').hide();
    $('#contenido-principal').fadeOut('slow');
}