export default (req, res) => {
    // console.log(req?.headers)
     console.log(req?.body)
    res.json({
      id: 1,
      displayName: "Surveysparrow",
      avatarUrl: "https://appnest-app.salesparrow.com/SurveyMigrationTest-4119/version_1.0/icon/Color.png"
    });
  };
  
