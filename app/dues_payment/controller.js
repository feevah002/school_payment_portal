const { 
        save_webhook_data,
      } = require('./repository');
const {
        dues_pay_validate
      } = require('../../middleware/validate')
const { 
        validate_onPost
      } = dues_pay_validate
const {  update_user, find_user } = require('../user/repository')
const {
 
  get_due,
} = require('../dues/repository');
/**
 * @author Ikenna Emmanuel <eikenna58@gmail.com>
 * @description create payment link
 * @route /v1/dues-pay/initialize
 * @access Public
 * @type POST
 */
exports.create_payment_link = async (req,res)=>{
  try{

    const unvalidatedpayload = req.body
    const validated = validate_onPost(req.body)

    const username = validated.username
    const user = await find_user({username:username})
    const due = await get_due({title: validated.due})
    console.log(due);
    const https = require('https')
    const params = JSON.stringify({
      "email": `${user.email}`,
      "amount": `${due.amount * 100}`,
      'metadata':  {
        user_id: user.id,
        username:user.username,
        fullname:user.firstname,
        department: user.department.dept_name,
        due_name: due.title,
        amount:{
          to_be_paid: due.amount,
          paid:due.amount,
        },
      },
    })

    const options = {
      hostname: 'api.paystack.co',
      port: 443,
      path: '/transaction/initialize',
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.SECRET_KEY}`,
        'Content-Type': 'application/json'
      }
    }

    const req_paystack = https.request(options, res_paystack => {
      let data = ''

      res_paystack.on('data', (chunk) => {
        data += chunk
      });

      res_paystack.on('end', () => {
        data = JSON.parse(data)
        return  res.status(200).json({
                  data
                })

      })
    }).on('error', error => {
      console.error(error)
    })

    req_paystack.write(params)
    req_paystack.end()
   
  } catch(error){
    console.log(error);
    return  res.status(500).json({
              error,
              status:'false'
            });
  }
} 

/**
 * @author Ikenna Emmanuel <eikenna58@gmail.com>
 * @description handle event after payment
 * @route /v1/dues/webhook
 * @access Public
 * @type POST
 */

exports.collect_webhook_data = async(req,res)=>{
  try{
    //validate event
    const crypto = require('crypto');
    const secret = process.env.SECRET_KEY;
    const hash = crypto.createHmac('sha512', secret).update(JSON.stringify(req.body)).digest('hex');
    if (hash == req.headers['x-paystack-signature']) {

      // Retrieve the request's body
      const all_webhook_data = req.body
      const webhook_user_data = req.body.data.metadata

      // Do something with retrieived data
      switch (all_webhook_data.event){
        case 'charge.success':
          const user = await find_user({username:webhook_user_data.username},)
          user.student_dues.push(webhook_user_data)
          await user.save()
          const payload = await save_webhook_data({all_webhook_data, webhook_user_data})
          break;
        default:
          return  res.status(500).json({
                    message:'Something went wrong',
                    status:'false'
                  });
      }
    }
  } catch(error){
    console.log(error)
    return  res.status(500).json({
              error,
              status:'false'
            });
  } 
}



