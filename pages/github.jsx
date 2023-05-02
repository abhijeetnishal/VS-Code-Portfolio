import Image from 'next/image';
import GitHubCalendar from 'react-github-calendar';
import RepoCard from '../components/RepoCard';
import styles from '../styles/GithubPage.module.css';

const GithubPage = ({ repos, user }) => {
  // console.log(repos);
  const theme = {
    level0: '#161B22',
    level1: '#0e4429',
    level2: '#006d32',
    level3: '#26a641',
    level4: '#39d353',
  };

  return (
    <>
      <a href="https://github.com/abhijeetnishal" target="_blank" rel="noopener" className={styles.no_color}>
        <div className={styles.user}>
          <div>
            <Image
              src={user.avatar_url}
              className={styles.avatar}
              alt={user.login}
              width={50}
              height={50}
            />
            <h3 className={styles.username}>{user.login}</h3>
          </div>
          <div>
            <h3>{user.public_repos} repos</h3>
          </div>
          <div>
            <h3>{user.followers} followers</h3>
          </div>
        </div>
      </a>
      {/* <div> <center><h3>My Most Popular Repositories on Github</h3></center></div>
      <div className={styles.container}>
        {repos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div> */}
      <div><center><h3>My Github Calendar</h3></center></div>
      <br />
      <center>
        <div className={styles.contributions}>
          <GitHubCalendar
            username={process.env.NEXT_PUBLIC_GITHUB_USERNAME}
            theme={theme}
            hideColorLegend
          // hideMonthLabels
          />
        </div>
      </center>
      <br/>
      <center>
        <img width={'400px'} src="https://github-readme-stats.vercel.app/api/top-langs?username=abhijeetnishal&show_icons=true&locale=en&layout=compact" alt="abhijeetnishal" />
      </center>
      {/* <center>
        <p><img src="https://github-readme-stats.vercel.app/api?username=abhijeetnishal&show_icons=true&locale=en" alt="abhijeetnishal" /></p>
      </center> */}
    </>
  );
};

export async function getStaticProps() {
  const userRes = await fetch(
    `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}`,
    {
      headers: {
        Authorization: `token ${process.env.GITHUB_API_KEY}`,
      },
    }
  );
  const user = await userRes.json();

  
  return {
    props: { title: 'GitHub', user },
    revalidate: 10,
  };
}

export default GithubPage;
