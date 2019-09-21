import { Schema, model, Document } from 'mongoose'

interface UserInterface extends Document {
  email: string;
  firstname?: string;
  fullname?: string;
  lasname?: string;
}

const UserSchema = new Schema({
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
  }
}, {
  timestamps: true
})

UserSchema.methods.fullname = function (): string {
  return `${this.firstname} ${this.lastname}`
}

export default model<UserInterface>('User', UserSchema)
