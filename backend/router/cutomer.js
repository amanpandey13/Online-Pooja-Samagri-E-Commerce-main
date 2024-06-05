const router = require('express').Router()
const shopownercontrol =require('../controler/customercontrol')
const auth =require('../middleware/auth')
router.post('/register',shopownercontrol.register)
router.post('/login',shopownercontrol.login)
router.post('/add',auth,shopownercontrol.add)
router.get('/cart',auth,shopownercontrol.cart)
router.get('/info',auth,shopownercontrol.info)
router.post('/pooja',auth,shopownercontrol.pooja)
router.get('/all',shopownercontrol.all)
router.get('/admin',shopownercontrol.admin)
router.get('/order',auth,shopownercontrol.order)
router.patch('/addcart', auth, shopownercontrol.addCart)


router.post('/orders', shopownercontrol.orders);
router.post('/verfiy', shopownercontrol.verfiy);
router.patch('/redata',auth,shopownercontrol.redata)
module.exports = router
