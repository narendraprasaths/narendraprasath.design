import dynamic from "next/dynamic";

const Impress = dynamic(() => import("../components/Impress"), { ssr: false });

export default function Home() {
  return <Impress />;
}
