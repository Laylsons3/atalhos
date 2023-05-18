import QRCode from "react-qr-code";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Whats = () => {
  const [whatsapp, setWhatsapp] = useState("");
  const codeWeb = `https://web.whatsapp.com/send?phone=55${whatsapp}`;
  const codePhone = `https://api.whatsapp.com/send?phone=55${whatsapp}`;
  const router = useRouter();

  const [isVisible, setIsVisible] = useState(false);

  function handleChange(e) {
    const val = e.target.value;
    setIsVisible(false);
    setWhatsapp(val);
  }

  function gerarLink() {
    setIsVisible(true);
  }

  function redirect() {
    router.push(`https://web.whatsapp.com/send?phone=55${whatsapp}`);
  }

  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-y-4 justify-center bg-zinc-50 p-4 rounded shadow">
        <label className="flex gap-x-2 items-center w-full max-w-xs">
          <span className="font-medium">Whatsapp:</span>
          <input
            value={whatsapp}
            onFocus={(e) => e.target.select()}
            onChange={(e) => handleChange(e)}
            autoFocus
            type="number"
            className="w-full rounded p-1 border"
            placeholder="DDD + Número"
          />
        </label>
        <button
          onClick={whatsapp.length === 11 && gerarLink}
          className={`${
            whatsapp.length === 11
              ? "bg-green-800"
              : "bg-zinc-300 text-zinc-500 hover:cursor-default"
          } border border-zinc-500 text-white rounded py-1`}
        >
          Gerar
        </button>
        {isVisible && (
          <div className="flex flex-col justify-center gap-y-4">
            <div className="flex hover:underline justify-center">
              <Link target="_blank" rel="noopener noreferrer" href={codeWeb}>
                Chamar no Whatsapp
              </Link>
            </div>
            <div className="flex justify-center">
              <QRCode value={codePhone} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Whats;
