import styles from './Web3ServiceSkeleton.module.css';

export function Web3ServiceSkeleton() {
  return (
    <li className={styles.container}>
      <div className={styles.iconWrapper}>
        <div className={styles.iconSkeleton} />
      </div>

      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.titleSkeleton} />
          <div className={styles.networkSkeleton} />
        </div>

        <div className={styles.descriptionSkeleton} />
        <div className={styles.descriptionSkeleton} style={{ width: '60%' }} />

        <div className={styles.urlSkeleton} />
      </div>
    </li>
  );
}

export default Web3ServiceSkeleton;

