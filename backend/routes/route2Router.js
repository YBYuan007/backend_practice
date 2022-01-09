const express = require("express");
const { post, route } = require("./route1Router");
const route2 = express.Router();
const { default: axios } = require("axios");

route2.get("/", function (req, res, next) {
  if (!req.query.tag) {
    res.status(400);
  } else {
    const tag = req.query.tag;
    const sort = req.query.sortBy;
    const direc = req.query.direction;
    
   axios.get("https://api.hatchways.io/assessment/blog/posts", {params: {tag}})
   .then((response)=>{
     const posts = response.data.posts;
     const resultArray = posts.filter((post) => post.tags.includes(tag));
    if (sort) {
      resultArray.sort((a, b) => {
        if (direc === "desc") {
          [a, b] = [b, a];
        }

        if (a[sort] > b[sort]) {
          return 1;
        } else a[sort] >= b[sort];
        return -1;
      });
    }

    res.send(resultArray);
    });
  }
});

route2

// axios.post(
//   `localhost:/api/posts`,
//   { tag: "tech", sortBy: "id", direction: "asc" },
//   () => {}
// );

// route2.get("/:tag", function (req, res) {
//   re(req.params.tag);
// })

module.exports = route2;
