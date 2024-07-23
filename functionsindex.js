const prompt = require("prompt-sync")({ sigint: true });

let dias = [];



function create() {
  let dia = prompt("Qual dia? ");
  let atividades = [];
  while (true) {
    let fez = prompt(
      "O que você fez nesse dia? (digite 'pronto' caso tenha terminado)"
    );

    if (fez.toLowerCase() === "pronto") {
      break;
    } else {
      atividades.push(fez);
    }
  }
  dias.push({
    dia: dia,
    atividades: atividades,
  });
}



function read() {
  dias.forEach((dia, index) => {
    console.log(`${index + 1}. ${dia.dia} - ${dia.atividades.join(", ")} `);
  });
}



function update() {
  console.log("Lista de Dias:");
  read();

  let num = prompt("Escolha o dia que deseja atualizar: ");
  let index = parseInt(num) - 1;

  if (index < 0 || index >= dias.length || isNaN(index)) {
    console.log("Dia não encontrado.");
    return;
  }

  let novoDia = prompt("Digite o novo dia: ");
  let novaAtividade = [];

  while (true) {
    let fez = prompt(
      "O que você fez nesse dia? (digite 'pronto' caso tenha terminado)"
    );

    if (fez.toLowerCase() === "pronto") {
      break;
    } else {
      novaAtividade.push(fez);
    }
  }
  dias[index] = {
    dia: novoDia,
    atividades: novaAtividade,
  };
}



function remove(){
    console.log("Lista de dias: ")
    read();

    let escolha = prompt("Qual dia você deseja remover? ")
    const index = parseInt(escolha) - 1

    dias.splice(index, 1)
    console.log("Dia removido!")
}