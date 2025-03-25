// const multer = require("multer");
// const path = require('path');
import multer from "multer";
import path from "path";

/**
 * Upload upload file with a field name
 * @returns upload 
 */
function uploadFile(fieldname: any, req: any, res: any, next: any) {

    const storage = multer.diskStorage({
        destination: function (req: any, file: any, cb: any) {
            cb(null, path.join(process.cwd(), 'public/uploads/'));
        },
        filename: function (req: any, file: any, cb: any) {
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
            if (file?.originalname.endsWith('.jpg')) {
                cb(null, file.fieldname + '-' + uniqueSuffix + '.jpg')
            } else if (file?.originalname.endsWith('.png')) {
                cb(null, file.fieldname + '-' + uniqueSuffix + '.png')
            } else if (file?.originalname.endsWith('.pdf')) {
                cb(null, file.fieldname + '-' + uniqueSuffix + '.pdf')
            } else if (file?.originalname.endsWith('.mp3')) {
                cb(null, file.fieldname + '-' + uniqueSuffix + '.mp3')
            } else if (file?.originalname.endsWith('.mp4')) {
                cb(null, file.fieldname + '-' + uniqueSuffix + '.mp4')
            } else if (file?.originalname.endsWith('.jpeg')) {
                cb(null, file.fieldname + '-' + uniqueSuffix + '.jpeg')
            } else {
                cb(null, file.fieldname + '-' + uniqueSuffix)
            }
        }
    });

    const upload = multer({ storage: storage }).single(fieldname)(req, res, next);

    return upload;
}

/**
 * Upload multiple file with different field names
 * @returns upload
 */
function uploadFiles() {
    const storage = multer.diskStorage({
        destination: function (req: any, file: any, cb: any) {
            cb(null, path.join(process.cwd(), 'public/uploads/'));
        },
        filename: function (req: any, file: any, cb: any) {
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
            if (file?.originalname.endsWith('.jpg')) {
                cb(null, file.fieldname + '-' + uniqueSuffix + '.jpg')
            } else if (file?.originalname.endsWith('.png')) {
                cb(null, file.fieldname + '-' + uniqueSuffix + '.png')
            } else if (file?.originalname.endsWith('.pdf')) {
                cb(null, file.fieldname + '-' + uniqueSuffix + '.pdf')
            } else if (file?.originalname.endsWith('.mp3')) {
                cb(null, file.fieldname + '-' + uniqueSuffix + '.mp3')
            } else if (file?.originalname.endsWith('.mp4')) {
                cb(null, file.fieldname + '-' + uniqueSuffix + '.mp4')
            } else if (file?.originalname.endsWith('.jpeg')) {
                cb(null, file.fieldname + '-' + uniqueSuffix + '.jpeg')
            } else {
                cb(null, file.fieldname + '-' + uniqueSuffix)
            }
        }
    });

    const upload = multer({ storage: storage }).any();

    return upload;
}
/**
 * Upload multiple file with same fieldnames
 * @returns upload
 */
function uploadMultipleFiles(filedName: any) {
    const storage = multer.diskStorage({
        destination: function (req: any, file: any, cb: any) {
            cb(null, path.join(process.cwd(), 'public/uploads/'));
        },
        filename: function (req: any, file: any, cb: any) {
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
            if (file?.originalname.endsWith('.jpg')) {
                cb(null, file.fieldname + '-' + uniqueSuffix + '.jpg')
            } else if (file?.originalname.endsWith('.png')) {
                cb(null, file.fieldname + '-' + uniqueSuffix + '.png')
            } else if (file?.originalname.endsWith('.pdf')) {
                cb(null, file.fieldname + '-' + uniqueSuffix + '.pdf')
            } else if (file?.originalname.endsWith('.mp3')) {
                cb(null, file.fieldname + '-' + uniqueSuffix + '.mp3')
            } else if (file?.originalname.endsWith('.mp4')) {
                cb(null, file.fieldname + '-' + uniqueSuffix + '.mp4')
            } else if (file?.originalname.endsWith('.jpeg')) {
                cb(null, file.fieldname + '-' + uniqueSuffix + '.jpeg')
            } else {
                cb(null, file.fieldname + '-' + uniqueSuffix)
            }
        }
    });

    const upload = multer({ storage: storage }).array(filedName);

    return upload;
}

export {
    uploadFile,
    uploadFiles,
    uploadMultipleFiles
}