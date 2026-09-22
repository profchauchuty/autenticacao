import jwt from 'jsonwebtoken'
import db from '../database/db.js'

class AuthService {

    static signIn(email, password) {
        const user = db.users.find(user => user.email === email && user.password === password)

        if (!user) {
            return { message: 'Usuário não encontrado' }
        }

        const token = JWTUtil.sign({ id: user.id })

        return { token }
    }

    static signUp(fullName, email, password) {
        db.users.push({
            id: 1,
            fullName,
            email,
            password
        })

        return { message: 'Usuário criado com sucesso' }
    }
}

export default AuthService