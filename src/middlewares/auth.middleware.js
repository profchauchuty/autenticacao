import JWTUtil from '../utils/jwt.util.js'

class AuthMiddleware {
    static authenticate(req, res, next) {
        const token = req.headers['authorization']

        console.log(req)

        console.log(token)

        if (!token) {
            return res.status(401).json({ message: 'Token não fornecido' })
        }

        try {
            const decoded = JWTUtil.verify(token)
            req.userId = decoded.id
            next()
        } catch (error) {
            return res.status(401).json({ message: error.message })
        }
    }
}

export default AuthMiddleware