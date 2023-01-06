import mongoose from "mongoose"
import bcrypt from "bcrypt"

const todoSchema = mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        rdefault: Date.now
    }
})

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    todoList: [todoSchema]
})

userSchema.statics.login = async function (username, password) {
    const user = await User.findOne({ username })
    if (user) {
        const password = await bcrypt.compare(password, user.password)
        if (password) {
            return user
        } else {
            throw Error ("Wrong password")
        }
    } else {
        throw Error("Wrong username")
    }
    throw Error("Internal Server error Occured")
}

userSchema.statics.sign = async function (username, password, email) {
    
}



const User = mongoose.model('user',userSchema)
export default User