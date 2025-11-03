"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";

export default function ThankYouPage() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-lightBlue-300 to-lightBlue-500 p-6">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-start md:justify-between gap-12 md:flex-row">
                {/* Left Content */}
                <div className="flex flex-col space-y-8 md:w-1/2">
                    <h1 className="text-navy-900 font-extrabold leading-[80px]">
                        Thank you for signing up for Export Genius.
                    </h1>
                    <div className="mt-4">
                        <button
                             onClick={() => router.push("/")}
                            className="flex gap-2 p-3 border rounded bg-blue-500 text-white font-bold"
                        >
                            <span>Back To Home</span>
                            <FaArrowRight className="h-5 w-5" />
                        </button>
                       
                    </div> 
                </div>
                <div className="md:w-1/2">
                    <div className="relative w-full overflow-hidden rounded-lg bg-white shadow-xl">
                        {/* Placeholder for an image */}
                        <Image src="global-trade.png" alt="Global Trade Data" width={1019} height={538}/>
                    </div>
                </div>
            </div>
        </div>
  );
}
