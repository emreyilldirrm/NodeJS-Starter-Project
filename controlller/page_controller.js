const Post = require('../models/post');

const home = async (req,res) => {
    console.log("controller")
    const posts = (await Post.find({})).reverse()//veri tabanımızdan gelen diziyi ters çeviriyoruz
    res.render("site/index.ejs",{posts})               //Nedeni en en eklenen en başta olmalı
}

const about = async (req,res)=>{ 
    res.render("site/about.ejs")
}

const addpost =async (req,res)=>{ 
    res.render("site/add_post.ejs")
}

const post = async (req,res)=>{ 
    res.render("site/post.ejs")
}

const new_post = async (req,res) => {
    await Post.create(req.body)
    res.redirect("/")
  } 

 const post_id = async (req,res) => {
    const id = req.params.id
    console.log("Gelen id değeri :",id)
  
    const posts = await Post.findById({ _id: id })
    console.log("Veritabanından id ile çekilen data :",posts)
    res.render("site/post",{posts})
  }
module.exports = { 
    home,
    about,
    addpost,
    post,
    new_post,
    post_id
}