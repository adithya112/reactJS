import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  //   const [data, setData] = useState([]);

  //   useEffect(() => {
  //     fetch("https://api.github.com/users/hiteshchoudhary")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setData(data);
  //       });
  //   }, []);

  const data = useLoaderData();
  return (
    <div
      className="text-center m-4 p-4 text-white bg-gray-600 text-3xl flex flex-col items-center justify-between gap-2
    "
    >
      Github Followers : {data.followers}
      <img src={data.avatar_url} alt="git-pic" width={300} />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/hiteshchoudhary");
  const data = await response.json();

  return data;
};
