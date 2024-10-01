import "./globals.css";
import styles from "./page.module.css";
import Header from "../ui/Header"



export const metadata = {
  title: {
    template: "Katherine Meadows | %s",
    default: "Katherine Meadows"
  },
  description: "Portfolio for Katherine Meadows",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={styles.body}>
        <div className={styles.main}>
          <Header />
          <section className={styles.page}>
            {children}
          </section>
        </div>

      </body>
    </html>
  );
}
