let img = document.getElementById("img-book");
let button = document.getElementById("button-book");
let button2 = document.getElementById("button-book2");

function animation(){
        img.className = "no-ani";
        window.requestAnimationFrame(function (time) {
        window.requestAnimationFrame(function (time) {
        img.className = "ani";
      });
    });
  }

function carrosel(imgid){

    if( imgid == 1 ){
        animation()
        img.setAttribute('src', 'Asset/imagens/hellboy 1.jpg');
        button.setAttribute('onclick', "carrosel(2)")
        button2.setAttribute('onclick', "carrosel(6)")
        
    }
    if( imgid == 2  ){
        animation()
        img.setAttribute('src', 'Asset/imagens/hellboy 2.jpg');
        button.setAttribute('onclick', 'carrosel(3)');
        button2.setAttribute('onclick', "carrosel(1)")
        
    }
    if( imgid == 3 ){
        animation()
        img.setAttribute('src', 'Asset/imagens/hellboy 3.jpg');
        button.setAttribute('onclick', 'carrosel(4)');
        button2.setAttribute('onclick', "carrosel(2)")
    }
    if( imgid == 4 ){
        animation()
        img.setAttribute('src', 'Asset/imagens/hellboy 4.jpg');
        button.setAttribute('onclick', 'carrosel(5)');
        button2.setAttribute('onclick', "carrosel(3)")
    }
    if( imgid == 5 ){
        animation()
        img.setAttribute('src', 'Asset/imagens/hellboy 5.jpg');
        button.setAttribute('onclick', 'carrosel(6)');
        button2.setAttribute('onclick', "carrosel(4)")
    }
    if( imgid == 6){
        animation()
        img.setAttribute('src', 'Asset/imagens/hellboy 6.jpg');
        button.setAttribute('onclick', 'carrosel(1)');
        button2.setAttribute('onclick', "carrosel(5)")
    }

} 