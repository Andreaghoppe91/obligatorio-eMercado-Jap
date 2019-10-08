let productUnitCost = 0;
let productCurrency = "";
let subtotal = 0;
let shippingPercentage = 0.15;
let total = 0;
let paymentTypeSelected = false;
const CREDIT_CARD_PAYMENT = "Tarjeta de crédito";
const BANKING_PAYMENT = "Transferencia bancaria";
let ERROR_MSG = "Ha habido un error :(, verifica qué pasó.";

//Función que se utiliza para actualizar los costos de publicación
function updateTotalCosts(){

}

function updateSubtotal(){

}

function showPaymentTypeNotSelected(){

}

function hidePaymentTypeNotSelected(){

}

function showArticles(articles){
    let contenido = "";
    for(let i = 0; i < articles.length; i++){
        let articles = articles[i];
        contenido += `
            <td><img src="img/tree1.jpg" width="75px"></td>
            <td>`+ array.articles.name +`</td>
            <td>`+ articles.articles.count +`</td>
            <td>100</td>
            <td>uyu</td>
        `
        document.getElementById("tablaCart").innerHTML = contenido;
    }
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
showArticles(CART_INFO_URL);
});