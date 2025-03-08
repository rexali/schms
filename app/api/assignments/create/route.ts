import { assignments } from '@/db/db';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: Request) {

    try {
        const { topic, question, instruction } = await request.json();
        const result = assignments.create({
            topic, question, instruction
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
