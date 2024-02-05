import Link from "next/link";

export default function GamesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="px-5 my-5">
        <Link href="/" className="border border-white px-3 py-2 rounded-lg">
          Back
        </Link>
      </header>
      <section>{children}</section>;
    </>
  );
}
