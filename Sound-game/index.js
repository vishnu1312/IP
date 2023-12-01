

 /*  var rolex = document.querySelector(".rolex");

  rolex.addEventListener("click", function() {

    var audio = new Audio("ROLEX.mp3");

    audio.play();

   rolex.addEventListener("dblclick", function() {

        if(!audio.paused) {

            audio.pause();

        }
    });
  });

   var leo = document.querySelector(".leo");

  leo.addEventListener("click", function() {

    var audio = new Audio("vijay.mp3");

    audio.play();

    leo.addEventListener("dblclick", function() {

       if(!audio.paused) {

        audio.pause();

       }
    });
  });
   var salaar = document.querySelector(".salaar");

  salaar.addEventListener("click", function() {

    var audio = new Audio("SALAAR.mp3");

    audio.play();

    salaar.addEventListener("dblclick", function() {

      if(!audio.paused) {

        audio.pause();

      }
    });
  });

  var rocky = document.querySelector(".rocky");

  rocky.addEventListener("click", function() {

    var audio = new Audio("KGF.mp3");

    audio.play();

    rocky.addEventListener("dblclick", function() {

      if(!audio.paused) {

        audio.pause();

      }
    });
  });

 var ntr =  document.querySelector(".ntr");

   ntr.addEventListener("click", function() {

    var audio = new Audio("NTR30.mp3"); 

    audio.play();

    ntr.addEventListener("dblclick", function() {

     if(!audio.paused) {

      audio.pause();

     }
    });
  });

  var pushpa = document.querySelector(".pushpa");

  pushpa.addEventListener("click", function() {

    var audio = new Audio("PUSHPA.mp3");

    audio.play();

    pushpa.addEventListener("dblclick", function() {

      if(!audio.paused) {

        audio.pause();

      }
    });
  });

 var rrr =  document.querySelector(".rrr");

 rrr.addEventListener("click", function() {

   /* var audio = new Audio("RRR.mp3");

    audio.play();

    rrr.addEventListener("dblclick", function() {

      if(!audio.paused) {

        audio.pause();

      }
    });*/
  /*  rrr.style.color = "yellow";
  });

 document.addEventListener("keydown", function() {
   alert("Key pressed!")
 });*/

 function stop() {
   if(!audio.paused) {
    audio.pause();
   }
 }
 function makesound(key) {
  switch(key) {
    case "a" :
      var song = new Audio("./ROLEX.mp3");
      song.play();
      break;
      
    case "b" :
      var song = new Audio("./vijay.mp3");
      song.play();
      break;
    case "c" :
      var song = new Audio("./SALAAR.mp3");
      song.play();
      break;
    case "d" :
      var song = new Audio("./KGF.mp3");
      song.play();
      break;
    case "e":
      var song = new Audio("./NTR30.mp3");
      song.play();
      break;
    case "f" :
      var song = new Audio("./PUSHPA.mp3");
      song.play();
      break;
    case "g" : 
      var song = new Audio("./RR.mp3");
      song.play();
      break;
    default :
      alert("🚫entered wrong key!");
  }
 }
 document.addEventListener("keydown", function(event) {
   makesound(event.key);
 });

 var number = document.querySelectorAll(".btn").length;

 for(var i=0;i< number; i++) {
  document.querySelectorAll(".btn")[i].addEventListener("click", function() {
  var button = this.innerHTML;
  makesound(button);
 /* document.querySelectorAll(".btn")[i].addEventListener("dblclick", function() {
   stop();
  });*/
  });
 }

