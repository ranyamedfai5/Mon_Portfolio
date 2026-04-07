
const P = {
  alice:{title:"Alice in Memoryland",sub:"Jeu de Memory inspiré de la série Alice in Borderland",tags:["React","JavaScript","CSS","Responsive"],img:"Image/alice.png",github:"https://github.com/ton-repo",
    desc:"Jeu de Memory complet développé en <strong>React</strong>, inspiré de la série Alice in Borderland. Le joueur doit retrouver toutes les paires de cartes en un minimum de coups et de temps.",
    features:["Logique de jeu complète avec compteur de coups et chronomètre","Animations fluides au retournement des cartes","Interface <strong>responsive</strong> adaptée mobile et desktop","Système de score et meilleur temps via localStorage","Thème visuel inspiré de la série : ambiance sombre et cartes illustrées"]},
  biblio:{title:"Bibliothèque",sub:"Application de gestion de bibliothèque en Java",tags:["Java","POO","Gestion"],img:"Image/bibliotheque.png",github:"#",
    desc:"Application Java de gestion d'une bibliothèque permettant d'administrer un catalogue de livres complet avec gestion des emprunts.",
    features:["Ajout, modification et suppression de livres","Système d'emprunt et retour avec gestion des délais","Recherche multi-critères (titre, auteur, genre)","Architecture orientée objet avec héritage et polymorphisme","Interface graphique intuitive"]},
  frais:{title:"Gestion des frais",sub:"Application de gestion des frais de déplacement en C++/Qt",tags:["C++","Qt","Desktop"],img:"Image/image2.png",github:"#",
    desc:"Application desktop développée avec le framework <strong>Qt</strong> permettant aux professionnels de gérer et exporter leurs notes de frais de déplacement.",
    features:["Saisie des frais avec catégories (transport, hébergement, repas…)","Calcul automatique des totaux et remboursements","Export PDF des notes de frais","Interface graphique native Qt multi-plateforme","Persistance des données"]},
  cuisine:{title:"CuisinApi",sub:"Application web de recettes internationales via API REST",tags:["HTML","CSS","JavaScript","API REST"],img:"Image/recipe.png",github:"#",
    desc:"Application web de cuisine proposant des milliers de recettes du monde entier avec détails de préparation, ingrédients et vidéos, alimentée par une <strong>API externe</strong>.",
    features:["Intégration d'une API REST externe de recettes","Recherche par ingrédient, pays ou catégorie","Affichage des détails : ingrédients, étapes, vidéo","Interface responsive et fluide","Gestion des recettes favorites"]},
    habit:{title:"Service Web Habitudes",sub:"Service RESTful TypeScript/Node.js pour gérer utilisateurs et habitudes",tags:["TypeScript","CSS","HTML","JavaScript","API REST", "SQLite"],img:"Image/habit.png",github:"#",
    desc:"Service web RESTful développé en TypeScript/Node.js, pour gérer les utilisateurs, habitudes et leur suivi quotidien. Authentification sécurisée via JWT et persistance SQLite3.",
    features:["CRUD complet pour Users, Habits, Categories et HabitsTracking","Authentification sécurisée avec JWT","Tests unitaires et d'intégration avec Jest","Documentation API OpenAPI / Swagger","Persistance des données via SQLite3 et pattern DAO"]}
};

