import React from "react";
import "./home.css";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="Home">
      <header>
        <img
          src="https://tse1.mm.bing.net/th?id=OIP.FuROGMNJAGUaKpGRKZBNlQHaF7&pid=Api&P=0&h=180"
          alt="logo"
          width="50px"
          class="collegelogo"
        />
        <nav>
          <ul>
            <li>
              <button id="signup" onClick={() => navigate("/signup")}>
                Sign Up
              </button>
            </li>
            <li>
              <button id="signin" onClick={() => navigate("/signin")}>
                Sign In
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <div class="content" id="product">
        <div class="words">
          <center>
            {" "}
            <h5>
              Welcome to a journey of <br /> care, compassion, and healing{" "}
            </h5>
          </center>
        </div>
        <section>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6zqFBDQ3q6Y-Otzd9poXQDN_wzZDuCPofTWWhZYNn66vLdHynx3BxNiHgGJBYYmbE-Zk&usqp=CAU"
              alt="pointer"
              width="50px"
              height="50px"
            />{" "}
            <br />
            <h2>Log your periods</h2>
            <p>
              93% of users say Luna Flow accurately predicts the start of their
              period{" "}
            </p>
          </div>
          <div>
            <img
              src="data:image/jpeg;base64,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"
              alt="tick"
              width="60px"
              height="60px"
            />{" "}
            <br />
            <h2>Get help from ChatBot</h2>
            <p>
              Use our exclusive voice chatbot to get insights about your health{" "}
            </p>
          </div>
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2449/2449899.png"
              alt="tick"
              width="50px"
              height="50px"
            />{" "}
            <br />
            <h2>Use Experts help</h2>
            <p>Luna Flow provides 24/7 doctor support</p>
          </div>
          <div>
            <img
              src="data:image/png;base64,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"
              alt="tick"
              width="50px"
              height="50px"
            />{" "}
            <br />
            <h2>Join the discussion</h2>
            <p>
              You can connect and chat about everything about cramps and late
              periods with the friendly Luna Community{" "}
            </p>
          </div>
        </section>
        <button class="signupnow">SIGN UP NOW</button>
      </div>
      <div class="content2" id="customer">
        <h1>Customer Testimonials</h1>
        <div class="comments">
          <div class="comment1">
            <p>
              "Finally, a period tracker that respects my privacy! The app's
              interface is clean and user-friendly. I appreciate the option to
              add personalized notes and track symptoms. It has become an
              essential tool in managing my health."
            </p>
          </div>

          <div class="comment1">
            <p>
              SarahLovesPink: "The aesthetics of this period tracker are lovely,
              but it's not just a pretty face. The insights it provides are
              incredibly informative, and I feel more in tune with my menstrual
              cycle than ever before. Thanks to this app, I can now plan my life
              with confidence."
            </p>
          </div>
          <div class="comment1">
            <p>
              {" "}
              "As a healthcare professional, I was skeptical about using period
              trackers, but this one surpassed my expectations. It's accurate,
              secure, and helps me keep track of my patients' menstrual health.
              It's a fantastic tool for both individuals and medical
              practitioners."
            </p>
          </div>
        </div>
      </div>
      <div class="content3" id="pricing">
        <div class="circlegrad">
          <h1>Need relief from cramps?</h1>
          <p>
            Get relief from period cramps with our exclusive bluetooth
            controlable device
          </p>
          <button id="signup">Try our product</button>
        </div>
      </div>
      <div class="content4" id="resource">
        <h1>Why Choose Luna Flow?</h1>
        <p>
          When it comes to track menstrual cycle, a community exclusive for
          women, pregnancy health monitoring and dietary suggestions, medicine
          reminder, doctor appointment a number of apps are available in the
          play store, but all their features are scattered all over 4-5 apps and
          it becomes overwhelming to handle these apps. LunaFlow is a one stop
          application that does covers all of these along with our
          state-of-the-art AI chatbot that caters to all of your queries and
          requirements
        </p>
        <div class="res">
          <div class="res1">
            <img
              src="https://cdn.nuawoman.com/blog/Irregular+Periods.png"
              alt=""
            />
            <p>Dietry Suggestions </p>
            <h2>
              LunaFlow suggests you a balanced diet during your menstruation and
              pregnancy.{" "}
            </h2>
          </div>

          <div class="res1">
            <img
              src="https://buzzrx.s3.amazonaws.com/8981866b-dbcf-4f4d-8dad-af074f3b6b32/DoesTylenolHelpWithCramps.png"
              alt=""
            />
            <p>Connect your cramp relief device </p>
            <h2>
              can connect your devices like Livia, and TEN, with ease through
              Bluetooth connectivity
            </h2>
          </div>
          <div class="res1">
            <img
              src="https://img.freepik.com/premium-vector/pms-female-abdominal-pain-menstrual-syndrome-change-behavior_53562-12224.jpg?w=2000"
              alt=""
            />
            <p>Detects diseases earlier </p>
            <h2>
              It records data concernng your symptoms, and cramps to predict
              menstrual diseases early
            </h2>
          </div>
        </div>
      </div>
      <hr />
      <footer>
        <div class="clglogo">
          <img
            src="https://media.istockphoto.com/id/1299754150/vector/unwell-woman-suffering-from-stomachache-abdominal-pain-female-period-problems-girl-having.jpg?s=612x612&w=0&k=20&c=5wPB4uw1cokuHDvUapWbMZbxZwmLE-YKN4-TnEExLHU="
            alt="logo"
            width="200px"
            class="collegelogo"
          />
        </div>
        <div class="links">
          <h2>Quick Links</h2>
          <ul>
            <li>About Us</li>
            <br />
            <li>Blog</li>
            <br />
            <li>Contact</li>
            <br />
            <li>FAQ</li>
            <br />
          </ul>
        </div>
        <div class="links">
          <h2>Legal stuff</h2>
          <ul>
            <li>Disclaimer</li>
            <br />
            <li>Financing</li>
            <br />
            <li>Privacy Policy</li>
            <br />
            <li>Terms of Service</li>
            <br />
          </ul>
        </div>
        <div class="confoot">
          <h2>knowing you've always on the best energy deal. </h2>
          <input type="text" placeholder="Enter your phone Number" />
          <button id="signup">Sign Up Now</button>
        </div>
      </footer>
      <hr />

      <p style={{ textAlign: "left", padding: "20px 100px", margin: "0%" }}>
        © Luna Flow
        <span style={{ float: "right" }}>Made with ❤️ by ALBATROSS</span>
      </p>
    </div>
  );
};

export default Home;
