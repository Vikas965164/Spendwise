
// controllers/consumptionController.js
import Consumption from "../models/Consumption.js";

// Post data to the database
export const postConsumption = async (req, res) => {
  try {
    const { username, month, total } = req.body;

    const newConsumption = new Consumption({
      username,
      month,
      total,
    });

    await newConsumption.save();

    res.status(201).json({ message: 'Data saved successfully' });
  } catch (error) {
    console.error('Error saving data:', error);
    res.status(500).json({ error: 'Error saving data' });
  }
};

export const getElecricity = async (req, res) => {
  const { username } = req.params;

  try {
    const userData = await Consumption.find({ username });
    res.json(userData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Fetch data from the database
export const fetchConsumption = async (req, res) => {
  try {
    const data = await Consumption.find();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Error fetching data' });
  }
};
