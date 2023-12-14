
import Contact from "../models/contactSchema.js";

export const postContact = async (req, res) => {
    try {
      const { name, email, message } = req.body;
  
      const newMessage = new Contact({
        name,
        email,
        message,
      });
  
      await newMessage.save();
  
      res.status(201).json({ message: "Data saved successfully" });
    } catch (error) {
      console.error("Error saving data:", error);
      res.status(500).json({ error: "Error saving data" });
    }
  };