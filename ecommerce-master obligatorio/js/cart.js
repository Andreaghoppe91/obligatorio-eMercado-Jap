let productUnitCost = 0;
let productCurrency = "";
let MONEY_SYMBOL = "$";
let PERCENTAGE_SYMBOL = '%';
let subtotal = 0;
let shippingPercentage = 0.15;
let total = 0;
let paymentTypeSelected = false;
const CREDIT_CARD_PAYMENT = "Tarjeta de crédito";
const BANKING_PAYMENT = "Transferencia bancaria";
let ERROR_MSG = "Ha habido un error :(, verifica qué pasó.";

//Función que se utiliza para actualizar los costos de publicación
function updateSubtotal(){
    let costoTotalDeUnidades = document.getElementById("costo");
    costoTotalDeUnidades.innerHTML = Math.round(productUnitCost * 100);
}

function showArticles(array){
    let contenido = "";
    
    for(let i = 0; i < array.length; i++){
        let articles = array[i];
        contenido += `
        <tr>
        <td><img src="`+ articles.src + `" width="45px"></td>
        <td>`+ articles.name +`</td>
        <td>`+ articles.currency +`</td>
        <td><input type="number" id="productCantInput" value="1" min="1"></td>
        <td id="costo" ></td>
        <tr>
        `
        document.getElementById("tablaCart").innerHTML = contenido;
    }
}

function updateTotalCosts(){

}

function showPaymentTypeNotSelected(){

}

function hidePaymentTypeNotSelected(){

}

document.addEventListener("DOMContentLoaded", function(e){
    document.getElementById("productCantInput").addEventListener("change", function(){
        productUnitCost = this.value;
        updateSubtotal();
    });
    getJSONData(CART_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {   
            carrito = resultObj.data;
            showArticles(carrito.articles);
        }
});
});
