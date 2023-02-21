$(document).ready(function (){
    // Le nombre à deviner
    aleatoire = Math.ceil(Math.random()*100);
    $("button").click(function (){
        $choix = $("#essai").val();
        if (aleatoire > $choix){
            for (x=1; x <= $choix; x++) {
                $("#" + x).remove();
            }
        }
        else if (aleatoire < $choix){
            for (x=$choix; x <= 100; x++){
                $("#"+x).remove();
            }
        }
        else {
            $("#validation").append("<p>Bravo!</p><br>" + "<button id='rejouer'>Reessayer</button>");
            for (x=1; x <= 100; x++){
                $("#"+x).remove();
            }
            $("#rejouer").click(function (){
                location.reload(true);
            });
        }
    });
});