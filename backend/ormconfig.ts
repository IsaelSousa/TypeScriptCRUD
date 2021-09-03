module.exports={
  type: "mongodb",
  url: process.env.MONGODBURL,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  entities: [ "./src/database/models/**.ts" ]
}