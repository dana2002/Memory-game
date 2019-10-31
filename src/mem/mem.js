function shuffle(card) {
  let currentIndex = card.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = card[currentIndex];
    card[currentIndex] = card[randomIndex];
    card[randomIndex] = temporaryValue;
  }

  return card;
}

function getCards() {
  return new Promise((resolve, reject) => {
    resolve(cards)
  })
}



let cards = [
{foto:null, texto:"MER",idPar:1,estado:"oculto",id:1},
{foto:null,texto:"SGDB",idPar:2,estado:"oculto",id:2},
{foto:null,texto:"Base de Datos",idPar:3,estado:"oculto",id:3},
{foto:null,texto:"Cardinalidad",idPar:4,estado:"oculto",id:4},
{foto:null,texto:"XAMPP",idPar:5,estado:"oculto",id:5},
{foto:null,texto:"Relación",idPar:6,estado:"oculto",id:6},
{foto:null,texto:"Multivalorados",idPar:7,estado:"oculto",id:7},
{foto:null, texto:"MySQL",idPar:8,estado:"oculto",id:8},
{foto:null, texto:"mongo DB",idPar:9,estado:"oculto",id:9},
{foto:null, texto:"Primary key",idPar:10,estado:"oculto",id:10},
{foto:null, texto:"Pasaje a tablas",idPar:11,estado:"oculto",id:11},
{foto:null, texto:"Agregacion",idPar:12,estado:"oculto",id:12},
{foto:null, texto:"draw.io",idPar:13,estado:"oculto",id:13},
{foto:null, texto:"Atributos",idPar:14,estado:"oculto",id:14},
{ foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Ejemplo_Diagrama_E-R_extendido.PNG/400px-Ejemplo_Diagrama_E-R_extendido.PNG",text: null,idPar:1,estado:"oculto",id:15},
{ texto:"Sistema de gestion de base de datos",idPar:2,estado:"oculto",id:16},
{foto:null, texto:"Conjunto de datos que se almacenan en formato electronico",idPar:3,estado:"oculto",id:17},
{foto:null, texto:"1 ------------- N /  N-------N / 1--------3",idPar:4,estado:"oculto",id:18},
{ foto: "https://www.anerbarrena.com/wp-content/uploads/2014/08/servidor-local-xampp.png",text: null,idPar:5,estado:"oculto",id:19},
{foto:null, texto:"Asociación entre entidades / objetos",idPar:6,estado:"oculto",id:20},
{foto:null, texto:"*",idPar:7,estado:"oculto",id:21},
{ foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Mysql-dolphin-square.svg/1024px-Mysql-dolphin-square.svg.png",text: null,idPar:8,estado:"oculto",id:22},
{ foto: "https://pbs.twimg.com/profile_images/1146106967477379073/J3fzYcnz_400x400.png",text: null,idPar:9,estado:"oculto",id:23},
{foto:null, texto:"identifican de manera unica cada fila o registro de una tabla",idPar:10,estado:"oculto",id:24},
{foto:null, texto:"Tabla(Nombre, numero, color)",idPar:11,estado:"oculto",id:25},
{ foto: "https://virtual.itca.edu.sv/Mediadores/dbd/u1/Agregacion5.JPG", text: null, idPar:12,estado:"oculto",id:26},
{ foto: "https://i.blogs.es/21f8f8/msm27asf_400x400/450_1000.png",text: null, idPar:13,estado:"oculto",id:27},
{ foto: "https://i.blogs.es/fc15c0/atributos/450_1000.png",text: null,idPar:14,estado:"oculto",id:28}
];

export{ getCards };