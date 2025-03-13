import jsonwebtoken  from "jsonwebtoken";
import User from "@/models/model.user";
import dotenv from 'dotenv';
dotenv.config();

/**
 * Create authentication token for a user 
 * @param {String} userEmail - a string of sql
 * @returns token
 */
async function getUserToken(userEmail: any) {
  // acquire access to the path to do operation (for race condition)
  try {
    const result = await User.findOne({ email: userEmail })
      .populate('profile')
      .exec();
    // get userId, email and role by destructing
    const { _id, email, role} = result;
    // get the secret key
    const jwtSecret = process.env.SECRET_KEY as string;
    // sign the token which expires after 24 hours 
    const token = jsonwebtoken.sign({ _id, email, role }, jwtSecret, { noTimestamp: true, expiresIn: '7d' }
    );
    // return promise
    return token
    // catch error
  } catch (error) {
    // log error
    console.log(error);
  } finally {
    // finally block
  }

}

export {
  getUserToken
}