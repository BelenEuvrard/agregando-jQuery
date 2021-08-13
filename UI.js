 

function UI (ingresoFamiliar) {

        
   
      const litsingreso = document.getElementById("ingresoServicio");
      const elementIngreso =document.createElement("div");
      elementIngreso.innerHTML = 
      `
      <div id="card1"class="card text-center mb-4 mt-3 bg-warning text-dark ">
          <div class="card-body">
              <strong>Ingreso Familiar</strong>: ${ingresoFamiliar} 
              
              <a href="#" id="borrar1" class="btn btn-danger" name="borrar">borrar</a>
          </div>
      </div>
   
  `;
           litsingreso.appendChild(elementIngreso);

  }

  function newServicio (servicioApagar,importeServicio) {

        
      
    const litsingreso = document.getElementById("ingresoServicio");
      const elementIngreso =document.createElement("div");
      elementIngreso.innerHTML = 
      `
      <div id="card2" class="card text-center mb-4 my-3 bg-success text-white">
          <div class="card-body">
              <strong>Servicio</strong>: ${servicioApagar} 
              <strong>Importe</strong>: ${importeServicio}
              <a href="#" id="borrar2" class="btn btn-danger" name="borrar">borrar</a>
          </div>
      </div>
   
  `;
           litsingreso.appendChild(elementIngreso);

         

  }

  function resultado (calculo) {

        
      
    const litsingreso = document.getElementById("ingresoServicio");
      const elementIngreso =document.createElement("div");
      elementIngreso.innerHTML = 
      `
      <div id="card3" class="card text-center mb-4 mt-3">
          <div class="card-body">
              <strong>Saldo</strong>: ${calculo} 
              
              <a href="#" id="borrar3"class="btn btn-danger" name="borrar">borrar</a>
          </div>
      </div>
   
  `;
           litsingreso.appendChild(elementIngreso);

  }

function resetForm() {
    document.getElementById("form-servicios").reset();
    document.getElementById("form-registro").reset();
  }




    function deleteProduct() {

        document.getElementById("card1").remove();
        }
      
    




