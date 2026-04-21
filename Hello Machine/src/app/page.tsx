export default function Home() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto" }}>
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: 700,
            marginBottom: "24px",
            background: "linear-gradient(83.21deg, #3245ff 0%, #bc52ee 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Welcome to Webflow Cloud
        </h1>
        <p style={{ marginBottom: "24px", fontSize: "1.1rem", color: "#666" }}>
          This is your Hello Machine site running on Webflow Cloud with Next.js
        </p>
        <div style={{ marginTop: "24px" }}>
          <a
            href="https://developers.webflow.com/webflow-cloud/getting-started"
            style={{
              display: "inline-block",
              padding: "12px 32px",
              borderRadius: "4px",
              background: "#146ef5",
              color: "#ffffff",
              textDecoration: "none",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}
