  
 
const columnaUno = document.createElement('div');
      columnaUno.classList.add('columnas');
      columnaUno.innerHTML = `
      <hr/>
      <h1>Lista de Cuentas</h1>
      <table>
        <thead>
            <th>Tipo</th>
            <th>Cuenta</th>
            <th>Contraseña</th>
            <th>Fecha</th>
        </thead>
        <tbody id="tbody">
        </tbody>
    </table>
    `

const columnaDos = document.createElement('div');
      columnaDos.classList.add('columnas');
      columnaDos.innerHTML = `
      <h1>Ingrese los datos</h1>
      <span>Tipo</span>
      <input placeholder="Tipo de cuenta" type="text">
      <span>Cuenta</span>
      <input placeholder="Correo" type="text">
      <span>Contraseña</span>
      <input placeholder="Contraseña" type="text">
      <span>Fecha</span>
      <input type="date">
      <button id="btn">enviar</button>
    `

const caja = document.createElement('div');
      caja.classList.add('caja');
      caja.insertAdjacentElement('afterbegin', columnaUno);
      caja.insertAdjacentElement('afterbegin', columnaDos);

    //Mi body
let cuerpo = document.querySelector('body');
    cuerpo.insertAdjacentElement('afterbegin', caja)

    //Boton form
    const boton = document.getElementById('btn');
          boton.classList.add('btn')
    boton.addEventListener('click', imprimir);
    console.log(caja);


    function imprimir(cuerpo) {

        //Obtenemos elemento Tbody
        const tbody = document.getElementById('tbody');
        //Obtenemos los input
        let inputUno = document.querySelectorAll('div input');
        //Creamos dinamicamente los tr y td
        const tds = document.createElement('tr');
              tds.innerHTML =  `
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            `
        // Le asignamos el valor de los inputs a los elementos td
     
        tds.lastElementChild.innerHTML = inputUno[1].value;
        tds.firstElementChild.innerHTML = inputUno[2].value;
        tds.lastElementChild.innerHTML = inputUno[3].value;

         
         tdUno = tds.children[0];
         tdUno.innerHTML = inputUno[0].value;

         tdDos = tds.children[1];
         tdDos.innerHTML = inputUno[1].value;

         tdTres = tds.children[2];
         tdTres.innerHTML = inputUno[2].value;

         tdCuatro = tds.children[3];
         tdCuatro.innerHTML = inputUno[3].value;


         console.log(tdUno)
        
        //tbody
        tbody.insertAdjacentElement('beforebegin', tds)

   
    }
    

