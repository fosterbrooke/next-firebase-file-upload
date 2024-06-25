import { useState } from "react";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from './../lib/firebase';

export default function Home() {

  const [fileContent, setFileContent] = useState<string | ArrayBuffer | null>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      alert('Please select an image');
      return;
    }
    try {
      const downUrl = await uploadToFirebaseStorage(file);
      console.log(downUrl);
    } catch (error) {
      console.error(error);
    }
  };

  const uploadToFirebaseStorage = async (imageFile: any) => {
    try {
      const imageRef = ref(storage, `${imageFile.name}`);
      await uploadBytes(imageRef, imageFile);
      const imageUrl = await getDownloadURL(imageRef);
      return imageUrl;
    } catch (error) {
      console.log('Error uploading file to Firebase Storage: ', error);
      throw error;
    }
  }

  return (
    <div>
      <button style={{ margin: "30px" }} onClick={() => document.getElementById("file-upload-input")?.click()}>Upload</button>
      <input type="file" style={{ display: "none" }} onChange={handleFileChange} id="file-upload-input" />
    </div>
  );
}
