import type { NextApiRequest, NextApiResponse } from 'next'
import formidable, { File } from 'formidable'
import fs from 'fs'

const form = formidable({ multiples: true })

const isFile = (file: File | File[]): file is File => !Array.isArray(file) && file.filepath !== undefined

type Data = {
    message?: string
} | any[]

const handler = async (
    req: NextApiRequest,
    res: NextApiResponse<Data>
) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' })
    }

    try {
        const fileContent: string = await (new Promise((resolve, reject) => {
            form.parse(req, (err, _fields, files) => {
                if (isFile(files.file)) {
                    const fileContentBuffer = fs.readFileSync(files.file.filepath)
                    const fileContentReadable = fileContentBuffer.toString('utf8')

                    resolve(fileContentReadable)
                }

                reject()
            })
        }))

        // Do whatever you'd like with the file, since it's already in text
        var lines = fileContent.split(/\r?\n/);
        for (var line of lines) {
            if (line !== "") {
                var type = line.substring(0, 1)
                var date = line.substring(1, 26)
                var product = line.substring(26, 56)
                var value = line.substring(56, 66)
                var seller = line.substring(66, 86)

                console.log(type)
                console.log(date)
                console.log(product)
                console.log(value)
                console.log(seller)
            }
        }

        res.status(200).send({ message: 'ok' })
    } catch (err) {
        res.status(400).send({ message: 'Bad Request' })
    }
}

export const config = {
    api: {
        bodyParser: false, // Disallow body parsing, consume as stream
    },
}

export default handler