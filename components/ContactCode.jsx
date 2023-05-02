import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'Email',
    link: 'abhijeetkumar7565@gmail.com',
    href: 'mailto:abhijeetkumar7565@gmail.com',
  },
  {
    social: 'LinkedIn',
    link: 'linkedin.com/in/abhijeetkumar7565',
    href: 'https://www.linkedin.com/in/abhijeetkumar7565/',
  },
  {
    social: 'GitHub',
    link: 'github.com/abhijeetnishal',
    href: 'https://github.com/abhijeetnishal',
  },
  {
    social: 'LeetCode',
    link: 'leetcode.com/abhijeetnishal/',
    href: 'https://leetcode.com/abhijeetnishal/',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          {item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          {item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
        </p>
      ))}
    </div>
  );
};

export default ContactCode;
