import ContactCode from '../components/ContactCode';
import styles from '../styles/ContactPage.module.css';

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div>
        <h3 className={styles.heading}>Find Me On</h3>
        <ContactCode />
      </div>
    </div>
  );
};

export async function getInitialProps() {
  let pageProps = {};
  try {
    pageProps['title'] = 'Contact';
  } catch (error) {}

  return { pageProps };
}

export default ContactPage;