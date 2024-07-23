const prompt = require("prompt-sync")({ sigint: true });

const {
  create,
  read,
  update,
  del,
} = require("./functionsindex.js");

const menuFerias = () => {
  while (true) {
    console.log(`
          === Menu dos Dias ===
 1. Adicionar uma data e os atos realizados
 2. Listar dias e atos realizados
 3. Atualizar um dia específico
 4. Deletar um dia
 0. Sair
    `);

    let opcao = prompt("Escolha uma opção: ");

    switch (opcao) {
      case "1":
        create();
        break;
      case "2":
        read();
        break;
      case "3":
        update();
        break;
      case "4":
        del();
        break;
      case "0":
        console.log("Saindo do menu, até mais!");
        return;
      default:
        console.log("Você deve selecionar um número do menu.");
        return;
    }
  }
};

menuFerias();