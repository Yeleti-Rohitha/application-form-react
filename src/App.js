import { Route, Routes } from 'react-router-dom';
import { useState } from "react";
import './App.css';
import FormValidation from './components/FormValidation';
import DisplayDetails from './components/DisplayDetails';

function App() {
  const [submittedData, setSubmittedData] = useState(null);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<FormValidation setSubmittedData={setSubmittedData} />} />
        <Route path="/details" element={<DisplayDetails data={submittedData} />} />
      </Routes>
    </div>
  );
}

export default App;
