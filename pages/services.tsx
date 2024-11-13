import React from "react";
import Link from "next/link";

export default function services() {
  return (
    <div>
      <h1>Services Page</h1>
      <p>Here are our services.</p>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About Us</Link>
      </nav>
    </div>
  );
}
