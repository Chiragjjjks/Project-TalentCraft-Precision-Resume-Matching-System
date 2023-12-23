import React, { useState } from 'react';

const UserDashboard = () => {
  const [textFile, setTextFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setTextFile(file);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('textFile', textFile);

    try {
      const response = await fetch('http://127.0.0.1:5000/upload_file', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setUploadStatus('Upload successful');
      } else {
        setUploadStatus('Upload failed');
      }
    } catch (error) {
      console.error('Error uploading text file:', error);
    }
  };

  return (
    <div>
      <h1 className='flex items-center justify-center text-2xl bg-blue-300 p-3'>User Dashboard</h1>
      
      <div className='flex items-center justify-center py-10 space-x-5'>
        <p class="mt-1 animate-bounce text-sm text-gray-500 dark:text-gray-500" id="file_input_help">Upload only .docx</p>
     
        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload file</label>
        <input
          type="file" accept=".docx"
          onChange={handleFileChange}
          class="block  text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file"></input>

        <button 
          onClick={handleUpload}
          type="button" class="text-white bg-blue-700 hover:bg-blue-800 
          focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5
          me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none
          dark:focus:ring-blue-800">Upload</button>
      </div>
      {uploadStatus && <p>{uploadStatus}</p>}
    </div>
  );
};

export default UserDashboard;
