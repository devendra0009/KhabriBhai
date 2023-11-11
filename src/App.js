import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import About from './components/About';
import LoadingBar from 'react-top-loading-bar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
      <BrowserRouter>
        <Navbar categories={categories} />
        <LoadingBar height={3} color="#ff0000" progress={progress} />
        <Routes>
          <Route path="/" element={<Home />} />
          {categories &&
            categories.map((category, idx) => (
              <>
                <Route
                  path={`/:${category.category_name}`}
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
          {/* <Route
            path="/general"
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
          <Route path="/about" element={<About category={'about'} />} />
          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key={'business'}
                pageSize={pageSize}
                country={'in'}
                category={'business'}
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key={'entertainment'}
                pageSize={pageSize}
                country={'in'}
                category={'entertainment'}
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key={'health'}
                pageSize={pageSize}
                country={'in'}
                category={'health'}
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key={'science'}
                pageSize={pageSize}
                country={'in'}
                category={'science'}
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key={'sports'}
                pageSize={pageSize}
                country={'in'}
                category={'sports'}
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key={'technology'}
                pageSize={pageSize}
                country={'in'}
                category={'technology'}
              />
            }
          /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
