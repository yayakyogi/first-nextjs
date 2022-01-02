import Layout from "../../components/layout";
import { useRouter } from "next/router";
import styles from "../../styles/User.module.css";
interface UserProps {
  dataUsers: Array<any>;
}
export default function index(props: UserProps) {
  const { dataUsers } = props;
  const router = useRouter();
  return (
    <Layout pageTitle="User Page">
      {dataUsers.map((users) => {
        return (
          <div
            key={users.id}
            onClick={() => router.push(`/user/${users.id}`)}
            className={styles.card}
          >
            <p>{users.name}</p>
            <p>{users.email}</p>
          </div>
        );
      })}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const dataUsers = await res.json();

  return {
    props: {
      dataUsers,
    },
  };
}

// * Call function getStaticProps when from next
// export const getStaticProps: GetStaticProps = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const dataUsers = await res.json();
//   return {
//     props: {
//       dataUsers,
//     },
//   };
// };
