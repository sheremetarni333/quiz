

$(document).ready(function(){
    $("#hombre").click(function(){
       $("#paso1").show();
       $("#paso0").hide();
  localStorage.setItem('paso1', 'inicio');
    });
    $("#mujer").click(function(){
       $("#paso1").show();
       $("#paso0").hide();
  localStorage.setItem('paso1', 'inicio');
  
    });
  
  $("#b1").click(function(){
       $("#paso2").show();
       $("#paso1").hide();
       $("#paso0").hide();
  localStorage.setItem('paso2', 'inicio');
    });
  
  $("#b2").click(function(){
       $("#paso3").show();
       $("#paso2").hide();
       $("#paso1").hide();
       $("#paso0").hide();
  localStorage.setItem('paso3', 'inicio');
    });
  $("#b3").click(function(){
       $("#paso4").show();
       $("#paso3").hide();
       $("#paso2").hide();
       $("#paso1").hide();
       $("#paso0").hide();
  localStorage.setItem('paso4', 'inicio');
    });
  $("#b4").click(function(){
      
       $("#paso5").show();
       $("#paso4").hide();
       $("#paso3").hide();
       $("#paso2").hide();
       $("#paso1").hide();
       $("#paso0").hide();
  localStorage.setItem('paso5', 'inicio');
      
    });
  $("#genero").click(function(){
       $("#paso5").show();
       $("#paso4").hide();
       $("#paso3").hide();
       $("#paso2").hide();
       $("#paso1").hide();
       $("#paso0").hide();
  localStorage.setItem('paso5', 'inicio');
    });
  $("#estatura").click(function(){
       $("#paso5").show();
       $("#paso4").hide();
       $("#paso3").hide();
       $("#paso2").hide();
       $("#paso1").hide();
       $("#paso0").hide();
  localStorage.setItem('paso5', 'inicio');
    });
  $("#edad").click(function(){
       $("#paso5").show();
       $("#paso4").hide();
       $("#paso3").hide();
       $("#paso2").hide();
       $("#paso1").hide();
       $("#paso0").hide();
  localStorage.setItem('paso5', 'inicio');
    });
  $("#peso").click(function(){
       $("#paso5").show();
       $("#paso4").hide();
       $("#paso3").hide();
       $("#paso2").hide();
       $("#paso1").hide();
       $("#paso0").hide();
  localStorage.setItem('paso5', 'inicio');
    });
  $("#objetivo").click(function(){
       $("#paso5").show();
       $("#paso4").hide();
       $("#paso3").hide();
       $("#paso2").hide();
       $("#paso1").hide();
       $("#paso0").hide();
  localStorage.setItem('paso5', 'inicio');
    });
  
  
  
  });
  
  
  function asignar(opc){
   
  if(opc=="check1"){
  document.getElementById("check2").checked = false;
  document.getElementById("check3").checked = false;
  document.getElementById("check4").checked = false;
  }
  if(opc=="check2"){
  document.getElementById("check1").checked = false;
  document.getElementById("check3").checked = false;
  document.getElementById("check4").checked = false;
  }
  if(opc=="check3"){
  document.getElementById("check2").checked = false;
  document.getElementById("check1").checked = false;
  document.getElementById("check4").checked = false;
  }
  if(opc=="check4"){
  document.getElementById("check2").checked = false;
  document.getElementById("check3").checked = false;
  document.getElementById("check1").checked = false;
  }
  
  if(opc=="check5"){
  document.getElementById("check6").checked = false;
  document.getElementById("check7").checked = false;
  document.getElementById("check8").checked = false;
  }
  if(opc=="check6"){
  document.getElementById("check5").checked = false;
  document.getElementById("check7").checked = false;
  document.getElementById("check8").checked = false;
  }
  if(opc=="check7"){
  document.getElementById("check6").checked = false;
  document.getElementById("check5").checked = false;
  document.getElementById("check8").checked = false;
  }
  if(opc=="check8"){
  document.getElementById("check6").checked = false;
  document.getElementById("check7").checked = false;
  document.getElementById("check5").checked = false;
  }
  
  if(opc=="check9"){
  document.getElementById("check10").checked = false;
  document.getElementById("check11").checked = false;
  
  }
  if(opc=="check10"){
  document.getElementById("check9").checked = false;
  document.getElementById("check11").checked = false;
  
  }
  if(opc=="check11"){
  document.getElementById("check9").checked = false;
  document.getElementById("check10").checked = false;
  
  }
  }
  