const router = require("express").Router();
const { Post } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", withAuth, async (req, res) => {
    try {
        const createPost = await Post.create({
            title: req.body.title,
            description: req.body.description,
            user_id: req.session.user_id,
        });
        res.status(200).json(createPost);
      } catch (err) {
        res.status(500).json(err);
      }
    });

router.delete("/:id", withAuth, async (req, res) => {
    try {
        const postDelete = await Post.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });
        res.status(200).json(postDelete);
      } catch (err) {
        res.status(500).json(err);
      }

});

module.exports = router;

