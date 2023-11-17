
// basically just cleaned up the code and called it all form one oage wiht props and callout components 

import React from "react";
// import InfoCallout from "./InfoCallout";
// import ImageCallout from "./ImageCallout";
// import EmailCallout from "./EmailCallout";
import "./App.css";

// imported callout
import Callout from "./Callout";

// for the practice look at callout.js page, thats where we did the work to make children so everything wasnt so sepereated.
function App() {
  return (
    <main>
      <h1>Welcome!</h1>

      {/* 
      //take info from infocall out and put it below in props */}

<Callout>
                <h2>Don't miss out!</h2>
                <p>Unless you don't suffer from FOMO, you better make sure you fill out the email form below!</p>
            </Callout>



      {/* <InfoCallout
        header="Don't miss out!"
        body="Unless you don't suffer from FOMO, you better make sure you fill out the email form below!"
      /> */}

      <p>
        This is probably the best site you've ever come across. I'm glad you're
        here to witness the magnificence of this website right now.
      </p>

      {/* <ImageCallout
        img={"https://picsum.photos/id/102/4320/3240"}
        caption="Just look at those sparkling raspberries!"
      /> */}
     <Callout>
                <img alt="" src="https://picsum.photos/id/102/4320/3240" width="100%" />
                <figcaption>Just look at those sparkling raspberries!</figcaption>
            </Callout>
      <p>
        Here's some more unforgettable content. Lorem ipsum something or other.
      </p>
      <Callout>
                <h2>Give us your email. We definitely won't sell it to anyone.</h2>
                <input type="email" placeholder="Enter Email"/>
                <button>Sign me up!</button>
            </Callout>
            
    </main>
  );
}

export default App;
