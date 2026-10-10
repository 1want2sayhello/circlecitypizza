import Nav from "./layouts/Nav/Nav";
import Footer from "./layouts/Footer/Footer";
import Router from "./Router";

function App() {
  return (
    <>
      <Nav />
      <main>
        <Router />
      </main>
      <Footer />
    </>
  );
}

export default App;
