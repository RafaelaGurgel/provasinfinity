const lista = [];

function menu() {
    let opcao;
    do {
        opcao = prompt(`🛒 Lista de Compras
1 - Adicionar
2 - Remover
3 - Ver lista
4 - Editar
5 - Sair
Opção:`);

        switch(opcao) {
            case '1': add(); break;
            case '2': remover(); break;
            case '3': verLista(); break;
            case '4': editar(); break;
            case '5': alert('Até mais!'); break;
            default: alert('Opção inválida!');
        }
    } while(opcao !== '5');
}

function add() {
    const item = prompt('Digite o item:');
    item ? (lista.push(item), alert(`✅ ${item} adicionado!`)) : alert('❌ Cancelado');
}

function remover() {
    if (!lista.length) return alert('⚠️ Lista vazia!');
    
    const indice = prompt(verLista() + '\nÍndice para remover:');
    if (indice >= 0 && indice < lista.length) {
        alert(`🗑️ ${lista.splice(indice, 1)} removido!`);
    } else {
        alert('Índice inválido!');
    }
}

function verLista() {
    const msg = lista.length 
        ? '🛍️ Itens:\n' + lista.map((item, i) => `${i} - ${item}`).join('\n')
        : '⚠️ Lista vazia!';
    alert(msg);
    return msg; 
}

function editar() {
    if (!lista.length) return alert('⚠️ Lista vazia!');
    
    const indice = prompt(verLista() + '\nÍndice para editar:');
    if (indice >= 0 && indice < lista.length) {
        const novo = prompt('Novo item:', lista[indice]);
        if (novo) {
            lista[indice] = novo;
            alert('✏️ Item atualizado!');
        }
    } else {
        alert('Índice inválido!');
    }
}

menu();