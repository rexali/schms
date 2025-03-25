// import { lessons } from "@/config/db";
import Schedule from "@/models/model.schedule";

import { NextResponse } from "next/server";

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const id = (await params).id as any;

    // const result = lessons.delete(id);
    const schedule = await Schedule.deleteOne({ _id: id }).exec();

    if(!schedule.deletedCount){

      let error_response = {
        status: "fail",
        message: "Error! Failed to delete",
        data: {
          // result,
          schedule,
        },
      };
  
      return NextResponse.json(error_response, { status: 400, headers: { "Content-Type": "application/json" } });
    }

    let success_response = {
      status: "success",
      message: "Schedule deleted",
      data: {
        // result,
        schedule,
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
    // const schedule = lessons.get(id);
    const schedule = await Schedule.findById(id).exec();

    if (schedule !== null) {
      if (!Object.keys(schedule).length) {

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
            schedule,
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
 * Update the schedule
 * @param request web request
 * @param params url parameter object
 * @returns a json
 */
export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const id = (await params).id;
    let json = await request.json();

    // const result = lessons.update({id, ...json});

    const schedule = await Schedule.updateOne({ _id: id }, {...json })

    if (schedule.modifiedCount) {

      let success_response = {
        status: "success",
        message: 'update successful',
        data: {
          // result,
          schedule,
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
        schedule,
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