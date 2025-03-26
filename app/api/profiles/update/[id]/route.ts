import { uploadFile } from "@/app/utils/uploadFile";
import Profile from "@/models/model.profile";
import { IncomingForm } from "formidable";
import multer from "multer";
import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

/**
 * Update the profile
 * @param request web request 
 * @param params url parameter object
 * @returns a json
 */
export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const UPLOAD_DIR = path.resolve(process.cwd() ?? "", "public/uploads")
        const id = (await params).id;
        const formData = await request.formData();
        const body = Object.fromEntries(formData);
        const filetoupload = (body.filetoupload as Blob) || null;

        // const filetouploads = body.filetouploads as unknown as Array<Blob> || null; 

        // console.log(filetouploads);

        if (filetoupload) {

            const buffer = Buffer.from(await filetoupload.arrayBuffer());

            if (!fs.existsSync(UPLOAD_DIR)) {
                fs.mkdirSync(UPLOAD_DIR)
            }

            fs.writeFileSync(path.resolve(UPLOAD_DIR, Date.now() + Math.random() + (filetoupload as File).name), buffer);

        } else {
            let error_response = {
                status: "fail",
                message: "Update failed",
                data: null
            };

            return NextResponse.json(error_response)
        }


        const profile = await Profile.updateOne({ _id: id || body._id }, { ...body })


        if (profile.modifiedCount) {

            let success_response = {
                status: "success",
                message: 'update successful',
                data: {
                    // result,
                    profile,
                },
            };


            return NextResponse.json(
                success_response,
                {
                    status: 200,
                    headers: { "Content-Type": "application/json" }
                }
            );

        }


        let success_response = {
            status: "fail",
            message: 'update failed',
            data: {
                // result,
                profile,
            },
        };


        return NextResponse.json(
            success_response,
            {
                status: 400,
                headers: { "Content-Type": "application/json" }
            }
        );

        // let success_response = {
        //     status: "success",
        //     message: "Update success",
        //     data: {
        //         filetouploads,
        //         // body
        //     }
        // };

        // return new NextResponse(JSON.stringify(success_response), {
        //     status: 200,
        //     headers: { "Content-Type": "application/json" },
        // });

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