import Formidable from "formidable";
import Cloudinary from "../../lib/cloudinary";
import prismaClient from "../../lib/prisma-client";
import getSession from "../../lib/session";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).message({ error: "This method is not allowed." });
  }

  const session = await getSession(req);
  if (session.error) {
    return res.status(401).json({ error: session.error });
  }

  try {
    const data = await new Promise((resolve, reject) => {
      const form = new Formidable.IncomingForm({ keepExtensions: true });
      form.parse(req, (error, fields, files) => {
        if (error) {
          return reject(error);
        }

        resolve({ fields, files });
      });
    });

    const cloudinaryUpload = await Cloudinary.uploader.upload(
      data.files.imageFile.filepath,
      {
        public_id: `time-tracker-dashboard/${session.user.email.replace(
          "@",
          "_"
        )}`,
        overwrite: true,
      }
    );

    await prismaClient.User.update({
      where: { email: session.user.email },
      data: { image: cloudinaryUpload.url },
    });

    return res.status(200).json({
      message: "OK",
      image: {
        url: cloudinaryUpload.url,
        secureUrl: cloudinaryUpload.secure_url,
      },
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      error: "Something went wrong.",
    });
  }
};
