import { submissions } from '@/app/api/db/db';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {

    try {
        const { topic, question, instruction, answer } = await request.json();
        const result = submissions.create({
            topic, question, instruction, answer
        });

        let json_response = {
            status: "success",
            data: {
                result,
            },
        };
        return new NextResponse(JSON.stringify(json_response), {
            status: 201,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error: any) {
        if (error.code === "P2002") {
            let error_response = {
                status: "fail",
                message: "Feedback with title already exists",
            };
            return new NextResponse(JSON.stringify(error_response), {
                status: 409,
                headers: { "Content-Type": "application/json" },
            });
        }

        let error_response = {
            status: "error",
            message: error.message,
        };
        return new NextResponse(JSON.stringify(error_response), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}


export async function GET(request: NextRequest) {
    const page_str = request.nextUrl.searchParams.get("page");
    const limit_str = request.nextUrl.searchParams.get("limit");

    const page = page_str ? parseInt(page_str, 10) : 1;
    const limit = limit_str ? parseInt(limit_str, 10) : 10;
    const skip = (page - 1) * limit;

    const result = submissions.list();

    let json_response = {
        status: "success",
        data:{
            submissions:result
        }
    };

    return NextResponse.json(json_response);
}
