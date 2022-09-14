const express = require("express");
const bodyparser = require("body-parser");
const path = require("path");
const cookieparser = require("cookie-parser")
const cors = require('cors');
const app = express();
const config = require("./config");
const { default: axios } = require("axios");
const blogRouter = require("./routes/blogRoute")

const port = process.env.PORT || 5000;

app.use(cors());

app.use(bodyparser.json({limit: "50mb", type: "application/json"}));

app.use(
    bodyparser.urlencoded({
        limit: "50mb",
        extended: true,
        parameterLimit: 50000,
        type: "application/x-www-form-urlencoded",
    })
);
app.use("/assets", express.static("assets"));
app.use(cookieparser())

// View Engine Setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static('seo'));

app.use('/blog', blogRouter);

app.get("/", function (req, res) {
    res.render("index", {
        config,
        metaFileName : "../partials/meta_tags/meta_index" 
    });
});

app.get("/sitemap.xml", function (req, res) {
    axios.get(`${config.api.adminApiUrl}/api/distru/blog/blog-links`).then(data => {
        res.setHeader('Content-Type', 'text/xml');
        res.render("sitemap", {
            config,
            links : data.data.links
        });
    });    
});

app.get("/back-office", function (req, res) {
    res.render("back-office", {
        config,
        metaFileName : "../partials/meta_tags/meta_back_office" 
    });
});

app.get("/delivery", function (req, res) {
    res.render("delivery", {
        config,
        metaFileName : "../partials/meta_tags/meta_delivery" 
    });
});

app.get("/ecommerce", function (req, res) {
    res.render("ecommerce", {
        config,
        metaFileName : "../partials/meta_tags/meta_ecommerce" 
    });
});

app.get("/fleet-app", function (req, res) {
    res.render("fleet-app", {
        config,
        metaFileName : "../partials/meta_tags/meta_fleet_app" 
    });
});

app.get("/live-demo", function (req, res) {
    res.render("live-demo", {
        config,
        metaFileName : "../partials/meta_tags/meta_live_demo" 
    });
});

app.get("/login", function (req, res) {
    res.render("login", {
        config,
        metaFileName : "../partials/meta_tags/meta_login" 
    });
});

app.get("/point-of-sale", function (req, res) {
    res.render("point-of-sale", {
        config,
        metaFileName : "../partials/meta_tags/meta_point_of_sale" 
    });
});

app.get("/pricing", function (req, res) {
    res.render("pricing", {
        config,
        pageTitle: "Pricing",
        metaFileName : "../partials/meta_tags/meta_pricing" 
    });
});

app.get("/product-ordering", function (req, res) {
    res.render("product-ordering", {
        config,
        metaFileName : "../partials/meta_tags/meta_product_ordering" 
    });
});

app.get("/schedule-demo", function (req, res) {
    res.render("schedule-demo", {
        config,
        metaFileName : "../partials/meta_tags/meta_schedule_demo" 
    });
});

app.get("/self-demo", function (req, res) {
    res.render("self-demo", {
        config,
        metaFileName : "../partials/meta_tags/meta_self_demo" 
    });
});

app.get("/signup", function (req, res) {
    res.render("signup", {
        config,
        email: req.query.email,
        metaFileName : "../partials/meta_tags/meta_signup" 
    });
});


app.get("/iv/:id", async function (req, res) {
    try {
        const response = await axios.get(config.api.adminApiUrl + '/api/v3/order/print-invoice/' + req.params.id);

        res.render("print-invoice", {
            pos: response.data.data
        });
      } catch (error) {
        res.status(404).send({
            'message': 'There was an error!'
        });
    }
});

app.listen(port, function (error) {
    if (error) throw error;
    else {
        console.log("Server created Successfully");
    }
});
