import React, { useState, useRef, useEffect } from 'react';

const HRDashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [typedWords, setTypedWords] = useState([]);
  const [displayTypedWords, setDisplayTypedWords] = useState(true);
  const [responseMessage, setResponseMessage] = useState('');
  const inputRef = useRef(null);

  const handleClick = () => {
    // Assuming this function has logic for rendering the UserDashboard
    // Modify it as needed based on your implementation
    // For example: renderUserDashboard(searchQuery);
  };

  const handleInputChange = (e) => {
    const inputText = e.target.innerText;
    setSearchQuery(inputText);

    const words = inputText.split(/\s+/).filter((word) => word.trim() !== '');
    setTypedWords(words);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      

      const response = await fetch('http://127.0.0.1:5000/get_similarity', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ uploaded_docx_filename: 'your_filename.docx', keywords: ['keyword1', 'keyword2'] }),
});


      if (response.ok) {
        const responseData = await response.json();
        setResponseMessage(responseData.message);
        setDisplayTypedWords(false);

      } else {
        console.error('Failed to send words to the backend');
      }
    } catch (error) {
      console.error('Error sending words to the backend:', error);
    }
  };

  useEffect(() => {
    inputRef.current.focus();
  }, [searchQuery]);

  return (
    <div>
      <div>
        <div className="text-2xl items-center justify-center flex py-3 mt-2 bg-blue-300">
          Hiring Manager Dashboard
        </div>
        <div className="py-3 p-3 rounded-lg">
          <form onSubmit={handleSubmit}>
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
              Search
            </label>
            <div className="relative bg-blue-200">
              <div className="absolute inset-y-0 start-0 flex items-center py-2 ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <div
                ref={inputRef}
                contentEditable
                id="default-search"
                className="block w-full p-4 py-4 ps-10 text-sm border text-white border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:border-blue-500"
                onInput={handleInputChange}
              />
              <div className="flex flex-wrap absolute top-full left-0 mt-2 ml-4">
                {displayTypedWords &&
                  typedWords.map((word, index) => (
                    <div
                      key={index}
                      className="m-1 p-2 text-sm border text-gray-900 border-gray-300 rounded-lg bg-gray-50"
                    >
                      {word}
                    </div>
                  ))
                }
              </div>
              <button
                type="submit"
                className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form>
          <div className="mt-2 text-sm py-4 text-gray-900">
            {responseMessage && <p className='font-semibold'>{responseMessage}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HRDashboard;
