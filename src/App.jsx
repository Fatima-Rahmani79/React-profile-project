import './App.css';
import avatarImage from './assets/avatar.jpg';
import ProfilePage from './components/profilePage.jsx';

function App() {
  const user = {
    name: "Fatima Rahmani",
    username: "@fatimarahmani",
    avatarImage: avatarImage,
    xp: 80,
    lastActive: 'Sep 22 2025',
    strakDays: 2,
    longestStrakDays: 2,
    recentBadgesText: "No badges earn yet.",

    personalInfo: {
      Email: 'fatima@gmail.com',
      Gender: 'Female',
      Country: 'Afghanistan',
      'Province or state': 'Kabul',
      City: 'Kabul',
      'Date of birth': 'Jan 1, 1999',
      'Teaching experience': '2 years',
      'Phone number': '+93 700 000 000',
      LinkedIn: 'linkedin.com/in/fatimarahmani',
      Languages: 'Dari, Pashto, English',
      Bio: 'Passionate educator dedicated to empowering students through innovative teaching methods and fostering a love for learning.'
    },

    accountDetails: {
      Role: 'Teacher',
      Status: 'Active',
      Verification: 'Verfied'
    }
  }

  return (
    <div className="page">
      <ProfilePage user={user} ></ProfilePage>
    </div>
  )
}

export default App;