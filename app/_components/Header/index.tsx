import Image from "next/image";
import styles from "./index.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logoLink}>
        <Image
          src="/logo.svg"
          alt=""
          className={styles.logo}
          width={348}
          height={133}
          priority
        />
      </Link>
    </header>
  );
}