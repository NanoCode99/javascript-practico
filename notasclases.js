// Estas son las notas del curso y codigos que se vana generando 


// Codigo del cuadrado 
console.group("cuadrado")

const ladoCuadrado =5;

console.log("los lados del cuadraro miden: " + ladoCuadrado + " cm");


const perimetroCuadrado = ladoCuadrado * 4;

console.log("el perimetro del cuadrado es: " + perimetroCuadrado + " cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log("el área del cuadrado es: " + areaCuadrado + " cm^2");

console.groupEnd()

// Codigo del triangulo
console.group("Triangulo")
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturatriangulo = 5.5;

console.log(" Los lados del triangulo miden: " 
+ ladoTriangulo1 + " cm, "
+ ladoTriangulo2 + " cm, y la base: "
+ baseTriangulo  + " cm"


)

console.log("La altura del triangulo es: " + alturatriangulo);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;


console.log("el perimetro del triangulo es: " + perimetroTriangulo + " cm");

const areaTriangulo = (baseTriangulo * alturatriangulo) / 2;

console.log("el area del triangulo es: " + areaTriangulo + " cm^2");






console.groupEnd()


// Codigo del círculo
console.group("Círculo")

//Radio

const radiocirculo = 4;

console.log("El radio del circulo es: " + radiocirculo  + " cm");

//Diámetro

const diametrocirculo = radiocirculo * 2;

console.log("El diaámetro del circulo es: " + diametrocirculo  + " cm");

//PI

const PI = Math.PI; 


console.log("El PI del circulo es: " + PI );


//circunferencia

const perimetroCirculo = diametrocirculo * PI;


console.log("La Perimetro del circulo es: " + perimetroCirculo  + " cm");



//Area

const areaCirculo = (radiocirculo * radiocirculo ) * PI;

console.log("La área del circulo es: " + areaCirculo + " cm^2");


console.groupEnd()