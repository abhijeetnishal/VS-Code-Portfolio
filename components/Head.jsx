import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Abhijeet Kumar's Profolio."
      />
      <meta
        name="keywords"
        content="vscode-portfolio"
      />
      <meta property="og:title" content="Abhijeet Kumar's Portfolio" />
      <meta
        property="og:description"
        content="Abhijeet kumar's Profolio."
      />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Abhijeet Kumar',
};
