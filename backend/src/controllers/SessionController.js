/*
|> Metodos disponiveis dentro de um controller <|

• index -> Retorna todos os dados (sessões)
• show -> Retorna apenas um dado (sessão)
• store -> Criar uma informação (sessão)
• update -> alterar uma informação (sessão)
• destroy -> remover/deletar uma informação (sessão)
*/

const User = require('../model/User');

module.exports = {
    async store(req, res){
        const {email} = req.body;
        
        let user = await User.findOne({ email });

        if(!user){
            const user = await User.create({ email });
        }

        return res.json(user);
    }
}