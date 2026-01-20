// ===== DONNÉES PERSONNES =====
const data = {
  cecilia: {
    title:"De la part de Cécilia 💖",
    subtitle:"Tu peux cliquer sur les images ma belle 😉 !",
    items:[
      { image:"mood/soleil.jpeg", phrase:"Si t'étais un \"temps\", tu serais le soleil quand il fait froid\n.", letter:"tu sais le rayon tout chaud et orange qui vient te réchauffer en 2 sec et tu le regarde même s'il te crame les yeux tellement il est beau et qu'il te réconforte" },
      { image:"mood/jimin.jpeg", phrase:"Si t'étais un membre des BTS, tu serais Jimin\n", letter:"t'es douce et mims et tu dirais pas non à Junkgook (#IlluminateToiMemeTuSais)\n" },
      { image:"mood/fleur.jpeg", phrase:"Si tu étais une fleur, tu serais la spider lilly🌷", letter:"elle est accueillante, pétillante et intense comme toi (ca se voit c'est une hypersensible)" },
      { image:"mood/helena.jpeg", phrase:"Si tu étais un perso de heated rivalry, tu serais Helena Rygg", letter:"toujours hypée par l'amour des autres, trop belle et parfaite et surtout la meilleure amie sur qui on peut toujours compter" }
    ]
  },
  sarah: {
    title:"De la part de Sarah ✨",
    subtitle:"Tu peux cliquer sur les images ma belle 😉 !",
    items:[
      { image:"mood/impressionnisme.jpeg", phrase:"Si tu étais un mouvement artistique, tu serais l'impressionnisme", letter:"Une palette de couleurs qui fait du bien aux yeux: il ne tient qu'à nous de chercher et trouver chaque détail !" },
      { image:"mood/ile.jpeg", phrase:"Si tu étais un pays, tu serais une île tropicale", letter:"Un paysage chaud et accueillant, on se sent bien là-bas ! " },
      { image:"mood/smoothie.jpeg", phrase:"Si tu étais une boisson, tu serais un smoothie frais au bord de la plage", letter:"La petite dose de bonheur qui vient parfaire le tout " },
      { image:"mood/ourson.png", phrase:"Si tu étais une sucrerie, tu serais un ourson petit lu", letter:"Aussi bon et tendre à l'intérieur qu'à l'extérieur " },
      { image:"mood/deux.png", phrase:"Si tu étais un chiffre, tu serais le 2", letter:"Un symbole de coopération et de sensibilité" },
      { image:"mood/oracle.jpeg", phrase:"Si tu étais un jeu, tu serais un orcacle", letter:"Toujours là pour nous aider quand on en a besoin" },
      { image:"mood/croissant.jpeg", phrase:"Si tu étais une odeur, tu serais les patisseries qui sortent du four", letter:"Spécialement tôt le matin quand on se balade dans la rue, ca donne envie de rentrer dans le boulangerie !" },
      { image:"mood/chale.jpg", phrase:"Si tu étais un vêtement, tu serais un joli châle", letter:"Peu importe la saison, tu nous enveloppes d'une chaleur réconfortante" }

    ]
  }
};

//===== BOUTON PAS MOI =====
function openNotYou() {
  document.getElementById("notYouOverlay").classList.add("active");
}

function closeNotYou() {
  document.getElementById("notYouOverlay").classList.remove("active");
}

