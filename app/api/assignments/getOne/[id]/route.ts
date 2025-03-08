import { NextResponse } from "next/server";
import { assignments } from "@/db/db";

export async function GET(request: Request, { params }: { params: { id: string } }) {
    const id = params.id;  //ByswAbi51l
    const assignment = assignments.get(id);

    if (!assignment) {
        let error_response = {
            status: "fail",
            message: "No Feedback with the Provided ID Found",
        };
        return new NextResponse(JSON.stringify(error_response), {
            status: 404,
            headers: { "Content-Type": "application/json" },
        });
    }

    let json_response = {
        status: "success",
        data: {
            assignment,
        },
    };
    return NextResponse.json(json_response);
}