import UserService from '../services/user.service.js'

class UserController {

    static getAll(req, res) {
        const result = UserService.getAll()

        res.json(result)
    }

}

export default UserController