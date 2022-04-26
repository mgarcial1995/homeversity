const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    name: { type: String },
    surname: { type: String },
    gender: { type: String },
    bornDate: { type: Date },
    typeUser: { type: String, default: "student" },
    passWord: { type: String },
    email: { type: String },
  },
  {
    collection: "user",
  }
);
userSchema.statics.encryptPassword = async (password) => {
  const value = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, value);
};

userSchema.statics.comparePassword = async (password, receivedPassword) => {
  return await bcrypt.compare(password, receivedPassword);
};
userSchema.pre("save", async function save(next) {
  if (this.isNew) {
    this.passWord = await bcrypt.hash(this.passWord, 10);
  }
  next();
});
module.exports = mongoose.model("user", userSchema);
