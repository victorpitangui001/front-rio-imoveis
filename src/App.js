import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/*Components*/
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import Container from './components/layouts/Container';
import Message from './components/layouts/Message';

/*pages*/
import Login from './components/pages/Auth/Login';
import Register from './components/pages/Auth/Register';
import Home from './components/pages/Home';
import Profile from './components/pages/User/Profile';
import MyProperties from './components/pages/Propertie/MyProperties';
import AddPropertie from './components/pages/Propertie/AddPropertie';
import EditPropertie from './components/pages/Propertie/EditPropertie';
import AllProperties from './components/pages/Propertie/AllProperties';
import PropertieDetails from './components/pages/Propertie/PropertieDetails';
import MyInterest from './components/pages/Propertie/MyInterest';


/* Context */
import { UserProvider } from './context/UserContext';



function App() {
  return (
    <Router>
      <UserProvider>
        <Navbar />
        <Message />
        <Container>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/user/profile' element={<Profile />} />
            <Route path='/propertie/myproperties' element={<MyProperties />} />
            <Route path='/propertie/add' element={<AddPropertie />} />
            <Route path='/propertie/edit/:id' element={<EditPropertie />} />
            <Route path='/propertie/myinterest' element={<MyInterest />} />
            <Route path='/propertie/:id' element={<PropertieDetails />} />
            <Route path='/propertie/allproperties' element={<AllProperties />} />
            <Route path='/' element={<Home />} />
          </Routes>
        </Container>
        <Footer />
      </UserProvider>
    </Router>
  );
}

export default App;
