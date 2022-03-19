  
 //window.addEventListener("load", actualizarPagina);

// function actualizarPagina () { }
     
    //Evento boton


    const formulario = document.getElementById('form');
    const listaDeCuentas = document.getElementById('listaActividades');
    
    let datosInput = [];

    const crearItem = (nombre,fecha,tipo,pass,email) => {
        let item = {
            nombre: nombre,
            fecha: fecha,
            tipo: tipo,
            pass: pass,
            email: email

        
        }

        datosInput.push(item);
        return item;
    }

    const guardarLS = () => {
        
        localStorage.setItem('listas', JSON.stringify(datosInput));
        imprimirLS();
    }

    const imprimirLS = () => {
        
        listaDeCuentas.innerHTML = "";

        datosInput = JSON.parse(localStorage.getItem('listas'));
        
        if (datosInput === null) {
            datosInput = [];
        } else {
            datosInput.forEach(element => {
               
            listaDeCuentas.innerHTML += `
            <div id="size" class="card-body table-responsive">
            <table class="table table-hover">
            <tbody>
            <tr>
            <td scope="col">${element.nombre}</td>
            <td scope="col">${element.fecha}</td>
            <td class="bg-danger" scope="col" style="color:white; cursor:pointer; text-align: center; width:10%; border-radius:10px;">Borrar</td>
            </tr>
            <tr>
            <td class="bgt" scope="col">${element.tipo}</td>
            <td scope="col">${element.pass}</td>
            <td scope="col">${element.email}</td>
            </tr>
            </tbody>
            </table>
            </div>`});
        }
        
            
    }

  
    const borrarLS = (nombre,fecha,tipo,pass,email) => {

        let indexArreglo;

        datosInput.forEach((element, index) => {

            if (element.nombre === nombre && element.fecha === fecha && element.tipo === tipo && element.pass === pass && element.email === email) {
                indexArreglo = index;
            } 
        });
        datosInput.splice(indexArreglo, 1)
        guardarLS();
    }


        


        const boton = document.getElementById('btn');
          boton.addEventListener('click', () => {

                let inputs = document.querySelectorAll('input');

                let nombre = inputs[0].value;
                let fecha = inputs[1].value;
                let tipo = inputs[2].value;
                let pass = inputs[3].value;
                let email = inputs[4].value;

                    if (nombre ==="" && fecha ==="" && tipo ==="" && pass ==="" && email ==="") {
                        console.log("campos vacios")
                        inputs.forEach(element => {
                            inputs[0].focus();
                        });
                    } else {
                        
                    crearItem(nombre, fecha, tipo, pass, email);
                    guardarLS();
                    
                    inputs.forEach(element => {
                        element.value = "";
                    });
                 }
               

                    
          } );

          document.addEventListener('DOMContentLoaded', imprimirLS)

          listaDeCuentas.addEventListener('click', (e) => {
                
                let textoUno = e.path[1].children[0].innerHTML;
                let textoDos = e.path[1].children[1].innerHTML;
                let textoTres = e.path[2].children[1].children[0].innerHTML;
                let textoCuatro = e.path[2].children[1].children[1].innerHTML;
                let textoCinco = e.path[2].children[1].children[2].innerHTML;
                

                if (e.target.innerHTML === "Borrar") {
                        borrarLS(textoUno, textoDos, textoTres, textoCuatro, textoCinco);
                }


          });

  
  
    
