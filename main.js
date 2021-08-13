
$(document).ready(function(){
 const form = $('#form-registro');
 const inputName = $('#nombre');
 const inputApellido = $('#apellido');
 const inputEmail = $('#email');
 const forServicios =$('#form-servicios')    
 const inputIngresoFamiliar = $('#ingresoFamiliar')
 const  inputServicioApagar =$('#inputGroupSelect04')
 const  inputImporteServicio =$('#importeServicio')


form.submit(function(e){
      e.preventDefault();

      const nombre = inputName.val();
      localStorage.setItem('Nombre', nombre);
      const apellido = inputApellido.val();
      localStorage.setItem('Apellido', apellido);
      const email = inputEmail.val();
      localStorage.setItem('Email', email);

$('#saludo').prepend(` <p class="d-flex justify-content-center text-info"><strong>
 Hola ${nombre + ' ' + apellido} usted fue registrado exitosamente,¡empecemos a gestionar su economia familiar!</strong></p>`)

      resetForm()


    });

    forServicios.submit(function(e){ 
      e.preventDefault();
      const ingresoFamiliar = inputIngresoFamiliar.val();
      localStorage.setItem('Ingreso Familiar', ingresoFamiliar);
      const servicioApagar = inputServicioApagar.val();
      localStorage.setItem('Servicio Ingresado', servicioApagar);
      const importeServicio = inputImporteServicio.val();
      localStorage.setItem('Importe Servicio', importeServicio);

      let saldo = parseFloat(ingresoFamiliar) - parseFloat(importeServicio);

      resetForm();
      UI(ingresoFamiliar);     
      newServicio(servicioApagar,importeServicio);
      resultado(saldo);
    });

  });      

  


