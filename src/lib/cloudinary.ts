const CLOUD_NAME = "eufgqaom";
const CDN_ROOT = `https://res.cloudinary.com/${CLOUD_NAME}`;

export const cloudinaryImage = (publicId: string, format: string) =>
  `${CDN_ROOT}/image/upload/f_auto,q_auto,w_1600,c_limit/${publicId}.${format}`;

export const cloudinaryVideo = (publicId: string) =>
  `${CDN_ROOT}/video/upload/f_auto,q_auto/${publicId}.mp4`;

export const cloudinaryVideoPoster = (videoUrl: string) =>
  videoUrl
    .replace(
      "/video/upload/f_auto,q_auto/",
      "/video/upload/so_0,f_auto,q_auto,w_900,c_limit/",
    )
    .replace(/\.mp4$/, ".jpg");
