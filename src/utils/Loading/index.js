import React from 'react';
import ReactLoading from 'react-loading';

const Loading = ({ type, color }) => (
  <div style={{ alignItems: 'center', justifyContent: 'center' }}>
    <ReactLoading type={type} color={color} height={67} width={75} />
  </div>
);

export default Loading;
