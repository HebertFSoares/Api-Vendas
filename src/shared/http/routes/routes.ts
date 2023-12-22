import { Router, response } from "express";

const router = Router();

router.get('/ping', (req,res) => {
  return res.json({ msg: "Pong"})
})

export default router;