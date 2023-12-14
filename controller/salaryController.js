
import Salary from "../models/salarySchema.js";

export const postSalary = async(req, res) => {
    try{
        const {username, month, total} = req.body;

        const newSalary = new Salary({
            username,
            month,
            total,
        });

        await newSalary.save();

        res.status(201).json({message: "Data saved successfully"});
    }catch(error){
        console.log("Error Saving data", error)
        res.status(500).json({error: error})
    }
};

export const fetchSalary = async (req, res) => {
    const { username } = req.params;
  
    try {
      const userData = await Salary.find({ username });
      res.json(userData);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };