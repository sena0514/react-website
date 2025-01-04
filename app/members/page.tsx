import Image from "next/image";
import styles from "./index.module.css";

const date = {
  contents: [
    {
      id: "1",
      image: {
        url: "/img-member1.jpg",
        width: 240,
        height: 240,
      },
      name: "デイビッド・チャン",
      position: "CEO",
      profile:
        "グローバルテクノロジー企業での豊富な経験を持つリーダー。以前は大手ソフトウェア企業の上級管理職として勤務し、新市場進出や収益成長に成功。",
    },

    {
      id: "2",
      image: {
        url: "/img-member2.jpg",
        width: 240,
        height: 240,
      },
      name: "エミリー・サンダース",
      position: "COO",
      profile:
        "グローバルテクノロジー企業での豊富な経験を持つリーダー。以前は大手ソフトウェア企業の上級管理職として勤務し、新市場進出や収益成長に成功。",
    },
    {
      id: "3",
      image: {
        url: "/img-member3.jpg",
        width: 240,
        height: 240,
      },
      name: "ジョン・ウィルソン",
      position: "CTO",
      profile:
        "グローバルテクノロジー企業での豊富な経験を持つリーダー。以前は大手ソフトウェア企業の上級管理職として勤務し、新市場進出や収益成長に成功。",
    },
  ],
};

export default function Page() {
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
