const router = require("express").Router();
const { Post, User } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {

  });

  router.get('/post/:id', async (req, res) => {

      });

      router.get("/profile", withAuth, async (req, res) => {

      });
      
      module.exports = router;