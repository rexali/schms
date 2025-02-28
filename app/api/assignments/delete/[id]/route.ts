import { assignments } from "@/app/api/db/db";
import { NextResponse } from "next/server";

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    try {
      const id = params.id;
      
      const result = assignments.delete(id);

      return new NextResponse(null, {status: 204 });
    } catch (error: any) {
      if (error.code === "P2025") {
        let error_response = {
          status: "fail",
          message: "No Feedback with the Provided ID Found",
        };
        return new NextResponse(JSON.stringify(error_response), {
          status: 404,
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