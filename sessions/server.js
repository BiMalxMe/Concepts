import express from "express";
import session from "express-session";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json())

// Setup session
app.use(
  session({
    secret: "mysecretkey",
    resave: false,
    saveUninitialized: true,
  })
);

// Dummy users
const users = [
  { id: 1, username: "bimal", password: "123", role: "admin" },
  { id: 2, username: "alice", password: "456", role: "user" },
];

// LOGIN ROUTE
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    (u) => u.username === username && u.password === password
  );
  if (!user) return res.send("Invalid credentials");

  // Create session for role
  if (user.role === "admin") {
    req.session.admin = { id: user.id, username: user.username };
    res.send("Logged in as Admin");
  } else {
    req.session.user = { id: user.id, username: user.username };
    res.send("Logged in as User");
  }
});

// ADMIN DASHBOARD
app.get("/admin", (req, res) => {
  if (!req.session.admin) return res.send("Access Denied");
  res.send(`Welcome Admin ${req.session.admin.username}`);
});

// USER PAGE
app.get("/user", (req, res) => {
  if (!req.session.user) return res.send("Access Denied");
  res.send(`Welcome User ${req.session.user.username}`);
});

// LOGOUT
app.get("/logout", (req, res) => {
  req.session.destroy();
  res.send("Logged out");
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));


//in prod level
import session from "express-session"; // import express-session package to handle sessions
import RedisStore from "connect-redis"; // import redis store for saving session data in redis
import redisClient from "./redis.js"; // import configured redis client

app.set("trust proxy", 1); 
// trust the first proxy in front of express
// needed if app is behind a reverse proxy like nginx or heroku
// ensures secure cookies work correctly

app.use(
  session({
    store: new RedisStore({ client: redisClient }), 
    // set redis as the session store
    // all session data will be saved in redis instead of server memory
    secret: process.env.SESSION_SECRET, 
    // secret string used to sign the session id cookie
    // keeps the session id tamper-proof
    resave: false, 
    // don't save session back to store if it hasn't changed
    saveUninitialized: false, 
    // don't save a new empty session that hasn't been modified
    cookie: {
      secure: true,       
      // cookie will only be sent over https connections
      httpOnly: true,     
      // prevents javascript from accessing the cookie (protects from xss attacks)
      sameSite: "strict", 
      // prevents browser from sending cookie in cross-site requests (protects from csrf)
      maxAge: 24 * 60 * 60 * 1000, 
      // sets cookie expiration time in milliseconds (1 day here)
    },
  })
);
