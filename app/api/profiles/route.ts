import Profile from '@/models/model.profile';
import { IncomingForm } from 'formidable';
import { NextApiRequest } from 'next';
import { NextRequest, NextResponse } from 'next/server';
// import { profiles } from '@/config/db';

export async function POST(request: NextApiRequest) {

    try {
        // const data: { files: any } = await new Promise((resolve, reject) => {
            // const form = new IncomingForm({ uploadDir: "./public/uploads" });
            const form = new IncomingForm();
            form.parse(request, async (err, fields, files) => {
                if (err) {
                    console.log(err.message);

                    // reject(err);

                    let json_response = {
                        status: "fail",
                        message: 'Error! ' + err.message,
                        data: null
                    };
                    return new NextResponse(JSON.stringify(json_response), {
                        status: 404,
                        headers: { "Content-Type": "application/json" },
                    });

                }

                const profile = await Profile.create({
                    ...fields
                });

                let json_response = {
                    status: "success",
                    message: 'successfully created',
                    data: {
                        // result,
                        profile
                    },
                };

                // resolve({ files })

                return new NextResponse(JSON.stringify(json_response), {
                    status: 201,
                    headers: { "Content-Type": "application/json" },
                });


            });
        // })

        // Object.keys(data.files).forEach(key => {
        //     console.log(`Recieved file ${key}:`, data.files[key]);

        // })

        // const form = new IncomingForm({ uploadDir: "./public/uploads" });
        // const body = await request.formData();
        // console.log(body); 
        // const [fields, files] = await form.parse(request);
        // console.log([fields, files]);
        // let profile;
        // form.parse(request, async (err, fields, files) => {
        // console.log(err,fields,files); 

        // if (err) {
        //         let json_response = {
        //             status: "fail",
        //             message: 'Error! ' + err.message,
        //             data: null
        //         };
        //         return new NextResponse(JSON.stringify(json_response), {
        //             status: 404,
        //             headers: { "Content-Type": "application/json" },
        //         });
        //     }
        //     const profile = await Profile.create({
        //         ...fields
        //     });

        //     let json_response = {
        //         status: "success",
        //         message: 'successfully created',
        //         data: {
        //             // result,
        //             profile
        //         },
        //     };

        //     return new NextResponse(JSON.stringify(json_response), {
        //         status: 201,
        //         headers: { "Content-Type": "application/json" },
        //     });

        // })

        // console.log({ fields, files });
        // const profile = await Profile.create({
        //     ...fields
        // });
        // if (profile !== null) {
        //     if (Object.keys(profile)) {

        //         let json_response = {
        //             status: "success",
        //             message: 'successfully created',
        //             data: {
        //                 // result,
        //                 profile
        //             },
        //         };

        //         return new NextResponse(JSON.stringify(json_response), {
        //             status: 201,
        //             headers: { "Content-Type": "application/json" },
        //         });
        //     }


        //     let json_response = {
        //         status: "fail",
        //         message: 'No profile created',
        //         data: {},
        //     };

        //     return new NextResponse(JSON.stringify(json_response), {
        //         status: 201,
        //         headers: { "Content-Type": "application/json" },
        //     });


        // } else {
        //     let json_response = {
        //         status: "fail",
        //         message: 'Error! Returned null',
        //         data: null,
        //     };

        //     return new NextResponse(JSON.stringify(json_response), {
        //         status: 201,
        //         headers: { "Content-Type": "application/json" },
        //     });

        // }

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

        // const result = profiles.list();
        const profiles = await Profile.find()
            .populate("user").exec();
        if (profiles !== null) {

            if (profiles.length) {
                let json_response = {
                    status: "success",
                    message: 'Found!',
                    data: {
                        // result,
                        profiles
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

