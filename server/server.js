const express = require('express');
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const cors = require('cors');
const { prependListener } = require('process');
const bcrypt = require("bcrypt");
const saltRounds = 10;
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.static(path.join(__dirname, '../client/build')));
app.use(express.static(path.join(__dirname, '../client/public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect("mongodb+srv://lauricacristina:Laura2001@licenta.62vywdm.mongodb.net/papusi?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

const pages = ["", "fete", "baieti", "figurine", "plusuri", "accesorii", "produs", "recenzii", "asistenta", "contact", "login", "signup", "favorite", "cos"];

for (var i = 0; i < pages.length; i++) {
    app.get('/' + pages[i], (req, res) => {
        res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
    })
}

// Define a schema and model for your data
const papusiSchema = new mongoose.Schema({
  nume: String,
  pret: Number,
  moneda: String,
  img: String,
  descriere: String,
  img2:String,
  img3:String,
  img4:String,
  img5:String
});

const Fete = mongoose.model('Fete', papusiSchema);

// Define an API endpoint to fetch items from the database
app.get('/api/fete', (req, res) => {
  async function getPapusi() {
    try {
        const fetes = await Fete.find({});
        res.json(fetes);
    } catch (err) {
        console.error(err);
    }
  }
  getPapusi();
});

app.get('/api/fetes/:id', (req, res) => {
  const productId = req.params.id;

  async function getPapusiById() {
    try {
      const fete = await Fete.findById(productId);
      if (!fete) {
        res.status(404).send('Product not found');
      } else {
        res.json(fete);
      }
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  }
  getPapusiById();
});


const Baieti = mongoose.model('Baieti', papusiSchema);

// Define an API endpoint to fetch items from the database
app.get('/api/baieti', (req, res) => {
  async function getPapusi() {
    try {
        const baietis = await Baieti.find({});
        res.json(baietis);
    } catch (err) {
        console.error(err);
    }
  }
  getPapusi();
});


app.get('/api/baietis/:id', (req, res) => {
  const productId = req.params.id;

  async function getPapusiById() {
    try {
      const baieti = await Baieti.findById(productId);
      if (!baieti) {
        res.status(404).send('Product not found');
      } else {
        res.json(baieti);
      }
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  }
  getPapusiById();
});



  const Figurine = mongoose.model('Figurine', papusiSchema);

// Define an API endpoint to fetch items from the database
app.get('/api/figurine', (req, res) => {
  async function getPapusi() {
    try {
        const figurines = await Figurine.find({});
        res.json(figurines);
    } catch (err) {
        console.error(err);
    }
  }
  getPapusi();
});

app.get('/api/figurines/:id', (req, res) => {
  const productId = req.params.id;

  async function getPapusiById() {
    try {
      const figurine = await Figurine.findById(productId);
      if (!figurine) {
        res.status(404).send('Product not found');
      } else {
        res.json(figurine);
      }
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  }
  getPapusiById();
});
  const Plusuri = mongoose.model('Plusuri', papusiSchema);

// Define an API endpoint to fetch items from the database
app.get('/api/plusuri', (req, res) => {
  async function getPapusi() {
    try {
        const plusuris = await Plusuri.find({});
        res.json(plusuris);
    } catch (err) {
        console.error(err);
    }
  }
  getPapusi();
});
app.get('/api/plusuris/:id', (req, res) => {
  const productId = req.params.id;

  async function getPapusiById() {
    try {
      const plusuri = await Plusuri.findById(productId);
      if (!plusuri) {
        res.status(404).send('Product not found');
      } else {
        res.json(plusuri);
      }
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  }
  getPapusiById();
});

const Accesorii = mongoose.model('Accesorii', papusiSchema);

// Define an API endpoint to fetch items from the database
app.get('/api/accesorii', (req, res) => {
  async function getPapusi() {
    try {
        const accesoriis = await Accesorii.find({});
        res.json(accesoriis);
    } catch (err) {
        console.error(err);
    }
  }
  getPapusi();
});

app.get('/api/accesoriis/:id', (req, res) => {
  const productId = req.params.id;

  async function getPapusiById() {
    try {
      const accesorii = await Accesorii.findById(productId);
      if (!accesorii) {
        res.status(404).send('Product not found');
      } else {
        res.json(accesorii);
      }
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  }
  getPapusiById();
});



// const clientSchema = new mongoose.Schema({
//   username: String,
//   email: String,
//   password: String,
//   token: String,
//   verified: { type: Boolean, default: false },
// });

// const Client = new mongoose.model("Client", clientSchema);

// function generateToken() {
//   return crypto.randomBytes(20).toString('hex');
// }

// const transporter = nodemailer.createTransport({
//   service: 'Gmail',
//   auth: {
//     client: 'papuselsipapusica@gmail.com',
//     pass: 'eqfktgkqwynnfehi'
//   }
// });


// app.post("/signup", async function (req, res) {
//     const { username, email, password } = req.body;
  
//     try {
//       const hash = await bcrypt.hash(password, saltRounds);
//       const token = generateToken();
  
//       const newClient = new Client({
//         username,
//         email,
//         password: hash,
//         token,
//         verified: false,
//       });
  
//       const savedClient = await newClient.save();
  
//       const mailOptions = {
//         from: 'papuselsipapusica@gmail.com',
//         to: savedClient.email,
//         subject: 'Email Confirmation',
//         text: `Click the following link to confirm your email: http://localhost:3001/confirm?token=${savedClient.token}`
//       };
  
//       transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//           console.log('Error sending email:', error);
//           return res.status(500).json({ error: 'Failed to send confirmation email' });
//         }
//         console.log('Confirmation email sent:', info.response);
//         res.redirect("/login");
//       });
//     } catch (err) {
//       console.error(err);
//       return res.status(500).json({ error: 'An error occurred' });
//     }
//   });
  

// app.get('/confirm', async (req, res) => {
//     try {
//       const { token } = req.query;
//       const client = await Client.findOneAndUpdate({ token }, { verified: true }).exec();
  
//       if (!client) {
//         return res.status(404).json({ error: 'Invalid confirmation token' });
//       }
  
//       // adauga delay + o pagina de Check your email!
//       res.redirect('http://localhost:3000/login');
//     } catch (err) {
//       console.error(err);
//       res.status(500).json({ error: 'An error occurred' });
//     }
// });


// app.post("/login", function(req, res) {
//   const email = req.body.email;
//   const password = req.body.password;

//   async function findClient() {
//     try {
//       const foundClient = await Client.findOne({ email: email });
//       if (foundClient) {
//         if (foundClient.verified === true) {
//           bcrypt.compare(password, foundClient.password, function(err, result) {
//             if (result === true) {
//               res.redirect("/");
//             } else {
//               res.send("Incorrect password");
//             }
//           });
//         } else {
//           res.send("User not verified");
//         }
//       } else {
//         res.send("User not found");
//       }
//     } catch (err) {
//       console.error(err);
//     }
//   }

//   findClient();
// });


// app.post('/reset-password', async (req, res) => {
//   const { email } = req.body;

//   try {
//     const client = await Client.findOne({ email }).exec();

//     if (!client) {
//       return res.status(404).json({ error: 'User not found' });
//     }

//     const mailOptions = {
//       from: 'papuselsipapusica@gmail.com',
//       to: client.email,
//       subject: 'Password Reset',
//       text: `Click the following link to reset your password: http://localhost:3000/confirm-reset-password?token=${client.token}`,
//     };

//     transporter.sendMail(mailOptions, (error, info) => {
//       if (error) {
//         console.log('Error sending email:', error);
//         return res.status(500).json({ error: 'Failed to send reset email' });
//       }
//       console.log('Reset email sent:', info.response);
//       res.json({ message: 'Reset email sent' });
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'An error occurred' });
//   }
// });


// app.post('/confirm-reset-password', async (req, res) => {
//   const { password, token } = req.body;

//   try {
//     const client = await Client.findOne({ token }).exec();

//     if (!client) {
//       return res.status(404).json({ error: 'Invalid reset token' });
//     }

//     const hash = await bcrypt.hash(password, saltRounds);
//     client.password = hash;
//     client.token = generateToken();
//     await client.save();

//     res.json({ message: 'Password reset successful' });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'An error occurred' });
//   }
// });


const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  token: String,
  verified: { type: Boolean, default: false },
});

const User = new mongoose.model("User", userSchema);

function generateToken() {
  return crypto.randomBytes(20).toString('hex');
}

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'papuselsipapusica@gmail.com',
    pass: 'eqfktgkqwynnfehi'
  }
});


app.post("/signup", async function (req, res) {
  const { username, email, password } = req.body;

  try {
    const hash = await bcrypt.hash(password, saltRounds);
    const token = generateToken();

    const newUser = new User({
      username,
      email,
      password: hash,
      token,
      verified: false,
    });

    const savedUser = await newUser.save();

    const mailOptions = {
      from: 'papuselsipapusica@gmail.com',
      to: savedUser.email,
      subject: 'Email Confirmation',
      text: `Click the following link to confirm your email: http://localhost:3001/confirm?token=${savedUser.token}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log('Error sending email:', error);
        return res.status(500).json({ error: 'Failed to send confirmation email' });
      }
      console.log('Confirmation email sent:', info.response);
      res.redirect("/login");
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'An error occurred' });
  }
});


app.get('/confirm', async (req, res) => {
  try {
    const { token } = req.query;
    const user = await User.findOneAndUpdate({ token }, { verified: true }).exec();

    if (!user) {
      return res.status(404).json({ error: 'Invalid confirmation token' });
    }

    // adauga delay + o pagina de Check your email!
    res.redirect('http://localhost:3000/login');
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred' });
  }
});


app.post("/login", function(req, res) {
const email = req.body.email;
const password = req.body.password;

async function findUser() {
  try {
    const foundUser = await User.findOne({ email: email });
    if (foundUser) {
      if (foundUser.verified === true) {
        bcrypt.compare(password, foundUser.password, function(err, result) {
          if (result === true) {
            res.redirect("/");
          } else {
            res.send("Incorrect password");
          }
        });
      } else {
        res.send("User not verified");
      }
    } else {
      res.send("User not found");
    }
  } catch (err) {
    console.error(err);
  }
}

findUser();
});



app.post('/reset-password', async (req, res) => {
const { email } = req.body;

try {
  const user = await User.findOne({ email }).exec();

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  const mailOptions = {
    from: 'papuselsipapusica@gmail.com',
    to: user.email,
    subject: 'Password Reset',
    text: `Click the following link to reset your password: http://localhost:3000/confirm-reset-password?token=${user.token}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email:', error);
      return res.status(500).json({ error: 'Failed to send reset email' });
    }
    console.log('Reset email sent:', info.response);
    res.json({ message: 'Reset email sent' });
  });
} catch (err) {
  console.error(err);
  res.status(500).json({ error: 'An error occurred' });
}
});

app.post('/confirm-reset-password', async (req, res) => {
const { password, token } = req.body;

try {
  const user = await User.findOne({ token }).exec();

  if (!user) {
    return res.status(404).json({ error: 'Invalid reset token' });
  }

  const hash = await bcrypt.hash(password, saltRounds);
  user.password = hash;
  user.token = generateToken();
  await user.save();

  res.json({ message: 'Password reset successful' });
} catch (err) {
  console.error(err);
  res.status(500).json({ error: 'An error occurred' });
}
});


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});