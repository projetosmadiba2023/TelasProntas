// Carrega o conteúdo do arquivo de cabeçalho usando fetch()

fetch('./Header.html')
    .then(response => response.text())
    .then(html => {
        // Insere o conteúdo do cabeçalho no elemento com id "header"
        document.getElementById('header').innerHTML = html;
    })
    .catch(error => {
        console.error('Erro ao carregar o arquivo de cabeçalho:', error);
    });