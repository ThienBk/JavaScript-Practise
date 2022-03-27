document.addEventListener("DOMContentLoaded", function(){
  var nut = document.getElementById('nutDieuKhien');
  var khoi = document.getElementById('kcd');
  var trangThai = "x";
  
  nut.onclick = function(){
    if(trangThai == "x"){

      trangThai = "y";
      khoi.classList.remove('notMove');
      khoi.classList.add('move');
    } else if(trangThai == "y"){
      trangThai = "x";
      khoi.classList.remove('move');
    }
  }
},false)