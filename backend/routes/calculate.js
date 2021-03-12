// Require The Express Framework
const express = require('express')

// Set The Express Router
const router = express.Router();

// Create The Routes
router.get('/:value', (req, res) => {
    let total = parseFloat(req.params.value);
    if (isNaN(total)) {
        res.status(500);
    }
    let tax = 0;
    if (total>180001){ 
        let taxable = total-180000;
        tax = 54097+(0.45*taxable)
    } else if (total>90001){
        let taxable = total-90000;
        tax = 20797+(0.37*taxable) 
    } else if (total>37001){ 
        let taxable = total-37000
        tax = 3572+(0.325*taxable)
    } else if (total>18201){
        let taxable = total-18200
        tax = 0.19*taxable
    }
  res.json({tax})
})

// Export the Router
module.exports = router