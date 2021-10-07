// Codigo del cuadrado 


function perimetroCuadrado(lado){

    return lado * 4;
}

function areaCuadrado(lado){

    return lado *lado;
}



// Codigo del triangulo
// console.group("Triangulo")
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturatriangulo = 5.5;

// console.log(" Los lados del triangulo miden: " 
// + ladoTriangulo1 + " cm, "
// + ladoTriangulo2 + " cm, y la base: "
// + baseTriangulo  + " cm"


// )

// console.log("La altura del triangulo es: " + alturatriangulo);

// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;

function perimetroTriangulo (lado1, lado2, base) {
    return lado1 + lado2 + base;

}

function areaTriangulo (base, altura) {
    return (base * altura) / 2;

}


// console.log("el perimetro del triangulo es: " + perimetroTriangulo + " cm");

// const areaTriangulo = (baseTriangulo * alturatriangulo) / 2;

// console.log("el area del triangulo es: " + areaTriangulo + " cm^2");






// console.groupEnd()


// Codigo del círculo
// console.group("Círculo")

//Radio

// const radiocirculo = 4;

// console.log("El radio del circulo es: " + radiocirculo  + " cm");



//Diámetro

// const diametrocirculo = radiocirculo * 2;

// console.log("El diaámetro del circulo es: " + diametrocirculo  + " cm");
function diametroCirculo(radio){

    return radio * 2


}

//PI

const PI = Math.PI; 


// console.log("El PI del circulo es: " + PI );


//circunferencia

// const perimetroCirculo = diametrocirculo * PI;

function perimetroCirculo(radio){

    const diametro = diametroCirculo(radio);

    return diametro * PI;
}


// console.log("La Perimetro del circulo es: " + perimetroCirculo  + " cm");



//Area

// const areaCirculo = (radiocirculo * radiocirculo ) * PI;

function areaCirculo (radio) {

    return (radio * radio) * PI;
}

// console.log("La área del circulo es: " + areaCirculo + " cm^2");


// console.groupEnd()



// Desde aqui nos conectamos con html

function calcularPrerimetroCuadrado() {

    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert("El perimetro es: " + perimetro);

}

function calcularAreaCuadrado() {
    
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert("El área es: " + area);
    
}

function isoceles (Lado,Base){
    const raizc = Math.sqrt;

    return raizc ((Lado * Lado) - ((Base * Base) /4));

    
}


function calcularTriangulo () {

    const inputL = document.getElementById("InputLado");
    const valueLado = inputL.value;

    const inputB = document.getElementById("InputBase");
    const valueBase = inputB.value;
    

    const areaT = isoceles(valueLado, valueBase);

    if (valueLado === valueBase){
        alert("El  del triangulo Isoceles es: " + areaT);

    }
    else {
        alert("Los lados no son iguales");
    }

    

}

