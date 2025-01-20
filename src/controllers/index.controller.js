const userModel = require("../models/user.model");

module.exports.indexController = (req, res) => {
  res.render("index");
};

module.exports.userController = async (req, res) => {
  try {
    // First, get the data from the request body
    let { username, email, age, image } = req.body;
    
    // Create the user
    await createUser(username, email, age, image);
    
    // Redirect to the users page
    return res.redirect('/users');
  } catch (error) {
    console.error(error);
    res.status(500).render('error', { message: 'Server error' });
  }
};


module.exports.profilecontroller = async (req, res) => {
  try {
    let id = req.params.id;
    const user = await userModel.findById(id);
    
    if (!user) {
      return res.status(404).render('error', { message: 'User not found' });
    }
    
    res.render('profile', { user });
  } catch (error) {
    console.error(error);
    res.status(500).render('error', { message: 'Server error' });
  }
};

const createUser = async (username, email, age, image) => {
  const newUser = new userModel({ username, email, age, image });
  const result = await newUser.save();
  return result;
};
