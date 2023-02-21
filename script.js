$(document).ready(function (){
    $message = false;
    // Le nombre à deviner
    aleatoire = Math.ceil(Math.random()*100);
    $("button").click(function (){
        $choix = $("#essai").val();
        if (aleatoire > $choix){
            for (x=1; x <= $choix; x++) {
                $("#" + x).remove();
            }
            $message = true;
        }
        else if (aleatoire < $choix){
            for (x=$choix; x <= 100; x++){
                $("#"+x).remove();
            }
            $message = true;
        }
        else {
            $("#validation").append("<p>Bravo!</p><br>" + "<button id='rejouer'>Reessayer</button>");
            for (x=1; x <= 100; x++){
                $("#"+x).remove();
            }
            $("#rejouer").click(function (){
                location.reload(true);
            });
            $message = false;
        }
        Message()
    });
    function Message(){
        if ($message === false) {
            document.getElementById("erreur").setAttribute("class", "invisible");
        }
        else {
            document.getElementById("erreur").removeAttribute("class", "invisible");
        }
    }
});