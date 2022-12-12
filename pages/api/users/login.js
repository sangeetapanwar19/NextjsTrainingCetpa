import Users from "../../../models/Users";
import connectDB from "../../../middleware/mongoose";

//post api call to fetch single user
const handler = async (req, res) => {
  if (req.method == "POST") {
    console.log(req.body);

    try {
      let res = await Users.findOne({ email: req.body.email });
      if (data !== null) {
        // findonw will retun null if no data
        console.log("user found.................");
        if (data.password === req.body.password) {
          res.status(200).json(data);
        } else {
          res.status(400).json({ message: "Invalid Password" });
        }
      } else {
        console.log("user not found.................");
        res.status(400).json({ message: "User Not Found" });
      }
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  } else {
    res.status(400).json({ message: "method not allowed" });
  }
};

export default connectDB(handler);
