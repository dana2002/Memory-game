function shuffle(card) {
  let currentIndex = card.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    card[currentIndex] = array[randomIndex];
    card[randomIndex] = temporaryValue;
  }

  return card;
}

let card = [{foto: "",texto:"text",idPar:1,estado:"oculto",id:1},
{foto: "",texto:"text",idPar:1,estado:"oculto",id:1},
{foto: "", texto:"text",idPar:2,estado:"oculto",id:2},
{foto: "",texto:"text",idPar:3,estado:"oculto",id:3},
{foto: "",texto:"text",idPar:4,estado:"oculto",id:4},
{foto: "",texto:"text",idPar:5,estado:"oculto",id:5},
{foto: "",texto:"text",idPar:6,estado:"oculto",id:6},
{foto: "",texto:"text",idPar:7,estado:"oculto",id:7},
{ foto: "",texto:"text",idPar:8,estado:"oculto",id:8},
{ foto: "",texto:"text",idPar:9,estado:"oculto",id:9},
{ foto: "",texto:"text",idPar:10,estado:"oculto",id:10},
{ foto: "",texto:"text",idPar:11,estado:"oculto",id:11},
{ foto: "",texto:"text",idPar:12,estado:"oculto",id:12},
{ foto: "",texto:"text",idPar:13,estado:"oculto",id:13},
{ foto: "",texto:"text",idPar:14,estado:"oculto",id:14},
{ foto: "",texto:"text",idPar:1,estado:"oculto",id:15},
{ foto: "",texto:"text",idPar:2,estado:"oculto",id:16},
{ foto: "",texto:"text",idPar:3,estado:"oculto",id:17},
{ foto: "",texto:"text",idPar:4,estado:"oculto",id:18},
{ foto: "",texto:"text",idPar:5,estado:"oculto",id:19},
{ foto: "",texto:"text",idPar:6,estado:"oculto",id:20},
{ foto: "",texto:"text",idPar:7,estado:"oculto",id:21},
{ foto: "",texto:"text",idPar:8,estado:"oculto",id:22},
{ foto: "",texto:"text",idPar:9,estado:"oculto",id:23},
{ foto: "",texto:"text",idPar:10,estado:"oculto",id:24},
{ foto: "",texto:"text",idPar:11,estado:"oculto",id:25},
{ foto: "",texto:"text",idPar:12,estado:"oculto",id:26},
{ foto: "",texto:"text",idPar:13,estado:"oculto",id:27},
{ foto: "",texto:"text",idPar:14,estado:"oculto",id:28}
];