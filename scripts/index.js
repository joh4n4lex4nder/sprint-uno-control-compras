const cantidad = document.getElementById('cantidad');
const valorCompra = document.getElementById('valor');
const descuento = document.getElementById('descuento');
const totalPagar = document.getElementById('total');
const mensaje = document.getElementById('mensaje');

function Calcular() {
    let cant = cantidad.value;
    let valor = cant * 820000;
    let desc, total;

    if(valorCompra < 1640000) {
        valorCompra.value = valor;
        descuento.value = 0;
        totalPagar.value = valor;
        mensaje.innerHTML = "No aplica descuento";
    }else{
        if(valorCompra >= 1640000 && valorCompra <= 3280000) {
            valorCompra.value = valor;
            descuento.value = valorCompra * 0.15;
            totalPagar.value = valorCompra - descuento;
            document.write("Su descuento fue del 15%");
        }else{
            if(valorCompra > 3280000 && valorCompra <= 6560000) {
                descuento = valorCompra * 0.25;
                totalPagar = valorCompra - descuento;
                document.write("Su descuento fue del 25%");
            }else{
                if(valorCompra > 6560000 && valorCompra <= 9840000) {
                descuento = valorCompra * 0.35;
                totalPagar = valorCompra - descuento;
                document.write("Su descuento fue del 35%");
                }else{
                    document.write("No aplica descuento");
                }
            }
        }
    }
}