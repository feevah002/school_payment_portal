const router = require("express").Router({mergeParams: true});

const {
  collect_dept_info,
  search_all_dept,
  search_a_dept,
  search_dept_for_a_dept,
  update_info,
  delete_info
}= require('./controller')


router.post('/dept', collect_dept_info)

// router.get('/dept/', search_all_dept)
// router.get('/dept/:dept', search_a_dept)
// router.get('/:dept/dept/', search_dept_for_a_dept)

// router.put('/dept/:dept', update_info)

// router.delete('/dept/:dept', delete_info)


module.exports = router
