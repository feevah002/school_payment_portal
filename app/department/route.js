const router = require("express").Router({mergeParams: true});

const {
  collect_dept_info,
  search_all_dept,
  search_a_dept,
  update_dept_info,
  delete_dept
}= require('./controller')

// post req
router.post('/dept', collect_dept_info)

// get req
router.get('/dept', search_all_dept)

router.get('/dept/:dept', search_a_dept)

// put req
router.put('/dept/:dept', update_dept_info)

// delete req 
router.delete('/dept/:dept', delete_dept)


module.exports = router
