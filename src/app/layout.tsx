import styles from "../styles/layout.module.css";

export const metadata = {
  title: "Spot - Sparsh Hurkat",
  description: "This is my portfolio",
  favicon: "/spot.svg",
  openGraph: {
    title: 'Spot - Sparsh Hurkat',
    description: 'This is my portfolio',
    url: 'https://sparshhurkat.vercel.app',
    siteName: 'Spot - Sparsh Hurkat',
    images: [
      {
        url: 'https://sparshhurkat.vercel.app/spot.png',
        width: 1200,
        height: 630,
        alt: 'Spot - Sparsh Hurkat',
      },
    ],
    type: 'website',
  },
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
