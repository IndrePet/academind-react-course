import UserForm from './UserForm';
import Card from '../UI/Card';

const NewUser = (props) => {
  const saveHandler = (enteredUserData) => {
    const userData = {
      ...enteredUserData,
      id: Math.random(),
    };

    props.onAddUser(userData);
  };
  return (
    <Card>
      <div>
        <UserForm onSave={saveHandler} />
      </div>
    </Card>
  );
};

export default NewUser;
