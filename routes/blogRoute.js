const express = require("express");
const { default: axios } = require("axios");
const config = require("../config");

const blogRouter = express.Router();

blogRouter.get('/', async (req, res) => {
    res.render('blog', {
        config,
        metaFileName : "../partials/meta_tags/meta_blog"
    });    
});

blogRouter.get("/category/:slug", async function (req, res) {
    res.render('blog-by-category', {
        slug : req.params.slug.replaceAll('-', ' '),
        config,
        metaFileName : "../partials/meta_tags/meta_blog"
    });
});

blogRouter.get("/tag/:slug", async function (req, res) {
    res.render('blog-by-tag', {
        slug : req.params.slug.replaceAll('-', ' '),
        config,
        metaFileName : "../partials/meta_tags/meta_blog"
    });
});

blogRouter.get("/:slug", async function (req, res) {
    try {
        const response = await axios.get(`${config.api.adminApiUrl}/api/distru/blog/post/${req.params.slug}`);

        let blog = response.data.post;

        res.render("single-blog", {
            config,
            blog,
            metaFileName : "../partials/meta_tags/meta_single_blog"
        });   
    } catch(error) {
        console.log(error)
    }
});


module.exports = blogRouter;