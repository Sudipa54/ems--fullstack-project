import express from 'express'
import cors from 'cors'
import Jwt from 'jsonwebtoken'
import cookieParser from 'cookie-parser'
import { adminRouter } from './Routes/AdminRoute.js'
import { EmployeeRouter } from './Routes/EmployeeRoute.js'
import mysql2 from 'mysql2'
import dtenv from 'dotenv'
dtenv.config()

const app = express()

console.log(process.env.DB_HOST)
console.log(process.env.DB_PASSWORD)

export const con = mysql2.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
})

con.connect((err) => {
  if (err) {
    console.log('Database connection failed:', err)
  } else {
    console.log('Connected to the database')
  }
})

app.use(
  cors({
    origin: [process.env.CORS_URL], // Your frontend origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true, // Allow credentials to be included
  })
)
app.use(express.json())
app.use(cookieParser())
app.use('/auth', adminRouter)
app.use('/employee', EmployeeRouter)
app.use(express.static('Public'))

const verifyUser = (req, res, next) => {
  const token = req.cookies.token
  if (token) {
    Jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) return res.json({ Status: false, Error: 'Wrong Token' })
      req.id = decoded.id
      req.role = decoded.role
      next()
    })
  } else {
    return res.json({ Status: false, Error: 'Not authenticated' })
  }
}

app.get('/verify', verifyUser, (req, res) => {
  return res.json({ Status: true, role: req.role, id: req.id })
})

app.listen(3000, () => {
  console.log('Server is running')
})
