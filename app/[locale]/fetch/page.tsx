import { useEffect, useState } from "react";
import Test from "@/components/utils/Test";
import { fetchData } from "@/libs/apis/mock";

interface TestProps {
  params: { locale: string };
}

export default async function TestPage(props: TestProps) {
  const data = await fetchData();
  console.log(data);
  return (
    <div>
      <h1 className="text-black">This is a demo for fetch</h1>
      <p className="text-red-400">
        async and await can only be used in server side.
      </p>
    </div>
  );
}
