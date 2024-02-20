import { v2 as cloudinary } from "cloudinary";

export default new (class CloudinaryConfig {
	upload() {
		cloudinary.config({
			cloud_name: 'dytrflcio',
            api_key: '254633395177653',
            api_secret: 'ktNGiEad3-fLyrsoFMMnEd6Fy7E',
		});
	}

	async destination(image: any) : Promise<any> {
        try {
          return await cloudinary.uploader.upload(`src/uploads/${image}`)
        } catch (error) {
          throw error
        }
	}
});

