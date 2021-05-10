import React, { useState } from "react";
import FirstSection from "./components/Sections/firstSection/firstSection";
import SecondSection from "./components/Sections/secondSection/secondSection";
import ThirdSection from "./components/Sections/thirdSection/thirdSection";
import FourthSection from "./components/Sections/fourthSection/fourthSection";
import FifthSection from "./components/Sections/fifthSection/fifthSection";
import SixthSection from "./components/Sections/sixthSection/sixthSection";
import Gallery from "./components/Galleries/firstGallery/gallery";
import SecondGallery from "./components/Galleries/secondGallery/secondGallery";
import Popup from "./components/Popup/popup";
import Footer from "./components/Footer/footer";
import Navbar from "./components/Navbar/navbar";
import SlidingPane from "react-sliding-pane";
import PopupContent from "./components/Popup/PopupContent/popupContent";
import PopUpContact from "./components/Popup/PopupContact/popupContact";
import "react-sliding-pane/dist/react-sliding-pane.css";
import Fade from "react-reveal/Fade";
// import classes from "*.module.css";
import "./imports.css";

const CloseIcon = () => {
  return (
    <div>
      <i class="fas fa-minus"></i>
    </div>
  );
};

const Imports = () => {
  const [isPaneOpen, setIsPaneOpen] = useState(false);
  return (
    <>
      <Fade effect="fadeInUp">
        <SlidingPane
          isOpen={isPaneOpen}
          className="slide-pane"
          onRequestClose={() => setIsPaneOpen((prev) => !prev)}
          from="left"
          width="50%"
          hideHeader={true}
        >
          <PopupContent />
        </SlidingPane>
        <Popup setIsPaneOpen={setIsPaneOpen} />
        <Navbar />
        <FirstSection />
        {/* <PopUpContact setIsChatBoxOpen={setIsChatBoxOpen} /> */}
        <Gallery />
        <SecondSection />
        <SecondGallery />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
        <SixthSection />
        <Footer />
      </Fade>
    </>
  );
};

export default Imports;
