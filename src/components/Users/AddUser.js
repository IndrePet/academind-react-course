import Card from '../UI/Card';
import Button from '../UI/Button';

import styles from './AddUser.module.css';

const AddUser = () => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
        <label htmlFor="age">Age (years)</label>
        <input id="age" type="text" />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
