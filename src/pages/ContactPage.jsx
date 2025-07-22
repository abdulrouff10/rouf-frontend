import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-[calc(100vh-100px)] flex flex-col justify-center items-center py-10 px-4 sm:px-6 lg:px-8">

      <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-pink-400 mb-4 drop-shadow-sm">
        Kontak Saya
      </h1>
      <p className="text-gray-700 text-lg sm:text-xl leading-relaxed max-w-xl mx-auto mb-8">
        Jika kamu memiliki pertanyaan atau ingin tahu lebih banyak tentang proyek ini, silakan hubungi saya melalui:
      </p>

      <ul className="mt-6 text-left max-w-md mx-auto space-y-4"> 
        <li className="flex items-center text-gray-800 text-lg"> 
          <svg className="w-6 h-6 mr-3 text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
          <strong>Email:</strong> <a href="mailto:abdulrouf010203@gmail.com" className="ml-2 text-blue-600 hover:text-blue-800 hover:underline transition duration-200">abdulrouf010203@gmail.com</a>
        </li>
        <li className="flex items-center text-gray-800 text-lg">
          
          <svg
            className="w-6 h-6 mr-3 text-violet-500" 
            fill="currentColor" 
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 0C5.372 0 0 5.372 0 12c0 5.303 3.438 9.799 8.205 11.385.6.11.82-.258.82-.577 0-.285-.01-1.04-.015-2.03-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.332-1.756-1.332-1.756-1.089-.745.083-.73.083-.73 1.205.084 1.838 1.238 1.838 1.238 1.07 1.835 2.804 1.305 3.49.998.108-.775.42-1.305.762-1.603-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.465-2.382 1.235-3.22-.125-.304-.535-1.52.117-3.176 0 0 1.008-.323 3.301 1.23.957-.266 1.983-.398 3.003-.398.005 0 .01 0 .015 0 1.02.008 2.046.132 3.003.398 2.293-1.553 3.3-1.23 3.3-1.23.652 1.656.242 2.872.117 3.176.77.838 1.235 1.91 1.235 3.22 0 4.61-2.809 5.62-5.474 5.922.43.37.818 1.102.818 2.22 0 1.606-.015 2.895-.015 3.284 0 .318.216.69.825.577C20.562 21.799 24 17.303 24 12c0-6.628-5.372-12-12-12z"
            />
          </svg>
          <strong>GitHub:</strong> <a href="https://github.com/abdulrouff10" target="_blank" rel="noopener noreferrer" className="ml-2 text-blue-600 hover:text-blue-800 hover:underline transition duration-200">github.com/abdulrouf10</a>
        </li>
        <li className="flex items-center text-gray-800 text-lg">
        
          <svg
            className="w-6 h-6 mr-3 text-violet-500"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12.04 2C6.51 2 2.09 6.41 2.04 11.95c0 1.79.47 3.5.76 4.97L2 22l5.25-1.38c1.47.28 2.97.4 4.34.4h.01c5.53 0 10.04-4.41 10.04-9.95.01-5.54-4.5-9.96-10.04-9.96zM17.45 16.59c-.27.7-1.46 1.28-2.03 1.34-.34.03-.66.05-.98.05-.62 0-1.23-.08-1.83-.24-1.74-.47-3.03-1.78-3.66-3.23-.62-1.46-.38-2.6.26-3.24.28-.27.6-.47.92-.47.05 0 .11.02.16.03.49.12.79.62 1.01 1.07.13.26.23.57.3.89.07.33.02.66-.11.85-.05.07-.12.15-.17.2-.24.26-.5.53-.47.93.03.4.24.64.44.81.2.18.44.38.71.55.27.17.58.33.91.49.33.16.7.3 1.08.4.38.1.75.05 1.03-.13.28-.18.52-.45.72-.67.2-.22.37-.48.51-.73.14-.25.22-.49.32-.69.09-.2.17-.37.26-.52.09-.15.22-.3.38-.47.16-.17.33-.3.51-.4.18-.1.35-.02.48.06.13.08.26.2.37.33.11.13.23.28.32.44.09.16.17.33.24.49.07.17.13.34.18.5.05.16.08.3.08.45.01.64-.69 1.13-1.43 1.36z" />
          </svg>
          <strong>WhatsApp: </strong> <a href="https://wa.me/0882006993396?text=Halo%2C%20saya%20tertarik%20dengan%20aplikasi%20Anda." target="_blank" rel="noopener noreferrer" className="ml-2 text-blue-600 hover:text-blue-800 hover:underline transition duration-200">0882006993396</a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;