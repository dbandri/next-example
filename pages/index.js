import Head from "next/head";
import Container from "../components/Layout";
import fetch from "isomorphic-fetch";
import Users from "../components/Users";

const Index = (props) => (
  <>
    <Head>
      <title>nProject - Home</title>
    </Head>
    <Container>
      <h1>Users</h1>
      <Users users={props.users} />
    </Container>
  </>
);

Index.getInitialProps = async (cts) => {
  const res = await fetch("https://reqres.in/api/users");
  const resJSON = await res.json();
  return { users: resJSON.data };
};

export default Index;
