function docu() {
    document.getElementById("info").innerHTML=""
    +"<body style='background-color: #243B2C;'>"
   +"<center><h1>AGREGAR CLIENTES</h1></center><br><br>"
   +"<hr class='linea'>"
        +"<section class='registro'>"
            +"<input class='control' type='num' name='nombres' id='nombres' placeholder='Identificación'>"
        +"<input class='control' type='text' name='nombres' id='nombres' placeholder='Nombres'>"
            +"<input class='control' type='num' name='nombres' id='nombres' placeholder='Teléfono'>"
            +"<input class='control' type='text' name='nombres' id='nombres' placeholder='Apellidos'>"
            +"<input class='control' type='email' name='nombres' id='nombres' placeholder='Correo'>"
            +"<a href='#'><input class='boton' type='submit' value='REGISTRAR'></a>"
        +"<p><a href='menu.html'>VOLVER AL MENU</a></p>"
        +"</section>";
     }

function docu1() {
   document.getElementById("info").innerHTML="" 
  +"<body style='background-color: #243B2C;'>"
    +"<center><h1>LISTAR CLIENTES</h1></center><br><br>"
   +"<hr>"
   +"<br><br>"
    +"<center>"
   +"<form action='../../form-result.php' method='post' target='_blank'>"
   +"<p>"
   +"CONSULTAR <input type='search' name='busqueda' placeholder='identificacion, nombres, telefono...'>"
   +"<input type='submit' value='Buscar'>"
   +"</p>"
    +"</form>"
    +"</center>"

    +"<br>"
    +"<center>"
  
    +"<table>"
    +"<tr>"
        +"<th>N°</th>"
        +"<th>IDENTIFICACIÓN</th>"
        +"<th>NOMBRES</th>"
        +"<th>TELÉFONO</th>"
        +"<th>APELLIDOS</th>"
        +"<th>CORREO</th>"
    +"</tr>"
    +"<tr>"
        +"<td></td>"
        +"<td></td>"
        +"<td></td>"
        +"<td></td>"
        +"<td></td>"
        +"<td></td>"
    +"</tr>"
    +"<tr>"

     +"<td></td>"
     +"<td></td>"
     +"<td></td>"
     +"<td></td>"
     +"<td></td>"
     +"<td></td>"

       
    +"</tr>"
    +"<tr>"
     +"<td></td>"
     +"<td></td>"
     +"<td></td>"
     +"<td></td>"
     +"<td></td>"
     +"<td></td>"
    +"</tr>"
    +"<tr>"
     +"<td></td>"
     +"<td></td>"
     +"<td></td>"
     +"<td></td>"
     +"<td></td>"
     +"<td></td>"
    +"</tr>"
    +"<tr>"
     +"<td></td>"
     +"<td></td>"
     +"<td></td>"
     +"<td></td>"
     +"<td></td>"
     +"<td></td>"
    +"</tr>"
  +"</table>"

+"</center>";
}



