

import Travel from "../models/travelSchema.js";

export const postTravelExpense = async(req, res) => {
    try{
        const {username, month, total} = req.body;

        const newTravel = new Travel({
            username,
            month,
            total,
        });

        await newTravel.save();

        res.status(201).json({message: "Data saved successfully"});
    }catch(error){
        console.log("Error Saving data", error)
        res.status(500).json({error: error})
    }
};

export const fetchTravelExpense = async (req, res) => {
    const { username } = req.params;
  
    try {
      const userData = await Travel.find({ username });
      res.json(userData);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };