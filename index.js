(async () =>{
    
    const database = require('./db');
    const Livro = require('./livro');
    await database.sync();

try{
    const resultado = await database.sync();
    console.log(resultado);

const novoLivro = await Livro.create({
    nome:'Livro bom',
    preco:600,
    descricao: 'Livro bacana'
})

console.log(novoLivro);
} catch (error) {
    console.log(error);
}
})();
