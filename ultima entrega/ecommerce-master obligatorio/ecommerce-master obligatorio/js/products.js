const ORDEN_ASC_PRECIO = "";
const ORDEN_DESC_PRECIO = "Cost.";
const ORDEN_POR_PRECIO = "";
var currentProductsarray = [];
var currentSortCriteria = undefined;
var minCost = undefined;
var maxCost = undefined;

function sortProducts(criteria, array){

    let result = [];
    if (criteria === ORDEN_ASC_PRECIO)
    {
        result = array.sort(function(a, b) {
            if ( a.cost < b.cost ){ return -1; }
            if ( a.cost > b.cost ){ return 1; }
            return 0;
        });
    }else if (criteria === ORDEN_DESC_PRECIO){
        result = array.sort(function(a, b) {
            if ( a.cost > b.cost ){ return -1; }
            if ( a.cost < b.cost ){ return 1; }
            return 0;
        });
    }else if (criteria === ORDENADO_POR_PRECIO){
        result = array.sort(function(a, b) {
            let aCost = parseInt(a.cost);
            let bCost = parseInt(b.cost);

            if ( aCost > bCost ){ return -1; }
            if ( aCost < bCost ){ return 1; }
            return 0;
        });
    }

    return result;
}

function showProductsList(array){
    let htmlContentToAppend = "";
    for(let i = 0; i < currentProductsArray.length; i++){
        let product = currentProductsArray[i];

        if (((minCost == undefined) || (minCost != undefined && parseInt(product.cost) >= minCost)) &&
            ((maxCost == undefined) || (maxCost != undefined && parseInt(product.cost) <= maxCost))){

            htmlContentToAppend += `
            <a href="product-info.html" class="list-group-item list-group-item-action">
                <div class="row">
                    <div class="col-3">
                        <img src="` + product.imgSrc + `" alt="` + product.description + `" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">`+ product.name +`</h4>
                            <small class="text-muted">` + product.soldCount + ` artículos</small>
                        </div>
                        <div class="d-flex w-100 justify-content-between">
                            <p class="mb-1">`+ product.description +`</p>
                        <small class="text-muted">` + product.cost + ` ` + product.currency +  ` </small>
                        </div>
                    </div>
                </div>
            </a>
            `
            }

        document.getElementById("cat-list-products").innerHTML = htmlContentToAppend;
    }
}
function sortAndShowProducts(sortCriteria, productsArray){
    currentSortCriteria = sortCriteria;

    if(productsArray != undefined){
        currentProductsArray = productsArray;
    }

    currentProductsArray = sortProducts(currentSortCriteria, currentProductsArray);

    showProductsList();
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCTS_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
            sortAndShowProducts(ORDEN_ASC_PRECIO, resultObj.data);
        }
    });

    document.getElementById("ordenarasc").addEventListener("click", function(){
        sortAndShowProducts(ORDEN_ASC_PRECIO);
    });

    document.getElementById("ordenardesc").addEventListener("click", function(){
        sortAndShowProducts(ORDEN_DESC_PRECIO);
    });

    document.getElementById("borrarfiltro").addEventListener("click", function(){
        document.getElementById("filtrominimoprecio").value = "";
        document.getElementById("filtromaximoprecio").value = "";

        minCost = undefined;
        maxCost = undefined;

        showProductsList();
    });

    document.getElementById("filtrorango").addEventListener("click", function(){
        minCost = document.getElementById("filtrominimoprecio").value;
        maxCost = document.getElementById("filtromaximoprecio").value;

        if ((minCost != undefined) && (minCost != "") && (parseInt(minCost)) >= 0){
            minCost = parseInt(minCost);
        }
        else{
            minCost = undefined;
        }

        if ((maxCost != undefined) && (maxCost != "") && (parseInt(maxCost)) >= 0){
            maxCost = parseInt(maxCost);
        }
        else{
            maxCost = undefined;
        }

        showProductsList();
    });
});