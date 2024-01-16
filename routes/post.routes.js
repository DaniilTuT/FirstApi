const Router = require('express')
const router = new Router()
const postController = require('C:\\Users\\Даниил\\WebstormProjects\\untitled\\controllers\\post.controller.js')

router.post('/post', postController.createPost)
router.get('/post', postController.getPostsByUser)

module.exports = router