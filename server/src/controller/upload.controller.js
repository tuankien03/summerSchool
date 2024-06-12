import { OK } from "../core/success.response.js"


class UploadController {
    upload = (req, res) => {
        console.log(req.file)
        console.log(req.body)
        new OK({message: 'Upload thành công'}).send(res);
    }
}

export default new UploadController();