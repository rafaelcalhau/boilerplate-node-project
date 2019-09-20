import { Schema, model, Document } from 'mongoose'

interface UserInterface extends Document {
  email?: string;
  firstname?: string;
  fullname?: string;
  lasname?: string;
}

const UserSchema = new Schema({
  email: String,
  firstname: String,
  lastname: String
}, {
  timestamps: true
})

UserSchema.methods.fullname = function (): string {
  return `${this.firstname} ${this.lastname}`
}

export default model<UserInterface>('User', UserSchema)
