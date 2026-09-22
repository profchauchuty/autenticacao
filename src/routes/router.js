import { Router } from 'express'
import authRouter from './auth.routes.js'
import userRouter from './user.routes.js'

const router = Router()

router.use('/auth', authRouter)
router.use('/users', userRouter)
// router.use('/products', productRouter)
// router.use('/orders, ordersRouter)

router.use((_, res) => {
    res.status(404).json({
        status: '404'
    });
});

export default router