
        var elementos = document.querySelectorAll('.player-options div > img');
        var playerOpt = "";
        var inimigoOpt = "";

        function validarVitoria() {

            let vencedor = document.querySelector('.vencedor');
    if (playerOpt === "paper") {
        if (inimigoOpt === "paper") {
            // Empate
            vencedor.innerHTML = "O jogo foi empatado";
        } else if (inimigoOpt === "scisor") {
            // Inimigo ganhou
            vencedor.innerHTML = "A máquina ganhou";
        } else if (inimigoOpt === "rock") {
            // Você ganhou
            vencedor.innerHTML = "Você ganhou!";
        }
    }

    if (playerOpt === "scisor") {
        if (inimigoOpt === "scisor") {
            // Empate
            vencedor.innerHTML = "O jogo foi empatado";
        } else if (inimigoOpt === "rock") {
            // Inimigo ganhou
            vencedor.innerHTML = "A máquina ganhou";
        } else if (inimigoOpt === "paper") {
            // Você ganhou
            vencedor.innerHTML = "Você ganhou!";
        }
    }

    if (playerOpt === "rock") {
        if (inimigoOpt === "rock") {
            // Empate
            vencedor.innerHTML = "O jogo foi empatado";
        } else if (inimigoOpt === "paper") {
            // Inimigo ganhou
            vencedor.innerHTML = "A máquina ganhou";
        } else if (inimigoOpt === "scisor") {
            // Você ganhou
            vencedor.innerHTML = "Você ganhou!";
        }
    }

}
        function resetInimigo(){
            const enemyOptions = document.querySelectorAll('.enemy-options div');
            for(var i = 0; i <enemyOptions.length; i++){
                enemyOptions[i].childNodes[0].style.opacity = 0.3;     
        }
    }



        function inimigoJogar(){
            let rand = Math.floor(Math.random()*3);

            const enemyOptions = document.querySelectorAll('.enemy-options div');
            resetInimigo();
            
            for(var i = 0; i <enemyOptions.length; i++){
                if(i == rand){
                    enemyOptions[i].childNodes[0].style.opacity = 1;
                    inimigoOpt = enemyOptions[i].childNodes[0].getAttribute('opt');
                }

            }


            validarVitoria();
        

            //alert(playerOpt);
            //alert(inimigoOpt);
        }

        function resetOpacityPlayer(){
            for (var i = 0; i< elementos.length; i++){
                elementos[i].style.opacity = 0.3;
            }
        }

        for (var i = 0; i< elementos.length; i++){
            elementos[i].addEventListener('click', function(t){
                resetOpacityPlayer();
                t.target.style.opacity = 1;
                playerOpt = t.target.getAttribute('opt');

                inimigoJogar();

                

                //alert(playerOpt);
                
            });

        }
   