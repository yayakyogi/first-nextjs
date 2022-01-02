import Layout from "../components/layout";

interface Post {
  id: number;
  title: string;
  body: string;
}
interface BlogProps {
  dataBlog: Post[];
}
export default function blog(props: BlogProps) {
  const { dataBlog } = props;
  console.log(dataBlog);

  return (
    <Layout pageTitle="Blog Page">
      {dataBlog.map((blog) => {
        return (
          <div key={blog.id}>
            <h1>{blog.title}</h1>
            <p>{blog.body}</p>
          </div>
        );
      })}
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const dataBlog = await res.json();

  return {
    props: {
      dataBlog,
    },
  };
}
