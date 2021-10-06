function card() {
    console.log("Funcion card");
    
    var getContainer = document.querySelector('.container');
    var contenedorTarjetas = document.querySelector('.contenedorTarjetas');

    var tarjeta = document.createElement('div');

    var h1NombreCliente = document.createElement('p');
    var h1DireccionCliente = document.createElement('p');
    var h1TelefonoCliente = document.createElement('p');
    var h1PiñaStatus = document.createElement('p');

    var imagenPerfil = document.createElement('img');
    
    var nombreCliente = document.getElementById('nombreCliente');
    var direccionCliente = document.getElementById('direccionCliente');
    var telefonoCliente = document.getElementById('telefonoCliente');
    var piñaStatus = document.getElementById('piñaStatus');
     
    var pizzaSpecs=[
        document.getElementById('masaType').value,
        document.getElementById('quesoType').value,
        document.getElementById('ingredienteType').value,
        document.getElementById('tomateStatus').value
    ];
   
    tarjeta.setAttribute("class","card col-2");
    tarjeta.setAttribute("style","border:1px solid gray; margin:.5rem 1.4% 0 1.4%; padding:3px");
    imagenPerfil.setAttribute("style","width:100%")
    imagenPerfil.setAttribute("src","./img/pizza.jpg");

    contenedorTarjetas.appendChild(tarjeta);
    tarjeta.appendChild(imagenPerfil);
    tarjeta.appendChild(h1NombreCliente);
    tarjeta.appendChild(h1DireccionCliente);
    tarjeta.appendChild(h1TelefonoCliente);
    tarjeta.appendChild(h1PiñaStatus);

    
    console.log(nombreCliente.value);
    console.log(direccionCliente.value);
    console.log(telefonoCliente.value);
    console.log(piñaStatus.value);
    

    h1NombreCliente.innerHTML = `Nombre: ${nombreCliente.value} `;
    h1DireccionCliente.innerHTML = `Direccion: ${direccionCliente.value} `;
    h1TelefonoCliente.innerHTML = `Telefono: ${telefonoCliente.value} `;
    h1PiñaStatus.innerHTML = conPiña();        
    
}

function conPiña(){
    if (piñaStatus.value.toLowerCase()==='si') {
        return `Piña: Perfecto con piña`;
    }else if(piñaStatus.value.toLowerCase()==='no'){
        return `Piña: Al nene no le gusta la piña🤣🤣`;
    }else{
        return `Piña: Opcion invalida`; 
    }
}


