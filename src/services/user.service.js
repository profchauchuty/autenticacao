import jwt from 'jsonwebtoken'
import db from '../database/db.js'

class UserService {

    static getAll() {
        return db.users
    }
}

export default UserService