// ===== PETITS MOTS =====
// ===== PETITS MOTS (ENVELOPPES) =====
const miniLetters = {
  Cecilia: {
    text: "Sarah 💖\n\nEncore une année passée ensemble et je me lasserai jamais de ca !\n" +
      "Tu es ce petit frisson qu'on ressent dans la vie quand la joie dépasse l'élécrticité dans nos neuronnes et qu'elle s'échappe partout.\n" +
      "Je veux ressentir ce frisson pour toujours, à jamais, forever, immer, 영원히.\n" +
      "Tu es la plus belle chose qu'il me soit arrivé dans la vie, ma batterie sociale est et restera toujours pleine avec toi!\n" +
      "Je t'aime et demeure tienne pour toujours.\n" +
      "Joyeux anniversaire 💌!\n" +
      "Cécilia",
    image: "images/amelie.jpeg"
  },
  Sarah: {
    text: "Mon dieu 11 ans d'amitié (fais le calcul ça fait plus de la moitié de nos vies omg)." +
      " Je pense qu'on peut remercier Alex et Gabriel de nous avoir jetées dans les bras l'une de l'autre.\n" +
      " On a littéralement grandi ensemble et je pourrais pas être plus fière de la femme que tu es devenue." +
      " Ta générosité, ton sens de l'écoute, ta sincérité, ton humour (et encore bien d'autres qualités) font que tu es un modèle pour moi.\n" +
      " Je te souhaite une année remplie de bonheur, d'amour, ET D'ARGENT (dieu sait que ça manque cruellement ces temps-ci)." +
      " Continue sur ta lancée, le positif attire le positif ! Passe une belle journée d'anniversaire :)\n" +
      "On t'aime fort," +
      "(je t'épargne le \"bébé rarah cupcake\" mais j'en pense pas moins hehe)\n" +
      "Sarah ",
    image: "images/cookie.jpg"
  },
  Maman: {
    text: "Ma chérie,\n" +
        "22 ans aujourd’hui… et toujours cette même émotion quand je pense à la femme que tu es devenue. Tu as grandi tellement vite!\n" +
        "Tu es forte, sensible, lumineuse, et tellement plus que ce que tu crois parfois.\n" +
        "Je suis fière de toi, de ton chemin, de ton cœur et de ta façon unique d’être au monde, et même quand tu es déconcertante!\n" +
        "Que cette nouvelle année t’apporte confiance, douceur et tout ce que tu mérites dans ta vie.\n" +
        "Je t’aime plus que les mots ne pourront jamais le dire.\n" +
        "Joyeux anniversaire ma douce🤍\n" +
        "Maman.️",
    image: "images/maman.jpg"
  },
  Benoit: {
    text: "Sarah, voici encore une année qui s’est écoulé…\n" +
        "Sache que tu pourras toujours compter sur nous, nous serons toujours présents même dans les moments difficiles, sache que nous serons là pour nous dresser devant les obstacles que la vie sèmera sur ta route.\n" +
        "Nous te souhaitons un joyeux anniversaire et nous t’aimons très fort.\n" +
        "Beau papa🤍️",
    image: "images/maman.jpg"
  },
  Gabriel: {
    text: "Ma chère sœur,\n" + " je te souhaite un très joyeux anniversaire en ce jour d’anniversaire qu’est le tient (d’anniversaire)\n" +
      " bisous ma chère sœur et joyeux anniversaire le jour de ton anniversaire de ta naissance d’anniversaire,\n" +
      " voilà en fait, on fête ta naissance, joyeux 22ème naissance\n" +
      "Gabriel",
    image: "images/gabriel.jpg"
  },
  Emma: {
    text: "coucou ma sasou ! Et oui c’est encore ta sœur que tu as tant détestée 😘.\n" +
        "J’espère que tu vas adorer ta journée d’anniversaire!\n" +
        "Je suis très fière de toi et je te fais plein plein de gros bisous !\n"+
        "Je te souhaite plein de bonheur dans ta petite vie bien débordé et oublie pas on va voir bruno mars !!!"+
        "Emma 💕",
    image: "images/emmav2cop.jpg"
  },
  Alexandre: {
    text: "À ma petite sœur à qui je ne démontre pas beaucoup d’affection, mais qui compte plus que tout :\n" +
      "tu deviens petit à petit une femme accomplie, toujours chiante, mais on peut pas te demander la lune non plus.\n" +
      "Joyeux anniversaire, j’espère que t’accompliras de grandes choses, à défaut de faire la vaisselle.\n" +
      "Je t’aime fort\n" +
      "Alexandre",
    image: "images/trio.jpg"
  },
  Lucie: {
    text: "Je te souhaite un très heureux anniversaire, je t’envoie tout mon amour.\n" +
      "T’es une personne formidable que j’aime de tout mon cœur.\n" +
      "Lucie",
    image: "images/lucie.jpg"
  },
  Chloe: {
    text: "Coucou ma Sarah, je te souhaites un très bel anniversaire, tant de belles choses vécu à tes côtés, je suis fière des personnes que nous sommes aujourd’hui. \n" +
      "Avec tous ces moments passés à tes côtés, et toutes les épreuves plus ou moins faciles, en tout cas sache que je t’aime fort, plein de bonnes choses 🥰❤️\n" +
      "Chloé",
    image: "images/anniv.jpeg"
  },
  Laura: {
    text: "Coucou Sarah !😘 \n\nJe te souhaite un joyeux Anniversaire !! La star a déjà 22 ans 🤯\n" +
      "Entre team Verseau on se comprends, on a envie d’indépendance, de trouver sa voie et profiter de la viiiie (en vrai un peu comme tout le monde nan ?) \n" +
      "Je t’adore trop trop même si on se voit peut, d’ailleurs faut qu on change vite ça !! Reste aussi magnifique et sincère, gentille et adorable ! Je te souhaite que tu bonheur parce que tu le mérite tellement 🩷 Gros bisous et passe une douce journée ☺️\n" +
      "Laura",
    image: "images/laura.jpg"
  },
  Matthias: {
    text: "Du Canada à l’Italie et surtout en passant par Mambouhans, bon anniversaire Pepette!\n" +
      "Gros bisous de la part de Kamy aussi ! (C’est faux il mord).\n" +
      " Je t’aime 😘\n" +
      "Matthias",
    image: "images/matthiasv2.jpg"
  },
  AnnaEve: {
    text: "Joyeux anniversaire Sarah, même si on s'est pas bcp vue t'es vraiment une super personne j'espère qu'on aura l'occasion de ce revoir et j'espère surtout que tu vas bien t'amuser en ce jour de fête \n" +
      "Æ",
    image: ""
  },
  Kamy: {
    text: "Miaou ",
    image: "images/kamy.jpeg"
  },
};



