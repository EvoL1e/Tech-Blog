const router = require("express").Router();
const { User } = require("../../models");

router.post('/', async (req, res) => {
  try {
    const createUser = await User.create(req.body);
      req.session.save(() => {
        req.session.user_id = createUser.id;
        req.session.logged_in = true;
      
    });
    res.status(200).json(createUser);
  } catch (err) {
    res.status(500).json(err);
  }
  });
  
  router.post('/login', async (req, res) => {
    try {
      const userLogin = await User.findOne({ where: { email: req.body.email } });
        
      res.status(200).json(userLogin);
    } catch (err) {
      res.status(500).json(err);
    }
    });
  
  router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
      req.session.destroy(() => {
          res.status(204).end();
      });
    } else {
        res.status(404).end();
    }

  });
  
  module.exports = router;