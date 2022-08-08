import express from 'express';

const router = express.Router();

router.get('/:username', (req,res) => {
    return res.send('')
})

export {router as counterRouter}
