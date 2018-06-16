
  function EseEsconde(){
    document.getElementById("bracoe").style.transform="rotate(120deg)";
    document.getElementById("bracoe").style.marginLeft="-2%";
    document.getElementById("bracoe").style.zIndex=1;
  }
  function DseEsconde(){
    document.getElementById("bracod").style.transform="rotate(-120deg)";
    document.getElementById("bracod").style.marginLeft="45%";
    document.getElementById("bracod").style.zIndex=1;
    document.getElementById("boca").style.animation="fecharboca 1s 1";
    document.getElementById("boca-fundo").style.backgroundColor="antiquewhite";
    document.getElementById("lingua").style.backgroundColor="antiquewhite";
    document.getElementById("fissura-lingua").style.backgroundColor="antiquewhite";
  }
function revela(){
  document.getElementById("bracoe").style.transform="rotate(20deg)";
  document.getElementById("bracoe").style.marginLeft="-25%";
  document.getElementById("bracoe").style.zIndex=1;
  document.getElementById("bracod").style.transform="rotate(-20deg)";
  document.getElementById("bracod").style.marginLeft="90%";
  document.getElementById("bracod").style.zIndex=1;
  document.getElementById("boca").style.animation="fecharboca 5s infinite";
  document.getElementById("boca-fundo").style.backgroundColor="black";
  document.getElementById("lingua").style.backgroundColor="pink";
  document.getElementById("fissura-lingua").style.backgroundColor="black";
}