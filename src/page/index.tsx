import React from 'react';
import { useHistory } from 'react-router-dom';

const index = function () {
  const history = useHistory();
  return (
    <>
      <button onClick={() => history.push('/pwa')}>pwa</button>
    </>
  );
};
export default index;
