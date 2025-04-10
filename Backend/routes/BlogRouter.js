import express from 'express'
import { addBlog, delBlog, getBlog } from '../controllers/BlogController.js'

const blogRouter = express.Router()

blogRouter.post('/addblog', addBlog)
blogRouter.get('/getblog', getBlog)
blogRouter.post('/delblog', delBlog)

export default blogRouter