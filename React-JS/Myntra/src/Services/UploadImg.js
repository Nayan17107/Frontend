export const uploadFile = async (file) => {
    let uploadData = new FormData();
    uploadData.append("file", file);
    uploadData.append("upload_preset", "Myntra");
    uploadData.append("cloud_name", "daxzwaedu");

    let response = await fetch(`https://api.cloudinary.com/v1_1/daxzwaedu/image/upload`, {
        method: "POST",
        body: uploadData
    });
    
    let data = await response.json();
    console.log("Cloudinary data:", data); 
    return data.secure_url; 
}