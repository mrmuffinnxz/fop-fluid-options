import ConnectWallet from "./ConnectButton";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  return (
    <nav className="m-0 p-5 font-bold  bg-teal-300 flex flex-row justify-between shadow-lg border-b-2 border-slate-300">
      <div className="flex flex-row gap-x-16">
        <h1
          onClick={() => router.push(`/`)}
          className="text-teal-700 hover:text-white text-3xl ml-6"
        >
          💦 Fluid Option
        </h1>

        <div className="flex flex-row gap-x-10 ">
          <h2
            className="pt-2 text-teal-700 hover:text-white  "
            onClick={() => router.push(`/`)}
          >
            {" "}
            Call{" "}
          </h2>
        </div>
        <div className="flex flex-row gap-x-10 ">
          <h2
            className="pt-2 text-teal-700 hover:text-white  "
            onClick={() => router.push(`/`)}
          >
            {" "}
            Put{" "}
          </h2>
        </div>
      </div>

      <div className="flex flex-row gap-6">
        <h2
          className="pt-2 text-teal-700 hover:text-white  pr-8 "
          onClick={() => router.push(`/`)}
        >
          {" "}
          Create Option{" "}
        </h2>
        <ConnectWallet className="order-last " />
      </div>
    </nav>
  );
}
