const mongoose = require('mongoose');
const validator = require('validator');
const chalk = require('chalk');

connectDB = async () => {
  try {
    const connect = await mongoose.connect(
      'mongodb://127.0.0.1:27017/task-manager-api',
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
      }
    );
    console.log(
      chalk
        .hex('#4d13d1')
        .bold(`MongoDb Connected  ${connect.connection.host} `)
    );
  } catch (error) {
    console.error(chalk.hex('#cf000f').bold(`Error : ${error.message}`));
    process.exit(1);
  }
};

connectDB();

// SECTION: Models - Shema

//- create an instante of the User

const Task = mongoose.model('Task', {
  description: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
  },
});

const task = new Task({
  description: 'Advance NodeJS course',
  completed: false,
});

task
  .save()
  .then(() => {
    console.log(chalk.hex('#f7ca18').bold(`New User Created: ${task}`));
  })
  .catch((error) => {
    console.error(chalk.hex('#cf000f').bold(`Error : ${error}`));
  });
