const { storage } = require('./config');
import { uploadBytes, getDownloadURL, ref } from 'firebase/storage';

// Function to upload file to Firebase Storage
export const uploadFileToStorage = async file => {
  if (!file) {
    console.error('No file provided');
    return null;
  }

  const storageRef = ref(storage, `upload-file/${file.name}`);

  try {
    const uploadTaskSnapshot = await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(uploadTaskSnapshot.ref);
    return downloadURL;
  } catch (error) {
    console.error('Error uploading file:', error.code, error.message);
    return null;
  }
};
