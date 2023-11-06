'use client';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

//Styles
import styles from './styles.module.css';

type Props = {};

//TODO: Check if the mounted state and return null is necessary AFTER site is tested in production
const DarkModeToggler = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const [checked, setChecked] = useState<boolean>(false);
  const { setTheme, theme } = useTheme();

  //Functions
  const onCheckboxChange = () => {
    setChecked(!checked);
    //Insert a cookie here to save the theme for the next time the user visits the site
    document.cookie = `theme=${theme === 'dark' ? 'light' : 'dark'}`;
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  // When mounted on client, now we can show the UI
  useEffect(() => {
    setMounted(true);

    //Check if the user has a cookie with the theme saved
    const cookies = document.cookie.split(';');
    const cookie = cookies.find((cookie) => cookie.includes('theme'));
    if (cookie) {
      const theme = cookie.split('=')[1];
      setTheme(theme);
      if (theme === 'dark') setChecked(false);
      else setChecked(true);
    } else {
      setTheme('dark');
    }
  }, [setTheme]);

  // if (!mounted) return null;

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type='checkbox'
        id='dark-mode-toggler'
        onChange={onCheckboxChange}
        checked={checked}
      />
      <label className={styles.label} htmlFor='dark-mode-toggler'>
        <svg
          viewBox='0 0 13 15'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={`${styles.moon} ${checked ? styles.hidden : ''}`}
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M5.51828 0.847285C6.23398 0.677471 6.67762 1.4544 6.36067 1.99494C5.28523 3.82906 5.28854 6.14603 6.46369 7.87654C7.6448 9.61589 9.81064 10.4743 11.9192 10.1379C12.5327 10.04 13.0739 10.73 12.6672 11.3199C12.6552 11.3373 12.6431 11.3547 12.6309 11.3721C11.9119 12.3965 10.9029 13.2963 9.72282 13.8035C8.46503 14.344 7.07449 14.4957 5.72997 14.239L5.72932 14.2389C4.16616 13.9387 2.75612 13.1038 1.7409 11.8775C0.725685 10.6511 0.168541 9.10941 0.165038 7.51682C0.161536 5.92424 0.711896 4.37997 1.72176 3.14871C2.6791 1.98147 4.06404 1.19677 5.49723 0.852307L5.51828 0.847285Z'
            fill='white'
          />
        </svg>

        <svg
          viewBox='0 0 14 14'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={`${styles.sun} ${checked ? '' : styles.hidden}`}
        >
          <path
            d='M9 6.99999C9 8.10459 8.10459 9 6.99999 9C5.89545 9 5 8.10459 5 6.99999C5 5.89545 5.89545 5 6.99999 5C8.10459 5 9 5.89545 9 6.99999Z'
            stroke='#FFD415'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M4.07077 2.42056L4.01943 3.03672C3.99257 3.35902 3.97914 3.52018 3.90965 3.64604C3.84838 3.757 3.757 3.84838 3.64604 3.90965C3.52018 3.97914 3.35902 3.99257 3.03672 4.01943L2.42055 4.07077C1.73046 4.12829 1.38541 4.15704 1.21532 4.31468C1.0673 4.45186 0.98873 4.64829 1.00131 4.84971C1.01576 5.08117 1.24579 5.33995 1.70585 5.8575L2.08609 6.28532C2.31088 6.53819 2.42327 6.66459 2.46595 6.80733C2.50355 6.93299 2.50355 7.06699 2.46595 7.19266C2.42327 7.33533 2.31088 7.4618 2.08609 7.71467L1.70585 8.14242C1.24579 8.66 1.01576 8.91879 1.00131 9.15028C0.98873 9.35172 1.0673 9.54811 1.21532 9.68527C1.38541 9.84294 1.73046 9.87171 2.42056 9.9292L3.03672 9.98057C3.35902 10.0074 3.52017 10.0208 3.64604 10.0904C3.757 10.1516 3.84838 10.243 3.90965 10.3539C3.97914 10.4798 3.99257 10.641 4.01943 10.9633L4.07077 11.5794C4.12829 12.2695 4.15704 12.6146 4.31468 12.7847C4.45186 12.9327 4.64829 13.0113 4.84971 12.9987C5.08117 12.9842 5.33995 12.7542 5.8575 12.2941L6.28532 11.9139C6.53819 11.6891 6.66459 11.5767 6.80733 11.534C6.93299 11.4964 7.06699 11.4964 7.19266 11.534C7.33533 11.5767 7.4618 11.6891 7.71467 11.9139L8.14242 12.2941C8.66 12.7542 8.91879 12.9842 9.15028 12.9987C9.35172 13.0113 9.54811 12.9327 9.68527 12.7847C9.84294 12.6146 9.87171 12.2695 9.9292 11.5794L9.98057 10.9633C10.0074 10.641 10.0208 10.4798 10.0904 10.3539C10.1516 10.243 10.243 10.1516 10.3539 10.0904C10.4798 10.0208 10.641 10.0074 10.9633 9.98057L11.5794 9.9292C12.2695 9.87171 12.6146 9.84294 12.7847 9.68527C12.9327 9.54811 13.0113 9.35172 12.9987 9.15028C12.9842 8.91879 12.7542 8.66 12.2941 8.14242L11.9139 7.71467C11.6891 7.4618 11.5767 7.33533 11.534 7.19266C11.4964 7.06699 11.4964 6.93299 11.534 6.80733C11.5767 6.66459 11.6891 6.53819 11.9139 6.28532L12.2941 5.8575C12.7542 5.33995 12.9842 5.08117 12.9987 4.84971C13.0113 4.64829 12.9327 4.45186 12.7847 4.31468C12.6146 4.15704 12.2695 4.12829 11.5794 4.07077L10.9633 4.01943C10.641 3.99257 10.4798 3.97914 10.3539 3.90965C10.243 3.84838 10.1516 3.757 10.0904 3.64604C10.0208 3.52017 10.0074 3.35902 9.98057 3.03672L9.9292 2.42055C9.87171 1.73046 9.84294 1.38541 9.68527 1.21532C9.54811 1.0673 9.35172 0.98873 9.15028 1.00131C8.91879 1.01576 8.66 1.24579 8.14242 1.70585L7.71467 2.08609C7.4618 2.31088 7.33533 2.42327 7.19266 2.46595C7.06699 2.50355 6.93299 2.50355 6.80733 2.46595C6.66459 2.42327 6.53819 2.31088 6.28532 2.08609L5.8575 1.70585C5.33995 1.24579 5.08117 1.01576 4.84971 1.00131C4.64829 0.98873 4.45186 1.0673 4.31468 1.21532C4.15704 1.38541 4.12829 1.73046 4.07077 2.42056Z'
            stroke='#FFD415'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </label>
    </div>
  );
};

export default DarkModeToggler;