function docu2() {
    document.getElementById("info").innerHTML="" 
   +"<body style='background-color: #243B2C;'>"
     +"<center><h1>LISTAR CLIENTES</h1></center><br><br>"
    +"<hr>"
    +"<br><br>"
     +"<center>"
    +"<form action='../../form-result.php' method='post' target='_blank'>"
    +"<p>"
    +"CONSULTAR <input type='search' name='busqueda' placeholder='identificacion, nombres, telefono...'>"
    +"<input type='submit' value='Buscar'>"
    +"</p>"
     +"</form>"
     +"</center>"
 
     +"<br>"
     +"<center>"
   
     +"<table>"
     +"<tr>"
         +"<th>N°</th>"
         +"<th>IDENTIFICACIÓN</th>"
         +"<th>NOMBRES</th>"
         +"<th>TELÉFONO</th>"
         +"<th>APELLIDOS</th>"
         +"<th>CORREO</th>"
     +"</tr>"
     +"<tr>"
         +"<td></td>"
         +"<td></td>"
         +"<td></td>"
         +"<td></td>"
         +"<td></td>"
         +"<td></td>"
     +"</tr>"
     +"<tr>"
 
      +"<td></td>"
      +"<td></td>"
      +"<td></td>"
      +"<td></td>"
      +"<td></td>"
      +"<td></td>"
 
        
     +"</tr>"
     +"<tr>"
      +"<td></td>"
      +"<td></td>"
      +"<td></td>"
      +"<td></td>"
      +"<td></td>"
      +"<td></td>"
     +"</tr>"
     +"<tr>"
      +"<td></td>"
      +"<td></td>"
      +"<td></td>"
      +"<td></td>"
      +"<td></td>"
      +"<td></td>"
     +"</tr>"
     +"<tr>"
      +"<td></td>"
      +"<td></td>"
      +"<td></td>"
      +"<td></td>"
      +"<td></td>"
      +"<td></td>"
     +"</tr>"
   +"</table>"
 
 +"</center>";
 }

 function paso() {
    document.getElementById("info").innerHTML="" 
    +"<body style='background-color: #243B2C;'>"
    
    +"<center><h1>AGREGAR CARROS</h1></center><br><br>"
    +"<hr class='linea'>"
         +"<section class='registro'>"
             +"<input class='control' type='text' name='nombres' id='nombres' placeholder='placas del carro'>"
             +"<input class='control' type='text' name='nombres' id='nombres' placeholder='marca del carro'>"
             +"<input class='control' type='text' name='nombres' id='nombres' placeholder='modelo del carro'>"
             +"<a href='#'><input class='boton' type='submit' value='REGISTRAR'></a>"
         +"<p><a href='menu.html'>VOLVER AL MENU</a></p>"
         +"</section>"

 }

 function paso1() {
    document.getElementById("info").innerHTML=""
  +"<body style='background-color: #243B2C;'>"
    +"<center><h1>LISTAR CARROS</h1></center><br><br>"
    +"<hr>"
    +"<br><br>"
    +"<center>"
    +"<form action='../../form-result.php' method='post' target='_blank'>"
     +"<p>"
      +"CONSULTAR <input type='search' name='busqueda' placeholder='placa, marca, modelo...'>"
       +"<input type='submit' value='Buscar'>"
     +"</p>"
   +"</form>"
 +"</center>"
 
  +"<br>"
 +"<center>"
   
     +"<table>"
     +"<tr>"
         +"<th>PLACAS</th>"
         +"<th>MARCAS</th>"
         +"<th>MODELOS</th>"
         
     +"</tr>"
     +"<tr>"
     +"<td></td>"
     +"<td></td>"
     +"<td></td>"
         
     +"</tr>"
     +"<tr>"
     +"<td></td>"
     +"<td></td>"
     +"<td></td>"
     
         
     +"</tr>"
     +"<tr>"
     +"<td></td>"
     +"<td></td>"
     +"<td></td>"
       
     +"</tr>"
     +"<tr>"
     +"<td></td>"
     +"<td></td>"
     +"<td></td>"
     
     +"</tr>"
     +"<tr>"
     +"<td></td>"
     +"<td></td>"
     +"<td></td>"
         
     +"</tr>"
   +"</table>"
 
 +"</center>"
}

function paso2() {
    document.getElementById("info").innerHTML=""
  +"<body style='background-color: #243B2C;'>"
    +"<center><h1>LISTAR CARROS</h1></center><br><br>"
    +"<hr>"
    +"<br><br>"
    +"<center>"
    +"<form action='../../form-result.php' method='post' target='_blank'>"
     +"<p>"
      +"CONSULTAR <input type='search' name='busqueda' placeholder='placa, marca, modelo...'>"
       +"<input type='submit' value='Buscar'>"
     +"</p>"
   +"</form>"
 +"</center>"
 
  +"<br>"
 +"<center>"
   
     +"<table>"
     +"<tr>"
         +"<th>PLACAS</th>"
         +"<th>MARCAS</th>"
         +"<th>MODELOS</th>"
         
     +"</tr>"
     +"<tr>"
     +"<td></td>"
     +"<td></td>"
     +"<td></td>"
         
     +"</tr>"
     +"<tr>"
     +"<td></td>"
     +"<td></td>"
     +"<td></td>"
     
         
     +"</tr>"
     +"<tr>"
     +"<td></td>"
     +"<td></td>"
     +"<td></td>"
       
     +"</tr>"
     +"<tr>"
     +"<td></td>"
     +"<td></td>"
     +"<td></td>"
     
     +"</tr>"
     +"<tr>"
     +"<td></td>"
     +"<td></td>"
     +"<td></td>"
         
     +"</tr>"
   +"</table>"
 
 +"</center>";
}
function uno() {
    document.getElementById("info").innerHTML=""
  +"<body style='background-color: #243B2C;'>"
    +"<center><h1>AGREGAR SERVICIOS</h1></center><br><br>"
    +"<hr class='linea'>"
         +"<section class='registro'>"
             +"<input class='control' type='text' name='nombres' id='nombres' placeholder='placas del carro'>"
             +"<input class='control' type='num' name='nombres' id='nombres' placeholder='identificación'>"
             +"<input class='control' type='fecha' name='nombres' id='nombres' placeholder='fecha del servicio'>"
             +"<input class='control' type='time' name='nombres' id='nombres' placeholder='Hora del servicio'>"
+"<div>"
    +"<select  class='control' name='seleccionar' id='seleccionar' placeholder='seleccionar'>"
        +"<option value=''>lavado</option>"
        +"<option value=''>cambio de aceite</option>"
        +"<option value=''>guradar</option>"
        +"<option value=''>revisión</option>" 
    +"</select>"
+"</div>"
            
             +"<a href='#'><input class='boton' type='submit' value='REGISTRAR'></a>"
         +"<p><a href='menu.html'>VOLVER AL MENU</a></p>"
         +"</section>";
          }
