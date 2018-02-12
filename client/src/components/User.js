import React, { PropTypes } from 'react';

const User = ({ name, task, IsIntern }) => (
  <li style={{
    color: IsIntern ? 'orange' : 'green',
    listStyleType: 'none'
  }}>
    {name} | {task} 
    
  </li>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  task: PropTypes.string.isRequired,
  IsIntern: PropTypes.bool.isRequired,
};

export default User;
