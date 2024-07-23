const prompt = require("prompt-sync")({ sigint: true });

let dias = [];

//Função para criar os dias e adicionar atos realizados nesse dia

function create() {
  let dia = parseInt(prompt("Qual dia deseja adicionar? "));
  if (isNaN(dia) || dia > 31 || dia < 1) {
    return console.log("Você deve digitar uma data válida!\n");
  }
  let mes = parseInt(prompt("Qual o mês? "));
  if (isNaN(mes) || mes > 12 || mes < 1) {
    return console.log("Você deve digitar um mẽs válido!\n");
  }

  let atividades = [];
  while (true) {
    let fez = prompt(
      "O que você fez nesse dia? (digite 'pronto' caso tenha terminado) "
    );

    if (fez.length < 3 || fez === Number) {
      return console.log(
        "Descreva a atividade, deve conter mais de 3 caracteres e não pode ser um número."
      );
    }

    if (fez.toLowerCase() === "pronto") {
      break;
    } else {
      atividades.push(fez);
    }
  }
  dias.push({
    dia: dia,
    mes: mes,
    atividades: atividades,
  });
}

//Função para mostrar todos os dias e atos realizados

function read() {
  dias.forEach((dia, index) => {
    console.log(
      `${index + 1}. ${dia.dia}/${dia.mes} - ${dia.atividades.join(", ")} `
    );
  });
}

//Função para atualizar um dia específico

function update() {
  console.log("Lista de Dias:");
  read();

  let num = prompt(
    "Escolha o dia que deseja atualizar: (Deve selecionar o número de indice) "
  );
  let index = parseInt(num) - 1;

  if (index < 0 || index >= dias.length || isNaN(index)) {
    return console.log("Dia não encontrado.");
  }

  let novoDia = prompt("Digite o novo dia: ");
  if (isNaN(novoDia) || novoDia > 31 || novoDia < 1) {
    return console.log("Você deve digitar uma data válida!");
  }
  let novoMes = prompt("Qual o novo mês? ");
  if (isNaN(novoMes) || novoMes > 12 || novoMes < 1) {
    return console.log("Você deve digitar um mẽs válido!");
  }

  let novaAtividade = [];

  while (true) {
    let fez = prompt(
      "O que você fez nesse dia? (digite 'pronto' caso tenha terminado) "
    );

    if (fez.length < 3 || fez === Number) {
      return console.log(
        "Descreva a atividade, deve conter mais de 3 caracteres e não pode ser um número."
      );
    }

    if (fez.toLowerCase() === "pronto") {
      break;
    } else {
      novaAtividade.push(fez);
    }
  }
  dias[index] = {
    dia: novoDia,
    mes: novoMes,
    atividades: novaAtividade,
  };
}

//Função para deletar um dia

function del() {
  console.log("Lista de dias: ");
  read();

  let escolha = prompt("Qual dia você deseja remover? ");
  const index = parseInt(escolha) - 1;

  if (index < 0 || index >= dias.length || isNaN(index)) {
    return console.log("Dia não encontrado.");
  }

  dias.splice(index, 1);
  console.log("Dia removido! ");
}

const functions = {
  create,
  read,
  update,
  del,
};

module.exports = functions;
