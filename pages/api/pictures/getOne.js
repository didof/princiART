import pictures from '@/config/content/pictures.json'

export default function getOnePicture(req, res) {
    let body = { message: `The method ${req.method} is not allowed on this path` }
    if (req.method !== 'GET') {
        res.statusCode = 405;
    } else {
        res.statusCode = 200;
        const { which } = req.query

        const el = pictures.find(({ filename }) => {
            return filename === which
        })

        if(el) {
            body = JSON.stringify(el);
        }
    }

    res.setHeader('Content-Type', 'application/json')
    res.end(body)
}