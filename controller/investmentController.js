import Investment from "../models/investmentSchema.js";

export const postInvestment = async (req, res) => {
  try {
    const { username, month, total } = req.body;

    const newInvestment = new Investment({
      username,
      month,
      total,
    });

    await newInvestment.save();

    res.status(201).json({ message: "Data saved successfully" });
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).json({ error: error });
  }
};

export const fetchInvestment = async (req, res) => {
  const { username } = req.params;

  try {
    const userData = await Investment.find({ username });
    res.json(userData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateInvestment =  async (req, res) => {
  try {
    const { username, month, total } = req.body;

    // Find the existing expense record by username and month
    const existingExpense = await Investment.findOne({ username, month });

    if (existingExpense) {
      // Update the total if the record exists
      existingExpense.total = total;
      await existingExpense.save();
    } else {
      // Create a new record if it doesn't exist
      const newExpense = new Investment({ username, month, total });
      await newExpense.save();
    }
    

    res.json({ message: "Total updated successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to update total in the database" });
  }
};
