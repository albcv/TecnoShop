//Variables globales

let carrito = [];
let monto_total = 0;


// Eventos

document.addEventListener('DOMContentLoaded', function(){

        //Buscar producto
        document.getElementById('buscar').addEventListener('click', function(){

                buscarProducto();

        });


    // Agregar producto al carrito

    let botones = document.querySelectorAll('.btn');
    
    for(let i=0;i<botones.length;i++){

        botones[i].addEventListener('click', function(){

        agregarProducto(botones[i]);

    });

    }

       //Mostrar productos agregados al carrito

        document.getElementById('carrito').addEventListener('click', function(){

        if(monto_total!=0){

            let c = carrito.join('');
            alert(c+'\n\nMonto total: $'+monto_total);
        }

        else{
            alert('No hay productos agregados al carrito');
        }

});
        
    

});



// Funciones

function agregarProducto(p){

    let producto = p.parentElement.querySelector('h3').textContent;
    let precio = p.parentElement.querySelector('.product-price').textContent;
    precio = precio.substring(1);
    precio = parseFloat(precio);
            
    monto_total+=precio;
    monto_total=Math.round(monto_total*100)/100;
            
    carrito.push((carrito.length+1)+'. '+producto+'\n');
    alert('Producto agregado al carrito');


}


function buscarProducto(){


            let texto = document.getElementById('barra').value;
            texto = texto.toLowerCase();

            if(texto.includes('laptop microsoft')){
                texto='p10';
            }

            else if(texto.includes('laptop dell')){
                texto='p8';
            }

            else if(texto.includes('laptop')){
                texto='p5';
            }
            
            if(texto.includes('smartphone') || texto.includes('samsung') || texto.includes('galaxy') || texto.includes('celular') || texto.includes('teléfono')){
                texto='p11';
            }

            else if(texto.includes('memoria') || texto.includes('flash') || texto.includes('memoria flash ssd')){
                texto='p17';
            }

            else if(texto.includes('disco') || texto.includes('ssd') || texto.includes('tb')){
                texto='p14';
            }


            else if(texto.includes('router')){
                texto='p18';
            }

             else if(texto.includes('axe') || texto.includes('tp link axe')){
                texto='p20';
            }

             else if(texto.includes('tp link')){
                texto='p19';
            }
   
            const búsqueda = document.getElementById(texto);
            

            if(búsqueda){

                búsqueda.scrollIntoView({

                    behavior: 'smooth',
                    block: 'start'

                });
            }

}