function uno1() {
 document.getElementById("info").innerHTML=""

    +"<body style='background-color: #243B2C;'>"
    +"<center><h1>LISTAR CARROS</h1></center><br><br>"
    +"<hr>"
    +"<br><br>"
 +"<center>"
    +"<form action='../../form-result.php' method='post' target='_blank'>"
     +"<p>"
      +"CONSULTAR <input type='search' name='busqueda' placeholder='placa, marca, modelo...'>"
       +"<input type='submit' value='Buscar'>"
     +"</p>"
   +"</form>"
    +"</center>"
 
 +"<br>"
 +"<center>"
   
     +"<table>"
     +"<tr>"
         +"<th>PLACAS</th>"
         +"<th>MARCAS</th>"
         +"<th>MODELOS</th>"
         
     +"</tr>"
     +"<tr>"
         +"<td></td>"
         +"<td></td>"
         +"<td></td>"
         
         +"</tr>"
         +"<tr>"
         +"<td></td>"
         +"<td></td>"
         +"<td></td>"
             
         +"</tr>"
     +"<tr>"
     
         +"<td></td>"
         +"<td></td>"
         +"<td></td>"
       
     +"</tr>"
     +"<tr>"
     +"<td></td>"
     +"<td></td>"
     +"<td></td>"
       
     +"</tr>"
     +"<tr>"
     +"<td></td>"
     +"<td></td>"
     +"<td></td>"
         
     +"</tr>"
   +"</table>"
 
 +"</center>";

}

function uno2() {
    document.getElementById("info").innerHTML=""
   
       +"<body style='background-color: #243B2C;'>"
       +"<center><h1>LISTAR CARROS</h1></center><br><br>"
       +"<hr>"
       +"<br><br>"
    +"<center>"
       +"<form action='../../form-result.php' method='post' target='_blank'>"
        +"<p>"
         +"CONSULTAR <input type='search' name='busqueda' placeholder='placa, marca, modelo...'>"
          +"<input type='submit' value='Buscar'>"
        +"</p>"
      +"</form>"
       +"</center>"
    
    +"<br>"
    +"<center>"
      
        +"<table>"
        +"<tr>"
            +"<th>PLACAS</th>"
            +"<th>MARCAS</th>"
            +"<th>MODELOS</th>"
            
        +"</tr>"
        +"<tr>"
            +"<td></td>"
            +"<td></td>"
            +"<td></td>"
            
            +"</tr>"
            +"<tr>"
            +"<td></td>"
            +"<td></td>"
            +"<td></td>"
                
            +"</tr>"
        +"<tr>"
        
            +"<td></td>"
            +"<td></td>"
            +"<td></td>"
          
        +"</tr>"
        +"<tr>"
        +"<td></td>"
        +"<td></td>"
        +"<td></td>"
          
        +"</tr>"
        +"<tr>"
        +"<td></td>"
        +"<td></td>"
        +"<td></td>"
            
        +"</tr>"
      +"</table>"
    
    +"</center>";
   
   }
   

