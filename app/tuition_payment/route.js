const router = require("express").Router({mergeParams: true});

const {
        create_payment_link,
        collect_webhook_data
      } = require('./controller');


// initialze payment
router.post('/tuition-pay/initialize', create_payment_link)

// create recipt
router.post('/tuition/webhook', collect_webhook_data)


// // exporting function
module.exports = router