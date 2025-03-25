import { uploadFile } from "@/app/utils/uploadFile";
import Profile from "@/models/model.profile";
import { IncomingForm } from "formidable";
import multer from "multer";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import fs, { PathLike } from "fs";
import path from "path";

/**
 * Update the profile
 * @param request web request 
 * @param params url parameter object
 * @returns a json
 */
export async function POST(request: Request, { params }: { params: Promise<{ id: string }> }) {
    try {

        const id = (await params).id;
        const formData = await request.formData();
        const data2 = { file: formData.get("filetoupload") as any }
        const data = Object.fromEntries(formData);
        console.log('path: ', data2.file.originalFilename);
        const oldPath = data2.file.originalFilename;  // hav problem here

        // const newPath = path.join(process.cwd(), 'public/uploads/')
        // fs.rename(oldPath,newPath,(err)=>{
        //     if (err) {
        //         throw err
        //     }
        //     console.log("File uploaded");

        // })

        let success_response = {
            status: "success",
            message: "Update success",
            data: Object.fromEntries(formData)
        };

        return new NextResponse(JSON.stringify(success_response), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });

    } catch (error: any) {

        if (error.code === "P2025") {

            let error_response = {
                status: "fail",
                message: error.message,
                data: null

            };

            return new NextResponse(
                JSON.stringify(error_response),
                {
                    status: 404,
                    headers: { "Content-Type": "application/json" },
                }
            );
        }

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