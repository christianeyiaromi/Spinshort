/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useState, useEffect, ReactNode } from "react";

import { useRouter } from "next/navigation";

import { GiNetworkBars } from "react-icons/gi";
import { LinkDetails } from "../lib/type";
import { handleGetLinks } from "../lib/action";
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
                <p className="text-xs font-light">{Link.shortLink}</p>
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

  // return (
  //   <div>
  //     <div>
  //       <h1 className="text-center text-2xl font-bold my-4">links</h1>
  //       <div className="flex justify-center ">
  //         <div>
  //           {links.map((Link, index) => {
  //             // const longUrl = Link.longUrl
  //             // const formatted = longUrl.length > 30 ? ${longUrl.substring(0, 30)}... : link
  //             return (
  //               <div key={index} className="flex gap-28 p-4 my-5  shadow-lg items-center  justify-between mt-4">
  //                 <div className="flex-1 mb-2 my-2 flex flex-col gap-3" >
  //                   <p className="text-2xl font-bold underline">{Link.name}</p>
  //                   <div className="w-56">
  //                   <p className="truncate text-current text-sm ">{Link.longUrl}</p>
  //                   </div>
  //                   <p className=" text-xs font-light">{Link.shortUrl}</p>
  //                   <p className=" text-xs font-thin">{Link.createdAt}</p>
  //                 </div>
  //                 <div>
  //                   <p className=" text-sm font-bold">{Link.clicks}</p>
  //                   <GiNetworkBars className="text-green-800 text-lg font-extrabold"/>
  //                 </div>
  //               </div>
  //             );
  //           })}
  //         </div>
  //       </div>

  //     </div>

  //   </div> // );
}
