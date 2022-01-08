import Header from "./Components/Header";
import SectionCategory from "./Components/SectionCategory";
import SectionDownload from "./Components/SectionDownload";
import SectionFooter from "./Components/SectionFooter";
import SectionJobs from "./Components/SectionJobs";
import SectionService from "./Components/SectionService";
import SectionStaff from "./Components/SectionStaff";
import SubscribeSection from "./Components/SubscribeSection";

function App() {
  return (
    <div className="App">
      <Header />
      <SectionCategory />
      <SectionJobs />
      <SectionService />
      <SectionDownload />
      <SectionStaff />
      <SubscribeSection />
      <SectionFooter />
    </div>
  );
}

export default App;
