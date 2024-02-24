const upload = require("../middleware/upload");
const express = require("express");
const router = express.Router();

router.post("/upload", upload.single("file"), async (req, res) => {
    if (req.method != "POST") {
        return res.status(405).send("Method Not Allowed");
    }
    
    if (req.file === undefined) {
        return res.status(400).send("You must select a file.");
    }

    const imgUrl = `https://upload-file-anandpatel.onrender.com/file/${req.file.filename}`;
    return res.send(imgUrl);
});

router.get("/upload",async(req,res)=>{
    return res.status(405).send("Method Not Allowed");
});

module.exports = router;
