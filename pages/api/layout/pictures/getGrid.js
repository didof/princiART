import pictures from '@/app/json/pictures.json'

export default function getPictures(req, res) {
    let body = { message: `The method ${req.method} is not allowed on this path` }
    if (req.method !== 'GET') {
        res.statusCode = 405;
    } else {
        res.statusCode = 200;
        body = JSON.stringify(pictures)
    }

    res.setHeader('Content-Type', 'application/json')
    res.end(body)
}