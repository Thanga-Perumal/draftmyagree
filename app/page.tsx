// app/page.tsx

export default function HomePage() {
  return (
    <main style={{ textAlign: "center", marginTop: "100px" }}>
      <img src="/logo.png" alt="Logo" width={120} height={120} />
      <h1 style={{ color: "blue", fontSize: "2rem", margin: "20px 0" }}>DraftMyAgreement</h1>
      <input
        type="text"
        placeholder="Search..."
        style={{
          padding: "10px",
          width: "300px",
          fontSize: "1rem",
          borderRadius: "8px",
          border: "1px solid #ccc",
        }}
      />
    </main>
  );
}
