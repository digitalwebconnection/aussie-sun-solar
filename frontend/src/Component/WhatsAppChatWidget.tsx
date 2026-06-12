import { useEffect, useState } from "react";
import { MessageCircle, X } from "lucide-react";

import supportAvatar from '../assets/downloaded-images/support-avatar.jpg';

export default function WhatsAppChatWidget() {
  const [isOpen, setIsOpen] =
    useState(false);

  /* ====================================
     AUTO OPEN POPUP
  ==================================== */

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);

    return () =>
      clearTimeout(timer);
  }, []);

  return (
    <>
      {/* ====================================
          CHAT POPUP
      ==================================== */}

      <div
        className={`fixed bottom-24 sm:bottom-28 right-3 sm:right-6 z-50 transition-all duration-500 w-[calc(100%-24px)] sm:w-auto ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        <div className="w-full sm:w-[350px] rounded-2xl overflow-hidden shadow-black shadow-2xl bg-white">
          {/* ====================================
              TOP HEADER
          ==================================== */}

          <div className="bg-[#25D366] p-4 sm:p-5 flex items-center gap-3 sm:gap-4 relative">
            {/* AVATAR */}

            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-white shrink-0">
              <img
                src={supportAvatar}
                alt="support"
                className="w-full h-full object-cover"
              />
            </div>

            {/* TEXT */}

            <div className="min-w-0">
              <h3 className="text-white font-bold text-base sm:text-lg truncate">
                Aussie Sun Solar
              </h3>

              <p className="text-white/80 text-xs sm:text-sm">
                Solar Expert • Online
              </p>
            </div>

            {/* CLOSE BUTTON */}

            <button
              onClick={() =>
                setIsOpen(false)
              }
              className="absolute top-3 right-3 sm:top-4 sm:right-4 text-white hover:rotate-90 transition-all"
            >
              <X size={20} />
            </button>
          </div>

          {/* ====================================
              CHAT BODY
          ==================================== */}

          <div className="bg-[#ece5dd] p-4 sm:p-5">
            {/* MESSAGE */}

            <div className="bg-white p-4 rounded-2xl rounded-tl-sm shadow-md max-w-full sm:max-w-[260px]">
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                👋 Hi there! <br />
                Looking for solar solutions
                for your home or business?
              </p>

              <span className="text-xs text-gray-400 mt-2 block">
                Just now
              </span>
            </div>

            {/* BUTTON */}

            <a
              href="https://wa.me/611300672194?text=Hi%20Aussie%20Sun%20Solar,%20I%20want%20a%20free%20quote"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 w-full h-12 sm:h-14 rounded-xl bg-[#25D366] hover:bg-[#1ebe5d] transition-all duration-300 flex items-center justify-center gap-3 text-white font-bold text-sm sm:text-lg shadow-lg"
            >
              <MessageCircle size={20} />

              Start Chat
            </a>
          </div>
        </div>
      </div>

      {/* ====================================
          FLOATING WHATSAPP BUTTON
      ==================================== */}

      <button
        onClick={() =>
          setIsOpen(!isOpen)
        }
        className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 group"
      >
        <div className="relative">
          {/* PING */}

          <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30"></div>

          {/* MAIN BUTTON */}

          <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:scale-110 transition-all duration-300 shadow-[0_10px_30px_rgba(37,211,102,0.5)] flex items-center justify-center">
            <MessageCircle
              size={28}
              className="text-white"
            />
          </div>
        </div>
      </button>
    </>
  );
}