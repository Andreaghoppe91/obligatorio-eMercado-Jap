let productUnitCost = 0;
let productCurrency = "";
let MONEY_SYMBOL = "$";
let PERCENTAGE_SYMBOL = '%';
let cantidadSeleccionada = 0;
let shippingPercentage = 0.15;
let subTotal = 0;
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
     articles = array[i];
        contenido += `
        <tr>
        <td><img src="`+ articles.src + `" width="45px"></td>
        <td>`+ articles.name +`</td>
        <td>`+ articles.currency +`</td>
        <td>`+ articles.unitCost +`</td>
        <td><input type="number" name="productInput" id="productCantInput" value="`+articles.count +`" min="1"></td>
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
    let cantidad = document.getElementById("productCantInput").value;
    let subtotal = precioUnitario * cantidad;
    document.getElementById("precioproduct").innerHTML =  MONEY_SYMBOL + subtotal;
    document.getElementById("comisionEnvio").innerHTML = MONEY_SYMBOL + (Math.round(subtotal * shippingPercentage));
    document.getElementById("costototal").innerHTML  = MONEY_SYMBOL + (Math.round(subtotal * shippingPercentage)+ (subtotal));
    document.getElementById("productCantInput").addEventListener("change", function(){
       updateTotalCosts();
    });
}

function ocultarTransferencia(){
    document.getElementById("bankAccountNumber").disabled = true;
    document.getElementById("creditCardNumber").disabled = false;
    document.getElementById("creditCardSecurityCode").disabled = false;
    document.getElementById("dueDate").disabled = false;
}

function ocultartarjeta(){

    document.getElementById("creditCardNumber").disabled = true;
    document.getElementById("creditCardSecurityCode").disabled = true;
    document.getElementById("dueDate").disabled = true;
    document.getElementById("bankAccountNumber").disabled = false;
}

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(CART_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {   
            carrito = resultObj.data;
            showArticles(carrito.articles);
            updateSubtotal(precioUnitario);
            updateTotalCosts();
        }
        
    
        document.getElementById("radioexp").addEventListener("change", function(){
            shippingPercentage = 0.07;
            updateTotalCosts();
        });
        
        document.getElementById("radioprem").addEventListener("change", function(){
            shippingPercentage = 0.15;
            updateTotalCosts();
        });
        
        document.getElementById("radiostand").addEventListener("change", function(){
            shippingPercentage = 0.05;
            updateTotalCosts();
        });
    });

var infocart = document.getElementById("cart-info");
infocart.addEventListener("submit", function(e){

    let calle = document.getElementById("calle");
    let numero = document.getElementById("numero-calle");
    let pais = document.getElementById("pais");
    let esquina = document.getElementById("esquina");
    let infoMissing = false;

    calle.classList.remove('is-invalid');
    numero.classList.remove('is-invalid');
    pais.classList.remove('is-invalid');
    esquina.classList.remove('is-invalid');

    if (calle.value === "")
    {
        calle.classList.add('is-invalid');
        infoMissing = true;
    }

    if (numero.value <=0)
    {
        numero.classList.add('is-invalid');
        infoMissing = true;
    }

    if (pais.value === "")
    {
        pais.classList.add('is-invalid');
        infoMissing = true;
    }

    if (esquina.value === "")
    {
        esquina.classList.add('is-invalid');
        infoMissing = true;
    }

    if(!infoMissing)
        {getJSONData(CART_BUY_URL).then(function(resultObj){
                let msgToShow = "";
                if (resultObj.status === 'ok')
                {
                    msgToShow = resultObj.data.msg;
                }
                else if (resultObj.status === 'error')
                {
                    msgToShow = ERROR_MSG;
                }

                bootbox.alert(msgToShow, null);
            });
        }

        if (e.preventDefault) e.preventDefault();
        return false;
});
});