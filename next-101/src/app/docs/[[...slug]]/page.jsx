export default function Docs({ params }) {
  if (params.slug?.length === 2) {
    return (
      <h1>
        showing docs feature {params.slug[0]} and concept {params.slug[1]}
      </h1>
    );
  } else if (params.slug?.length === 1) {
    return <h1>showing docs feature {params.slug[0]}</h1>;
  }

  return (
    <div>
      <p>Docs page</p>
    </div>
  );
}
