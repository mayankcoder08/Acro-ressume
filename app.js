const data = document.querySelector(".form");
const result = document.querySelector(".result");

const printResume = document.querySelector(".print-btn")

printResume.onclick =()=>{
  window.print();
}


let inputShow = true;

function toggle() {
  if (inputShow) {
    data.style.display = "none";
    inputShow = false;
    result.innerHTML = `
    <div class="print">
      <div class="header">
        <h1>${data.name.value}</h1>
      </div>

      <div class="content-obj">
        <h2 class="obj-header">OBJECTIVE</h2>
        <hr/>
        <p class="obj-para">${data.objective.value}</p>
      </div>

      <div class="content">
        <div class="left-part">
          <div class="contact">
            <h2>CONTACT</h2>
            <p>${data.address.value}</p>
            <p>${data.phone.value}</p>
            <p>${data.email.value}</p>
          </div>

          <div class="education">
            <h2>EDUCATION</h2>
            <p>${data.education.value}</p>
          </div>

          <div class="skills">
            <h2>SKILLS</h2>
            <p>${data.skill.value}</p>
          </div>

          <div class="professional">
            <h2>PROFESSIONAL SKILLS</h2>
            <p>${data.pskill.value}</p>
          </div>

          <div class="hobbies">
            <h2>HOBBIES</h2>
            <p>${data.hobbies.value}</p>
          </div>

        </div>

        <div class="right-part">
          <div class="workexp">
            <h2>WORK EXPERIENCE</h2>
            <p>${data.workexp.value}</p>
          </div>

          <div class="derivatives">
            <h2>DERIVATIVES</h2>
            <p>${data.derivatives.value}</p>
          </div>

          <div class="achieve">
            <h2>ACHIEVEMENTS</h2>
            <p>${data.achieve.value}</p>
          </div>
          
        </div>
      </div>
    </div> 
    
    `
  } else {
    data.style.display = "block";
    inputShow = true;
    result.innerHTML=" "; 
  }
}


{/* <h2>ACHIEVEMENTS</h2>
    <p>${data.achive.value}</p>  */}


    // <div>
    // <h1>${data.name.value}</h1>
    // <h2>OBJECTIVE</h2>
    // <p>${data.objective.value}</p>
    // </div>
    // <div>
    // <h2>CONTACT</h2>
    // <p>${data.phone.value}</p>
    // <p>${data.address.value}</p>
    // <p>${data.email.value}</p>
    // </div>
    // <h2>EDUCATION</h2>
    // <p>${data.education.value}</p>
    // <h2>SKILLS</h2>
    // <p>${data.skill.value}</p>
    // <h2>PROFESSIONAL SKILLS</h2>
    // <p>${data.pskill.value}</p>
    // <h2>HOBBIES</h2>
    // <p>${data.hobbies.value}</p>
    // <h2>WORK EXPERIENCE</h2>
    // <p>${data.workexp.value}</p>
    // <h2>DERIVATIVES</h2>
    // <p>${data.derivatives.value}</p>
    // <h2>ACADEMIC PROJECTS</h2>
    // <p>${data.projects.value}</p>
    // <h2>ACHIEVEMENTS</h2>
    // <p>${data.achieve.value}</p>