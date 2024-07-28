import Link from "next/link";

export default function HighlightBtn({ id, content, customStyle, link = "" }) {
  return (
    <Link
      id={id}
      className={`highlight-btn ${customStyle}`}
      href={link}
    > {content} </Link>
  );
}