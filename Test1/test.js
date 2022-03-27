document.addEventListener("DOMContentLoaded", function(){
  
  var tamGiac = document.getElementsByClassName('tamGiac');
  var tamGiac = tamGiac[0];
  var danhSach = document.getElementsByClassName('danhSach');
  var danhSach = danhSach[0];

  tamGiac.onclick = function(){
    // this.style.color = 'white';
    this.classList.toggle('tamGiacTrang'); 
    danhSach.classList.toggle('ra');
  }
}, false)
