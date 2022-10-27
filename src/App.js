import { Routes, Route } from "react-router-dom";
import Navbar from './component/Navbar';
import User from './component/User'
import Usercreate from './component/Usercreate'
import UserUpdate from './component/UserUpdate'


function App() {
  return (
    <div >
      <Navbar />
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="create" element={<Usercreate />} />
        <Route path="update/:id" element={<UserUpdate />} />
      </Routes>
    </div>
  );
}

export default App;
