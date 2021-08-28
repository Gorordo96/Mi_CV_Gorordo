
//______________________________________________________________________________
//Funcion para generar un accordeon dinamico.
function accordeon (idelement,incremento_size) {

//Datos de la seccion Data
  let seccionStyle = window.getComputedStyle(document.getElementById('Data'));
  let seccionStyleWidth = parseFloat(seccionStyle.getPropertyValue('height'));

//Datos de la seccion Data_Formacion-inf
  let elementStyle = window.getComputedStyle(idelement);
  let elementStyleWidth = parseFloat(elementStyle.getPropertyValue('height'));

// Datos del body
  let bodyStyle = window.getComputedStyle(document.getElementById('pag'));
  let bodyStyleWidth = parseFloat(bodyStyle.getPropertyValue('height'));
// El elemento esta desactivado, lo activamos
  if (elementStyleWidth == 0 && (dimension_seccion.includes(seccionStyleWidth))) {
// Modificamos los width de los elementos involucrados
  elementStyleWidth=elementStyleWidth + incremento_size;
  seccionStyleWidth=seccionStyleWidth + incremento_size;
  bodyStyleWidth=bodyStyleWidth + incremento_size;
//Comenzamos las transiciones.
  document.getElementById('pag').style.setProperty("height",(`${bodyStyleWidth}`+"px"));
  document.getElementById('Data').style.setProperty("height",(`${seccionStyleWidth}`+"px"));
  idelement.style.setProperty("height",(`${elementStyleWidth}`+"px"));
  idelement.style.setProperty("opacity","1");
  return 1;
// El elemento esta activo, termino la animacion de crecimiento, lo desactivamos
} else if ((elementStyleWidth == incremento_size) && (dimension_seccion.includes(seccionStyleWidth))){
// Modificamos los width de los elementos involucrados
  elementStyleWidth=elementStyleWidth - incremento_size;
  seccionStyleWidth=seccionStyleWidth - incremento_size;
  bodyStyleWidth=bodyStyleWidth - incremento_size;
//Comenzamos las transiciones.
  document.getElementById('pag').style.setProperty("height",(`${bodyStyleWidth}`+"px"));
  document.getElementById('Data').style.setProperty("height",(`${seccionStyleWidth}`+"px"));
  idelement.style.setProperty("height",(`${elementStyleWidth}`+"px"));
  idelement.style.setProperty("opacity","0");
  return 0;
}
}
//______________________________________________________________________________
//Funcion para cambiar de color los botones del accordeon.
function changecolor(idelement,color,state) {
  if (state == 1) {
    idelement.style.setProperty('background-color',color);
  } else if(state == 0) {
    idelement.style.setProperty('background-color',"rgb(255,255,255)");
  }
}
//______________________________________________________________________________
//Funcion para rotar los iconos de los botones del accordeon.
function rotateImg(idelement,state) {
  if (state == 1) {
    idelement.style.transform = "rotate(180deg)";
  } else if (state == 0 ){
    idelement.style.transform = "rotate(0deg)";
  }
}
//______________________________________________________________________________
//Funcion que permite posicionar correctamente el footer.
function dimFooter(){
let footElement= document.getElementById("foot");
let footDim = footElement.getBoundingClientRect();
let tam_pagStyle= window.getComputedStyle(document.getElementById('pag'));
let tam_pag= parseFloat(tam_pagStyle.getPropertyValue('height'));
console.log(tam_pag);
console.log(footDim.top);
if (tam_pag > footDim.top) && (tam_pag- (footDim.top + footDim.height)) > 0){
    footElement.style.top=`${(tam_pag- (footDim.top + footDim.height))}px`;
} else{
    footElement.style.top="0px";
}
}

//___________________________________________________________________________________________
// Ajustamos el footer..
dimFooter();
//definimos variable para trabajar con dimensiones de las cajas
let base_seccion=240;
let dimension_box=[250,1670,340];
//definimos variable global para trabajar con dimensiones
// dimension_seccion =[000,001,010,011,100,101,110,111]
var dimension_seccion=[base_seccion,base_seccion + dimension_box[2],base_seccion + dimension_box[1],base_seccion + dimension_box[1] + dimension_box[2],base_seccion + dimension_box[0],base_seccion + dimension_box[0] + dimension_box[2],base_seccion + dimension_box[0] + dimension_box[1],base_seccion + dimension_box[0] + dimension_box[1] + dimension_box[2]];

//Creamos los eventos para cada una de las partes.
//rgb(158,158,158,0.7)
document.getElementById('Data__Formato--Formacion').onclick = function (){

let state_1 = accordeon(document.getElementById("Data__Formacion-inf"),dimension_box[0]);
changecolor(document.getElementById('Data__Formato--Formacion'),"rgb(158, 158, 158,0.7)",state_1);
rotateImg(document.getElementById('Data--img-1'),state_1);

}

document.getElementById('Data__Formato--ProyTrab').onclick = function (){

let state_2 = accordeon(document.getElementById('Data__ProyTrab-inf'),dimension_box[1]);
changecolor(document.getElementById('Data__Formato--ProyTrab'),"rgb(158, 158, 158,0.7)",state_2);
rotateImg(document.getElementById('Data--img-2'),state_2);

}

document.getElementById('Data__Formato--ManejSoft').onclick = function (){

let state_3 = accordeon(document.getElementById('Data__ManejSoft-inf'),dimension_box[2]);
changecolor(document.getElementById('Data__Formato--ManejSoft'),"rgb(158, 158, 158,0.7)",state_3);
rotateImg(document.getElementById('Data--img-3'),state_3);

}
