var cart = {};
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

}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(CART_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            cart = resultObj.data;

            let productcart  = document.getElementById("nombreArticulo");
            let cantartcart = document.getElementById("cantarticulo");
            let costcart = document.getElementById("costarticulo");
            let currart = document.getElementById("monedaarticulo");
            let imgart = document.getElementById("imgarticulo");
        
            productcart.innerHTML = cart.name;
            cantartcart.innerHTML = cart.articles.count;
            costcart.innerHTML = cart.articles.unitCost;
            currart.innerHTML = cart.articles.currency;
            imgart.innerHTML = cart.articles.src;
        }
    });
});