document.addEventListener("DOMContentLoaded", function(){
  //Khai bao ca bien can dung
  var nut = document.getElementsByClassName('nut'),
      menutrai = document.getElementsByClassName('menutrai'),
      den = document.getElementsByClassName('den'),
      trang = document.getElementsByClassName('mautrang'),
      khoito = document.getElementsByClassName('noidungto');
    console.log(nut[0])
    console.log(menutrai[0])
    console.log(den[0])
    console.log(khoito[0])

  nut[0].onclick = function(){
    den[0].classList.add('len'); 
    // khoito[0].classList.add('dichphai')
    trang[0].classList.add('trangquay');
    menutrai[0].classList.remove('vetrai');
  }
  den[0].onclick = function(){
    den[0].classList.remove('len'); 
    khoito[0].classList.remove('dichphai')
    trang[0].classList.remove('trangquay');
    menutrai[0].classList.add('vetrai');
  }
}, false)