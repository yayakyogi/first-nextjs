import Image from "next/image";
import Layout from "../components/layout";
import styles from "../styles/Home.module.css";

export default function home() {
  return (
    <Layout pageTitle="Home Page">
      <h1 className={styles.title}>Ginantaka Code</h1>
      <Image src="/image-1.jpg" width={200} height={200} alt="image-1" />
    </Layout>
  );
}
