import styles from './distributor-app.module.scss';

/* eslint-disable-next-line */
export interface DistributorAppProps {}

export function DistributorApp(props: DistributorAppProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to DistributorAppLib! test2</h1>
    </div>
  );
}

export default DistributorApp;
