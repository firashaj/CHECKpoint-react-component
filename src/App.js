import logo from './logo.svg';
import './App.css';
import FullName from './component/Profil/FullName.js';
import Address from './component/Profil/Address.js';
import ProfilePhoto from './component/Profil/ProfilePhoto.js';

function App() {
  return (
    <div >
      <FullName/>
      <Address/>
      <ProfilePhoto/>
    </div>
  );
}

export default App;
