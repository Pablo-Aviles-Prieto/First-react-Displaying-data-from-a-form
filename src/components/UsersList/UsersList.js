export const UsersList = ({ user, onRemoveUser }) => {
  const removeUser = () => {
    onRemoveUser(user.id);
  };
  return (
    <li onClick={removeUser}>
      <p>
        {user.user} ({user.age} years old)
      </p>
    </li>
  );
};
