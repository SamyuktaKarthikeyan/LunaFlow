import React, { useEffect, useState } from 'react';
import Home from './components/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Dashboard from './components/Dashboard';
import ChatsPage from './chat/chatsPage';
import PregnancyCalculator from './components/PregnancyCalculator';
import PeriodCalculator from './components/PeriodCalculator';
import PregnancyFoods from './components/PregnancyFoods';
import MenstrualFoods from './components/MenstrualFoods';
import Community from './components/Community';


const App = () => {
  const [username, setUsername] = useState('');
  const [secret, setSecret] = useState('');

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    const storedSecret = localStorage.getItem('secret');
    if (storedUsername && storedSecret) {
      setUsername(storedUsername);
      setSecret(storedSecret);
    }
    console.log('username: ', storedUsername);
    console.log('secret: ', storedSecret);
  }, []);

  return (
    <div>
      {/* <PregnancyCalculator/> */}
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} >
          <Route index element={<Community/>} />
          <Route path="doctor" element={<ChatsPage username={username} secret={secret} />} />
          <Route path="pregnancy" element={<PregnancyCalculator />} />
          <Route path="period" element={<PeriodCalculator />} />
          <Route path="pregnancyfoods" element={<PregnancyFoods/>}/>
          <Route path="menstrualfoods" element={<MenstrualFoods/>}/>
          <Route path="community" element={<Community/>}/>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