// ===== DIAPORAMA =====
const slides = ["images/17.jpeg","images/gabriel.jpg","images/lucie.jpg", "images/amelie.jpeg",
    "images/anniv.jpeg","images/17v2.jpeg","images/matthias.jpg", "images/emmav2.jpg","images/cookie.jpg",
    "images/anna.jpg","images/laura.jpg",
    "images/vielles.jpeg","images/luciev2.jpg","images/bowling.jpeg","images/bac.jpg","images/cinev2.png",
    "images/trio.jpg","images/spa.jpeg","images/emma.jpg","images/finneas.jpeg","images/bal.jpg","images/laurav2.jpg",
    "images/monet.jpeg","images/bebe.jpg","images/montmartre.jpeg","images/caddie.jpg","images/monetv2.jpeg",
    "images/moulinrouge.jpeg","images/nico.jpeg","images/lycee.jpg","images/pizza.jpeg","images/polaroid.jpeg"];
let currentSlide = 0;
function nextSlide(){ currentSlide=(currentSlide+1)%slides.length; document.getElementById("sliderImage").src=slides[currentSlide]; }
function prevSlide(){ currentSlide=(currentSlide-1+slides.length)%slides.length; document.getElementById("sliderImage").src=slides[currentSlide]; }

document.addEventListener("DOMContentLoaded", () => {
  const sliderImg = document.getElementById("sliderImage");
  if (sliderImg && slides.length > 0) {
    sliderImg.src = slides[0];
  }
});

// ===== PARTICLES =====
particlesJS('particles-js',{particles:{number:{value:80},color:{value:'#ffb5c2'},shape:{type:'circle'},opacity:{value:0.6},size:{value:4},move:{speed:1}}});

// ===== BOUTON MOI =====
function goToMain(){
  document.getElementById('home').classList.remove('active');
  document.getElementById('main').classList.add('active');
  confetti({particleCount:200, spread:120, origin:{y:0.6}});
  playMusic();
}

// ===== MUSIQUE =====
function playMusic(){ const music=document.getElementById('music'); music.volume=0.4; music.play(); }

// ===== RETOUR =====
function backToMain(){
  document.getElementById('person').classList.remove('active');
  document.getElementById('main').classList.add('active');
  document.getElementById('letterContainer').style.display='none';
  document.getElementById('moodboard').style.display='grid';
}

// ===== OPEN PERSON =====
function openPerson(id){
  document.getElementById('main').classList.remove('active');
  document.getElementById('person').classList.add('active');

  const person = data[id];
  document.getElementById('personTitle').innerText = person.title;
  document.getElementById('personSubtitle').innerText = person.subtitle || "";

  const mood = document.getElementById('moodboard');
  mood.innerHTML = '';

  person.items.forEach((item,index)=>{
    const card = document.createElement('div');
    card.classList.add('card');

    const img = document.createElement('img');
    img.src = item.image;

    const p = document.createElement('p');
    p.innerText = item.phrase; // le texte reste sous la photo

    card.appendChild(img);
    card.appendChild(p);

    // Au clic sur la photo : ouvrir le petit encadré (sans son)
    card.onclick = () => openMoodMiniLetter(item.letter);

    card.style.opacity = 0;
    card.style.transform = 'scale(0.9)';
    setTimeout(()=>{
        card.style.transition='all 0.8s ease';
        card.style.opacity=1;
        card.style.transform='scale(1)';
    }, index*400);

    mood.appendChild(card);
});

}

// ===== OPEN / CLOSE LETTER =====
const paperSound = new Audio("sounds/paper.mp3");
function openLetter(text){
  paperSound.currentTime=0; paperSound.play();
  document.getElementById('moodboard').style.display='none';
  const letterContainer=document.getElementById('letterContainer');
  letterContainer.style.display='block';
  document.getElementById('letterText').innerText=text;
}
function closeLetter(){ document.getElementById('letterContainer').style.display='none'; document.getElementById('moodboard').style.display='grid'; }

function openMoodMiniLetter(text){
  const mood = document.getElementById('moodboard');
  const letterContainer = document.getElementById('letterContainer');
  const letterText = document.getElementById('letterText');

  // On cache les photos
  mood.style.display = 'none';

  // On injecte le texte
  letterText.innerText = text;

  // On affiche le conteneur
  letterContainer.style.display = 'block';

  // Petit bonus : on remonte en haut de page pour être sûr de voir le texte
  window.scrollTo(0,0);
}




// ===== PETITS MOTS =====
const miniLetterSound = new Audio("sound_letter.mp3");

function openMiniLetter(name){
  miniLetterSound.currentTime = 0;
  miniLetterSound.play();

  const data = miniLetters[name];
  const textElem = document.getElementById("miniLetterText");
  const imgElem = document.getElementById("miniLetterImg");

  // On met le texte
  textElem.innerText = data.text || data; // Gère si c'est un objet ou juste du texte

  // On gère l'image
  if (data.image) {
    imgElem.src = data.image;
    imgElem.style.display = "block";
  } else {
    imgElem.style.display = "none";
  }

  document.getElementById("miniLetterOverlay").classList.add("active");
}

function closeMiniLetter(){
  document.getElementById("miniLetterOverlay").classList.remove("active");
}
