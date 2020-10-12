import React from "react";
import PropTypes from "prop-types";

import { Card } from "components";

import "styles/usersList";

const UserList = ({ users }) => {
  let usersList;
  if (users.length > 0) {
    usersList = users.map((user, index) => (
      <Card
        avatar={user.avatar}
        email={user.email}
        id={user.id}
        key={index.toString()}
        index={index}
        lastName={user.last_name}
        name={user.first_name}
      />
    ));
  }

  return (
    <>
      <h1>Lista de usuarios</h1>
      <div className="users-grid">{usersList}</div>
    </>
  );
};

UserList.propTypes = {
  users: PropTypes.array,
};

export default UserList;
