import styles from './User.module.css';

const User = (props) => {
  return (
    <li className={styles['user-items']}>
      <div className={styles['user-item']}>
        <div className={styles['user-item__name']}>{props.username}</div>
        <div className={styles['user-item__age']}>
          <span>{props.age}</span> years old
        </div>
      </div>
    </li>
  );
};

export default User;
