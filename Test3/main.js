document.addEventListener("DOMContentLoaded", function(){
  var menu = document.querySelector('.menu')
  var trangThaimenu = "duoi100"
  var chungtoi = document.querySelector('.item-right-1')
  // console.log(chungtoi.offsetTop)
  var trangThaimenu1 = "duoi1210";
  var vtkhoivang = chungtoi.offsetTop;
  var chancuoi = vtkhoivang + 600;
  
  
  var phanTuLoad = document.querySelector('.s3')
  var trangThais3 = "duoi";
  console.log(phanTuLoad.offsetTop)
  var viTris3 = phanTuLoad.offsetTop -600;


  window.addEventListener('scroll', function(){
    // console.log(window.pageYOffset)
    if(window.pageYOffset > 100){
      if(trangThaimenu == "duoi100"){
        trangThaimenu = "tren100";
        menu.classList.add('menuden')
      }
    } else if(window.pageYOffset < 100){
      if(trangThaimenu == "tren100"){
        trangThaimenu = "duoi100"
        menu.classList.remove('menuden')
      }
    }
  })

  window.addEventListener('scroll', function(){
    if((window.pageYOffset > 1210) && (window.pageYOffset < chancuoi)){
      if(trangThaimenu1 == "duoi1210"){
        trangThaimenu1 = "tren1210"
        chungtoi.classList.add('chungtoi')
      }
    } else if((window.pageYOffset < 1210) || (window.pageYOffset > chancuoi)){
      if(trangThaimenu1 == "tren1210"){
        trangThaimenu1 = "duoi1210"
        chungtoi.classList.remove('chungtoi')
      }
    }

    
    if(window.pageYOffset > viTris3){
      if(trangThais3 == "duoi"){
        trangThais3 = "tren"
        phanTuLoad.classList.add('dilen')
      }
    }
  })
}, false)