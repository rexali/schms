import { NextResponse } from "next/server";
import User from "@/models/model.user";
import { getUserToken } from "./getUserToken";
import { getUserPassword } from "./getUserPassword";
import { checkpass } from "./hashHelper";

export async function POST(request: Request) {

    try {
        const data = await request.json();

        // const result = lessons.create({...data });
        const user = await User.findOne({ email: data.email });

        if (user !== null) {
            if (Object.keys(user).length) {

                let userPass = await getUserPassword(data.email);

                if (checkpass(userPass, data.password)) {
                    let token = await getUserToken(data.email);

                    let json_response = {
                        status: "success",
                        message: 'Token generated',
                        data: {
                            // result,
                            token
                        },
                    };


                    return new NextResponse(JSON.stringify(json_response), {
                        status: 201,
                        headers: { "Content-Type": "application/json" },
                    });
                }


            }


            let json_response = {
                status: "fail",
                message: 'No record found',
                data: {},
            };

            return new NextResponse(JSON.stringify(json_response), {
                status: 201,
                headers: { "Content-Type": "application/json" },
            });


        } else {
            let json_response = {
                status: "fail",
                message: 'Error! Returned null',
                data: null,
            };

            return new NextResponse(JSON.stringify(json_response), {
                status: 201,
                headers: { "Content-Type": "application/json" },
            });

        }


    } catch (error: any) {

        if (error.code === "P2002") {

            let error_response = {
                data: null,
                status: "fail",
                message: "Error! " + error.message,
            };

            return new NextResponse(JSON.stringify(error_response), {
                status: 409,
                headers: { "Content-Type": "application/json" },
            });
        }


        let error_response = {
            data: null,
            status: "fail",
            message: "Error! " + error.message,
        };

        return new NextResponse(JSON.stringify(error_response), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}