const router = require('express').Router()  
const page_controller = require('../controlller/page_controller')

console.log("router")
router.get("/", page_controller.home)
router.get("/about", page_controller.about)
router.get("/addpost", page_controller.addpost)
router.get("/post", page_controller.post)
router.post("/new-post", page_controller.new_post) 
router.get("/posts/:id", page_controller.post_id)


module.exports = router