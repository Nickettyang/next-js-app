import React from "react";
import Link from "next/link";

export default function about() {
  return (
    <div>
      <h1>About Us</h1>
      <p>Welcome to the About Us page. We provide excellent services!</p>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/services">Services</Link>
      </nav>
    </div>
  );
}
