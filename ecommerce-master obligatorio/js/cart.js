let productUnitCost = 0;
let productCurrency = "";
let MONEY_SYMBOL = "$";
let PERCENTAGE_SYMBOL = '%';
let subtotal = 0;
let cantidadSeleccionada = "";
let shippingPercentage = 0.15;
let total = 0;
let paymentTypeSelected = false;
const CREDIT_CARD_PAYMENT = "Tarjeta de crédito";
const BANKING_PAYMENT = "Transferencia bancaria";
let ERROR_MSG = "Ha habido un error :(, verifica qué pasó.";

//Función que se utiliza para actualizar los costos de publicación
function updateSubtotal(precioUnitario){
    let cantidad = document.getElementById("productCantInput").value;
    let subTotal = precioUnitario * cantidad;
    document.getElementById("subtotal").innerHTML = subTotal;

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
        <td>`+ articles.unitCost +`</td>
        <td><input type="number" name="cantidad" id="productCantInput" value="1" min="1"></td>
        <td id="subtotal"></td>
        </tr>
        `
        document.getElementById("tablaCart").innerHTML = contenido;

        
    precioUnitario = articles.unitCost;
    updateSubtotal(precioUnitario);
    document.getElementById("productCantInput").addEventListener("change", function(){
        updateSubtotal(precioUnitario);
    });
    }
}

function updateTotalCosts(){

}

function showPaymentTypeNotSelected(){

}

function hidePaymentTypeNotSelected(){

}

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(CART_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {   
            carrito = resultObj.data;
            showArticles(carrito.articles);
        }
});
});