import User from "@/models/model.user";

// create mutex instance

/**
 * Get user password from database
 * @param {string} email - a string of email 
 * @returns string
 */
async function getUserPassword(email: any) {
  // acquire access to the path to do operation (for race condition)
  try {
    const result = await User.findOne({ email: email });
    // retrieve the password
    let { password } = result;
    
    return password;
    // catch error
  } catch (error) {
    // log error
    console.warn(error);
  } finally {
    // release path for other
  }
}


export {
  getUserPassword
}