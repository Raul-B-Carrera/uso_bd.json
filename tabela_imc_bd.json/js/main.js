import { calculo_imc, classificacao } from "./functions1.js";
import { atualizar_tabela, colorir_status } from "./atualizar_tabela.js";
import { preencher_tabela } from "./preencher.js";

let linhas = document.querySelectorAll('tbody tr');

linhas = await preencher_tabela(linhas);
atualizar_tabela(linhas, calculo_imc, classificacao);
colorir_status(linhas);