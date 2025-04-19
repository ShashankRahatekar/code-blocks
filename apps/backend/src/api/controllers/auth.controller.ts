import {Request, Response} from 'express';

export const registerUser = async (req: Request, res: Response) => {
    const {username, password} = req.body;
    return res.status(201).json({message: 'User registered', username});
}

export const getUser = (req: Request, res: Response) => {
    return res.status(200).json({message: "donee!!!"})
}

export const loginUser = async (req: Request, res: Response) => {
    const {username, password} = req.body;
    console.log('user trying to login ', username);
    
    return res.status(200).json({message: 'User logged in', token: 'random-token'});
}