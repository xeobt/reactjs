import Header from "./Header";
import Hero from "./Hero";
import Sidebar from "./Sidebar"
import Footer from "./Footer"

function App() {
  return (
    <div style={{backgroundImage: "linear-gradient(to bottom right, #062F5B, #084A76, #41A5B2, #5CB8BD, #82CDCF, #A9E0DE)"}}>
      <Header 
      title="Daily News"
      nav1="Home"
      nav2="Sports"
      nav3="Technology"
      nav4="Contact"
      />

      <Hero
      headline="Breaking News"
      description="A new AI technilogy is changing future of education."
      />

      <Sidebar
      title="Latest News"
      item1="Football World Cup"
      item2="Stock Market Update"
      item3="Weather Forecast"
      />

      <Footer
      text="@ 2026 Daily News. All Rights Reserved."
      />
    </div>
  );
}

export default App;