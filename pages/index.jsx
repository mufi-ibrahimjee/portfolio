import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();
  router.replace("/404");
  return <></>;
};

export default Home;
