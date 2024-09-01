//Sara Eugenia Arriola Castillo.
//PMIW, Comisión 2.
//Video YouTube: https://youtu.be/VKJBHm2JJ6w


function preload() {
  imgOG =loadImage("data/OpArt.jpg")  // ya no usa PImage.
}


let  xAnt = 0  ;
let  yAnt = 0 ;
let primerCirculoDibujado = false; // es un flag
let flag = 0 ; 
let h1 ;   // Verde oscuro  // colores para el fondo y keyPressed.
let h2 ; //Verde claro   // colores para el fondo y keyPressed.
  
function setup () {
  if (flag == 0 ){ 
      h1 = color(67, 177, 44);   // Verde oscuro  // colores para el fondo y keyPressed.
      h2 = color(151, 204, 54); //Verde claro   // colores para el fondo y keyPressed.
  }   
  createCanvas(800, 400);
  noStroke();
  ellipseMode(RADIUS);
  
  fondoGradiente(600, 200, 285, h1, h2 );
  let h3 = color(255, 5, 5)
  let h4 = color(158, 96, 169);
  fondoCirculo (600, 200, 120, h3, h4);
  fondoGrilla();
}


function draw () {
  image(imgOG, 0, 0, width/2, height);
}


function fondoGradiente (x1, y1, radio1, h1, h2) {
  // Dibujar el fondo con un patrón (opcional)
  for (let i = 0; i < width; i += 20) {
    for (let j = 0; j < height; j += 20) {
      line(i, j, i + 10, j + 10);
      line(i + 10, j, i, j + 10);
    }
  }
  // Dibujar el círculo con degradado radial
  for (let r1 = radio1; r1 > 0; --r1) {
    let t1 = map(r1, 0, radio1, 0, 1);
    let c1 = lerpColor(h1, h2, t1);
    fill(c1);
    ellipse(x1, y1, r1, r1);
  }
}


function fondoCirculo (x2, y2, radio2, h3, h4) {
  // Dibujar el fondo con un patrón (opcional)
  for (let i = 0; i < width; i += 20) {
    for (let j = 0; j < height; j += 20) {
      line(i, j, i + 10, j + 10);
      line(i + 10, j, i, j + 10);
    }
  }
  // Dibujar el círculo con degradado radial
  for (let r2 = radio2; r2 > 0; --r2) {
    let t2 = map(r2, 0, radio2, 0, 1);
    let c2 = lerpColor(h3, h4, t2);
    fill(c2);
    ellipse(x2, y2, r2, r2);
  }
}


function fondoGrilla() {

  // Espaciado entre celdas
  let espaciado =25;
  let espaciado2=20;
  let Kolor1=0; // negro
  let Kolor2=255; // blanco
  // Recorrer filas
  for ( i = 0; i < 23; i++) {
    // Recorrer columnas
    for ( j = 0; j < 23; j++) {
      // Posición x e y de la curva bezier
      let posX = calculaPosX(j, espaciado);
      let posY = i * espaciado+4;
      // funcion que dibuja la curva
      dibujarCurvaBezier(posX+400, posY-(i*8), Kolor1);
      // funcion que dibuja la curva
      dibujarCurvaBezier2(calculaPosX2 (espaciado2, j), calculaPosY2(espaciado2, i ), Kolor2);
      if (Kolor1 == 0) {
        Kolor1=255;
        Kolor2=0;
      } else {
        Kolor1=0;
        Kolor2=255;
      }
    }
  }
}

// Función para calculo de coordenada y
function  calculaPosY2(espaciado2, i) {
  return (espaciado2)+(i*25)-(i*8);
}
// Función para calculo de coordenada X
function  calculaPosX(j, espaciado) {
  return  j * espaciado+4-(j*8);
}
// Función para calculo de coordenada X
function  calculaPosX2 ( espaciado2, j) {
  return  (espaciado2)+( 25*j)-(j*8)+400;
}


// Función para dibujar la curva bezier en una posición específica
function dibujarCurvaBezier(posX, posY, Kolor) {
  let n;
  n=2/0.8;
  // Color negro
  fill(Kolor);
  // Iniciar forma
  beginShape();
  curveVertex(40/n+posX, 24/n+posY);
  curveVertex(40/n+posX, 24/n+posY);

  curveVertex(35.5/n+posX, 35.5/n+posY);
  curveVertex(24/n+posX, 40/n+posY);

  curveVertex(40/n+posX, 40/n+posY);
  curveVertex(40/n+posX, 40/n+posY);
  // Finalizar forma
  endShape();
}

function dibujarCurvaBezier2(desplazamientoX, desplazamientoY, Kolor) {
  let n;
  n=2.5/0.8;
  // Color blanco
  fill(Kolor);
  beginShape();
  // Dibujar curva bezier con desplazamiento
  curveVertex(0 + desplazamientoX, (16/n) + desplazamientoY);
  curveVertex(0 + desplazamientoX, (16/n) + desplazamientoY);

  curveVertex((4.5/n) + desplazamientoX, (4.5/n) + desplazamientoY);
  curveVertex((16/n) + desplazamientoX, 0 + desplazamientoY);

  curveVertex(0 + desplazamientoX, 0 + desplazamientoY);
  curveVertex(0 + desplazamientoX, 0 + desplazamientoY);
  endShape();
}


function mousePressed() {  // evento: presionar mouse
  let  x = mouseX;
  let  y  = mouseY;
  let distancia;
  if (x>400) {
    if (primerCirculoDibujado) {
      distancia =  dist(xAnt, yAnt, x, y) ;
    } else {
      distancia=51;
    }
    if ( distancia <50 ) {
      fill (0, 0, 0); // negro
      primerCirculoDibujado = false;
      xAnt = 0;
      yAnt = 0;
    } else {
      fill (128+random(127), 50, 100+random(50));
      xAnt = x;
      yAnt = y;
      primerCirculoDibujado = true;
    }
    //primerCirculoDibujado = ! primerCirculoDibujado;
    ellipse(x, y, 10, 10); // Tamaño de la elipse
    botonReinicio ();
  }
}


function keyPressed() {  // evento: presionar tecla
  h1=color(random(255), random(255), random(255));
  h2=color(random(255), random(255), random(255));
  flag = 1; 
  setup();
  botonReinicio ();
}


let esquinaX= 690;
let esquinaY = 10;
let ancho = 100;
let alto = 35;
let botonApretado = false; //flag para el estado del botón de reinicio

function mouseClicked() {  //cuando se apreta el botón
  if (mouseX > esquinaX && mouseX < esquinaX + ancho &&
    mouseY > esquinaY && mouseY < esquinaY + alto) {
    botonApretado = true;
    restart();   //lama a función para reiniciar la obra
  }
}


function restart() {  //  reinicia la pantalla
  h1 = color(67, 177, 44);
  h2 = color(151, 204, 54);
  setup();
}


function botonReinicio () {
  fill(255);
  rect (esquinaX, esquinaY, ancho, alto);
  fill(0);
  text("REINICIO", esquinaX + ancho/2 - textWidth("REINICIO")/2, esquinaY + alto/2 + textAscent()/2);
}
