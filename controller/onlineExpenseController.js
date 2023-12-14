
import Online from "../models/onlineSchema.js";

export const postOnlineExpense = async (req, res) => {
  try {
    const { username, month, total } = req.body;

    const newOnline = new Online({
      username,
      month,
      total,
    });

    await newOnline.save();

    res.status(201).json({ message: "Data saved successfully" });
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).json({ error: "Error saving data" });
  }
};

export const fetchOnlineExpense = async (req, res) => {
  const { username } = req.params;

  try {
    const userData = await Online.find({ username });
    res.json(userData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateConsumption =  async (req, res) => {
  try {
    const { username, month, total } = req.body;

    // Find the existing expense record by username and month
    const existingExpense = await Online.findOne({ username, month });

    if (existingExpense) {
      // Update the total if the record exists
      existingExpense.total = total;
      await existingExpense.save();
    } else {
      // Create a new record if it doesn't exist
      const newExpense = new Online({ username, month, total });
      await newExpense.save();
    }
    
    res.json({ message: "Total updated successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to update total in the database" });
  }
};
