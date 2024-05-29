export default function HighlightBtn({ id, content, paddingX }) {
  console.log(paddingX)
  return (
    <button
      id={id}
      className={`highlight-btn ${paddingX}`}
    > {content} </button>
  );
}