import React from "react";
import "./blog.css";
function PregnancyFoods() {
  return (
    <div>
      <section class="section-two">
        <div class="container-two">
          <div class="container-two-content content">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <h1 className="homehead">First Trimester (Week 1 - Week 12):</h1>
              <div class="container-two-content content-image">
                <img src="https://www.baby360.in/wp-content/uploads/2018/04/3rd-Month-Pregnancy-foods-to-eat.jpg" />
              </div>
            </div>

            <p className="homepara">
              During the first trimester, the baby's major organs and body
              systems are forming. Nausea and morning sickness are common during
              this period, so focus on:
            </p>
            <p className="homepara">
              <ul>
                <li>
                  Frequent, small meals: Eat smaller, more frequent meals to
                  help manage nausea and stabilize blood sugar levels.
                </li>
                <li>
                  Hydration: Drink plenty of water to stay hydrated and support
                  the increased blood volume in the body.
                </li>
                <li>
                  Folate-rich foods: Consume foods high in folate, such as leafy
                  greens, legumes, fortified cereals, and citrus fruits, to help
                  prevent neural tube defects.
                </li>
                <li>
                  Iron-rich foods: Include iron sources like lean meats,
                  poultry, fish, and fortified cereals to support the increase
                  in blood volume.
                </li>
                <li>
                  Avoid raw or undercooked meats, fish, and unpasteurized dairy
                  products to reduce the risk of foodborne illnesses.
                </li>
              </ul>
            </p>
          </div>
        </div>
      </section>
      <section
        class="section-two"
        style={{ backgroundColor: "#691337", color: "antiquewhite" }}
      >
        <div class="container-two">
          <div class="container-two-content content">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div class="container-two-content content-image">
                <img src="https://femina.wwmindia.com/content/2020/jul/pregnancy-diet-chart-infographic.jpg" />
              </div>
              <h1 className="homehead" style={{ textAlign: "right" }}>
                Second Trimester (Week 13 - Week 27):
              </h1>
            </div>

            <p className="homepara">
              The second trimester is often referred to as the "honeymoon
              period" of pregnancy. The baby's growth accelerates during this
              time, and the mother might experience fewer symptoms. Focus on:
            </p>
            <p className="homepara">
              <ul>
                <li>
                  Calcium-rich foods: Dairy products, fortified plant-based
                  milk, and leafy greens can support the baby's bone
                  development.
                </li>
                <li>
                  Protein: Consume adequate protein from sources like lean
                  meats, eggs, legumes, and nuts to support the baby's growth.
                </li>
                <li>
                  Omega-3 fatty acids: Continue including sources like fatty
                  fish, chia seeds, and walnuts to support brain and eye
                  development.
                </li>
                <li>
                  Fiber: Include plenty of fruits, vegetables, and whole grains
                  to prevent constipation, a common issue during pregnancy.
                </li>
              </ul>
            </p>
          </div>
        </div>
      </section>
      <section
        class="section-two"
        style={{ paddingTop: "10vh", overflow: "hidden" }}
      >
        <div class="container-two">
          <div class="container-two-content content">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <h1 className="homehead">Third Trimester (Week 28 to Birth):</h1>
              <div class="container-two-content content-image">
                <img src="https://www.pristyncare.com/blog/wp-content/uploads/2019/11/shutterstock_1030891039-compressed-2-e1574189007141.jpg" />
              </div>
            </div>
            <p className="homepara">
              During the third trimester, the baby continues to grow rapidly,
              and the mother's body prepares for labor and delivery. Focus on:
            </p>
            <p className="homepara">
              <ul>
                <li>
                  High-energy foods: As the baby grows and takes up more space
                  in the abdomen, it may become challenging to eat large meals.
                  Opt for nutrient-dense, high-energy foods like nuts, avocados,
                  and whole grains.
                </li>
                <li>
                  Iron and vitamin C: Continue with iron-rich foods and pair
                  them with vitamin C sources (e.g., citrus fruits) to enhance
                  iron absorption.
                </li>
                <li>
                  Continue staying hydrated and consuming enough fiber to manage
                  constipation.
                </li>
                <li>
                  Consult with the healthcare provider about any specific
                  dietary concerns or supplements recommended during the third
                  trimester.
                </li>
              </ul>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PregnancyFoods;
