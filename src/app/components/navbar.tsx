import Link from "next/link";

export default function NavBar() {
  return (
    <div className="py-3 grid place-items-center">
          <ul className="  justify-center items-center">
            <li className="space-x-10 text-[#726E8D]">
              <Link href={""}>Plant pots</Link>
              <Link href={""}>Ceramics</Link>
              <Link href={""}>Tables</Link>
              <Link href={""}>Chairs</Link>
              <Link href={""}>Crockery</Link>
              <Link href={""}>Tableware</Link>
              <Link href={""}>Cutlery</Link>
            </li>
          </ul>
        </div>
  );
}
