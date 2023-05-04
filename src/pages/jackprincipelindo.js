import QRCode from "react-qr-code";
import Image from "next/image";

const Jack = () => {
  const code = "https://atalho-cnd-laylsons3.vercel.app/jackprincipelindo";
  return (
    <div className="w-full h-screen">
      <Image
        className="object-cover"
        src="/jack.jpeg"
        alt="jack"
        layout="fill"
      />
      {/* <QRCode value={code} /> */}
    </div>
  );
};

export default Jack;
