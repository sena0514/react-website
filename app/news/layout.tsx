import Sheet from "@/app/_components/Sheet";
import Hero from "@/app/_components/Hero";

type Props = {
  children: React.ReactNode;
};

export const revalidate = 60;

export default function RootLayout({ children }: Props) {
  return (
    <>
      <Hero title="news" sub="ニュース" />
      <Sheet>{children}</Sheet>
    </>
  );
}
