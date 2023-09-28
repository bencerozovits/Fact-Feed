import "./style.css";

function App() {
  const appTitle = "Fact Feed";

  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="logo">
          <img src="logo.png" height="68" width="68" alt="Fact Feed Logo" />
        </div>

        <h1>{appTitle}</h1>
        <button className="btn btn-large btn-open">Share a fact</button>
      </header>

      <NewFactForm />

      <main className="main">
        <CategoryFilter />
        <FactList />
      </main>
    </>
  );
}

function NewFactForm() {
  return <form className="fact-form">Fact Form</form>;
}

function CategoryFilter() {
  return <aside>Category Filter</aside>;
}

function FactList() {
  return <section>Facts list</section>;
}

export default App;
