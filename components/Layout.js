import Head from "next/head";
import Navbar from "./Navbar";

const Container = (props) => (
  <>
    <Head>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/flatly/bootstrap.min.css"
      />
    </Head>
    <Navbar />
    <div className="container p-4">{props.children}</div>
  </>
);

export default Container;
