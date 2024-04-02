
let Backimg = document.getElementById("backimage");
let Backbutton = document.getElementsByClassName("character-buttom");
let CharacterImg = document.getElementById("img-back")
let head = document.querySelector(".titulo");

//Adiciona a classe de animação na id e logo em seguida remove
function animationBack(){
    CharacterImg.className = "no-ani";
    Backimg.className = "no-ani";
    window.requestAnimationFrame(function (time) {
    window.requestAnimationFrame(function (time) {
    CharacterImg.className = "Aniimg";    
    Backimg.className = "backani";
  });
});
}

function character(imgId){
    if(imgId == 1){     
        Backimg.style.backgroundImage = "url('/Asset/imagens/um-horizonte-da-cidade-a-noite-ilustracao-de-arte-digital-estilo-quadrinhos_783299-544.avif')"
        CharacterImg.setAttribute('src', 'Asset/imagens/hellboy_by_kadmon78_dgmpus2-375w.png')
        document.body.style.backgroundColor = "#01050e";
        head.style.backgroundColor = "#01050e";
        animationBack()

    }
    else if (imgId == 2)
    {
        Backimg.style.backgroundImage = "url('Asset/imagens/Anime-Red-City-Fire-3.jpg.webp')"
        CharacterImg.setAttribute('src', 'Asset/imagens/3241651-bprd_hellonearth_113-removebg-preview.png')
        document.body.style.backgroundColor = "#8e231c";
        head.style.backgroundColor = "#8e231c";
        animationBack()
    }
    else{
        Backimg.style.backgroundImage = "url('Asset/imagens/water-scene-sea-background_875722-14485.avif')"
        CharacterImg.setAttribute('src', 'Asset/imagens/zeren-swamper-wong-comiccover-removebg-preview.png')
        document.body.style.backgroundColor = "#001c3b";
        head.style.backgroundColor = "#b3dec0";
        animationBack()
    }

}   