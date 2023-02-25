import React, { useState, Fragment } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [userList, setUserList] = useState([]);

  const onAddUserHandler = (username, userAge) => {
    setUserList((prevUserList) => {
      return [
        ...prevUserList,
        { name: username, age: userAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <Fragment>
      <AddUser onAddUser={onAddUserHandler} />
      <UsersList users={userList} />
    </Fragment>
  );
}

export default App;
