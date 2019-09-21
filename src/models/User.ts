import { Schema, model, Document } from 'mongoose'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

interface UserInterface extends Document {
  email: string;
  firstname: string;
  fullname?: Function;
  lastname?: string;
  password?: string;
  generateToken: Function;
}

const UserSchema: Schema<UserInterface> = new Schema({
  email: {
    type: String,
    allowNull: false,
    unique: true
  },
  firstname: {
    type: String,
    allowNull: false
  },
  lastname: {
    type: String,
    allowNull: false
  },
  password: {
    type: String,
    allowNull: false
  }
}, {
  timestamps: true
})

UserSchema.methods.fullname = function (): string {
  return `${this.firstname} ${this.lastname}`
}

UserSchema.methods.generateToken = function (): string {
  return jwt.sign({ id: this.id }, process.env.JWT_SECRET)
}

UserSchema.pre<UserInterface>('save', async function (next): Promise<void> {
  if (this.password) {
    this.password = await bcrypt.hash(this.password, 8)
  }

  return next()
})

export default model<UserInterface>('User', UserSchema)
