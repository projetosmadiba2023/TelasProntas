// Carrega o conteúdo do arquivo de rodapé usando fetch()

fetch('./Footer.html')
    .then(response => response.text())
    .then(html => {
        // Insere o conteúdo do rodapé no elemento com id "footer"
        document.getElementById('footer').innerHTML = html;
    })
    .catch(error => {
        console.error('Erro ao carregar o arquivo de rodapé:', error);
    });