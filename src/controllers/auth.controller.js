import AuthService from "../services/auth.service.js"

class AuthController {

    static signIn(req, res) {
        const { email, password } = req.body

        const result = AuthService.signIn(email, password)

        res.json(result)
    }

    static signUp(req, res) {
        const { fullName, email, password } = req.body

        const result = AuthService.signUp(fullName, email, password)

        res.json(result)
    }

}

export default AuthController