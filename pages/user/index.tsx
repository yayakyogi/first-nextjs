import Layout from "../../components/layout";
// import { GetStaticProps } from "next";
interface UserProps {
  dataUsers: Array<any>;
}
export default function index(props: UserProps) {
  const { dataUsers } = props;
  console.log(dataUsers);
  return (
    <Layout pageTitle="User Page">
      {dataUsers.map((users, key) => {
        return (
          <div key={key}>
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
