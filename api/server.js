import axios from "axios";
export default async (req, res) => {
    let response = await axios.get("https://api.surveysparrow.com/v3/users", {
        headers: {
            Authorization: req?.headers?.authorization
        }
    });
    response.data.token = req?.headers?.authorization
    console.log(response?.data)
    res.json(response)
  };
  