import Image from "next/image";

export default function ArrowTop() {
  return (
    <button
      className="z-50 fixed bottom-5 right-0"
      onClick={() => {
        alert("you click the button to scroll to the top");
      }}
    >
      <Image
        src="/arrow-top.svg"
        width={32}
        height={32}
        alt="go to top"
      ></Image>
    </button>
  );
}
