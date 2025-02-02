import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faFileExport, faPlus, faSave, faTimes 
} from "@fortawesome/free-solid-svg-icons";
import { Navbar3 } from "../../Components/Common/CommonComponents/Navbar";

const NotePad = () => {
  const [fileName, setFileName] = useState("Untitled");
  const [content, setContent] = useState(localStorage.getItem("notepadContent") || "");

  // Auto-save content to local storage
  useEffect(() => {
    localStorage.setItem("notepadContent", content);
  }, [content]);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <Navbar3 />

      {/* Toolbar */}
      <div className="bg-gray-700 p-3 mt-16 flex flex-col sm:flex-row sm:items-center justify-between space-y-2 sm:space-y-0">
        <div className="flex flex-wrap items-center space-x-2">
          <input
            type="text"
            className="bg-gray-600 px-3 py-1 rounded text-white outline-none w-40 sm:w-52"
            value={fileName}
            onChange={(e) => setFileName(e.target.value)}
          />
          <button className="text-sm text-gray-300">
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <button className="ml-2 px-3 py-1 rounded bg-gray-600 text-white text-sm">
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>

        <div className="flex flex-wrap justify-center sm:justify-end space-x-4 sm:space-x-6">
          <button className="text-gray-300 hover:text-blue-400">File</button>
          <button className="text-gray-300 hover:text-blue-400">Tools</button>
          <button className="text-gray-300 hover:text-blue-400 flex items-center">
            <FontAwesomeIcon icon={faFileExport} className="mr-1" /> Export
          </button>
          <button className="text-gray-300 hover:text-blue-400 flex items-center">
            <FontAwesomeIcon icon={faPlus} className="mr-1" /> Add
          </button>
        </div>
      </div>

      {/* Notepad Content */}
      <textarea
        className="flex-grow p-4 bg-gray-800 text-white text-lg outline-none resize-none w-full"
        placeholder="Use here..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>

      {/* Footer */}
      <div className="bg-gray-800 p-3 flex flex-col sm:flex-row justify-center sm:justify-end space-y-2 sm:space-x-4">
        <button className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 flex items-center justify-center w-full sm:w-auto">
          <FontAwesomeIcon icon={faSave} className="mr-2" /> Save
        </button>
      </div>
    </div>
  );
};

export default NotePad;
