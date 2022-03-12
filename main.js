  
 //window.addEventListener("load", actualizarPagina);

// function actualizarPagina () { }
     
    //Evento boton


    const formulario = document.getElementById('form');
    const listaDeCuentas = document.getElementById('listaActividades');
    
    let datosInput = [];

    const crearItem = (tipo,cuenta,pass,fecha) => {
        let item = {
            tipo: tipo,
            cuenta: cuenta,
            pass: pass,
            fecha: fecha
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
                <div class="list">
                    <li>${element.tipo}</li>
                    <li>${element.cuenta}</li>
                    <li>${element.pass}</li>
                    <li>${element.fecha}</li>
                    <li>Borrar</li>
                </div>
                `
            });
        }
    }

    const borrarLS = (tipo,cuenta,pass,fecha) => {

        let indexArreglo;

        datosInput.forEach((element, index) => {

            if (element.tipo === tipo && element.cuenta === cuenta && element.pass === pass && element.fecha === fecha) {
                indexArreglo = index;
                console.log(index)
            } 
        });
        datosInput.splice(indexArreglo, 1)
        guardarLS();
    }


        


        const boton = document.getElementById('btn');
          boton.addEventListener('click', () => {

                let inputs = document.querySelectorAll('input');
                
                let tipo = inputs[0].value;
                let cuenta = inputs[1].value;
                let pass = inputs[2].value;
                let fecha = inputs[3].value;

                crearItem(tipo, cuenta, pass, fecha);
                guardarLS();
                 
                inputs.forEach(element => {
                    element.value = "";
                });
                    
          } );

          document.addEventListener('DOMContentLoaded', imprimirLS)

          listaDeCuentas.addEventListener('click', (e) => {

                let textoUno = e.path[1].children[0].innerHTML;
                let textoDos = e.path[1].children[1].innerHTML;
                let textoTres = e.path[1].children[2].innerHTML;
                let textoCuatro = e.path[1].children[3].innerHTML;

           if (e.target.innerHTML === "Borrar") {
                //console.log("estas presionando borrar")
                //console.log(e.path[1].children[2].innerHTML)
                borrarLS(textoUno, textoDos, textoTres, textoCuatro);
           }

          });

  
  
    
