

  async function login() {
    let usuario = document.querySelector("#usuario").value;
    let password = document.querySelector("#password").value;


    let cuentas_json = [];
    let response = await fetch('json/cuentas.json');
    cuentas_json = await response.json();

 
    let usuario_valido = 0;

    document.addEventListener('DOMContentLoaded', function() {
        // Obtener referencias a los elementos del DOM
        var selectImageButton = document.getElementById('selectImageButton');
        var fileInput = document.getElementById('fileInput');
      
        // Escuchar el evento clic en el botón
        selectImageButton.addEventListener('click', function() {
          // Simular un clic en el input de tipo file
          fileInput.click();
        });
      
        // Escuchar el evento change en el input de tipo file
        fileInput.addEventListener('change', function(event) {
          // Obtener el archivo seleccionado por el usuario
          var selectedFile = event.target.files[0];
      
          // Realizar cualquier acción adicional aquí, como cargar la imagen
          console.log('Imagen seleccionada:', selectedFile.name);
        });
      });
      

    for (i = 0; i < cuentas_json.length; i++) {
        if (usuario == "admin" && password == cuentas_json[i].password) {
            load_pagina('Añadir.html');
            usuario_valido = 1;
        } else if (usuario == cuentas_json[i].usuario && password == cuentas_json[i].password) {
            load_pagina('lista.html');
            usuario_valido = 1;
        }  
    }
    if(usuario_valido == 0){
        alert("Error, Usuario-Password desconocido");
    }
}

function chequear_enter(event){
    if (event.keyCode == 13)
    {
        login();
    }
}

function load_pagina(pagina) {
    window.location.href = pagina;
}

function logout(){
    load_pagina('index.html');
}

function add_instrumento(){
    let product_name = document.querySelector("#product_name").value;
    let product_description = document.querySelector("#product_description").value;
    let product_price= parseInt(document.querySelector("#product_price").value);
    let previous_discount = document.querySelector("#previous_discount").value;
    let add_product_image = document.querySelector("#add_product_image").value;

    
    product_image = product_image.substring(product_image.lastIndexOf('\\') + 1);


    console.log(product_name);
    console.log(product_description);
    console.log(product_price);
    console.log(previous_discount);
    console.log(add_product_image);

    
    let contenido_tabla = document.querySelector("#display").innerHTML;
    contenido_tabla = contenido_tabla + "<tr><td rowspan='3'><img src='images/productos/"+product_image+"'></td><td>"+product_name+
                        "</td></tr><tr><td>"+product_description+"</td></tr><tr><td>Precio: "+product_price+
                        "€</td></tr><tr class='separacion'><td colspan='2'></td></tr>";
    
    document.querySelector("#display").innerHTML = contenido_tabla;
 
}

function print_product(){
   
}