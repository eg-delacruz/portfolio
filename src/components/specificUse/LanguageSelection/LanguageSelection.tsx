import Link from 'next/link';

//Styles
import styles from './styles.module.css';

//Types
//locals
type Props = {
  locale: string;
};

const LanguageSelection = ({ locale }: Props) => {
  const SpanishFlag = () => (
    <svg width='20' height='15' viewBox='0 0 20 15' fill='none'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M0 0H20V14.2857H0V0Z'
        fill='url(#paint0_linear_26_18)'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M0 0H20V3.80952H0V0Z'
        fill='url(#paint1_linear_26_18)'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M0 10.4762H20V14.2857H0V10.4762Z'
        fill='url(#paint2_linear_26_18)'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M0 3.80951H20V10.4762H0V3.80951Z'
        fill='url(#paint3_linear_26_18)'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M5.23828 6.66663H6.19066V7.14282H5.23828V6.66663Z'
        fill='#FFEDB1'
      />
      <path
        d='M4.68109 8.05664C4.70454 8.33806 4.9583 8.57138 5.23821 8.57138C5.51845 8.57138 5.77196 8.33702 5.79532 8.05664L5.91116 6.66662H4.56526L4.68109 8.05664ZM4.08705 6.66223C4.06533 6.40166 4.26746 6.19043 4.52955 6.19043H5.94686C6.21297 6.19043 6.41156 6.39591 6.38937 6.66223L6.26987 8.09619C6.22608 8.62162 5.76786 9.04757 5.23821 9.04757C4.71222 9.04757 4.2507 8.62599 4.20654 8.09619L4.08705 6.66223Z'
        fill='#A41517'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M4.28613 7.14282H6.19089V7.61901H5.7147L5.23851 8.57139L4.76232 7.61901H4.28613V7.14282Z'
        fill='#A41517'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M2.85742 5.71429H3.8098V9.04763H2.85742V5.71429Z'
        fill='#A41517'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M6.66699 5.71429H7.61937V9.04763H6.66699V5.71429Z'
        fill='#A41517'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M4.28613 5.23809C4.28613 4.9751 4.48998 4.7619 4.76678 4.7619H5.71024C5.9757 4.7619 6.19089 4.98279 6.19089 5.23809V5.47396C6.19089 5.60669 6.08849 5.71428 5.95733 5.71428H4.51969C4.3907 5.71428 4.28613 5.61236 4.28613 5.47396V5.23809Z'
        fill='#A41517'
      />
      <defs>
        <linearGradient
          id='paint0_linear_26_18'
          x1='210'
          y1='0'
          x2='210'
          y2='214.286'
          gradientUnits='userSpaceOnUse'
        >
          <stop stop-color='white' />
          <stop offset='1' stop-color='#F0F0F0' />
        </linearGradient>
        <linearGradient
          id='paint1_linear_26_18'
          x1='210'
          y1='0'
          x2='210'
          y2='57.1429'
          gradientUnits='userSpaceOnUse'
        >
          <stop stop-color='#DD172C' />
          <stop offset='1' stop-color='#C60B1F' />
        </linearGradient>
        <linearGradient
          id='paint2_linear_26_18'
          x1='210'
          y1='10.4762'
          x2='210'
          y2='67.6191'
          gradientUnits='userSpaceOnUse'
        >
          <stop stop-color='#DD172C' />
          <stop offset='1' stop-color='#C60B1F' />
        </linearGradient>
        <linearGradient
          id='paint3_linear_26_18'
          x1='210'
          y1='3.80951'
          x2='210'
          y2='103.81'
          gradientUnits='userSpaceOnUse'
        >
          <stop stop-color='#FFD133' />
          <stop offset='1' stop-color='#FFC500' />
        </linearGradient>
      </defs>
    </svg>
  );
  const GermanFlag = () => (
    <svg
      width='20'
      height='15'
      viewBox='0 0 20 15'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M0 0H20V14.2857H0V0Z'
        fill='url(#paint0_linear_26_30)'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M0 0H20V4.7619H0V0Z'
        fill='url(#paint1_linear_26_30)'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M0 4.7619H20V9.52381H0V4.7619Z'
        fill='url(#paint2_linear_26_30)'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M0 9.5238H20V14.2857H0V9.5238Z'
        fill='url(#paint3_linear_26_30)'
      />
      <defs>
        <linearGradient
          id='paint0_linear_26_30'
          x1='210'
          y1='0'
          x2='210'
          y2='214.286'
          gradientUnits='userSpaceOnUse'
        >
          <stop stop-color='white' />
          <stop offset='1' stop-color='#F0F0F0' />
        </linearGradient>
        <linearGradient
          id='paint1_linear_26_30'
          x1='210'
          y1='0'
          x2='210'
          y2='71.4286'
          gradientUnits='userSpaceOnUse'
        >
          <stop stop-color='#262626' />
          <stop offset='1' stop-color='#0D0D0D' />
        </linearGradient>
        <linearGradient
          id='paint2_linear_26_30'
          x1='210'
          y1='4.7619'
          x2='210'
          y2='76.1905'
          gradientUnits='userSpaceOnUse'
        >
          <stop stop-color='#F01515' />
          <stop offset='1' stop-color='#DE0000' />
        </linearGradient>
        <linearGradient
          id='paint3_linear_26_30'
          x1='210'
          y1='9.5238'
          x2='210'
          y2='80.9524'
          gradientUnits='userSpaceOnUse'
        >
          <stop stop-color='#FFD521' />
          <stop offset='1' stop-color='#FFCF00' />
        </linearGradient>
      </defs>
    </svg>
  );
  const USFlag = () => (
    <svg
      width='20'
      height='14'
      viewBox='0 0 20 14'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M0 0H19.6V14H0V0Z'
        fill='url(#paint0_linear_83_17)'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M0 0H19.6V0.933333H0V0ZM0 1.86667H19.6V2.8H0V1.86667ZM0 3.73333H19.6V4.66667H0V3.73333ZM0 5.6H19.6V6.53333H0V5.6ZM0 7.46667H19.6V8.4H0V7.46667ZM0 9.33333H19.6V10.2667H0V9.33333ZM0 11.2H19.6V12.1333H0V11.2ZM0 13.0667H19.6V14H0V13.0667Z'
        fill='url(#paint1_linear_83_17)'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M0 0H8.4V6.53333H0V0Z'
        fill='url(#paint2_linear_83_17)'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M1.40026 1.86668C1.14253 1.86668 0.933594 1.65775 0.933594 1.40002C0.933594 1.14228 1.14253 0.93335 1.40026 0.93335C1.65799 0.93335 1.86693 1.14228 1.86693 1.40002C1.86693 1.65775 1.65799 1.86668 1.40026 1.86668ZM3.26693 1.86668C3.00919 1.86668 2.80026 1.65775 2.80026 1.40002C2.80026 1.14228 3.00919 0.93335 3.26693 0.93335C3.52466 0.93335 3.73359 1.14228 3.73359 1.40002C3.73359 1.65775 3.52466 1.86668 3.26693 1.86668ZM5.13359 1.86668C4.87586 1.86668 4.66693 1.65775 4.66693 1.40002C4.66693 1.14228 4.87586 0.93335 5.13359 0.93335C5.39133 0.93335 5.60026 1.14228 5.60026 1.40002C5.60026 1.65775 5.39133 1.86668 5.13359 1.86668ZM7.00026 1.86668C6.74253 1.86668 6.53359 1.65775 6.53359 1.40002C6.53359 1.14228 6.74253 0.93335 7.00026 0.93335C7.25799 0.93335 7.46693 1.14228 7.46693 1.40002C7.46693 1.65775 7.25799 1.86668 7.00026 1.86668ZM2.33359 2.80002C2.07586 2.80002 1.86693 2.59108 1.86693 2.33335C1.86693 2.07562 2.07586 1.86668 2.33359 1.86668C2.59133 1.86668 2.80026 2.07562 2.80026 2.33335C2.80026 2.59108 2.59133 2.80002 2.33359 2.80002ZM4.20026 2.80002C3.94253 2.80002 3.73359 2.59108 3.73359 2.33335C3.73359 2.07562 3.94253 1.86668 4.20026 1.86668C4.45799 1.86668 4.66693 2.07562 4.66693 2.33335C4.66693 2.59108 4.45799 2.80002 4.20026 2.80002ZM6.06693 2.80002C5.80919 2.80002 5.60026 2.59108 5.60026 2.33335C5.60026 2.07562 5.80919 1.86668 6.06693 1.86668C6.32466 1.86668 6.53359 2.07562 6.53359 2.33335C6.53359 2.59108 6.32466 2.80002 6.06693 2.80002ZM7.00026 3.73335C6.74253 3.73335 6.53359 3.52442 6.53359 3.26668C6.53359 3.00895 6.74253 2.80002 7.00026 2.80002C7.25799 2.80002 7.46693 3.00895 7.46693 3.26668C7.46693 3.52442 7.25799 3.73335 7.00026 3.73335ZM5.13359 3.73335C4.87586 3.73335 4.66693 3.52442 4.66693 3.26668C4.66693 3.00895 4.87586 2.80002 5.13359 2.80002C5.39133 2.80002 5.60026 3.00895 5.60026 3.26668C5.60026 3.52442 5.39133 3.73335 5.13359 3.73335ZM3.26693 3.73335C3.00919 3.73335 2.80026 3.52442 2.80026 3.26668C2.80026 3.00895 3.00919 2.80002 3.26693 2.80002C3.52466 2.80002 3.73359 3.00895 3.73359 3.26668C3.73359 3.52442 3.52466 3.73335 3.26693 3.73335ZM1.40026 3.73335C1.14253 3.73335 0.933594 3.52442 0.933594 3.26668C0.933594 3.00895 1.14253 2.80002 1.40026 2.80002C1.65799 2.80002 1.86693 3.00895 1.86693 3.26668C1.86693 3.52442 1.65799 3.73335 1.40026 3.73335ZM2.33359 4.66668C2.07586 4.66668 1.86693 4.45775 1.86693 4.20002C1.86693 3.94228 2.07586 3.73335 2.33359 3.73335C2.59133 3.73335 2.80026 3.94228 2.80026 4.20002C2.80026 4.45775 2.59133 4.66668 2.33359 4.66668ZM4.20026 4.66668C3.94253 4.66668 3.73359 4.45775 3.73359 4.20002C3.73359 3.94228 3.94253 3.73335 4.20026 3.73335C4.45799 3.73335 4.66693 3.94228 4.66693 4.20002C4.66693 4.45775 4.45799 4.66668 4.20026 4.66668ZM6.06693 4.66668C5.80919 4.66668 5.60026 4.45775 5.60026 4.20002C5.60026 3.94228 5.80919 3.73335 6.06693 3.73335C6.32466 3.73335 6.53359 3.94228 6.53359 4.20002C6.53359 4.45775 6.32466 4.66668 6.06693 4.66668ZM7.00026 5.60002C6.74253 5.60002 6.53359 5.39108 6.53359 5.13335C6.53359 4.87562 6.74253 4.66668 7.00026 4.66668C7.25799 4.66668 7.46693 4.87562 7.46693 5.13335C7.46693 5.39108 7.25799 5.60002 7.00026 5.60002ZM5.13359 5.60002C4.87586 5.60002 4.66693 5.39108 4.66693 5.13335C4.66693 4.87562 4.87586 4.66668 5.13359 4.66668C5.39133 4.66668 5.60026 4.87562 5.60026 5.13335C5.60026 5.39108 5.39133 5.60002 5.13359 5.60002ZM3.26693 5.60002C3.00919 5.60002 2.80026 5.39108 2.80026 5.13335C2.80026 4.87562 3.00919 4.66668 3.26693 4.66668C3.52466 4.66668 3.73359 4.87562 3.73359 5.13335C3.73359 5.39108 3.52466 5.60002 3.26693 5.60002ZM1.40026 5.60002C1.14253 5.60002 0.933594 5.39108 0.933594 5.13335C0.933594 4.87562 1.14253 4.66668 1.40026 4.66668C1.65799 4.66668 1.86693 4.87562 1.86693 5.13335C1.86693 5.39108 1.65799 5.60002 1.40026 5.60002Z'
        fill='url(#paint3_linear_83_17)'
      />
      <defs>
        <linearGradient
          id='paint0_linear_83_17'
          x1='205.8'
          y1='0'
          x2='205.8'
          y2='210'
          gradientUnits='userSpaceOnUse'
        >
          <stop stop-color='white' />
          <stop offset='1' stop-color='#F0F0F0' />
        </linearGradient>
        <linearGradient
          id='paint1_linear_83_17'
          x1='205.8'
          y1='0'
          x2='205.8'
          y2='210'
          gradientUnits='userSpaceOnUse'
        >
          <stop stop-color='#D02F44' />
          <stop offset='1' stop-color='#B12537' />
        </linearGradient>
        <linearGradient
          id='paint2_linear_83_17'
          x1='88.2'
          y1='0'
          x2='88.2'
          y2='98'
          gradientUnits='userSpaceOnUse'
        >
          <stop stop-color='#46467F' />
          <stop offset='1' stop-color='#3C3C6D' />
        </linearGradient>
        <linearGradient
          id='paint3_linear_83_17'
          x1='69.5336'
          y1='0.93335'
          x2='69.5336'
          y2='70.9333'
          gradientUnits='userSpaceOnUse'
        >
          <stop stop-color='white' />
          <stop offset='1' stop-color='#F0F0F0' />
        </linearGradient>
      </defs>
    </svg>
  );

  return (
    <div className={styles.container}>
      <div className={styles.selector_container}>
        {locale === 'en' ? (
          <USFlag />
        ) : locale === 'es' ? (
          <SpanishFlag />
        ) : (
          <GermanFlag />
        )}
        <svg width='16' height='10' viewBox='0 0 16 10' fill='none'>
          <path
            d='M2 2L8 8L14 2'
            stroke='black'
            strokeWidth='3'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </div>

      <ul className={styles.language_options}>
        <li className={`${locale === 'en' ? styles.hidden : ''}`}>
          <Link href='/en'>
            <USFlag />
          </Link>
        </li>
        <li className={`${locale === 'es' ? styles.hidden : ''}`}>
          <Link href='/es'>
            <SpanishFlag />
          </Link>
        </li>
        <li className={`${locale === 'de' ? styles.hidden : ''}`}>
          <Link href='/de'>
            <GermanFlag />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default LanguageSelection;
