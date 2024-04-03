import Image from "next/image";

export default function ImageCard({ src, dataKey }) {
  return (
    <div className="" key={dataKey} data-target={dataKey} data-img={src}>
      <img src={src} className="rounded shadow-xl"></img>
    </div>
  );
}
