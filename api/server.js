export default async (req, res) => {
  try {
    const apiResponse = await fetch("https://api.surveysparrow.com/v3/users", {
      method: "GET",
      headers: {
        Authorization: req?.headers?.authorization || "",
      },
    });
    const data = await apiResponse.json();
    data.token = req?.headers?.authorization;
    console.log(data);

    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching data:", error.message);

    res.status(500).json({
      error: "Failed to fetch data",
      message: error.message,
    });
  }
};
