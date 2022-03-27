document.addEventListener("DOMContentLoaded", function(){
  var trangThai = "duoi300";
  var doituongmenu = document.getElementsByClassName('menu');
  window.addEventListener('scroll', function(){
    console.log(window.pageYOffset);
    if(window.pageYOffset > 300){
      if(trangThai == "duoi300"){
        trangThai = "tren300";

        doituongmenu[0].classList.add('nholai')
      }
    } else if(window.pageYOffset <= 300){
        if(trangThai == 'tren300'){
        doituongmenu[0].classList.remove('nholai')
        trangThai = 'duoi300'
        }
    }
  })
}, false)