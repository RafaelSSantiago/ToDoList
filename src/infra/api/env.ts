export default {
  mongoUrl: process.env.MONGO_URL || "mongodb://admin:secret@mongodb:27017/todo?authSource=admin",
};
