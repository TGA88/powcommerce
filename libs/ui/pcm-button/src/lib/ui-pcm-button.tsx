import styles from './ui-pcm-button.module.scss';

/* eslint-disable-next-line */
export interface UiPcmButtonProps {}

export function UiPcmButton(props: UiPcmButtonProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiPcmButton!</h1>
    </div>
  );
}

export default UiPcmButton;
