import { getPostsMetaData } from '../lib/getPostsData.js';

export default function Home({ postsData }) {
  return (
    <div className = 'info-container'>
      <img src = 'batman.png' alt = 'Batman Logo'/>
      <p className = 'info-description'>Hi I&apos;m Batman, the saviour of Gotham City and I like to roam in nights to bash the bad guys.</p>
      <p className = 'info-description'>But please don&apos;t call me as a source for <b>Corona Virus</b> and it could be the <b>Joker</b> who 
      might have started this mess.</p>
      <hr/>
      {postsData.map((metadata) => {
        return (
          <div key = {metadata.id}>
            <h2 className = 'post-title'>{metadata.title}</h2>
            <p className = 'post-description'>{metadata.description}</p>
          </div>
          )
        })}

      <style jsx>{`
        .info-container {
          margin: 0 5% 0 5%;
        }

        img {
          width: 20%;
          max-width: 20%;
          height: auto;
          margin-left: 40%;
        }

        .info-description {
          font-size: 20px;
        }

        .post-title {
          font-size: 24px;
          color: black;
        }

        .post-description {
          font-size: 16px;
          color: #000000e6;
        }
      `}</style>
    </div>
  )
}

export async function getStaticProps() {
  const postsData = getPostsMetaData();
  return {
    props: {
      postsData: postsData,
    }
  }
}
