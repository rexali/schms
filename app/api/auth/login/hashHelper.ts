import bcrypt from "bcrypt";

const SALT_FACTOR = 10;
/**
 * Hash the user password
 * @param {string} userPassword 
 * @returns a string of value
 */
function hashpass(userPassword: any) {
    let salt = bcrypt.genSaltSync(SALT_FACTOR);
    let hash = bcrypt.hashSync(userPassword, salt);
    return hash; // store return hash in DB
}

/**
 * Check whether user credentials are valid
 * @param {string} DBpassword 
 * @param {string} userPassword 
 * @returns a bolean value
 */
function checkpass(DBpassword: any, userPassword: any) {
    try { 
        return bcrypt.compareSync(userPassword, DBpassword); // return boolean
    } catch (error) {
       console.warn(error); 
    }
    
}

export { hashpass, checkpass};