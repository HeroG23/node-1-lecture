module.exports = {
    getMessage : (req,res) => {
        res.status(200).send("You accessed my api!")
    },
    addUser:  (req, res) => {
        const { name } = req.params;
      
        if (name === "adam") {
          res.status(403).send("you're not welcome here");
        } else {
          res.status(200).send(`you're ${name}!`);
        }
      }
}