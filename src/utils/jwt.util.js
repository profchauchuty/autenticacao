import jwt from 'jsonwebtoken'

class JWTUtil {

    static sign(payload, options = {}) {
        return jwt.sign(
            payload,
            process.env.JWT_SECRET,
            options
        )
    }

    static verify(token) {

        if (!token) {
            throw new Error('Token não informado')
        }

        try {
            return jwt.verify(
                token,
                process.env.JWT_SECRET
            )
        } catch (error) {
            throw new Error('Token inválido')
        }
    }
}

export default JWTUtil