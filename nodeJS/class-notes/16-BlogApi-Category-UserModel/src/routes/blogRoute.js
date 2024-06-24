//* Blog Route

const router = require("express").Router();

const { BlogPostController,BlogCategoryController } = require("../controllers/blogController");

//*category
router
  .route("/post")
  .get(BlogCategoryController.list)
  .post(BlogCategoryController.create);
router
  .route("/post/:id")
  .get(BlogCategoryController.read)
  .put(BlogCategoryController.update)
  .delete(BlogCategoryController.delete);

//? posts
router
  .route("/post")
  .get(BlogPostController.list)
  .post(BlogPostController.create);
router
  .route("/post/many")
  .post(BlogPostController.createMany)
  .delete(BlogPostController.deleteMany);  
router
  .route("/post/:id")
  .get(BlogPostController.read)
  .put(BlogPostController.update)
  .delete(BlogPostController.delete);



module.exports = router;
