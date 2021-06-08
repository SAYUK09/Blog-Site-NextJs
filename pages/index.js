import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <h1>Welcome to nextJS</h1>

      <h2 className="title">
        {`Read `}
        <Link href="/posts/first-post">
          <a>this page! {""}</a>
        </Link>
      </h2>
    </div>
  );
}
