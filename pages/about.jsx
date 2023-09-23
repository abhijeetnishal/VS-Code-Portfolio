import { pdfjs, Document, Page} from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`
const myResume = '../public/AbhijeetResume.pdf'
import styles from '../styles/About.module.css'

const AboutPage = () => {
  return (
    <>
      <h3>About Me</h3><br/>
      <div className={styles.about}>
      I'm a passionate and results-driven software developer with a diverse range of experiences and skills that span across full-stack development, open source contributions, and problem-solving. My journey into the world of technology has been marked by diverse experiences and a relentless pursuit of excellence.<br/> <br/>
      My skill set encompasses a wide range of programming languages, web technologies, backend technologies, and databases. I'm well-versed in cloud and deployment services, and I bring a solid foundation in software development principles, object-oriented programming, and data structures and algorithms. I'm passionate about crafting meaningful applications and solving complex problems. <br/> <br/>
      Over the course of my career, I have gained valuable experience working on projects. I am able to work both independently and as part of a team, and I thrive in environments that challenge me to think outside the box. <br/> <br/>
      I'm driven by a passion for innovation, a commitment to excellence, and a continuous thirst for knowledge. I'm excited to bring my skills and experience to new challenges and contribute to the ever-evolving world of technology.
      </div>
      <br/>
      <center>
        {/* <h3>Resume (<a href={myResume} download="Resume-Abhijeet.pdf">Download</a>)</h3> */}
        <br />
        {/* <Document file={myResume}>
          <Page pageIndex={0} />
        </Document> */}
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
