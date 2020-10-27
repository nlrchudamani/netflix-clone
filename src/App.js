import React from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar';

import Row from './components/Row/Row'
import reqs from './requests'

function App() {
  return (
    <div className="App">
      {/** navbar */}
      <Navbar />

      {/** banner  */}
      <Banner />

      <Row
        title="NetFlix Orignals "
        fetchUrl={reqs.fetchTrending}
        isLargePath
      />
      <Row title="Trending  Now " fetchUrl={reqs.fetchTrending} />
      <Row title="New Movies" fetchUrl={reqs.fetchTrending} />
      <Row title="Classics" fetchUrl={reqs.fetchTrending} />
      <Row title="Documentaries" fetchUrl={reqs.fetchTrending} />
    </div>
  );
}

export default App;
