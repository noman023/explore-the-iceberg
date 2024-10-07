export default function Manpower({ params: { slug } }) {
  return (
    <div>
      page of manpower number{" "}
      {slug?.map((sl) => (
        <h1>{sl}</h1>
      ))}
    </div>
  );
}
