import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export async function POST(request: NextRequest) {
    try {
        // const result = lessons.create({...data, password: hashpass(data.password) });
        const headertoken = (await headers()).get('authorization')?.split(' ')[1] as string
        const cookieToken = (await cookies()).get('token') as unknown as string;
        // verify that the token is signed during login to prevent CSRF attack
        let decoded = jwt.verify(headertoken || cookieToken, process.env.SECRET_KEY as string) as any;

        // check userId,email,role are defined in the token
        if (decoded?._id && decoded?.email && decoded?.role) {
            // return the verified user data
            let json_response = {
                status: "success",
                message: "verified",
                data: {
                    // result,
                    token: headertoken,
                    _id: decoded?._id,
                    email: decoded?.email,
                    role: decoded?.role,
                },
            };

            return new NextResponse(JSON.stringify(json_response), {
                status: 200,
                headers: { "Content-Type": "application/json" },
            });

        } else {
            let json_response = {
                status: "failed",
                message: "Error! Verification failed",
                data: null
            };

            return new NextResponse(JSON.stringify(json_response), {
                status: 400,
                headers: { "Content-Type": "application/json" },
            });

        };


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