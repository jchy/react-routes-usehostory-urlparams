import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";

const UserPage = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const history = useHistory();
  const { id } = useParams();

  const getUserDetails = () => {
    setIsLoading(true);
    axios
      .get(`https://reqres.in/api/users/${id}`)
      .then((res) => {
        // console.log(res,"res")
        setUser(res.data.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("err", err);
        setIsLoading(false);
      });
  };

  // console.log(user);
  useEffect(() => {
    getUserDetails();
  }, []);

  const handleGoBack = () => {
    if (history.length > 2) {
      history.go(-1);
    } else {
      history.push("/users");
    }
    // history.replace("/users");
  };
  return isLoading ? (
    <div>...loading</div>
  ) : (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <img src={user.avatar} alt="profile" />
      <div>
        <h3>{`${user.first_name} ${user.last_name}`}</h3>
        <h5>{`Email : ${user.email}`}</h5>
      </div>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export { UserPage };
