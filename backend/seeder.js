import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';

import users from './data/users.js'; // Initial Users
import jobs from './data/jobs.js'; //Inital Jobs

// All Models that will be used
import User from './models/UserModel.js';
import JobModel from './models/JobsModel.js';

import connectDB from './configurations/db.js'; //DB Connection String

dotenv.config();

connectDB();

const importData = async () => {
  try {
 
    await JobModel.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users); //Insert The 
    //const admin = await User.findOne({ email: 'admin@admin.com' }); //Grab the Admin(first one entered)
    const admin = createdUsers[0]._id
    //const adminUser = createdUsers[0]._id; //Grab the Admin(first one entered)
    //Create a variable that has the assigned user as the Admin to be used initially
    const samplejobs = jobs.map((job) => {
      return { ...job, user: admin };
    });

    await JobModel.insertMany(samplejobs);

    console.log('Data Imported!'.green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await JobModel.deleteMany();
    await User.deleteMany();

    console.log('Data Destroyed!'.red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}


console.log(process.argv[2]);