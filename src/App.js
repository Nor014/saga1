import React from 'react';
import logo from './logo.svg';
import './App.css';
import store from './store/store';
import { Provider } from 'react-redux';
import Input from './Components/Input/Input';
import SkillsList from './Components/SkillsList/SkillsList';
import './Components/SkillsList/SkillsList.css'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Input />
        <SkillsList />
      </div>
    </Provider>

  );
}

export default App;
