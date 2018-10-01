import React from 'react';
import PropTypes from 'prop-types';

const User = (props) => {
  const { id, avatar, first_name, last_name } = props.user;

  return (
    <div className= "user">
      <img src= {avatar} alt= "Avatar" className= "user__avatar" />
      <div className= "user__profile">
        <p className= "user__name">{first_name} {last_name}</p>
        <span
          className= "user__delete"
          onClick= {() => props.onDelete(id)}
        >
          Delete
        </span>
      </div>
    </div>
  );
}

User.propTypes= {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
  }),
  onDelete: PropTypes.func.isRequired
};

export default User;
