import Link from "next/link";

export default function home() {
  return (
    <>
      <header>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </li>
        <li>
          <Link href="/user">
            <a>User</a>
          </Link>
        </li>
      </header>
      <div>
        <h1>Blog</h1>
      </div>
    </>
  );
}
