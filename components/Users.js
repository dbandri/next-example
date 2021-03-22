import Router from "next/router";

const Users = (props) => (
  <ul className="list-group">
    {props.users.map((user) => (
      <li
        className="list-group-item list-group-item-action d-flex justify-content-between align-item-center"
        key={user.id}
        onClick={(e) => Router.push("/users/[id]", `/users/${user.id}`)}
      >
        <div>
          <h5>{`${user.first_name} ${user.last_name}`}</h5>
          <p className="mb-0">Email: {user.email}</p>
        </div>
        <img
          src={user.avatar}
          alt={user.first_name}
          style={{ borderRadius: "50%", height: "60px" }}
        />
      </li>
    ))}
  </ul>
);

export default Users;
