# 📝 Quicklist

Quicklist é uma aplicação de lista de compras simples e funcional, desenvolvida com HTML, CSS e JavaScript puro. O projeto foi criado como exercício prático de lógica de programação e manipulação do DOM.

## 📌 Sobre o Projeto

O Quicklist permite ao usuário criar e gerenciar uma lista de compras de forma rápida e intuitiva. É possível adicionar novos itens, marcá-los como concluídos através de checkboxes personalizados e removê-los da lista, sempre com feedback visual através de uma notificação animada.

## 🛠️ Tecnologias e Ferramentas

Este projeto foi construído utilizando:

- **HTML5**: estruturação semântica da página
- **CSS3**: estilização com Flexbox, variáveis CSS (custom properties) e transições/animações
- **JavaScript**: manipulação do DOM, criação dinâmica de elementos e gerenciamento de eventos

## ✨ Funcionalidades

- **Adicionar itens**: campo de input com validação (não permite itens vazios ou apenas espaços)
- **Marcar como concluído**: checkboxes customizados via `appearance: none`, com estado visual próprio ao serem marcados
- **Remover itens**: exclusão individual através de um ícone de lixeira em cada item, usando delegação de eventos
- **Notificação de remoção**: alerta animado (fade in + translateY) que aparece ao excluir um item, podendo ser fechado manualmente ou desaparecendo automaticamente após alguns segundos
- **Layout responsivo**: interface construída com Flexbox, mantendo o alinhamento consistente em diferentes resoluções

## 🎨 Estrutura de Estilos

O projeto utiliza variáveis CSS centralizadas em `:root` para cores de marca, textos, bordas e estados (hover, foco, erro), facilitando a manutenção e consistência visual em toda a aplicação.

## 📂 Estrutura dos Itens

Cada item da lista é composto por:
- Um container (`.item-row`) organizando o conteúdo em flexbox com `justify-content: space-between`
- Um `label` (`.item-name`) agrupando o checkbox e o texto do item
- Um ícone de exclusão (`.delete-icon`) posicionado como elemento irmão do label

## 👤 Autor

Projeto desenvolvido como parte dos estudos em Lógica de Programação.
