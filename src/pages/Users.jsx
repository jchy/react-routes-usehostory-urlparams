import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setIsLoading] = useState(true);

  const fetchUsers = () => {
    axios
      .get("https://reqres.in/api/users")
      .then((res) => {
        setUsers(res.data.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  return loading ? (
    <div>...loading</div>
  ) : (
    <div>
      {users.map((user) => {
        return (
          <div>
            <Link
              to={`/users/${user.id}`}
            >{`${user.first_name} ${user.last_name}`}</Link>
          </div>
        );
      })}
    </div>
  );
};

export { Users };
