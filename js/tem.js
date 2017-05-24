$(function(){

  tabderniers = {
    "David, 35 ans, responsable de service" : "Boule dans le ventre, bouffées de chaleur, gorge qui se serre... « Je ne pouvais plus me rendre sur mon lieu de travail... » Un bilan de compétences... et « j’ai retrouvé confiance, je sais où je vais et j’ai retrouvé de la sérénité et repris mes fonctions. »",
    "Isabelle, 30 ans, agent de production en industrie automobile pendant 6 ans" : "« Le bilan de compétences m’a permis de décider de devenir secrétaire médicale : j'ai fait une formation et suis maintenant en CDI au sein d’un laboratoire. »",
    "Julien, 40 ans, technicien en électroménager" : "Une hernie discale, des tensions relationnelle, un poste inadapté, 2 ans en arrêt de travail... Un bilan de compétences... et un retour sur un poste adapté, une formation, un changement d’emploi !",
    "Damien, 55 ans, cadre commercial" : "Burn out, conflit avec sa hiérarchie, une envie d’être utile, de travailler dans le domaine social... Un bilan de compétences... et un CDD dans un établissement spécialisé pour les personnes handicapées, puis un CDI en qualité d’agent technique et surveillant. « Je suis un homme heureux ! »",
    "Anaïs, 28 ans, ingénieure en informatique, 3 entreprises différentes en 3 ans" : "Mal être, difficulté à prendre des décisions... Un bilan de compétences...",
    "Justine, 38 ans, aide médico psychologique" : "Trop de routine, une envie d’évoluer... Un bilan de compétences... et un changement de poste, une formation de technicienne d’intervention sociale et familiale."
  }

  tabbilan = {
    "45 ans - Conseillère en vente" : "« Le bilan de compétences m'a permis de renforcer mes idées et oser. Une main qui aide à faire avancer, pouvoir partir sur une route différente. Je ne pensais pas être capable d'avoir de telles envies : devenir encadrant technique dans le domaine du maraîchage. »",
    "Vanessa" : "« Suite à un licenciement économique en tant qu'auxiliaire de vie à domicile, j'ai souhaité changer de métier. J'ai décidé de faire un bilan de compétences pour m'aider à trouver une nouvelle orientation professionnelle. Cela m'a permis de comprendre que je souhaitais rester dans le domaine médical et au contact des gens. De plus, j'ai pris conscience de mes compétences et de mes défauts. J'ai repris confiance en moi et fait de mes faiblesses une force en travaillant dessus. Aujourd'hui, je souhaite devenir secrétaire médicale. »",
    "Odile 40 ans - Cadre" : "« Suite à des changements dans la direction de l’entreprise, j’ai traversé une période tendue avec mon nouveau manager. Ce dernier envisageant même unilatéralement un changement de poste \"négatif\".<br>Le bilan de compétences suivi de quelques séances de coaching se sont inscrits à cet instant difficile. Les entretiens m’ont donné un lieu d’expression, un lieu où j’ai pu libérer mes doutes, mes angoisses et ma révolte. J’ai aussi pu faire, sereinement, le point de mes atouts et de mes points d’amélioration.<br>La confiance retrouvée m’a permis de tenir bon pendant la tempête. Aujourd’hui je suis toujours dans la même entreprise et mon manager me propose une évolution positive. »",
    "S." : "« Pour moi, maman de 3 enfants, la vie se trouvait dans une impasse.<br>Je ne savais plus dans quelle direction me diriger ; quels étaient mes rêves ?<br>Qui suis-je ? Qu’est-ce que je veux devenir ?<br>Des questions que je me posais sans cesse sans jamais trouver de réponses.<br>Un ami m’a parlé de Violaine et dès la première rencontre elle a su me mettre à l’aise et détecter mes besoins.<br>J’ai commencé mon bilan de compétences et au fur et à mesure que les séances ont passé, je suis sortie de mon mal-être.<br>Grâce aux « outils » proposés comme des questionnaires, une rencontre avec un psychologue, des échanges avec Violaine et des séances de détente, je me suis découverte.<br>J’ai vu très clairement mes défauts et mes qualités et ce que j’ai vu m’a plu... Une première !<br>Violaine n’est pas une magicienne car le trajet demande de l’investissement personnel et beaucoup de travail sur soi, mais elle est un guide bienveillant qui t'aide à trouver le bon chemin pour toi.<br>Aujourd’hui, j’ai redessiné mon avenir dans lequel je joue un rôle actif. J’ai trouvé du travail, j’ai commencé des études et j’avance d’un pas confiant. Merci Violaine. »",
    "V. 38 ans - Conseillère en insertion" : "« Ce bilan de compétences m'a permis de prendre conscience de ce qui était important pour moi. Il m'a permis de mieux cerner mes points forts et mes points faibles.<br>Avec l'aide et l'écoute de Mme Moizard, j'ai réalisé qu'il n'était jamais trop tard pour changer et avancer et que surtout, on a toujours le choix.<br>Je suis aujourd'hui plus sereine dans mon quotidien, personnel et professionnel. Je sais où je vais et pourquoi j'y vais et j'ai repris avec grand plaisir un parcours de formation. »",
    "S.V. Responsable R.H. Secteur Prêt à Porter" : "« Faire ce bilan de compétences m'a été très bénéfique dans la mesure où, au-delà de faire le point sur mes expériences et compétences professionnelles, il m'a permis d'apprendre à mieux me connaître et ainsi reprendre confiance en moi.<br>Mais cela, surtout grâce à l'écoute et à l'échange facile que nous avons pu avoir avec Mme Moizard. Merci ! »",
    "A. 31 ans" : "« Agent de production en industrie automobile, le bilan de compétences m’a permis d’oser entreprendre une formation d’éducateur canin. »",
    "R. 48 ans" : "« Mécanicien Poids Lourds, un problème de santé m’empêche de continuer à travailler dans ce secteur, je ne peux plus porter de charges lourdes. Grâce au bilan, j’ai pu trouver l’idée de devenir contrôleur technique et faire la formation financée par le FONGECIF. »",
    "V. 44 ans" : "« Hôtesse de caisse depuis 15 ans, je décide suite au bilan de reprendre des études. J’ai maintenant un BTS en gestion et je travaille dans un cabinet comptable. »",
    "O. 40 ans - Conseillère voyage" : "« J'ai vécu une expérience très enrichissante, dans un cadre chaleureux, qui m'a permis de faire le point sur de nombreux critères. Cela a été une occasion pour mon entourage personnel et professionnel de s'exprimer par le biais des questionnaires, et que je puisse constater que je ne me percevais pas du tout de la façon dont eux me perçoivent. Il faut être ouvert d'esprit, prêt à accepter les bons points comme les moins bons.<br>Depuis le bilan de compétences (il y a un an), je dirai que je travaille beaucoup sur ma personnalité, je me suis recentrée sur mes besoins, mes envies, ce dont je dois me défaire ou me rapprocher pour avancer professionnellement et dans ma vie personnelle.<br>Violaine, très accueillante, très à l'écoute et qui a su me mettre à l'aise dès le 1er rendez-vous.<br>En outre, j'apprécie le suivi du bilan de compétences. »",
    "V. B. 31 ans" : "« Le bilan m’a donné envie de faire bouger les choses, faire avancer les choses, continuer les démarches, j’ai pris confiance en moi ! Merci ! »",
    "J. M. R. 42 ans" : "« C’est un formidable outil pour voir ce que l’on sait faire et ce que l’on peut faire. En plus cela donne confiance ce qui favorise la facilité à se libérer de l’appréhension. »",
    "M. B. 27 ans" : "« Le bilan est utile lorsque l’on ne sait pas dans quelle voie se diriger. De plus, il nous permet de trouver des pistes ou suggestions de métiers auxquels on ne pense pas. J’ai beaucoup apprécié la simplicité et le contact amical du bilan ; cela est très bien car il permet d’avoir une ambiance détendue, ce qui se voit c’est le résultat final du bilan. »",
    "E. M. 29 ans" : "« Vous m’avez ouvert les yeux sur mon savoir et ma personne. C’est un accompagnement utile et intéressant pour un nouveau départ : développer la confiance en moi et entreprendre une formation. »",
    "L. B. 26 ans" : "« J’ai apprécié l’élaboration du projet qui m’a permis de me rendre compte que je pouvais évoluer. J’ai repris confiance en mon avenir professionnel et trouvé des moyens pour le mettre en place. »",
    "F. 45 ans" : "« J’ai apprécié la mise en confiance qui favorise la facilité à se libérer de toute appréhension. Le bilan de compétences est un formidable outil pour voir ce que l’on sait faire et ce que l’on veut et peut faire. »"
  }

  tabcp = {
    "L. 52 ans - Consultante" : "« J'ai demandé quelques séances d'équicoaching pour clarifier une difficulté au plan professionnel. Dans mon métier de consultant, je dois mener des actions de prospection auprès des entreprises. Je sais depuis longtemps que la prospection me demande de gros efforts... qui ne portent que peu de fruits.<br>Mes séances d'équicoaching m'ont permis de comprendre ce qui bloquait mes démarches et surtout de revivre avec l'animal ce que je vivais avec mes prospects.<br>Le plus intéressant a été de pouvoir dépasser mes sentiments négatifs et d'expérimenter en live une situation de réussite. Cette expérience ressentie avec le cheval m'a permis d'accéder à une nouvelle vision de la prospection qui ne me demande plus aujourd'hui d'effort particulier. »",
    "S. 38 ans - Cadre Service qualité" : "« J’ai rencontré Violaine il y a maintenant 5 ans pour un bilan de compétences.<br>A l’issue de ce bilan, j’ai reçu plusieurs confirmations et pistes à creuser. Mais pas encore prête pour déterminer un projet précis.<br>Je suis revenue voir Violaine quelques années plus tard, en coaching pour un projet professionnel et elle s’est très vite rendue compte que le projet le plus important et le plus urgent à ce moment là n’était pas professionnel mais personnel.<br>J’étais au bord de la dépression, perdue, sans envie, vide, abimée, ne sachant plus quoi faire ni réfléchir.<br>Nous avons donc passé plusieurs séances à travailler sur moi-même, l’émotionnel, relaxation, hypnose, exercices, trouver des mots sur mes maux… C’était une des rares personnes qui comprenait ce que je traversais et qui me soutenait.<br>Je n’étais plus seule. Maintenant en 2012, ça va beaucoup mieux, même si j’ai encore du chemin à parcourir. La rencontre avec le cheval m’a bouleversé. C’est comme ci « Petit saint » m’avait vu comme j’étais au fond de moi. Le vrai moi. Comme ci, il m’avait reconnu alors que j’ai moi-même du mal à me reconnaître. Violaine a été, est, et restera pour moi un repère, un guide.<br>Elle sait par quoi je suis passée, elle a su adapter ses séances par rapport à mes besoins, elle ne me juge pas, elle m’aide.<br>Encore maintenant, je me souviens de certaines choses qu’elle m’a dite et qui font échos en moi.<br>Je suis ravie d’avoir poussé la porte de son bureau, il y a maintenant 5 ans. Sans le savoir à l’époque, je venais de rencontrer LA personne qui allait faire et mon bilan de compétences professionnelles, et me coacher dans une période difficile de ma vie, et me retrouver grâce au cheval ! »",
    "Isabelle" : "« Oh là là !! Rien ne se passe, ce cheval n'accorde aucun crédit à ce que je dis ou lui indique. C’est le grand problème de ma vie, je suis bien gentille mais me laisse impressionner et suis incapable d'imposer mon opinion !<br>Allez on se bouge, on recule, on montre la direction, donner l'impulsion,... Eh eh, ça marche ! Il faut maintenant l'arrêter ? Et bien là aussi ça fonctionne ! Incroyable, j'ai réussi quelque chose qui me semblait infaisable une demi-heure plus tôt.<br>Beaucoup d'émotions surgissent, je ne sais pas très bien les identifier, je suis agréablement surprise de cette expérience. Quand j’y pense à nouveau je ressens toujours comme un apaisement. »",
    "Nicolas" : "« La pouliche m’a fait passer à l’action ! Au début, je me tiens prés d’elle et j’attends.<br>Je me suis senti en sécurité et je l’ai mise en mouvement pour lui proposer un exercice. Finalement j’ai compris que si je n’agissais pas et bien il ne se passe rien ! J’ai pensé à un moment que cette pouliche était une jeune fille... »",
    "Amélie" : "« Etonnant ! Le Petit Saint a mis en scène dés les premières minutes que j’ai passé avec lui dans l’enclos ce que je ressens régulièrement avec mes proches ! Il m’a tourné le dos, ignorant mes actions. J’ai pu ressentir puis agir !<br>Depuis j’ai vraiment compris à l’intérieur de moi (j’avais déjà compris intellectuellement) et je peux maintenant agir différemment quand je vis ce genre de situation dans la vie. Je vois les choses autrement. Je prends plus de recul, j’observe et je respecte le rythme de chacun.<br>J’ai aussi pris conscience que je suis beaucoup plus à l’aise quand le rythme est soutenu, que cela avance !<br>J’ai de bonnes capacités à canaliser l’énergie et l’impulsion du cheval ; et dans le travail aussi je retrouve cette dimension avec mes collaborateurs et la diversité des missions à mener. »"
  }

  tabcoaching = {
    "Anne 25 ans - Ingénieur en informatique" : "« Il en faut peu pour être heureux, mais encore faut-il trouver ce peu ! Madame Moizard m'a aidée à me connaître mieux et à connaître mes besoins, tant sur le plan professionnel que personnel. J'ai ainsi les éléments me permettant d'écrire ma propre vie, celle qui me va et me rend heureuse. Nos entrevues étaient très agréables, j'avais en face de moi une personne très humaine et sympathique, à l'écoute et compréhensive, que je recommande vivement ! »",
    "Frédéric" : "« Cela m'a aidé à beaucoup de niveaux : relations avec mes collègues, accepter mon handicap physique, garder une ligne de conduite, mon fil rouge ! D'utiliser des petits exercices en situation de stress. Cela m'a aussi fait avancer dans la relation avec ma femme ! »",
    "I. 30 ans" : "« Depuis un an, je ne pouvais plus conduire, j’ai du être en arrêt maladie, étant commerciale je ne pouvais plus me rendre chez les clients ! En quelques séances de coaching, j’ai pu reprendre le volant !! et retrouver mes clients ! »",
    "M. 37ans - Responsable communication Groupe International" : "« Le bilan et le coaching que j'ai suivi m'ont permis de me recentrer sur mes vraies valeurs, ce pour quoi je suis faite et surtout d'identifier de vraies pistes ou axes de travail. C’est un travail de fond indispensable pour progresser et envisager l'avenir plus sereinement. Cela permet également de mieux se connaitre, d’appréhender ses réactions et de mettre en place des mécanismes comportementaux adaptés. »",
    "N. 51 ans - Infirmière" : "« La perte d’un proche a rouvert des plaies anciennes et ravivé le deuil de mes parents. Après quelques mois de consultations, je peux maintenant retrouver un esprit positif et sortir de la tristesse. »",
    "C. 42 ans - Ingénieur" : "« Je suis arrivé chez Mme Moizard en plein burn out ! Je m’endormais sur des dossiers importants ! Impossible pour moi d’avancer sur un projet, ni même d’apprécier mes proches, pas même mes enfants ! Dès la première séance, j’ai pris conscience de la colère qui était en moi. J’ai pu ensuite déterminer des limites et avoir une meilleure gestion du stress, je sais reconnaitre les signaux avertisseurs (j’écoute les indices corporels ! une découverte !)Panser les blessures du passé et voir l’avenir plus sereinement. »"
  }

  //derniers témoignages au chargement de la page
  $.each(tabderniers, function(k,v){
    $("#tem").append("<p><span class='nomtem'>"+k+"</span><br><span class='txttem'><img src='img/tem1.png' alt='guillemets' class='temg1'>"+v+"<img src='img/tem2.png' alt='guillemets' class='temg2'></span></p>")
  })
  $(".btn-warning").css("background", "#1a3689")
  $("#derniersbutton").css("background", "#F19321")

  //derniers témoignages
  $("#derniersbutton").on("click", function(){
    $("#tem").html("")
    $.each(tabderniers, function(k,v){
      $("#tem").append("<p><span class='nomtem'>"+k+"</span><br><span class='txttem'><img src='img/tem1.png' alt='guillemets' class='temg1'>"+v+"<img src='img/tem2.png' alt='guillemets' class='temg2'></span></p>")
    })
    $(".btn-warning").css("background", "#1a3689")
    $("#derniersbutton").css("background", "#F19321")
  })

  //bilan de compétences
  $("#bilanbutton").on("click", function(){
    $("#tem").html("")
    $.each(tabbilan, function(k,v){
      $("#tem").append("<p><span class='nomtem'>"+k+"</span><br><span class='txttem'><img src='img/tem1.png' alt='guillemets' class='temg1'>"+v+"<img src='img/tem2.png' alt='guillemets' class='temg2'></span></p>")
    })
    $(".btn-warning").css("background", "#1a3689")
    $("#bilanbutton").css("background", "#F19321")
  })

  //cheval partenaire
  $("#cpbutton").on("click", function(){
    $("#tem").html("")
    $.each(tabcp, function(k,v){
      $("#tem").append("<p><span class='nomtem'>"+k+"</span><br><span class='txttem'><img src='img/tem1.png' alt='guillemets' class='temg1'>"+v+"<img src='img/tem2.png' alt='guillemets' class='temg2'></span></p>")
    })
    $(".btn-warning").css("background", "#1a3689")
    $("#cpbutton").css("background", "#F19321")
  })

  //cheval partenaire
  $("#coachingbutton").on("click", function(){
    $("#tem").html("")
    $.each(tabcoaching, function(k,v){
      $("#tem").append("<p><span class='nomtem'>"+k+"</span><br><span class='txttem'><img src='img/tem1.png' alt='guillemets' class='temg1'>"+v+"<img src='img/tem2.png' alt='guillemets' class='temg2'></span></p>")
    })
    $(".btn-warning").css("background", "#1a3689")
    $("#coachingbutton").css("background", "#F19321")
  })

})
