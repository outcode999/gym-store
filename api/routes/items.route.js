import  express  from "express";
import { verifyToken } from '../Middleware/VerfiyUser.js';
import { verfiyStoreManger } from '../Middleware/VerfiyStoremanger.js';
import { Cartcrete, CheckOutcrete, Formm, Itcreate,  checkout, deleteItems, deleteItemss, deleteitems, getAllItems, getCartItem, getallOrder, getitems, updateitem } from "../controllers/items.controller.js";



const router = express.Router();

router.post('/Itcreate', verifyToken,verfiyStoreManger, Itcreate);
router.get('/getAllItems', getAllItems);
router.get('/getItem/:ItemsId', getitems);
router.post('/Cart',  Cartcrete);
router.get('/cartitem/:CurrentuserId', getCartItem)
router.post('/Checkout',  CheckOutcrete);
router.delete('/deleteitems/:itemsId',  deleteItems)
router.delete('/deletCurretId/:CurrentuserId',verifyToken,  deleteItemss)
router.get('/itemDetails/:CurrentuserId', checkout)
router.put('/updateitem/:itemId', verifyToken,verfiyStoreManger, updateitem)
router.delete('/deleteitem/:itemsId', verifyToken,verfiyStoreManger, deleteitems)
router.get('/getorder', verifyToken, getallOrder)
router.post('/createform', verifyToken,verfiyStoreManger, Formm)





export default router;