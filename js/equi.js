$(function(){

  tabgeneral = {
    "présentation générale" : "Un espace, un cheval et soi...<br>Mettre en scène, en mouvement le théâtre intime de sa personnalité.<br>Ressentir corporellement et émotionnellement, prendre conscience et agir.<br>Passer d’une scène à l’autre ! Le pré, la vie, la ville !",
    "Apprendre de nouveaux comportements :" : "<ul><li>Prendre du recul face à une situation.</li><li>S’exprimer clairement.</li><li>Prendre conscience de la communication non verbale et de son incidence.</li><li>Prendre conscience de son intention profonde.</li><li>Dans toute demande, il y a un objectif, une intention, un début et une fin.</li><li>Donner une impulsion et une direction ; importance de la clarté du message.</li><li>Visualiser ce que l’on souhaite faire avant de demander.</li><li>Créer un lieu de sécurité, lui apprendre que la sécurité ce n’est plus de fuir mais de rester avec nous.</li><li>Le faire entrer, adhérer au projet. Importance de la cohérence, congruence dans le langage non verbale (exemplarité du manager).</li><li>Le leader est au milieu et organise le mouvement de l’autre.</li><li>Gérer ses émotions.</li><li>Gérer le stress.</li><li>Apprécier le moment présent.</li></ul>",
    "déroulement" : "Le coaching se déroule dans un cadre de sécurité où je reste attentive et présente. Il est inutile d’avoir des connaissances ou une expérience avec les chevaux.<br>Les seuls pré-requis sont le respect de l’animal, le désir de la découverte d’un autre univers et bien sûr celui d’aller un peu plus à la rencontre de soi-même. Aller vers un but, emmener, guider... c’est le rôle du coach.<br>Le cheval, un Outil de diagnostic, alterner les rendez-vous en ville avec les rendez-vous au pré.<br>Un rendez-vous « en consultation en ville » : déterminer les objectifs du coaching.<br>Un second rendez-vous en consultation au pré : diagnostic de la situation.<br>Un temps pour vivre... expérimenter, prendre conscience, adopter de nouveaux comportements si nécessaire.<br>Eventuellement d’autres rendez-vous de consultation en ville selon les situations.<br>Un autre rendez-vous au pré avec le cheval : observer ce qui a changé tant dans le comportement et le ressenti."
  }

  tabpart = {
    "Un accompagnement pour :" : "<ul><li>Prendre conscience de la communication non verbale.</li><li>Prendre conscience de nos motivations et intentions.</li><li>Améliorer sa communication.</li><li>Gérer ses émotions, son stress.</li><li>Entrer en relation, s’adapter, jouer avec ce qui se passe.</li><li>Mieux connaitre sa manière d’exprimer son leadership.</li><li>Créer un partenariat.</li><li>S’adapter à un environnement nouveau.</li><li>Développer son sens pédagogique.</li><li>Prendre confiance.</li><li>Se concentrer et vivre le moment présent.</li></ul>",
    "déroulement" : "Le coaching se déroule dans un cadre de sécurité où je reste attentive et présente. Il est inutile d’avoir des connaissances ou une expérience avec les chevaux.<br>Les seuls pré-requis sont le respect de l’animal, le désir de la découverte d’un autre univers et bien sûr celui d’aller un peu plus à la rencontre de soi-même. Aller vers un but, emmener, guider... c’est le rôle du coach.<br>Le cheval, un Outil de diagnostic, alterner les rendez-vous en ville avec les rendez-vous au pré.<br>Un rendez-vous « en consultation en ville » : déterminer les objectifs du coaching.<br>Un second rendez-vous en consultation au pré : diagnostic de la situation.<br>Un temps pour vivre... expérimenter, prendre conscience, adopter de nouveaux comportements si nécessaire.<br>Eventuellement d’autres rendez-vous de consultation en ville selon les situations.<br>Un autre rendez-vous au pré avec le cheval : observer ce qui a changé tant dans le comportement et le ressenti."
  }

  tabpro = {
    "Un accompagnement pour :" : "<ul><li>Communiquer efficacement.</li><li>Prendre sa place dans une équipe.</li><li>Prendre du recul face à une situation nouvelle.</li><li>Améliorer son leadership.</li><li>Mettre en place un projet.</li><li>Prendre conscience de la communication non verbale.</li><li>Optimiser sa manière de communiquer.</li><li>Mettre en place un projet, un changement de manière efficace.",
    "déroulement" : "Le coaching se déroule dans un cadre de sécurité où je reste attentive et présente. Il est inutile d’avoir des connaissances ou une expérience avec les chevaux.<br>Les seuls pré-requis sont le respect de l’animal, le désir de la découverte d’un autre univers et bien sûr celui d’aller un peu plus à la rencontre de soi-même. Aller vers un but, emmener, guider... c’est le rôle du coach.<br>Le cheval, un Outil de diagnostic, alterner les rendez-vous en ville avec les rendez-vous au pré.<br>Un rendez-vous « en consultation en ville » : déterminer les objectifs du coaching.<br>Un second rendez-vous en consultation au pré : diagnostic de la situation.<br>Un temps pour vivre... expérimenter, prendre conscience, adopter de nouveaux comportements si nécessaire.<br>Eventuellement d’autres rendez-vous de consultation en ville selon les situations.<br>Un autre rendez-vous au pré avec le cheval : observer ce qui a changé tant dans le comportement et le ressenti."
  }

  lieu = "<h3>lieux</h3><p>Consultations en ville : 6 Boulevard Carpeaux, 59300 Valenciennes.<br>Consultations au pré : 12 rue Philibert Dassonville, 59990 Sebourg.</p>"

  //pres générale au chargement de la page
  $.each(tabgeneral, function(k,v){
    $("#equi").append("<h3>"+k+"</h3><p>"+v+"</p>")
  })
  $("#equi").append(lieu)
  $(".btn-warning").css("background", "#1a3689")
  $("#generalbutton").css("background", "#F19321")

  //pres générale
  $("#generalbutton").on("click", function(){
    $("#equi").html("")
    $.each(tabgeneral, function(k,v){
      $("#equi").append("<h3>"+k+"</h3><p>"+v+"</p>")
    })
    $("#equi").append(lieu)
    $(".btn-warning").css("background", "#1a3689")
    $("#generalbutton").css("background", "#F19321")
  })

  //prestation particuliers
  $("#partbutton").on("click", function(){
    $("#equi").html("")
    $.each(tabpart, function(k,v){
      $("#equi").append("<h3>"+k+"</h3><p>"+v+"</p>")
    })
    $("#equi").append(lieu)
    $(".btn-warning").css("background", "#1a3689")
    $("#partbutton").css("background", "#F19321")
  })

  //prestation entreprises
  $("#probutton").on("click", function(){
    $("#equi").html("")
    $.each(tabpro, function(k,v){
      $("#equi").append("<h3>"+k+"</h3><p>"+v+"</p>")
    })
    $("#equi").append(lieu)
    $(".btn-warning").css("background", "#1a3689")
    $("#probutton").css("background", "#F19321")
  })

})
