import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) { 

    const { subject, key} = req.query;

    const gbooksReqParams = new URLSearchParams();
    gbooksReqParams.set('q', `Subject:${subject}`);
    gbooksReqParams.set('key', `${key}`)

    if (!req.query.subject) {
        res.status(400).send({
            error: true,
            message: 'No subject in query params'
        })
    }

    const result = await fetch(`https://www.googleapis.com/books/v1/volumes?${gbooksReqParams.toString()}`); // а вот в примере кода из SF тут повторное объявление res :(
    const booksData = await result.json();

    res.status(200).send({
        data: booksData,
    })

 }