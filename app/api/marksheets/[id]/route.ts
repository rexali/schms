// import { lessons } from "@/config/db";
import MarkSheet from "@/models/model.marksheet";

import { NextResponse } from "next/server";

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const id = (await params).id as any;

    // const result = lessons.delete(id);
    const marksheet = await MarkSheet.deleteOne({ _id: id }).exec();

    if(!marksheet.deletedCount){

      let error_response = {
        status: "fail",
        message: "Error! Failed to delete",
        data: {
          // result,
          marksheet,
        },
      };
  
      return NextResponse.json(error_response, { status: 400, headers: { "Content-Type": "application/json" } });
    }

    let success_response = {
      status: "success",
      message: "MarkSheet deleted",
      data: {
        // result,
        marksheet,
      },
    };

    return NextResponse.json(success_response, { status: 200, headers: { "Content-Type": "application/json" } });

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


export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {

  try {

    const id = (await params).id;  //ByswAbi51l
    // const marksheet = lessons.get(id);
    const marksheet = await MarkSheet.findById(id).exec();

    if (marksheet !== null) {
      if (!Object.keys(marksheet).length) {

        let error_response = {
          status: "fail",
          message: "Not Found",
          data: {}
        };

        return new NextResponse(JSON.stringify(error_response), {
          status: 404,
          headers: { "Content-Type": "application/json" },
        });
      } else {

        let success_response = {
          status: "success",
          message: 'Found!',
          data: {
            marksheet,
            // lesson2
          },
        };

        return NextResponse.json(success_response,
          {
            status: 200,
            headers: { "Content-Type": "application/json" }
          });
      }

    } else {
      let error_response = {
        status: "fail",
        message: "Error! Null returned",
        data: null
      };

      return new NextResponse(JSON.stringify(error_response), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

  } catch (error: any) {
    let error_response = {
      status: "fail",
      message: "Internal Server Error! " + error.message,
      data: null
    };

    return new NextResponse(JSON.stringify(error_response), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }


}

/**
 * Update the marksheet
 * @param request web request
 * @param params url parameter object
 * @returns a json
 */
export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const id = (await params).id;
    let json = await request.json();

    // const result = lessons.update({id, ...json});

    const marksheet = await MarkSheet.updateOne({ _id: id }, {...json })

    if (marksheet.modifiedCount) {

      let success_response = {
        status: "success",
        message: 'update successful',
        data: {
          // result,
          marksheet,
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
        marksheet,
      },
    };


    return NextResponse.json(
      success_response,
      {
        status: 400,
        headers: { "Content-Type": "application/json" }
      }
    );



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