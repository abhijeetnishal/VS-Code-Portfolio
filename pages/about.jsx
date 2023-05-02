import { pdfjs, Document, Page} from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`
const myResume = './Resume.pdf';
import styles from '../styles/About.module.css'

const AboutPage = () => {
  return (
    <>
      <h3>About Me</h3><br/>
      <div className={styles.about}>
      I am a programmer with a passion for problem-solving. I am proficient in programming languages such as C++ and JavaScript, as well as various frameworks and libraries like Node.js, React, and Express. With my technical skills, I am able to develop scalable and robust applications that meet the needs of my clients. <br/> <br/>
      In addition to my programming abilities, I have a deep understanding of data structures and algorithms. I am able to analyze complex problems, break them down into smaller components, and devise effective solutions. I take pride in my ability to think critically and creatively, and I always strive to stay up-to-date with the latest developments in the field. <br/> <br/>
      Over the course of my career, I have gained valuable experience working on projects. I am able to work both independently and as part of a team, and I thrive in environments that challenge me to think outside the box. <br/> <br/>
      I am excited about the opportunity to work with like-minded individuals and contribute to the growth of the programming community.
      </div>
      <br/>
      <center>
        <h3>Resume (<a href={myResume} download="Resume-AbhijeetKumar.pdf">Download</a>)</h3>
        <br />
        <Document file={myResume}>
          <Page pageIndex={0} />
        </Document>
      </center>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
