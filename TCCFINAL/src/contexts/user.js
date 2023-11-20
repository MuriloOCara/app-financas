import React, {createContext, useState} from 'react'


export const UserContexto = createContext({})

function UserProvider({children}) {

const [usuario, setUsuario] = useState({})


function login(obj) {

setUsuario({
    nome: obj.nome,
    id: obj.id,
    imagem: obj.imagem,
    transacoes: obj.transacoes
})


}


return(
    <UserContexto.Provider value={{ login, usuario}}>
            {children}
        </UserContexto.Provider>
)

}

export default UserProvider