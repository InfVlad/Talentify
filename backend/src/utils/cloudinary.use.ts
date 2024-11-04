import { v2 as cloudinary } from 'cloudinary'

export const cloudinaryHandler = async (image: any) => {
    try {
        const result = await cloudinary.uploader.upload(image)
        return result.secure_url
    } catch (error: any) {
        throw new Error(`Error subiendo imagen: ${error.message}`)
    }
}
