import formidable from 'formidable';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

export const config = {
    api: {
        bodyParser: false
    }
}

export async function POST(req: Request, res: NextApiResponse) {
    if (req.method !== "POST") {
        let error_response = {
            status: "fail",
            message: 'Method not allowed! ',
            data: null
        };

        return new NextResponse(JSON.stringify(error_response), {
            status: 405,
            headers: { "Content-Type": "application/json" },
        });

    }

    try {
        const form = formidable({});

        const data: { files: any, fields: any } = await new Promise((resolve, reject) => {
            form.parse(req as any, (err, fields, files) => {
                console.log(`Recieved file`, fields);

                if (err) {
                    reject(err);
                }

                resolve({ files, fields })

            })
        });

        Object.keys(data.files).forEach(key => {
            console.log(`Recieved file ${key}:`, data.files[key]);

        });

        let success_response = {
            status: "success",
            message: "Update success",
            data: data.fields
        };

        return new NextResponse(JSON.stringify(success_response), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });

        // return res.status(200).json({ status: "success", message:"Good", data: data.fields });
    } catch (error: any) {
        // return res.status(500).json({ status: "success", message:"Error!"+error.message, data:null });
        let error_response = {
            status: "fail",
            message: 'Internal Server! ' + error.message,
            data: null
        };

        return new NextResponse(JSON.stringify(error_response), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });

    }


}