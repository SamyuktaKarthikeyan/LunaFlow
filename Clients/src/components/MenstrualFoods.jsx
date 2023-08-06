import React from "react";
import "./blog.css";

function MenstrualFoods() {
  return (
    <div>
      <section className="section-two">
        <div className="container-two">
          <div className="container-two-content content">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <h1 className="homehead">Menstrual Phase:</h1>
              <div className="container-two-content content-image">
                <img src="https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/07/18/Pictures/_54f1141e-8a7c-11e8-b2f4-2ee9fa0c7dec.jpg" />
              </div>
            </div>

            <p className="homepara">
              <ul>
                <li>
                  Iron-rich foods: Include foods like leafy greens (spinach,
                  kale), red meat, beans, and lentils to replenish iron lost
                  during menstruation.
                </li>
                <li>
                  Magnesium-rich foods: Magnesium can help with cramp relief.
                  Eat foods like nuts, seeds, whole grains, and dark chocolate.
                </li>
                <li>
                  Hydration: Drink plenty of water to stay hydrated, as water
                  can help ease bloating.
                </li>
                <li>
                  Omega-3 fatty acids: Fatty fish, chia seeds, and flaxseeds can
                  help reduce inflammation and improve mood.
                </li>
              </ul>
            </p>
          </div>
        </div>
      </section>
      <section
        className="section-two"
        style={{ backgroundColor: "#551369", color: "antiquewhite" }}
      >
        <div className="container-two">
          <div className="container-two-content content">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div className="container-two-content content-image">
                <img src="https://www.hindustantimes.com/ht-img/img/2023/06/28/1600x900/Screenshot_2023-06-28_182041_1687956640706_1687956653826.png" />
              </div>
              <h1 className="homehead" style={{ textAlign: "right" }}>
                Ovulation Phase:
              </h1>
            </div>

            <p className="homepara">
              <ul>
                <li>
                  Whole foods: Eat a variety of fruits, vegetables, whole
                  grains, and lean proteins to provide essential nutrients and
                  support hormone balance.
                </li>
                <li>
                  Healthy fats: Consume sources of healthy fats like avocados,
                  nuts, seeds, and fatty fish, which are beneficial for hormone
                  production.
                </li>
                <li>
                  Calcium-rich foods: Dairy products, leafy greens, and
                  fortified plant-based milk can support bone health and
                  alleviate premenstrual symptoms.
                </li>
                <li>
                  Limit processed foods and sugar: Reducing processed foods and
                  sugar intake can help stabilize energy levels and mood swings.
                </li>
              </ul>
            </p>
          </div>
        </div>
      </section>
      <section
        className="section-two"
        style={{ paddingTop: "10vh", overflow: "hidden" }}
      >
        <div className="container-two">
          <div className="container-two-content content">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <h1 className="homehead">Regular phase:</h1>
              <div className="container-two-content content-image">
                <img src="https://cdn.mos.cms.futurecdn.net/HtSsbhLrK5KEiNeFoNUco8-1200-80.jpg" />
              </div>
            </div>
            <p className="homepara">
              <ul>
                <li>
                  Healthy snacks: Opt for nutritious snacks like fruits, nuts,
                  yogurt, or smoothies to curb cravings.
                </li>
                <li>
                  Foods rich in vitamin B6: Bananas, salmon, chicken, and
                  spinach can be helpful in managing mood swings and
                  irritability.
                </li>
                <li>
                  Reduce caffeine and salt: Cutting back on caffeine and sodium
                  can help alleviate breast tenderness and bloating.
                </li>
                <li>
                  Complex carbohydrates: Incorporate whole grains and starchy
                  vegetables to help stabilize blood sugar levels and reduce
                  mood swings.
                </li>
              </ul>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MenstrualFoods;
