
# Integração Laravel-React

## Testando a api com `curl` (precisa rodar o servidor primeiro com `php artisan serve`)

Rota que devolve o índice de artigos:

`curl http://localhost:8000/api/article`

Rota que devolve um artigo específico:

`curl http://localhost:8000/api/article/1`

Criando um artigo novo (enviando um json com POST):

`curl -i -X POST -H "Content-Type:application/json" http://localhost:8000/api/article -d '{"title":"Artigo Teste 1", "body": "Bla bla bla bla"}'`

Atualizando um artigo já existente:

`curl -v -X PUT -H "Content-Type:application/json" http://localhost:8000/api/article/51 -d '{"title":"Titulo Atualizado"}'`

Deletando um artigo:

`curl -v -X DELETE http://localhost:8000/api/article/51`




