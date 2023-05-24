import Head from "next/head";
import homeStyles from "../../styles/home.module.css";
import { GetStaticPaths, GetStaticProps } from "next";
import { getAllPostIds, getPostData } from "../../lib/post";
import postStyle from "../../styles/Post.module.css";

const Post = ({
  postData,
}: {
  postData: {
    title: string;
    date: string;
    contentHtml: string;
  };
}) => {
  return (
    <div className={postStyle.container}>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={homeStyles.headingXl}>{postData.title}</h1>
        <div className={homeStyles.lightText}>{postData.date}</div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </div>
  );
};

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  console.log("paths", paths);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  console.log("params", params);
  const postData = await getPostData(params!.id as string);
  return {
    props: {
      postData,
    },
  };
};