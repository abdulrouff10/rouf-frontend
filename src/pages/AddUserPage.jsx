import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const API_BASE_URL = 'https://rouf-backend-production.up.railway.app/api';

const AddUserPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    nomorTelepon: '',
    statusAktif: true,
    departemen: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      await axios.post(`${API_BASE_URL}/users`, formData);
      alert('User berhasil ditambahkan!');
      navigate('/users');
    } catch (error) {
      if (error.response?.data?.errors) {
        setErrors(error.response.data.errors);
      } else {
        alert('Terjadi kesalahan saat menambahkan user.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-pink-400 mb-4 drop-shadow-sm">Tambah Pengguna</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block">Nama</label>
          <input
            type="text"
            name="nama"
            className="w-full border px-3 py-2 rounded"
            value={formData.nama}
            onChange={handleChange}
          />
          {errors.nama && <p className="text-red-500 text-sm">{errors.nama[0]}</p>}
        </div>

        <div>
          <label className="block">Email</label>
          <input
            type="email"
            name="email"
            className="w-full border px-3 py-2 rounded"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email[0]}</p>}
        </div>

        <div>
          <label className="block">Nomor Telepon</label>
          <input
            type="text"
            name="nomorTelepon"
            className="w-full border px-3 py-2 rounded"
            value={formData.nomorTelepon}
            onChange={handleChange}
          />
          {errors.nomorTelepon && (
            <p className="text-red-500 text-sm">{errors.nomorTelepon[0]}</p>
          )}
        </div>

        <div>
          <label className="block">Departemen</label>
          <input
            type="text"
            name="departemen"
            className="w-full border px-3 py-2 rounded"
            value={formData.departemen}
            onChange={handleChange}
          />
          {errors.departemen && (
            <p className="text-red-500 text-sm">{errors.departemen[0]}</p>
          )}
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            name="statusAktif"
            checked={formData.statusAktif}
            onChange={handleChange}
            className="mr-2"
          />
          <label>Status Aktif</label>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-violet-700 text-white px-4 py-2 rounded hover:bg-violet-700"
        >
          {isSubmitting ? 'Menyimpan...' : 'Simpan'}
        </button>
      </form>
    </div>
  );
};

export default AddUserPage;
