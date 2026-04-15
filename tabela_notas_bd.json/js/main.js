import { calculo_media, verifica_aprovacao } from './functions1.js';
import { atualizar_tabela, colorir_status } from './atualizar_tabela.js';
import { preencher_tabela } from './preencher.js';

let body = document.querySelector('body');
console.log(body);

let linhas = document.querySelectorAll('tbody tr');

// Preencher Tabela
linhas = await preencher_tabela(linhas);
linhas = atualizar_tabela(linhas, calculo_media, verifica_aprovacao);
linhas = colorir_status(linhas);