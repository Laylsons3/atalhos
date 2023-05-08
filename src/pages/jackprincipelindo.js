import Image from "next/image";

const Jack = () => {
  return (
    <div className="w-full h-screen">
      <Image
        className="object-cover"
        src="/jack.jpeg"
        alt="jack"
        layout="fill"
      />
    </div>
  );
};

export default Jack;
