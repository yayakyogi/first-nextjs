import { useRouter } from "next/router";
import Layout from "../../components/layout";

export default function Detail() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Layout pageTitle="Detail User">
      <h1>Detail User {id}</h1>
    </Layout>
  );
}
