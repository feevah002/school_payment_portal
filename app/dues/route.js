const router = require("express").Router({mergeParams: true});

const {
  collect_due_info,
  search_all_dues,
  search_a_due,
  search_dues_for_a_dept,
  update_info,
  delete_info
}= require('./controller')


router.post('/dues', collect_due_info)

router.get('/dues/', search_all_dues)
router.get('/dues/:due', search_a_due)
router.get('/dues/:dept/', search_dues_for_a_dept)

router.put('/dues/:due', update_info)

router.delete('/dues/:due', delete_info)


module.exports = router
