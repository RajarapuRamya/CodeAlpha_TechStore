const cloudinary = require("../config/cloudinary");

const uploadImage = async (filePath) => {

    try {

        const result =
            await cloudinary.uploader.upload(
                filePath,
                {
                    folder: "connecthub"
                }
            );

        return {
            url: result.secure_url,
            public_id: result.public_id
        };

    } catch (error) {

        throw new Error(
            "Image upload failed"
        );

    }
};

module.exports = uploadImage;