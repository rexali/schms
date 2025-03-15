import Comment from '@/models/model.comment';
import Lesson from '@/models/model.lesson';
import User from '@/models/model.user';


import { NextRequest, NextResponse } from 'next/server';
// import { comments } from '@/config/db';

export async function POST(request: Request) {

    try {
        const data = await request.json();

        // const result = comments.create({...data });

        const comment = await Comment.create({
            ...data
        });

        const lesson = await Lesson.findById(data.lesson).exec();
        lesson.comments.push(comment._id);
        await lesson.save();

        // await new User({ user: comment.user }).save();

        if (comment !== null) {
            if (Object.keys(comment)) {

                let json_response = {
                    status: "success",
                    message: 'successfully created',
                    data: {
                        // result,
                        comment
                    },
                };

                return new NextResponse(JSON.stringify(json_response), {
                    status: 201,
                    headers: { "Content-Type": "application/json" },
                });
            }


            let json_response = {
                status: "fail",
                message: 'No comment created',
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


export async function GET(request: NextRequest) {
    try {
        const page_str = request.nextUrl.searchParams.get("page");
        const limit_str = request.nextUrl.searchParams.get("limit");

        const page = page_str ? parseInt(page_str, 10) : 1;
        const limit = limit_str ? parseInt(limit_str, 10) : 10;
        const skip = (page - 1) * limit;

        // const result = comments.list();
        const comments = await Comment.find().exec();
        if (comments !== null) {

            if (comments.length) {
                let json_response = {
                    status: "success",
                    message: 'Found!',
                    data: {
                        // result,
                        comments
                    },
                };

                return new NextResponse(JSON.stringify(json_response), {
                    status: 200,
                    headers: { "Content-Type": "application/json" },
                });
            }


            let json_response = {
                status: "success",
                message: 'Not found',
                data: [],
            };

            return new NextResponse(JSON.stringify(json_response), {
                status: 201,
                headers: { "Content-Type": "application/json" },
            });


        } else {
            let json_response = {
                status: "fail",
                message: 'Error! Null returned',
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
                message: error.message,
            };

            return new NextResponse(JSON.stringify(error_response), {
                status: 409,
                headers: { "Content-Type": "application/json" },
            });
        }


        let error_response = {
            data: null,
            status: "Error!",
            message: error.message,
        };

        return new NextResponse(JSON.stringify(error_response), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}

