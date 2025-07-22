import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const API_BASE_URL = 'https://rouf-backend-production.up.railway.app/api';

const UserListPage = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/users`);
      setUsers(res.data.data);
    } catch (error) {
      console.error('Gagal mengambil data user:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const filteredUsers = users.filter(user =>
    user.nama.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase()) ||
    user.departemen.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = async (id) => {
    if (!window.confirm('Yakin ingin menghapus user ini?')) return;

    try {
      await axios.delete(`${API_BASE_URL}/users/${id}`);
      setUsers(users.filter(user => user.id !== id));
    } catch (error) {
      alert('Gagal menghapus user.');
      console.error(error);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-pink-400 mb-4 drop-shadow-sm">Daftar Pengguna</h2>

      <input
        type="text"
        placeholder="Cari nama, email, atau departemen..."
        className="mb-4 px-4 py-2 border border-violet-300 rounded w-full sm:w-1/2 focus:outline-none focus:ring-2 focus:ring-violet-500"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading ? (
        <p className="text-dark-600">Memuat data...</p>
      ) : filteredUsers.length === 0 ? (
        <p className="text-dark-600">Tidak ada pengguna ditemukan.</p>
      ) : (
        <div className="overflow-x-auto shadow-md rounded-lg">
          <table className="min-w-full table-auto border-collapse">
            <thead className="bg-violet-100 border-b border-dark-200">
              <tr>
                
                <th className="px-1 py-2 text-center text-xs font-medium text-dark-500 uppercase tracking-wider md:px-2 md:py-3 min-w-[90px]">Nama</th>
                <th className="px-1 py-2 text-center text-xs font-medium text-dark-500 uppercase tracking-wider md:px-2 md:py-3 min-w-[120px]">Email</th>
                <th className="px-1 py-2 text-center text-xs font-medium text-dark-500 uppercase tracking-wider md:px-2 md:py-3 min-w-[90px]">Nomor Telepon</th>
                <th className="px-1 py-2 text-center text-xs font-medium text-dark-500 uppercase tracking-wider md:px-2 md:py-3 min-w-[60px]">Status</th>
                <th className="px-1 py-2 text-center text-xs font-medium text-dark-500 uppercase tracking-wider md:px-2 md:py-3 min-w-[80px]">Departemen</th>
                <th className="px-1 py-2 text-center text-xs font-medium text-dark-500 uppercase tracking-wider md:px-2 md:py-3 min-w-[100px]">Aksi</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredUsers.map(user => (
                <tr key={user.id} className="hover:bg-blue-50">
                  
                  <td className="px-1 py-2 whitespace-nowrap text-sm text-gray-900 md:px-2 md:py-3 text-center">{user.nama}</td>
                  <td className="px-1 py-2 whitespace-nowrap text-sm text-gray-900 md:px-2 md:py-3 text-center">{user.email}</td>
                  <td className="px-1 py-2 whitespace-nowrap text-sm text-gray-900 md:px-2 md:py-3 text-center">{user.nomorTelepon}</td>
                  <td className="px-1 py-2 whitespace-nowrap text-sm text-gray-900 md:px-2 md:py-3 text-center">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      user.statusAktif ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {user.statusAktif ? 'Aktif' : 'Nonaktif'}
                    </span>
                  </td>
                  <td className="px-1 py-2 whitespace-nowrap text-sm text-gray-900 md:px-2 md:py-3 text-center">{user.departemen}</td>
                  <td className="px-1 py-2 whitespace-nowrap text-sm md:px-2 md:py-3 text-center">
                    <Link
                      to={`/edit/${user.id}`}
                      className="
                        bg-blue-500 text-white px-3 py-1 rounded-md
                        hover:bg-blue-600
                        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
                        active:bg-blue-700
                        transition duration-200 ease-in-out
                        mr-1 inline-flex items-center justify-center // Mengurangi mr-2 menjadi mr-1
                        text-xs sm:text-sm
                      "
                    >
                      Edit
                    </Link>
                    <button
                      className="
                        bg-red-500 text-white px-3 py-1 rounded-md
                        hover:bg-red-600
                        focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50
                        active:bg-red-700
                        transition duration-200 ease-in-out
                        inline-flex items-center justify-center
                        text-xs sm:text-sm
                      "
                      onClick={() => handleDelete(user.id)}
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default UserListPage;