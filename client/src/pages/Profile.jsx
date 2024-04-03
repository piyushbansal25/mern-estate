import { useSelector } from "react-redux"
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage'; 
import { app } from "../firebase";
export default function Profile() {
  const fileRef =  useRef(null);
  const {currentUser} = useSelector((state)  => state.user)
  const [file, setFile] = useState(undefined)
  const [filePerc, setFilePerc]  = useState(0)
  const [fileUploadError, setFileUploadError] =  useState(false)
  const [formData, setFormData] = useState({})
 


  useEffect(() => {
    if(file) {
      handleFileUpload(file);
    }
  }, [file]);

  const handleFileUpload  = (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef  = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef , file);

    uploadTask.on('state_changed', 
    (snapshot) => {
      const progress = (snapshot.bytesTransferred /
      snapshot.totalBytes)  *100;     
      setFilePerc(Math.round(progress)); 
    },
    (error) =>{
      setFileUploadError(true);
    },
    () => { 
      getDownloadURL(uploadTask.snapshot.ref).then
      ((downloadURL) => setFormData({...formData, avatar: downloadURL }));
      });
  }
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className='text-center my-7 font-semibold text-3xl'>My Profile</h1>
      <form className="flex flex-col gap-4 ">
        <input
        onChange={(e) => setFile(e.target.files[0])} 
        type='file' 
        ref = {fileRef} 
        hidden 
        accept='image/*' />
        
        <img onClick={() => fileRef.current.click() } 
        src= {formData.avatar || currentUser.avatar} 
        alt="Profile Picture" 
        className="rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2"/>
        
        
        <p className="text-sm self-center">
    {fileUploadError ? (
          <span className='font-bold text-red-500'>Failed to Upload Image! Please try again.</span> )
          :
          filePerc > 0 && filePerc < 100 ? (
            <span className='bg-blue-200 rounded-full w-full h-6 overflow-hidden'> 
            {`uploading ${filePerc}%`} 
            </span>)
          :
            filePerc === 100 ? (
              <span className="text-green-500">successfully uploaded</span>
            ) : ('')
    }
            
        
        
        </p>
        <input type="text" placeholder="username" id="username" className="border p-3 rounded-lg"  />
        <input type="email" placeholder="email" id="email" className="border p-3 rounded-lg"  />
        <input type="text " placeholder="password" id="password" className="border p-3 rounded-lg"  />
        <button className="bg-black hover:bg-red-800 text-white rounded-lg p-3 uppercase  ">update</button>
      </form>
      <div className="flex justify-between mt-5">
        <span className="text-red-700 cursor-pointer ">Delete Account</span>
        <span className="text-red-700 cursor-pointer ">Sign Out</span>
      </div>
       
        


       
    </div>
  )
}

