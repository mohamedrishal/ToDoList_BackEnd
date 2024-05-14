const user = require("../Model/userSchema");
const jwt = require("jsonwebtoken");


// register
exports.register = async (req, res) => {
  console.log(`inside register controller function`);
  const { username, email, password } = req.body;

  try {
    const existingUser = await user.findOne({ email });
    if (existingUser) {
      res.status(406).json("Account already exist..!! ");
    } else {
      const newUser = new user({
        username,
        email,
        password
      });
      await newUser.save();
      res.status(200).json(newUser);
    }
  } catch (err) {
    res.status(401).json(`Register API Failed,Error: ${err}`);
  }
};

// login
exports.login = async (req, res) => {
  console.log("inside login function");
  const { email, password } = req.body;
  try {
    const existingUser = await user.findOne({ email, password });
    if (existingUser) {
      const token = jwt.sign(
        { userId: existingUser._id },
        "supersecretkey12345"
      );
      res.status(200).json({
        existingUser,
        token,
      });
    } else {
      res.status(404).json(`Incorrect Password or Email`);
    }
  } catch (err) {
    res.status(401).json(`Login faild, error ${err}`);
  }
};

// editUser

// exports.editUser = async (req, res) => {
//   const userId = req.payload;
//   const { username, email, password, github, linkedin, profile } = req.body;
//   const uploadImage = req.file ? req.file.filename : profile;

//   try {
//     const updateUser = await users.findByIdAndUpdate(
//       { _id: userId },
//       { username, email, password, github, linkedin, profile: uploadImage },
//       { new: true }
//     );
//     await updateUser.save()
//     res.status(200).json(updateUser)
//   } catch (err) {
//     res.status(401).json(err);
//   }
// };