import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
  {
    firstSurname: {
      type: String,
      required: true,
      maxLength: 20,
    },
    secondSurname: {
      type: String,
      required: true,
      maxLength: 20,
    },
    firstName: {
      type: String,
      required: true,
      maxLength: 20,
    },
    otherNames: {
      type: String,
      required: false,
      maxLength: 50,
    },
    employmentCountry: {
      type: String,
      required: true,
    },
    idType: {
      type: String,
      required: true,
    },
    idNumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      maxLength: 300,
    },
    state: {
      type: String,
    },
    admissionDate: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', userSchema);

export default User;
