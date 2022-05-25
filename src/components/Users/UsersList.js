import styles from './UsersList.module.css';
import Card from '../UI/Card';
import User from './User';

const UsersList = (props) => {
  if (!props.data.length) {
    return (
      <Card>
        <div className={styles.empty}>Add a new user.</div>
      </Card>
    );
  }

  return (
    <Card>
      <ul className={styles.list}>
        {props.data.map((user) => (
          <User key={user.id} username={user.username} age={user.age} />
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
