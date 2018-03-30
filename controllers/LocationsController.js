module.exports = {
    get: (req, res) => {
      const db = req.app.get("db");
      const user_id = req.user.id;
      db.get_locations({ user_id }).then(locations => {
        res.send(locations);
      });
    },
  
    create: (req, res) => {
      const db = req.app.get("db");
      const user_id = req.user.id;
  
      let locationObj = { ...req.body, user_id };
  
      db.create_location(locationObj).then(results => {
        res.send(result[0]);
      });
    },

    delete: (req,res) => {
        const db = req.app.get('db')
        const user_id = req.user.id

        const { id: location_id} = req.params   //rename the id as location_id
    
        db.delete_location({location_id, user_id}).then(locations =>{
            res.send(locations)
        })
    }

  };
  