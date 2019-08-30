function carregar() {
  // var MSG recebe o conteúdo do ID MSG no HTML
  var msg = document.getElementById("msg");
  // var IMG recebe o conteúdo do ID IMAGEM no HTML
  var img = document.getElementById("imagem");
  //var DATA recebe NOVA DATA
  var data = new Date();
  //var HORA recebe conteúdo da var DATA e pega as horas atuais do pc
  var hora = data.getHours();
  msg.innerHTML = `Agora são ${hora} horas.`;
  // SE a hora for maior ou igual a 0 e menor que 12 = BOM DIA
  if (hora >= 0 && hora < 12) {
    //BOM DIA
    img.src = `manha.png`;
    document.body.style.background = "#fec28e";
    // SENÃO SE a hora for maior ou igual 12 e menor que 18 = BOA TARDE
  } else if (hora >= 12 && hora < 18) {
    //BOA TARDE
    img.src = `tarde.png`;
    document.body.style.background = "#95605c";
    //SENÃO BOA NOITE
  } else {
    //BOA NOITE
    img.src = `noite.png`;
    document.body.style.background = "#394144";
  }
}
