export default function HighlightBtn({ id, content }) {
  return (
    <button
      id={id}
      className="highlight-btn"
    > {content} </button>
  );
}