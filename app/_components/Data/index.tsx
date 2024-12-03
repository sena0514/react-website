import styles from "./index.module.css";
import Image from "next/image";

type Props = {
  data: string;
};

export default function Data({data}: Props) {
  return (
    <span className={styles.data}>
      <Image src="/clock.svg" alt="" width={16} height={16} priority />
      {data}
    </span>
  );
}
