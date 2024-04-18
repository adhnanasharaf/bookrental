// const mongoClient = require("mongodb").MongoClient;
// const state = {
//   db: null,
// };

// module.exports.connect = function (done) {
//   const url =
//     "mongodb+srv://anaswara11:anaswara123@bookrental.64fu5tr.mongodb.net/?retryWrites=true&w=majority&appName=bookrental";
//   const dbname = "bookrental";

//   mongoClient.connect(url, (err, data) => {
//     if (err) return done(err);
//     state.db = data.db(dbname);

//     done();
//   });
// };

// module.exports.get = function () {
//   return state.db;
// };

//////////////////////////////////////////////////////////////////

const { default: mongoose } = require("mongoose");
require("../models/adModel");
require("../models/authModel");

const connection = async () => {
  try {
    const connection = await mongoose.connect(
      "mongodb+srv://anaswara11:anaswara123@bookrental.64fu5tr.mongodb.net/?retryWrites=true&w=majority&appName=bookrental",
      {
        useNewUrlParser: true,
      }
    );

    if (connection) {
      console.log("db connected");
    }
  } catch (e) {
    console.log(e);
  }
};

module.exports = connection;

///////////////////////////////////////////////

// const connection = async () => {
//   try {
//     const connection = await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       useCreateIndex: true,
//       useFindAndModify: false,
//     });
//     console.log(`Connected ${connection.host}`);
//   } catch (error) {
//     console.log(`error : ${error.message}`);
//   }
// };
// module.exports = {
//   connection,
// };