const S = {
  medialog:{title:"Refonte du Publicateur de Logiciels Internes",company:"Medialog",period:"2024-2025 · Stage 3 mois · BUT Informatique",
    sub:"Modernisation de l'outil de déploiement interne avec React et une chaîne CI/CD complète",
    tags:["React","Bootstrap","REST API","Swagger","Jenkins","Ansible","Bitbucket","Jira","Azure AD"],
    pq:"Comment moderniser une application interne sans en compromettre la sécurité et tout en simplifiant le workflow de publication ?",
    ctx:"Medialog est une entreprise éditrice de logiciels métier. Son outil interne — le <strong>publicateur</strong> — permettait aux développeurs de déployer des versions de projets sur les serveurs de production. Cet outil présentait des limites croissantes : incompatibilité avec les outils modernes, processus entièrement manuel et interface peu intuitive.",
    missions:["Refonte complète de l'interface avec <strong>React & Bootstrap</strong> — navigation guidée en 6 étapes (stepper)","Intégration d'une authentification sécurisée <strong>MSAL (Azure Active Directory)</strong>","Intégration et documentation des <strong>API REST</strong> via Swagger","Mise en place du pipeline <strong>CI/CD</strong> : Jenkins, Ansible, Bitbucket","Participation au <strong>Bac Light</strong> de déploiement automatisé","Tests fonctionnels complets et livraison de l'application en production"],
    apports:["Découverte du développement en équipe en milieu professionnel","Maîtrise des outils DevOps : Jenkins, Ansible, pipeline CI/CD","Compréhension des enjeux de sécurité applicative (MSAL/Azure AD)","Pratique de la méthodologie agile et du suivi Jira"]},
  ged:{title:"Application de Gestion Électronique de Documents",company:"Tessi Technologies",period:"2025-2026 · Stage 4 mois · BUT Informatique",
    sub:"Développement full-stack d'une GED en PHP/Symfony avec interface Twig et Bootstrap",
    tags:["PHP","Symfony","Twig","Bootstrap","PostgreSQL","Docker Desktop","Doctrine","Git"],
    pq:"Comment centraliser, organiser et sécuriser la gestion documentaire d'une entreprise via une application web accessible et intuitive ?",
    ctx:"Développement d'une application web de <strong>Gestion Électronique de Documents (GED)</strong> permettant de centraliser, organiser et consulter l'ensemble des documents de l'entreprise depuis une interface web unifiée.",
    missions:["Conception et développement de l'application <strong>GED</strong> en PHP/Symfony","Création des templates <strong>Twig</strong> avec intégration Bootstrap responsive","Modélisation et mise en place de la <strong>base de données</strong> PostgreSQL avec Doctrine ORM","Système d'authentification et <strong>gestion des rôles</strong> utilisateurs","Fonctionnalités d'<strong>upload, indexation et recherche</strong> de documents","Gestion des versions de documents et historique des modifications"],
    apports:["Maîtrise du framework Symfony et de l'écosystème PHP moderne","Compréhension du pattern MVC et de l'architecture Symfony","Pratique de Doctrine ORM et de la gestion de base de données relationnelle","Conception d'interfaces Twig avec Bootstrap pour le responsive design"]}
};

/* MODAL HELPERS */
function tags(arr){return arr.map(t=>`<span class="mtag">${t}</span>`).join('');}
function pills(arr){return arr.map(t=>`<span class="mpill">${t}</span>`).join('');}
function ul(arr){return '<ul class="modal-ul">'+arr.map(i=>`<li>${i}</li>`).join('')+'</ul>';}

function openModal(){ document.getElementById('overlay').classList.add('open'); document.body.style.overflow='hidden'; }
function closeModal(){ document.getElementById('overlay').classList.remove('open'); document.body.style.overflow=''; }
function closeOutside(e){ if(e.target===document.getElementById('overlay'))closeModal(); }
document.addEventListener('keydown',e=>{ if(e.key==='Escape')closeModal(); });

function setModalHead(kind,title,sub,tagsArr){
  document.getElementById('mKind').innerHTML=kind;
  document.getElementById('mTitle').textContent=title;
  document.getElementById('mSub').textContent=sub;
  document.getElementById('mTags').innerHTML=tags(tagsArr);
}

