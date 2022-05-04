import React from 'react';

import { Routes, Route } from "react-router-dom";

import Home from './pages/Home.js'
import Dictionary from './pages/Dictionary.js';
import Word from './pages/Word.js';

import './App.css';

function App() {
    return (
	<Routes>
	    <Route path="/" element={<Home />} />
	    <Route path="/dictionary" element={<Dictionary />} />
	    <Route path="/dictionary/:word_id" element={<Word />} />
	</Routes>   
    );
}

export default App;


