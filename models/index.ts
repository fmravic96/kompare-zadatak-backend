import mongoose from "mongoose";

import User from "./User";

mongoose.set("debug", true);
const dbConnection = (db_uri: string) => {
  return mongoose.connect(db_uri, { useUnifiedTopology: true, useNewUrlParser: true });
};

const models = { User };

export { dbConnection };
export default models;
