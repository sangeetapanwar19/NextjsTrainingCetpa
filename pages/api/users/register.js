import Users from "../../../models/Users";
import connectDB from "../../../middleware/mongoose";

//post api call to fetch single user
const handler = async (req, res) => {
  if (req.method == "POST") {
    console.log(req.body);

    try {
      let temp = new Users({
        userid: req.body.userid,
        name: req.body.name,
        email: req.body.email,
        mobile: req.body.mobile,
        password: req.body.password
      });
      const response = await temp.save();
      res.status(201).json(response);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  } else {
    res.status(400).json({ message: "method not allowed" });
  }
};

export default connectDB(handler);
