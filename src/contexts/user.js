import React, {createContext, useState} from 'react'
import { useNavigation } from '@react-navigation/native'

export const UserContexto = createContext({})

function UserProvider({children}) {

const [usuario, setUsuario] = useState({})
const navigation = useNavigation()

function login(obj) {

setUsuario({
    nome: obj.nome,
    id: obj.id,
    imagem: obj.imagem
})


}


return(
    <UserContexto.Provider value={{ login, usuario}}>
            {children}
        </UserContexto.Provider>
)

}

export default UserProvider