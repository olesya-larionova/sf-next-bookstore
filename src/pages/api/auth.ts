import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req:NextApiRequest, res:NextApiResponse) {

    function validate(email:string, password:string) {
        if (password.length < 8) {
            return {error:true, message:"Password must have at least 8 symbols"}
        }
        if (!email) { // заглушка
            return {error:true, message:"Bad E-mail"}
        }
        
        return {error: false}
    }

    /*if (req.status !== 'POST') {*/  // похоже, что в примере кода на SF ошибка
    if (req.method !== 'POST') {
        res.status(405).send({ error: true, message: 'Only POST' })
    }

    const { email, password } = req.body;
    
    const validatedInfo = validate(email, password);

    if (validatedInfo.error) {
        res.status(400).send({ error: true, message: 'Email or password are incorrect' });
    } else {
        res.status(200).send({ success: true, token: 'testToken' });
    }
  
}

