import React from 'react';

const About = () => {
  return (
    <div className="min-h-[calc(100vh-100px)] flex flex-col items-center py-20 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-pink-400 mb-4 drop-shadow-sm">Tentang Aplikasi</h1>
      <p className="text-lg text-dark-700 leading-relaxed max-w-2xl mx-auto">
        Aplikasi ini dibuat sebagai bagian dari ujian praktik Fullstack Developer di Minilemon. Backend menggunakan Laravel, sedangkan frontend menggunakan React dan Tailwind CSS. 
        Tujuannya adalah untuk mengelola data pengguna melalui antarmuka yang responsif dan sederhana.
      </p>
    </div>
  );
};

export default About;
