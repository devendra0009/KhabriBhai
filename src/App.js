import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import About from './components/About';
import LoadingBar from 'react-top-loading-bar';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import axios from 'axios';

const App = () => {
  const pageSize = 12;
  const apiKey = process.env.REACT_APP_NEWS_API;
  console.log(apiKey);
  const [progress, setProgress] = useState(0);
  const [categories, setCategories] = useState([]);
  const fetchCategories = async () => {
    const res = await axios.get(
      'https://newsapi.in/newsapi/category.php?lang=hindi'
    );
    const data = await res.data.Categories;
    setCategories(data);
    console.log(res, ' ', data);
  };
  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar categories={categories} />
        <LoadingBar height={3} color="#ff0000" progress={progress} />
        <Routes>
          <Route path="/" element={<Home />} />
          {categories &&
            categories.map((category, idx) => (
              <>
                <Route
                  path={`/KhabriBhai/:${category.category_name}`}
                  element={
                    <News
                      setProgress={setProgress}
                      apiKey={apiKey}
                      key={'general'}
                      pageSize={pageSize}
                      country={'in'}
                      category={'general'}
                    />
                  }
                />
              </>
            ))}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
