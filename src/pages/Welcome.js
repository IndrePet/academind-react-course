import React from 'react';
import { Route, Routes } from 'react-router-dom';

const Welcome = () => {
  return (
    <section>
      <h1>Welcome page</h1>
      <Routes>
        <Route path="new-user" element={<p>Welcome new user!</p>} />
      </Routes>
    </section>
  );
};

export default Welcome;
