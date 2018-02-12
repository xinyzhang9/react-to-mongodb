import React, { PropTypes } from 'react';
import User from './User';

const UserList = ({ users }) => (
  <ul>
    {users.map(user =>
      <User
        key={user.name}
        name={user.name}
        task={user.task}
        IsIntern={user.IsIntern}
      />
    )}
  </ul>
);

UserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    task: PropTypes.string.isRequired,
    IsIntern: PropTypes.bool.isRequired,
  }).isRequired).isRequired,
};

export default UserList;
