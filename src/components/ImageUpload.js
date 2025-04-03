import React, { useState } from 'react';
import axios from 'axios';
import { useDropzone } from 'react-dropzone'; // For drag-and-drop upload

const ImageUpload = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleDrop = async (acceptedFiles) => {
    setIsUploading(true);

    const file = acceptedFiles[0];

    // FormData to send the file to the backend
    const formData = new FormData();
    formData.append('file', file);
    formData.append(
      'upload_preset',
      process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET
    ); // Cloudinary preset
    formData.append('cloud_name', process.env.REACT_APP_CLOUDINARY_CLOUD_NAME); // Cloudinary cloud name

    try {
      // Send the image to Cloudinary
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload`,
        formData
      );
      console.log(response);
      setImageUrl(response.data.secure_url); // Set the image URL after upload
      setIsUploading(false);
    } catch (error) {
      console.error('Error uploading image:', error);
      setIsUploading(false);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: handleDrop,
    accept: 'image/*', // Allow only images
  });

  return (
    <div className="image-upload-container">
      <div {...getRootProps()} className="dropzone">
        <input {...getInputProps()} />
        <p>Drag & drop an image here, or click to select one</p>
      </div>

      {isUploading && <p>Uploading...</p>}

      {imageUrl && (
        <div className="image-preview">
          <img src={imageUrl} alt="Uploaded" />
          <p>Image uploaded successfully!</p>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