function openProject(id){
  const p=P[id];
  setModalHead(`<i class="fas fa-folder-open"></i> Projet personnel`,p.title,p.subtitle||p.sub,p.tags);
  let b=`<div class="modal-img-ph" id="mImgWrap">${p.emoji}</div>`;
  b+=`<div class="modal-sec"><div class="modal-sec-title"><i class="fas fa-align-left"></i> Description</div><p class="modal-desc">${p.desc}</p></div>`;
  b+=`<div class="modal-sec"><div class="modal-sec-title"><i class="fas fa-list-check"></i> Fonctionnalités</div>${ul(p.features)}</div>`;
  b+=`<div class="modal-sec"><div class="modal-sec-title"><i class="fas fa-code"></i> Stack technique</div><div class="modal-stack">${pills(p.tags)}</div></div>`;
  b+=`<div class="modal-links"><a href="${p.github}" class="mlink" target="_blank"><i class="fab fa-github"></i> GitHub</a>${p.demo?`<a href="${p.demo}" class="mlink ghost" target="_blank"><i class="fas fa-external-link-alt"></i> Démo live</a>`:''}</div>`;
  document.getElementById('mBody').innerHTML=b;
  const ti=new Image(); ti.onload=()=>{ const w=document.getElementById('mImgWrap'); if(w)w.outerHTML=`<div class="modal-img-wrap"><img src="${p.img}" alt="${p.title}"></div>`; }; ti.src=p.img;
  openModal();
}


function openStage(id){
  const s=S[id];
  setModalHead(`<i class="fas fa-briefcase"></i> Expérience professionnelle`,s.title,s.period+' · '+s.company,s.tags);
  let b='';
  b+=`<div class="modal-sec"><div class="modal-sec-title"><i class="fas fa-building"></i> Contexte</div><p class="modal-desc">${s.ctx}</p></div>`;
  b+=`<div class="modal-pq"><strong> Problématique :</strong> ${s.pq}</div>`;
  b+=`<div class="modal-sec"><div class="modal-sec-title"><i class="fas fa-list-check"></i> Missions réalisées</div>${ul(s.missions)}</div>`;
  b+=`<div class="modal-sec"><div class="modal-sec-title"><i class="fas fa-star"></i> Apports du stage</div>${ul(s.apports)}</div>`;
  b+=`<div class="modal-sec"><div class="modal-sec-title"><i class="fas fa-code"></i> Technologies utilisées</div><div class="modal-stack">${pills(s.tags)}</div></div>`;
  document.getElementById('mBody').innerHTML=b;
  openModal();
}

const words=["étudiante en informatique.","développeuse web.","créatrice digitale.","passionnée de code."];
let wi=0,ci=0,del=false;
const el=document.getElementById("typing");
function type(){const w=words[wi];el.textContent=w.substring(0,ci);
  if(!del&&ci<w.length){ci++;setTimeout(type,95);}
  else if(!del&&ci===w.length){del=true;setTimeout(type,2000);}
  else if(del&&ci>0){ci--;setTimeout(type,50);}
  else{del=false;wi=(wi+1)%words.length;setTimeout(type,350);}
}type();

function switchTab(id,btn){
  document.querySelectorAll('.skills-panel').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
  document.getElementById('tab-'+id).classList.add('active');btn.classList.add('active');
}

const html=document.documentElement;
document.getElementById('themeBtn').addEventListener('click',()=>{
  const dark=html.getAttribute('data-theme')==='dark';
  html.setAttribute('data-theme',dark?'light':'dark');
  document.getElementById('themeBtn').textContent=dark?'🌙':'☀️';
});


window.addEventListener('scroll',()=>{
  document.getElementById('navbar').style.boxShadow=window.scrollY>50?'0 4px 32px rgba(0,0,0,0.35)':'none';
});

const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('shown');}),{threshold:0.08});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault(); 

  emailjs.send("service_8wmbsgs","template_2euxu76", {
      from_name: document.getElementById("name").value,
      from_email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value
  }).then(function(response) {
      alert("Message envoyé !");
      document.getElementById("contactForm").reset();
  }, function(error) {
      alert("Erreur lors de l'envoi \n" + JSON.stringify(error));
  });
});