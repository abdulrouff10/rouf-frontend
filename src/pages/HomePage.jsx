import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-[calc(100vh-100px)] flex flex-col justify-center items-center py-10 px-4 sm:px-6 lg:px-8">

      <section className="text-center mb-12 max-w-4xl mx-auto ">

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-l from-violet-700 to-pink-500 mb-4 sm:mb-10 leading-tight drop-shadow-sm"> {/* Ukuran font lebih kecil */}
          Sistem Informasi Manajemen Pengguna
        </h2>

        <p className="text-dark-700 text-lg sm:text-xl max-w-3xl mx-auto mb-8 opacity-90">
          Ini adalah Halaman Home dari Aplikasi Kami.
          Sistem Informasi Manajemen Pengguna yang saya buat terdiri dari beberapa fitur CRUD sederhana
          seperti Menampilkan data pengguna, Menambah data pengguna, Mengubah data pengguna, menghapus data pengguna.
          Kemudian saya tambahkan beberapa halaman seperti About dan Contact.
        </p>

        <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-l from-violet-600 to-pink-500 mb-4 sm:mb-8 leading-tight">
          By Rouf Dev
        </h3>


        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link
            to="/users"
            className="
              bg-violet-700 text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl
              hover:bg-violet-700 focus:outline-none focus:ring-4 focus:ring-violet-500 focus:ring-opacity-75
              transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl
              w-full sm:w-auto
            "
          >
            Mulai Sekarang!
          </Link>
          <Link
            to="/about"
            className="
              bg-gray-300 text-gray-800 px-10 py-4 rounded-full font-semibold text-lg shadow-md
              hover:bg-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-400 focus:ring-opacity-75
              transition duration-300 ease-in-out transform hover:scale-105
              w-full sm:w-auto
            "
          >
            Pelajari Lebih Lanjut
          </Link>
        </div>
      </section>


      <section className="w-full max-w-5xl mx-auto mt-16 py-12 bg-white rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold text-violet-700 text-center mb-10">Fitur Unggulan Kami</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">

          <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1">
            <svg className="w-16 h-16 text-pink-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M12 20V10m0 0a4 4 0 01-9-2.25M12 10a4 4 0 019 2.25M12 10v6m3-3h-6"></path></svg>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Manajemen Data Intuitif</h4>
            <p className="text-gray-600 text-base">Lihat, tambahkan, perbarui, dan hapus data pengguna dengan antarmuka yang ramah pengguna.</p>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1">
            <svg className="w-16 h-16 text-pink-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.023 12.023 0 002.944 12c0 2.891 1.14 5.617 3.04 8.618M12 21.056c2.891 0 5.617-1.14 8.618-3.04A12.023 12.023 0 0021.056 12c0-2.891-1.14-5.617-3.04-8.618"></path></svg>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Keamanan Data</h4>
            <p className="text-gray-600 text-base">Data Anda diamankan dengan standar tinggi, memastikan privasi dan integritas.</p>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1">
            <svg className="w-16 h-16 text-pink-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Integrasi Laravel API</h4>
            <p className="text-gray-600 text-base">Memanfaatkan kekuatan backend Laravel untuk kinerja dan skalabilitas optimal.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;