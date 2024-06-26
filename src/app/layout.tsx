import styles from "../styles/layout.module.css";

export const metadata = {
  title: "Spot - Sparsh Hurkat",
  description: "This is my portfolio",
  favicon: "/spot.svg",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={metadata.favicon} type="image/svg+xml" />
      </head>
      <body className={styles.body}>{children}</body>
    </html>
  );
}
