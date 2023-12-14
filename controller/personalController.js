
import Personal from "../models/personalSchema.js";

export const postPersonalExpense = async(req, res) => {
    try{
        const {username, month, total} = req.body;

        const newPersonalExpense = new Personal({
            username,
            month,
            total,
        });

        await newPersonalExpense.save();

        res.status(201).json({message: "Data saved successfully"});
    }catch(error){
        console.log("Error Saving data", error)
        res.status(500).json({error: error})
    }
};

export const fetchPersonalExpenses = async (req, res) => {
    const { username } = req.params;
  
    try {
      const userData = await Personal.find({ username });
      res.json(userData);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };