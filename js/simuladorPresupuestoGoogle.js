function saludar(mensaje) {
    alert(mensaje);
}

saludar("Hola! Comencemos a simular tu presupuesto de Publicidad en Google!");

let tieneWeb = prompt("Tenés una web? Si/No");

if (tieneWeb == "No") {
    alert("Primero debemos crear tu web");
    class Web {
        constructor(dominio, cantidadPaginas) {
            this.dominio = dominio;
            this.cantidadPaginas = cantidadPaginas;
        }
    }
    
    const dominio = prompt ("Ingrese el nombre de su empresa");
    const cantidadPaginas = Number(
        prompt("Qué cantidad de páginas necesita en su web?")
    );

    const cantidadMeses = parseFloat(prompt("Por cuántos meses querés realizar la publicidad? Recomendamos mínimo 3 meses para notar resultados!"));
    const montoMensual = parseFloat(prompt("Cuál es tu presupuesto mensual para que Google muestre tu anuncio?"));
    
    let resultado;
    
    function simuladorPresupuesto(cantidadMeses, montoMensual, cantidadPaginas){
       resultado = cantidadMeses * montoMensual + cantidadPaginas * 4500 + 5000; 
       return resultado;
    }     
    
    simuladorPresupuesto(cantidadMeses , montoMensual , cantidadPaginas);
    
    function mostrar(mensaje) {
        alert("El presupuesto mensual aproximado será de:" + " " + "$" + mensaje);
    }
    
    mostrar(resultado);
    
    alert("Este es un presupuesto aproximado, para más información contactanos!")
}
else {
    alert("Continuemos");
    const cantidadMeses = parseFloat(prompt("Por cuántos meses querés realizar la publicidad? Recomendamos mínimo 3 meses para notar resultados!"));
    const montoMensual = parseFloat(prompt("Cuál es tu presupuesto mensual para que Google muestre tu anuncio?"));
    
    let resultado;
    
    function simuladorPresupuesto(cantidadMeses, montoMensual){
       resultado = cantidadMeses * montoMensual + 5000; 
       return resultado;
    }     
    
    simuladorPresupuesto(cantidadMeses , montoMensual);
    
    function mostrar(mensaje) {
        alert("El presupuesto mensual aproximado será de:" + " " + "$" + mensaje);
    }
    
    mostrar(resultado);
    
    alert("Este es un presupuesto aproximado, para más información contactanos!")
}