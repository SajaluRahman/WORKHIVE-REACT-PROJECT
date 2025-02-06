import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faMicrophone,

  faArrowLeft,
  faBars,
  faCircleDollarToSlot,
  faChartSimple,
} from "@fortawesome/free-solid-svg-icons";
import img1 from "../../images/pexels-rfera-432059.jpg";
import "../../App.css";
import {Sidebar} from "../../Components/FreelancerComponents/Sidebar";

import { Link } from "react-router-dom";

function Chat  ()  {
  const contacts = ["Maymood", "Sarah", "Usman", "Michael", "Emily", "David", "Sophia"];
  const [activeChat, setActiveChat] = useState("Maymood");
  const [messages, setMessages] = useState([
    { sender: "Maymood", text: "Hi..! How are you doing?", type: "incoming" },
    { sender: "Me", text: "Hello! I'm good, thanks. How about you?", type: "outgoing" },
    { sender: "Maymood", text: "Just working on some projects. Let's catch up soon!", type: "incoming" },
  ]);
  const [inputText, setInputText] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(false); // Track if the chat is open (only for mobile)

  const handleContactClick = (contact) => {
    setActiveChat(contact);
    setMessages([
      { sender: contact, text: `Hey, this is ${contact}. How's everything?`, type: "incoming" },
    ]);
    setIsChatOpen(true); // Open chat window when a contact is clicked on mobile
  };

  const sendMessage = () => {
    if (inputText.trim() === "") return;
    setMessages((prev) => [...prev, { sender: "Me", text: inputText, type: "outgoing" }]);
    setInputText("");
  };
const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex w-full h-screen bg-[#12182b] font-sans overflow-hidden">
      {/* Sidebar Toggle Button (for mobile) */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="lg:hidden fixed top-8 left- z-50 text-white  p-2 rounded-full shadow-md"
      >
        <FontAwesomeIcon icon={faBars} size="lg" />
      </button>
      {/* Sidebar (Hidden on small screens, toggled on click) */}
      <div className={`fixed lg:relative inset-y-0 left-0 z-40 transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 transition-transform duration-300 ease-in-out w-64 bg-[#0a0f1f] lg:block`}>  
        <Sidebar />
      </div>

      {/* Contact List Sidebar */}
      <div className={`h-screen bg-gradient-to-b from-[#1f293d] to-[#12182b] p-4 text-white flex flex-col shadow-xl backdrop-blur-md border-r border-[#00eaff]/50 
  ${isChatOpen ? 'hidden md:flex lg:w-80' : 'w-full sm:w-64 md:w-72 lg:w-80'}`}>
        <div className="text-2xl font-bold tracking-wide mb-6 text-[#00eaff] text-center">WorkHive</div>

        <div className="flex items-center mb-6 cursor-pointer text-gray-300 hover:text-white transition" onClick={() => setIsChatOpen(false)}>
          <FontAwesomeIcon icon={faArrowLeft} className="text-lg mr-2" />
          <span>Back</span>
        </div>

        <div className="flex-1 overflow-y-auto space-y-4 no-scrollbar">
          {contacts.map((contact, index) => (
            <div
              key={index}
              className={`flex items-center space-x-4 p-4 rounded-2xl shadow-lg transition cursor-pointer transform hover:scale-105 ${activeChat === contact ? 'bg-[#374151]' : 'bg-[#283349]'}`}
              onClick={() => handleContactClick(contact)}
            >
              <img className="w-12 h-12 rounded-full object-cover border-2 border-[#00eaff] shadow-md" src={img1} alt={contact} />
              <span className="flex-1 text-base font-semibold text-white">{contact}</span>
              <span className="bg-green-500 rounded-full h-6 w-6 flex items-center justify-center text-xs font-bold text-white shadow-lg">
                1
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Window */}
      <div className={`flex-1 flex flex-col h-screen ${isChatOpen ? 'block' : 'hidden md:flex'}`}>
        <div className="p-5 flex items-center bg-[#1f293d] shadow-lg">
          <img className="w-10 h-10 rounded-full object-cover" src={img1} alt="User" />
          <span className="ml-4 text-lg font-semibold text-white">{activeChat}</span>
          <div className="ml-auto cursor-pointer hover:text-gray-300 transition md:hidden" onClick={() => setIsChatOpen(false)}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-end p-6 space-y-4 overflow-y-auto no-scrollbar bg-[#12182b]">
          {messages.map((msg, index) => (
            <div key={index} className={msg.type === "incoming" ? "self-start flex items-end space-x-2" : "self-end"}>
              {msg.type === "incoming" && <img className="w-8 h-8 rounded-full object-cover" src={img1} alt="User" />}
              <div className={`px-4 py-2 rounded-2xl max-w-xs ${msg.type === "incoming" ? "bg-[#283349] text-white rounded-bl-none" : "bg-[#00eaff] text-black rounded-br-none"}`}>
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        <div className="p-5 bg-[#1f293d] flex items-center space-x-4 shadow-lg">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 p-3 rounded-2xl bg-[#283349] text-white outline-none border border-[#00eaff]/50 placeholder-gray-500 focus:border-[#00b3cc] transition"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && sendMessage()}
          />
         <Link to="/progressiontracker"><FontAwesomeIcon icon={faChartSimple} className="text-gray-500 text-xl cursor-pointer hover:text-white transition" /> </Link>
          <FontAwesomeIcon icon={faCircleDollarToSlot} className="text-gray-500 text-xl cursor-pointer hover:text-white transition" />
          <FontAwesomeIcon icon={faMicrophone} className="text-gray-500 text-xl cursor-pointer hover:text-white transition" />
          <FontAwesomeIcon icon={faPaperPlane} className="text-[#00eaff] text-xl cursor-pointer hover:text-[#00b3cc] transition" onClick={sendMessage} />
        </div>
      </div>
    </div>
  );
};

export default Chat;
