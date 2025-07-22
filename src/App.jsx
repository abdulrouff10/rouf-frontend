import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UserListPage from './pages/UserListPage';
import AddUserPage from './pages/AddUserPage';
import Header from './components/Header';
import Footer from './components/Footer';
import EditUserPage from './pages/EditUserPage';
import About from './pages/AboutPage';
import Contact from './pages/ContactPage';

function App() {
  return (
    <Router>
      <div
        className="min-h-screen flex flex-col bg-cover bg-no-repeat bg-fixed relative"
        style={{ backgroundImage: "url('/kantor.jpg')" }}>
        <div className="relative z-5 flex flex-col flex-grow">
          <Header />
          <main className="flex-grow container mx-auto p-4 flex">

            <div className="grid grid-cols-1 w-full ">
              <div className="bg-violet-50/80 shadow-xl rounded-2xl p-6 col-span-1">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/users" element={<UserListPage />} />
                  <Route path="/add" element={<AddUserPage />} />
                  <Route path="/edit/:id" element={<EditUserPage />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
