import { NextResponse } from "next/server";
import User from "@/models/model.user";
import Profile from "@/models/model.profile";
import { v4 as uuidv4 } from 'uuid'

import { hashpass } from "../login/hashHelper";

export async function POST(request: Request) {

    try {
        const data = await request.json();

        // const result = lessons.create({...data, password: hashpass(data.password) });
        const user = await User.create({ ...data, password: hashpass(data.password), verificationCode: uuidv4() });

        if (user !== null) {
            if (Object.keys(user).length) {

                const profile = await new Profile({ user: user._id }).save();

                user.profile = profile._id;

                await user.save();

                let json_response = {
                    status: "success",
                    message: 'User created',
                    data: {
                        // result,
                        _id: user._id,
                        email: user.email,
                        role: user.role,
                        profile: user.profile
                    },
                };

                return new NextResponse(JSON.stringify(json_response), {
                    status: 201,
                    headers: { "Content-Type": "application/json" },
                });
            }


            let json_response = {
                status: "fail",
                message: 'No user created',
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