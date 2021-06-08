import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hi there 👋, Hey, I am Sayuri Hi, I am Sayuri a young 18 years old
          girl on a journey to enchance as a Fullstack Web Developer. I code in
          HTML, CSS, Javascript and React. <br />I love communicating, making
          new connections and discussing about ideas, projects and startup.{" "}
          <br />
          Also I document my journey on some social networking sites
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
