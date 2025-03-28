import jwt from "jsonwebtoken";

// create mutex instance

/**
 * Verify user token
 * @param {object} req - user request object
 * @param {object} res - response to user request
 * @returns void
 */
async function verifyUserTokenHandler(req: any, res: any) {
       // acquire access to the path, lock it to prevent race condition)
       // get login token from the request headers or cookies object
       const token = req.headers.authorization?.split(' ')[1] || req.cookies.token;

       try {
              // verify that the token is signed during login to prevent CSRF attack
              let decoded = jwt.verify(token, process.env.SECRET_KEY as string) as any;

              // check userId,email,role are defined in the token
              if (decoded?._id && decoded?.email && decoded?.role) {
                     // return the verified user data
                     res.status(200).json({
                            status: "success",
                            message: "verified",
                            data: {
                                   token,
                                   _id: decoded?._id,
                                   email: decoded?.email,
                                   role: decoded?.role,
                            }
                     });
              } else {
                     // return the data if verification fails
                     res.status(404).json({
                            status: "fail",
                            message: "verification failed",
                            data: null
                     });
              }

       } catch (error) {
              // return the data if verification fails
              console.log(error);
              res.json({
                     status: "fail",
                     data: null,
                     message: "verification failed"
              });
       } finally {
              // release path for other
       }

}
module.exports = {
       verifyUserTokenHandler
}
