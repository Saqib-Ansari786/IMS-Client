export const createCloudinaryFormdata = (file, uploadPreset, folder) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", uploadPreset);
  formData.append("folder", folder);
  return formData;
};

export const uploadToCloudinary = async (formData) => {
  const cloudinaryEndpoint = import.meta.env.VITE_CLOUDINARY_ENDPOINT;
  try {
    const response = await fetch(cloudinaryEndpoint, {
      method: "POST",
      body: formData,
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.error("Failed to upload image to Cloudinary.");
      return null;
    }
  } catch (error) {
    console.error("Error uploading image to Cloudinary:", error);
    return null;
  }
};
