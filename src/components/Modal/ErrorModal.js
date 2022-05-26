import Button from '../UI/Button';
import Card from '../UI/Card';

import styles from './ErrorModal.module.css';

const ErrorModal = (props) => {
  const closeModal = () => {
    props.onClose();
  };

  return (
    <div className={styles.modal}>
      <Card>
        <h1 className={styles['modal-header']}>Invalid input</h1>
        <div className={styles['modal-body']}>
          <p>{props.onUsernameError}</p>
          <p>{props.onAgeError}</p>
          <Button onClick={closeModal}>Okay</Button>
        </div>
      </Card>
    </div>
  );
};

export default ErrorModal;
