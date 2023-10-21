const User = require("../Model/user");
const fs = require("fs");
const path = require("path");

module.exports.pdfUpload = async function (req, res) {
	console.log(req.params.id)
	const user = await User.findById(req.params.id)

	User.uploadedPDF(req, res, function (err) {
		if (err) {
			console.log("Multer error", err);
			return res.status(500).json({ error: "File upload failed" });
		}

		if(req.file){
			if(user.pdf_location){
				fs.unlinkSync(path.join(__dirname, '..', "/Public/Upload", user.pdf_location));
			}
			user.pdf_location = "/" + req.file.filename;
		}
		user.save();
		console.log(req.file);
		return res.status(200).json({message: "File uploaded successfully"});
	})
};


