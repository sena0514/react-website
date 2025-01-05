import Image from "next/image";
import { getMembersList } from "@/app/_libs/microcms";
import { MEMBERS_LIST_LIMIT } from "@/app/_constants/";
import styles from "./index.module.css";

export default async function Page() {
  const date = await getMembersList({ limit: MEMBERS_LIST_LIMIT });

  return (
    <div className={styles.container}>
      {date.contents.length === 0 ? (
        <p className={styles.empty}>メンバーがいません</p>
      ) : (
        <ul>
          {date.contents.map((member) => (
            <li key={member.id} className={styles.list}>
              <Image
                className={styles.image}
                src={member.image.url}
                alt=""
                width={member.image.width}
                height={member.image.height}
              />
              <dl>
                <dt className={styles.name}>{member.name}</dt>
                <dd className={styles.position}>{member.profile}</dd>
                <dd className={styles.profile}>{member.profile}</dd>
              </dl>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
