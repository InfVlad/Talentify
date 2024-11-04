import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken'

export const isAuth = (req: Request, res: Response, next: NextFunction): void => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (!token) {
        res.status(401).json({ message: 'No token provided. Please log in' })
        return
    }

    jwt.verify(token, process.env.JWT_SECRET as string, (err, user) => {
        if (err) {
            res.status(403).json({ message: 'Invalid or expired token. Access forbidden' })
            return 
        }

        req.user = user
        next()
    })
}


