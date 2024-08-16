/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useState, useEffect, ReactNode } from "react";

import { useRouter } from "next/navigation";

import { GiNetworkBars } from "react-icons/gi";
import { LinkDetails } from "../lib/type";
import { handleGetLinks } from "../lib/action";
import { FaRegCopy } from "react-icons/fa6";

interface Pageprops {
  children: ReactNode;
}

// eslint-disable-next-line @next/next/no-async-client-component
export default function Page() {
  const [link, setLink] = useState<LinkDetails[] | null>(null);
  const router = useRouter();
  // const links = await handleGetLinks();
  //   console.log(links)
  useEffect(() => {
    const fetchedLink = async () => {
      const links = await handleGetLinks();
      const ascLink = links.sort(
        (a, b) =>
          b.createdAt?.toDate()?.getTime() - a.createdAt?.toDate()?.getTime()
      );
      setLink(ascLink);
      console.log(links);
    };
    fetchedLink(); // Call the function to fetch data when the component mounts
  }, []);

  return (
    <div className="mb-32 md:mb-4">
      <h1 className="font-bold text-3xl text-center my-2">Links</h1>
      <div>
        {link &&
          link.map((Link, index) => (
            <div
              key={index}
              className="flex gap-28 p-4 my-5 shadow-lg items-center justify-between mt-4"
            >
              <div className="flex-1 mb-2 my-2 flex flex-col gap-3">
                <p className="text-2xl font-bold underline">{Link.name}</p>
                <div className="w-56">
                  <p className="truncate text-current text-sm">{Link.link}</p>
                </div>
                <div className="flex gap-4">
                  <a href={`/${Link.shortLink}`} target="blank">
                    <p className="text-xs font-light">
                      spinshort.vercel.app/{Link.shortLink}
                    </p>
                  </a>
                  <FaRegCopy
                    onClick={() => {
                      navigator.clipboard.writeText(
                        `spinshort.vercel.app/${Link.shortLink}`
                      );
                    }}
                  />
                </div>
                <p className="text-xs font-thin">
                  {Link.createdAt.toDate().toDateString()}
                </p>
              </div>
              <div>
                <p className="text-sm font-bold">{Link.clicks}</p>
                <GiNetworkBars className="text-green-800 text-lg font-extrabold" />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
