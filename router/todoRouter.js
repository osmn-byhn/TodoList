import express from "express"
import mongoose from "mongoose"
import User from "../modals/userSchema.js"
const router = express.Router()

router.get('/:id', async(req, res) => {
    try {
        const user = await User.findById(req.params.id)
        if(!user) {
            console.log("hata");
        }
        res.status(200).json(user.todoList)
    } catch (error) {
        
    }
})

router.post('/:id', async (req, res) => {
    const user = await User.findById(req.params.id)
    try {
      const todoPosting = await user.todoList.push({
        description: req.body.description
      });
      await user.save()
      res.sendStatus(200).send(todoPosting)
    } catch (error) {
      res.sendStatus(500).send(error);
    }
});

export default router