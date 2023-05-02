import Link from 'next/link';
// import Illustration from '../components/Illustration';
//import Image from "next/image";
import styles from '../styles/HomePage.module.css';

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <h2>Software</h2>
          <h2>Development</h2>
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>Abhijeet Kumar</h1>
            {/* <h6 className={styles.bio}>Aspiring Software Developer</h6> */}
            <div className={styles.cardContainer}>
              <div className={styles.card}>
                <div className={styles.content}>
                  <h4>Skills</h4>
                  <div className={styles.tags}>
                    <span key='Cpp' className='Cpp'>
                      C++
                    </span>
                    <span key='Javascript' className='Javascript'>
                      JavaScript
                    </span>
                    <span key='Nodejs' className='Nodejs'>
                      Nodejs
                    </span>
                    <span key='Express' className='Express'>
                      Express
                    </span>
                    <span key='React' className='React'>
                      React
                    </span>
                    <span key='REST-API' className='REST-API'>
                      REST API
                    </span>
                    <span key='MongoDB' className='MongoDB'>
                      MongoDB
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <Link href="/about">
              <button className={styles.button}>About Me</button>
            </Link>
            {/* <Link href="/projects">
              <button className={styles.button}>View Projects</button>
            </Link> */}
            <Link href="/contact">
              <button className={styles.outlined}>Contact</button>
            </Link>
          </div>
          {/* <Illustration className={styles.illustration} /> */}
          {/* <div className={styles.right}>
            <div className={styles.picture_boader}>
              <Image
                className={styles.picture}
                src="/me.jpeg"
                width={300}
                height={290}
                alt="Picture"
              />
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: 'Home' },
  };
}
