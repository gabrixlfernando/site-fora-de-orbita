// Menu Mobile Responsivo

document.querySelector(".abrir-menu").onclick = function () {
    document.documentElement.classList.add("menu-ativo");
  };
  document.querySelector(".fechar-menu").onclick = function () {
    document.documentElement.classList.remove("menu-ativo");
  };


  // menu fixo na tela

window.onscroll = function () {
    var top = window.scrollY || document.documentElement.scrollTop;
  
    if (top > 550) {
      // console.log("adicionar menu fixo");
      document.getElementById("topoFixo").classList.add("menu-fixo");
      document.getElementById("topoFixo").classList.remove("site");
    } else {
      // console.log("remover menu fixo");
      document.getElementById("topoFixo").classList.remove("menu-fixo");
      document.getElementById("topoFixo").classList.add("site");
    }
  };


  // esconde e mostra o btn
$(window).scroll(function () {
    if ($(this).scrollTop() > 350) {
      // distancia que tem que rolar antes de aparecer
      $("#back-to-top").fadeIn(250);
    } else {
      $("#back-to-top").fadeOut(250);
    }
  });
  
  // botao voltar ao topo
  
  var btn = $("#back-to-top");
  btn.click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });


  AOS.init();