// import { lessons } from "@/config/db";
import Report from "@/models/model.report";

import { NextResponse } from "next/server";

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const id = (await params).id as any;

    // const result = lessons.delete(id);
    const report = await Report.deleteOne({ _id: id }).exec();

    if(!report.deletedCount){

      let error_response = {
        status: "fail",
        message: "Error! Failed to delete",
        data: {
          // result,
          report,
        },
      };
  
      return NextResponse.json(error_response, { status: 400, headers: { "Content-Type": "application/json" } });
    }

    let success_response = {
      status: "success",
      message: "Report deleted",
      data: {
        // result,
        report,
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
    // const report = lessons.get(id);
    const report = await Report.findById(id).exec();

    if (report !== null) {
      if (!Object.keys(report).length) {

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
            report,
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
 * Update the report
 * @param request web request
 * @param params url parameter object
 * @returns a json
 */
export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const id = (await params).id;
    let json = await request.json();

    // const result = lessons.update({id, ...json});

    const report = await Report.updateOne({ _id: id }, {...json })

    if (report.modifiedCount) {

      let success_response = {
        status: "success",
        message: 'update successful',
        data: {
          // result,
          report,
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
        report,
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