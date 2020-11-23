import mongoose from 'mongoose';

const db = async () => {
  try {
    const host = await mongoose.connect(process.env.MONGO_URI, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`Mongo DB connected! - ${host.connection.host}`);
    return;
  } catch (error) {
      console.log(`${error.message}`);
      process.exit(1);
  }
};

export default db;
