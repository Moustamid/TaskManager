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

const Task = mongoose.model('Task', {
  description: {
    type: String,
    required: true,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const task = new Task({
  description: 'UniCode Project',
  completed: false,
});

task
  .save()
  .then(() => {
    console.log(chalk.hex('#f7ca18').bold(`New Task Created: ${task}`));
  })
  .catch((error) => {
    console.error(chalk.hex('#cf000f').bold(`Error : ${error}`));
  });

// NOTE:  User

// const User = mongoose.model('User', {
//   name: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     trim: true,
//     lowercase: true,
//     validate(value) {
//       if (!validator.isEmail(value)) {
//         throw new Error('Email is invalid');
//       }
//     },
//   },
//   password: {
//     type: String,
//     required: true,
//     minLength: 7,
//     trim: true,
//     validate(value) {
//       if (value.toLowerCase().includes('Password')) {
//         throw new Error('Password cannot contain password');
//       }
//     },
//   },
//   age: {
//     type: Number,
//     default: 0,
//     validate(value) {
//       if (value < 0) {
//         throw new Error('Age must be a postive number');
//       }
//     },
//   },
// });

// const me = new User({
//   name: '   Andrew  ',
//   email: 'MYEMAIL@MEAD.IO   ',
//   password: '000000000000000000000000',
// });

// me.save()
//   .then(() => {
//     console.log(me);
//   })
//   .catch((error) => {
//     console.log('Error!', error);
//   });
