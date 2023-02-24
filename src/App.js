function App() {
  return (
    /*
    شرح الدرس هنا 
    https://www.youtube.com/watch?v=NoVUUapwmEI&list=PLeWmXrh00478cne-60B6MeU85l42cry2v&index=8

    عشان افتح الموقع 
    npm start
   عشان اقدر افتح الموقع او اعمل اي حاجة هفتح على  ctl + j فى حاجة مهمة لحظتها ان لزم اعمل 
   node not power shall

      html to jsx انا خات مشروخ بحطو هنا تمام وبعدها بروح على الموقع دوت 
      https://transform.tools/html-to-jsx

      دا عشان احول ملف الاتش الى ملف الرياكت

      غيرت حجات كتير اى الكلاس  
      and style = if i want to make style i have make like that style = {{ }} i make two كيرلى براكتث
    دا فى حالة لو انا بعملو فى الانبوت بتاع الاتش
    like that 
     style={{backgroundColor : "red"}} or 
      style={{background-color : "red"}}

     body انا باخد كل الاكواد الى جواه ال 
     والحجات الى فى الهيد زاى اللينك بناخدة نحطو فى ملف الاندكس الى هنا بتاع الرياكت 
     دول بس الى بيتحطو فى ملف الاندكس

    css i put them in folder of public وبعد كدة بجيب ملفات 

    انا بعد ما بحول الملف بتاع الاتش هتلقى 
   امسحهم 

    <header style={{backgroundColor : "red"}} className="show-when-mobile"> دى انا عاملها للموبايل

  -----------------------------------

  تعال الفديو التانى بتاع الروتر لعمل تعدد الصفحات
  https://www.youtube.com/watch?v=_UZB97WkIeg&list=PLeWmXrh00478cne-60B6MeU85l42cry2v&index=8

  npm install react-router-dom دى بعملها عشان لو عايز اعمل الصفح
     
 src call page هنيجى نعمل فولدر فى 
 and then i will make 4 files
 home.js and html.js , css.js . javascript.js
    
 بس انا هاخد الهدير والماين و الفوتر وهحطو فى الهوم
and  and html.js , css.js . javascript.js

 واخش على صفحة الهوم واعمل 
 not only home and other files too  and html.js , css.js . javascript.js
 rfc ودا اختصار لرياكت فانكشن

 هيدينى الكود دا 
 import React from 'react';

const Home = () => {
 return (
  <div>
   
  </div>
 );
}

export default Home;

وانا شارح الباقى فى 
home and index.js
    */ 
    <>
      
  <header className="hide-when-mobile">
    <h1>Mohamed Ali</h1>
    <ul className="flex">
      <li className="main-list">
        <a className="main-link" href="##">
          HTML
        </a>
        <ul className="sub-ul">
          <li>
            <a href="##">Full Course</a>
          </li>
          <li>
            <a href="##">Crash Course</a>
          </li>
          <li>
            <a href="##">learn in 1h</a>
          </li>
        </ul>
      </li>
      <li className="main-list">
        <a className="main-link" href="##">
          
          CSS
        </a>
        <ul className="sub-ul">
          <li>
            <a href="##">Full Course</a>
          </li>
          <li>
            <a href="##">CSS Examples</a>
          </li>
          <li className="mini-projects">
            <a href="##">mini projects&nbsp; + </a>
            <ul className="sub-sub-ul">
              <li>
                <a href="##">project 1</a>
              </li>
              <li>
                <a href="##">project 2</a>
              </li>
              <li>
                <a href="##">project 3</a>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li className="main-list">
        <a className="main-link" href="###">
          
          JavaScript
        </a>
        <ul className="sub-ul sub-of-js">
          <li>
            <a href="##">coming soon🔥</a>
          </li>
        </ul>
      </li>
    </ul>
  </header>

  <header style={{backgroundColor : "red"}} className="show-when-mobile">
    <h1>Mohamed Ali</h1>
    <label className="absolute" htmlFor="burger">
      <i className="fas fa-bars" />
    </label>
    <input id="burger" type="checkbox" />
    <div className="show-on-click">
      <div className="main-div">
        <label htmlFor="html">
          HTML <i className="fas fa-plus" />
        </label>
        <input id="html" type="checkbox" />
        <ul className="sub-div">
          <li>
            <a href="">Full Course</a>
          </li>
          <li>
            <a href="">Crash Course</a>
          </li>
          <li>
            <a href="">learn in 1h</a>
          </li>
        </ul>
      </div>
      <div className="main-div">
        <label htmlFor="css">
          CSS <i className="fas fa-plus" />
        </label>
        <input id="css" type="checkbox" />
        <ul className="sub-div">
          <li>
            <a href="">Full Course</a>
          </li>
          <li>
            <a href="">CSS Examples</a>
          </li>
          <li>
            <label className="mini-projects" htmlFor="mini">
              mini projects <i className="fas fa-plus" />
            </label>
            <input id="mini" type="checkbox" />
            <ul className="sub-sub-div">
              <li>
                <a href="">project 1</a>
              </li>
              <li>
                <a href="">project 2</a>
              </li>
              <li>
                <a href="">project 3</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="main-div">
        <label htmlFor="js">
          JavaScript <i className="fas fa-plus" />
        </label>
        <input id="js" type="checkbox" />
        <ul className="sub-div">
          <li>
            <a href="">coming soon🔥</a>
          </li>
        </ul>
      </div>
    </div>
  </header>
  <main>
  Home Page
  </main>
  <footer>
    Designed and developed by Mohamed Ali
    <span>🧡</span>
  </footer>


    </>
  );
}

export default App;
