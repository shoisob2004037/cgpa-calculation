function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function addCourse() {
    const courseContainer = document.getElementById('course-container');
    const newCourseSection = document.createElement('div');
    newCourseSection.className = 'course-section';
    newCourseSection.innerHTML = `
        <input type="text" class="c-name" placeholder="Enter Course Name...">
        <input type="number" class="credit" placeholder="Enter Course Credit...">
        <input type="number" class="cgpa" placeholder="Enter CGPA...">
    `;
    courseContainer.appendChild(newCourseSection);
}

function calculate() {
const credits = document.getElementsByClassName('credit');
const cgpas = document.getElementsByClassName('cgpa');
let totalCredits = 0;
let weightedSum = 0;

for (let i = 0; i < credits.length; i++) {
    const credit = parseFloat(credits[i].value);
    const cgpa = parseFloat(cgpas[i].value);

    if (!isNaN(credit) && !isNaN(cgpa)) {
        totalCredits += credit;
        weightedSum += credit * cgpa;
    }
}

const cgpa = weightedSum / totalCredits;
const resultDiv = document.getElementById('show');
resultDiv.innerHTML = `Your CGPA for First Semester is: ${cgpa.toFixed(2)}`;
resultDiv.style.fontSize = '30px';
resultDiv.style.color = 'green';


document.getElementById('print').style.display = 'block';
document.getElementById('newSem').style.display = 'block';
}

function printResult() {
const courseContainer = document.getElementById('course-container');
const courseSections = courseContainer.getElementsByClassName('course-section');
let printContent = `<h2>Course Details</h2><table><tr><th>Course Name</th><th>Credit</th><th>CGPA</th></tr>`;

for (let i = 0; i < courseSections.length; i++) {
    const courseName = courseSections[i].getElementsByClassName('c-name')[0].value;
    const credit = courseSections[i].getElementsByClassName('credit')[0].value;
    const cgpa = courseSections[i].getElementsByClassName('cgpa')[0].value;

    printContent += `<tr><td>${courseName}</td><td>${credit}</td><td>${cgpa}</td></tr>`;
}

printContent += `</table>`;
document.getElementById('print-section').innerHTML = printContent;
}

function newSemester() {
const secondSemDiv = document.getElementById('second-sem');
secondSemDiv.style.display = 'block';

const divsContainer = document.getElementById('divs');
const newCourseContainer = document.createElement('div');
newCourseContainer.className = 'body-part';

newCourseContainer.innerHTML = `
    <h3>Second Semester</h3>
    <div id="course-container2">
        <div class="course-section">
            <input type="text" class="c-name" placeholder="Enter Course Name...">
            <input type="number" class="credit" placeholder="Enter Course Credit...">
            <input type="number" class="cgpa" placeholder="Enter CGPA...">
        </div>
    </div>
    <button id="add-course-btn2" onclick="addCourse2()"><i class="fa-solid fa-plus"></i> Add Course</button>
    <button type="submit" id="submit-btn2" onclick="calculate2()"><box-icon type='solid' name='calculator'></box-icon> Calculate CGPA</button>
    <button type="button" id="print2" onclick="printResult2()">Print Result</button>
    <button type="button" id="newSem2" onclick="newSemester2()"><box-icon type='solid' name='comment-add'></box-icon> Add Semester</button>
    
`;

divsContainer.appendChild(newCourseContainer);
}

function addCourse2() {
const courseContainer = document.getElementById('course-container2');
const newCourseSection = document.createElement('div');
newCourseSection.className = 'course-section';
newCourseSection.innerHTML = `
    <input type="text" class="c-name" placeholder="Enter Course Name...">
    <input type="number" class="credit" placeholder="Enter Course Credit...">
    <input type="number" class="cgpa" placeholder="Enter CGPA...">
`;
courseContainer.appendChild(newCourseSection);
}

function calculate2() {
const credits = document.getElementById('course-container2').getElementsByClassName('credit');
const cgpas = document.getElementById('course-container2').getElementsByClassName('cgpa');
let totalCredits = 0;
let weightedSum = 0;

for (let i = 0; i < credits.length; i++) {
    const credit = parseFloat(credits[i].value);
    const cgpa = parseFloat(cgpas[i].value);

    if (!isNaN(credit) && !isNaN(cgpa)) {
        totalCredits += credit;
        weightedSum += credit * cgpa;
    }
}

const cgpa = weightedSum / totalCredits;
const resultDiv = document.getElementById('result2');
resultDiv.innerHTML = `Your CGPA for Second Semester is: ${cgpa.toFixed(2)}`;

document.getElementById('print2').style.display = 'block';
document.getElementById('newSem2').style.display = 'block';
}

function printResult2() {
const courseContainer = document.getElementById('course-container2');
const courseSections = courseContainer.getElementsByClassName('course-section');
let printContent = `<h2>Second Semester Course Details</h2><table><tr><th>Course Name</th><th>Credit</th><th>CGPA</th></tr>`;

for (let i = 0; i < courseSections.length; i++) {
    const courseName = courseSections[i].getElementsByClassName('c-name')[0].value;
    const credit = courseSections[i].getElementsByClassName('credit')[0].value;
    const cgpa = courseSections[i].getElementsByClassName('cgpa')[0].value;

    printContent += `<tr><td>${courseName}</td><td>${credit}</td><td>${cgpa}</td></tr>`;
}

printContent += `</table>`;
document.getElementById('print-section2').innerHTML = printContent;
}

function newSemester2() {
const thirdSemDiv = document.getElementById('third-sem');
thirdSemDiv.style.display = 'block';

const divsContainer = document.getElementById('divs2');
const newCourseContainer = document.createElement('div');
newCourseContainer.className = 'body-part';

newCourseContainer.innerHTML = `
    <h3>Third Semester</h3>
    <div id="course-container3">
        <div class="course-section">
            <input type="text" class="c-name" placeholder="Enter Course Name...">
            <input type="number" class="credit" placeholder="Enter Course Credit...">
            <input type="number" class="cgpa" placeholder="Enter CGPA...">
        </div>
    </div>
    <button id="add-course-btn3" onclick="addCourse3()"><i class="fa-solid fa-plus"></i> Add Course</button>
    <button type="submit" id="submit-btn3" onclick="calculate3()"><box-icon type='solid' name='calculator'></box-icon> Calculate CGPA</button>
    <button type="button" id="print3" onclick="printResult3()">Print Result</button>
    <button type="button" id="newSem3" onclick="newSemester3()"><box-icon type='solid' name='comment-add'></box-icon> Add Semester</button>
`;

divsContainer.appendChild(newCourseContainer);
}

function addCourse3() {
const courseContainer = document.getElementById('course-container3');
const newCourseSection = document.createElement('div');
newCourseSection.className = 'course-section';
newCourseSection.innerHTML = `
    <input type="text" class="c-name" placeholder="Enter Course Name...">
    <input type="number" class="credit" placeholder="Enter Course Credit...">
    <input type="number" class="cgpa" placeholder="Enter CGPA...">
`;
courseContainer.appendChild(newCourseSection);
}

function calculate3() {
const credits = document.getElementById('course-container3').getElementsByClassName('credit');
const cgpas = document.getElementById('course-container3').getElementsByClassName('cgpa');
let totalCredits = 0;
let weightedSum = 0;

for (let i = 0; i < credits.length; i++) {
    const credit = parseFloat(credits[i].value);
    const cgpa = parseFloat(cgpas[i].value);

    if (!isNaN(credit) && !isNaN(cgpa)) {
        totalCredits += credit;
        weightedSum += credit * cgpa;
    }
}

const cgpa = weightedSum / totalCredits;
const resultDiv = document.getElementById('result3');
resultDiv.innerHTML = `Your CGPA for Third Semester is: ${cgpa.toFixed(2)}`;

document.getElementById('print3').style.display = 'block';
document.getElementById('newSem3').style.display = 'block';
}

function printResult3() {
const courseContainer = document.getElementById('course-container3');
const courseSections = courseContainer.getElementsByClassName('course-section');
let printContent = `<h2>Third Semester Course Details</h2><table><tr><th>Course Name</th><th>Credit</th><th>CGPA</th></tr>`;

for (let i = 0; i < courseSections.length; i++) {
    const courseName = courseSections[i].getElementsByClassName('c-name')[0].value;
    const credit = courseSections[i].getElementsByClassName('credit')[0].value;
    const cgpa = courseSections[i].getElementsByClassName('cgpa')[0].value;

    printContent += `<tr><td>${courseName}</td><td>${credit}</td><td>${cgpa}</td></tr>`;
}

printContent += `</table>`;
document.getElementById('print-section3').innerHTML = printContent;
}

function newSemester3() {
const fourthSemDiv = document.getElementById('fourth-sem');
fourthSemDiv.style.display = 'block';

const divsContainer = document.getElementById('divs3');
const newCourseContainer = document.createElement('div');
newCourseContainer.className = 'body-part';

newCourseContainer.innerHTML = `
    <h3>Fourth Semester</h3>
    <div id="course-container4">
        <div class="course-section">
            <input type="text" class="c-name" placeholder="Enter Course Name...">
            <input type="number" class="credit" placeholder="Enter Course Credit...">
            <input type="number" class="cgpa" placeholder="Enter CGPA...">
        </div>
    </div>
    <button id="add-course-btn4" onclick="addCourse4()"><i class="fa-solid fa-plus"></i> Add Course</button>
    <button type="submit" id="submit-btn4" onclick="calculate4()"><box-icon type='solid' name='calculator'></box-icon> Calculate CGPA</button>
    <button type="button" id="print4" onclick="printResult4()">Print Result</button>
    <button type="button" id="newSem4" onclick="newSemester4()"><box-icon type='solid' name='comment-add'></box-icon> Add Semester</button>
`;

divsContainer.appendChild(newCourseContainer);
}

function addCourse4() {
const courseContainer = document.getElementById('course-container4');
const newCourseSection = document.createElement('div');
newCourseSection.className = 'course-section';
newCourseSection.innerHTML = `
    <input type="text" class="c-name" placeholder="Enter Course Name...">
    <input type="number" class="credit" placeholder="Enter Course Credit...">
    <input type="number" class="cgpa" placeholder="Enter CGPA...">
`;
courseContainer.appendChild(newCourseSection);
}

function calculate4() {
const credits = document.getElementById('course-container4').getElementsByClassName('credit');
const cgpas = document.getElementById('course-container4').getElementsByClassName('cgpa');
let totalCredits = 0;
let weightedSum = 0;

for (let i = 0; i < credits.length; i++) {
    const credit = parseFloat(credits[i].value);
    const cgpa = parseFloat(cgpas[i].value);

    if (!isNaN(credit) && !isNaN(cgpa)) {
        totalCredits += credit;
        weightedSum += credit * cgpa;
    }
}

const cgpa = weightedSum / totalCredits;
const resultDiv = document.getElementById('result4');
resultDiv.innerHTML = `Your CGPA for Fourth Semester is: ${cgpa.toFixed(2)}`;

document.getElementById('print4').style.display = 'block';
document.getElementById('newSem4').style.display = 'block';
}

function printResult4() {
const courseContainer = document.getElementById('course-container4');
const courseSections = courseContainer.getElementsByClassName('course-section');
let printContent = `<h2>Fourth Semester Course Details</h2><table><tr><th>Course Name</th><th>Credit</th><th>CGPA</th></tr>`;

for (let i = 0; i < courseSections.length; i++) {
    const courseName = courseSections[i].getElementsByClassName('c-name')[0].value;
    const credit = courseSections[i].getElementsByClassName('credit')[0].value;
    const cgpa = courseSections[i].getElementsByClassName('cgpa')[0].value;

    printContent += `<tr><td>${courseName}</td><td>${credit}</td><td>${cgpa}</td></tr>`;
}

printContent += `</table>`;
document.getElementById('print-section4').innerHTML = printContent;
}

function newSemester4() {
const fifthSemDiv = document.getElementById('fifth-sem');
fifthSemDiv.style.display = 'block';

const divsContainer = document.getElementById('divs4');
const newCourseContainer = document.createElement('div');
newCourseContainer.className = 'body-part';

newCourseContainer.innerHTML = `
    <h3>Fifth Semester</h3>
    <div id="course-container5">
        <div class="course-section">
            <input type="text" class="c-name" placeholder="Enter Course Name...">
            <input type="number" class="credit" placeholder="Enter Course Credit...">
            <input type="number" class="cgpa" placeholder="Enter CGPA...">
        </div>
    </div>
    <button id="add-course-btn5" onclick="addCourse5()"><i class="fa-solid fa-plus"></i> Add Course</button>
    <button type="submit" id="submit-btn5" onclick="calculate5()"><box-icon type='solid' name='calculator'></box-icon> Calculate CGPA</button>
    <button type="button" id="print5" onclick="printResult5()">Print Result</button>
    <button type="button" id="newSem5" onclick="newSemester5()"><box-icon type='solid' name='comment-add'></box-icon> Add Semester</button>
`;

divsContainer.appendChild(newCourseContainer);
}

function addCourse5() {
const courseContainer = document.getElementById('course-container5');
const newCourseSection = document.createElement('div');
newCourseSection.className = 'course-section';
newCourseSection.innerHTML = `
    <input type="text" class="c-name" placeholder="Enter Course Name...">
    <input type="number" class="credit" placeholder="Enter Course Credit...">
    <input type="number" class="cgpa" placeholder="Enter CGPA...">
`;
courseContainer.appendChild(newCourseSection);
}

function calculate5() {
const credits = document.getElementById('course-container5').getElementsByClassName('credit');
const cgpas = document.getElementById('course-container5').getElementsByClassName('cgpa');
let totalCredits = 0;
let weightedSum = 0;

for (let i = 0; i < credits.length; i++) {
    const credit = parseFloat(credits[i].value);
    const cgpa = parseFloat(cgpas[i].value);

    if (!isNaN(credit) && !isNaN(cgpa)) {
        totalCredits += credit;
        weightedSum += credit * cgpa;
    }
}

const cgpa = weightedSum / totalCredits;
const resultDiv = document.getElementById('result5');
resultDiv.innerHTML = `Your CGPA for Fifth Semester is: ${cgpa.toFixed(2)}`;

document.getElementById('print5').style.display = 'block';
document.getElementById('newSem5').style.display = 'block';
}

function printResult5() {
const courseContainer = document.getElementById('course-container5');
const courseSections = courseContainer.getElementsByClassName('course-section');
let printContent = `<h2>Fifth Semester Course Details</h2><table><tr><th>Course Name</th><th>Credit</th><th>CGPA</th></tr>`;

for (let i = 0; i < courseSections.length; i++) {
    const courseName = courseSections[i].getElementsByClassName('c-name')[0].value;
    const credit = courseSections[i].getElementsByClassName('credit')[0].value;
    const cgpa = courseSections[i].getElementsByClassName('cgpa')[0].value;

    printContent += `<tr><td>${courseName}</td><td>${credit}</td><td>${cgpa}</td></tr>`;
}

printContent += `</table>`;
document.getElementById('print-section5').innerHTML = printContent;
}

function newSemester5() {
const sixthSemDiv = document.getElementById('sixth-sem');
sixthSemDiv.style.display = 'block';

const divsContainer = document.getElementById('divs5');
const newCourseContainer = document.createElement('div');
newCourseContainer.className = 'body-part';

newCourseContainer.innerHTML = `
    <h3>Sixth Semester</h3>
    <div id="course-container6">
        <div class="course-section">
            <input type="text" class="c-name" placeholder="Enter Course Name...">
            <input type="number" class="credit" placeholder="Enter Course Credit...">
            <input type="number" class="cgpa" placeholder="Enter CGPA...">
        </div>
    </div>
    <button id="add-course-btn6" onclick="addCourse6()"><i class="fa-solid fa-plus"></i> Add Course</button>
    <button type="submit" id="submit-btn6" onclick="calculate6()"><box-icon type='solid' name='calculator'></box-icon> Calculate CGPA</button>
    <button type="button" id="print6" onclick="printResult6()">Print Result</button>
    <button type="button" id="newSem6" onclick="newSemester6()"><box-icon type='solid' name='comment-add'></box-icon> Add Semester</button>
`;

divsContainer.appendChild(newCourseContainer);
}

function addCourse6() {
const courseContainer = document.getElementById('course-container6');
const newCourseSection = document.createElement('div');
newCourseSection.className = 'course-section';
newCourseSection.innerHTML = `
    <input type="text" class="c-name" placeholder="Enter Course Name...">
    <input type="number" class="credit" placeholder="Enter Course Credit...">
    <input type="number" class="cgpa" placeholder="Enter CGPA...">
`;
courseContainer.appendChild(newCourseSection);
}

function calculate6() {
const credits = document.getElementById('course-container6').getElementsByClassName('credit');
const cgpas = document.getElementById('course-container6').getElementsByClassName('cgpa');
let totalCredits = 0;
let weightedSum = 0;

for (let i = 0; i < credits.length; i++) {
    const credit = parseFloat(credits[i].value);
    const cgpa = parseFloat(cgpas[i].value);

    if (!isNaN(credit) && !isNaN(cgpa)) {
        totalCredits += credit;
        weightedSum += credit * cgpa;
    }
}

const cgpa = weightedSum / totalCredits;
const resultDiv = document.getElementById('result6');
resultDiv.innerHTML = `Your CGPA for Sixth Semester is: ${cgpa.toFixed(2)}`;

document.getElementById('print6').style.display = 'block';
document.getElementById('newSem6').style.display = 'block';
}

function printResult6() {
const courseContainer = document.getElementById('course-container6');
const courseSections = courseContainer.getElementsByClassName('course-section');
let printContent = `<h2>Sixth Semester Course Details</h2><table><tr><th>Course Name</th><th>Credit</th><th>CGPA</th></tr>`;

for (let i = 0; i < courseSections.length; i++) {
    const courseName = courseSections[i].getElementsByClassName('c-name')[0].value;
    const credit = courseSections[i].getElementsByClassName('credit')[0].value;
    const cgpa = courseSections[i].getElementsByClassName('cgpa')[0].value;

    printContent += `<tr><td>${courseName}</td><td>${credit}</td><td>${cgpa}</td></tr>`;
}

printContent += `</table>`;
document.getElementById('print-section6').innerHTML = printContent;
}

function newSemester6() {
const seventhSemDiv = document.getElementById('seventh-sem');
seventhSemDiv.style.display = 'block';

const divsContainer = document.getElementById('divs6');
const newCourseContainer = document.createElement('div');
newCourseContainer.className = 'body-part';

newCourseContainer.innerHTML = `
    <h3>Seventh Semester</h3>
    <div id="course-container7">
        <div class="course-section">
            <input type="text" class="c-name" placeholder="Enter Course Name...">
            <input type="number" class="credit" placeholder="Enter Course Credit...">
            <input type="number" class="cgpa" placeholder="Enter CGPA...">
        </div>
    </div>
    <button id="add-course-btn7" onclick="addCourse7()"><i class="fa-solid fa-plus"></i> Add Course</button>
    <button type="submit" id="submit-btn7" onclick="calculate7()"><box-icon type='solid' name='calculator'></box-icon> Calculate CGPA</button>
    <button type="button" id="print7" onclick="printResult7()">Print Result</button>
    <button type="button" id="newSem7" onclick="newSemester7()"><box-icon type='solid' name='comment-add'></box-icon> Add Semester</button>
`;

divsContainer.appendChild(newCourseContainer);
}

function addCourse7() {
const courseContainer = document.getElementById('course-container7');
const newCourseSection = document.createElement('div');
newCourseSection.className = 'course-section';
newCourseSection.innerHTML = `
    <input type="text" class="c-name" placeholder="Enter Course Name...">
    <input type="number" class="credit" placeholder="Enter Course Credit...">
    <input type="number" class="cgpa" placeholder="Enter CGPA...">
`;
courseContainer.appendChild(newCourseSection);
}

function calculate7() {
const credits = document.getElementById('course-container7').getElementsByClassName('credit');
const cgpas = document.getElementById('course-container7').getElementsByClassName('cgpa');
let totalCredits = 0;
let weightedSum = 0;

for (let i = 0; i < credits.length; i++) {
    const credit = parseFloat(credits[i].value);
    const cgpa = parseFloat(cgpas[i].value);

    if (!isNaN(credit) && !isNaN(cgpa)) {
        totalCredits += credit;
        weightedSum += credit * cgpa;
    }
}

const cgpa = weightedSum / totalCredits;
const resultDiv = document.getElementById('result7');
resultDiv.innerHTML = `Your CGPA for Seventh Semester is: ${cgpa.toFixed(2)}`;

document.getElementById('print7').style.display = 'block';
document.getElementById('newSem7').style.display = 'block';
}
function printResult7() {
const courseContainer = document.getElementById('course-container7');
const courseSections = courseContainer.getElementsByClassName('course-section');
let printContent = `<h2>Seventh Semester Course Details</h2><table><tr><th>Course Name</th><th>Credit</th><th>CGPA</th></tr>`;

for (let i = 0; i < courseSections.length; i++) {
    const courseName = courseSections[i].getElementsByClassName('c-name')[0].value;
    const credit = courseSections[i].getElementsByClassName('credit')[0].value;
    const cgpa = courseSections[i].getElementsByClassName('cgpa')[0].value;

    printContent += `<tr><td>${courseName}</td><td>${credit}</td><td>${cgpa}</td></tr>`;
}

printContent += `</table>`;
document.getElementById('print-section7').innerHTML = printContent;
}

function newSemester7() {
const eighthSemDiv = document.getElementById('eighth-sem');
eighthSemDiv.style.display = 'block';

const divsContainer = document.getElementById('divs7');
const newCourseContainer = document.createElement('div');
newCourseContainer.className = 'body-part';

newCourseContainer.innerHTML = `
    <h3>Eighth Semester</h3>
    <div id="course-container8">
        <div class="course-section">
            <input type="text" class="c-name" placeholder="Enter Course Name...">
            <input type="number" class="credit" placeholder="Enter Course Credit...">
            <input type="number" class="cgpa" placeholder="Enter CGPA...">
        </div>
    </div>
    <button id="add-course-btn8" onclick="addCourse8()"><i class="fa-solid fa-plus"></i> Add Course</button>
    <button type="submit" id="submit-btn8" onclick="calculate8()"><box-icon type='solid' name='calculator'></box-icon> Calculate CGPA</button>
    <button type="button" id="print8" onclick="printResult8()">Print Result</button>
    <button type="button" id="newSem8" onclick="newSemester8()"><box-icon type='solid' name='comment-add'></box-icon> Add Semester</button>
`;

divsContainer.appendChild(newCourseContainer);
}

function addCourse8() {
const courseContainer = document.getElementById('course-container8');
const newCourseSection = document.createElement('div');
newCourseSection.className = 'course-section';
newCourseSection.innerHTML = `
    <input type="text" class="c-name" placeholder="Enter Course Name...">
    <input type="number" class="credit" placeholder="Enter Course Credit...">
    <input type="number" class="cgpa" placeholder="Enter CGPA...">
`;
courseContainer.appendChild(newCourseSection);
}

function calculate8() {
const credits = document.getElementById('course-container8').getElementsByClassName('credit');
const cgpas = document.getElementById('course-container8').getElementsByClassName('cgpa');
let totalCredits = 0;
let weightedSum = 0;

for (let i = 0; i < credits.length; i++) {
    const credit = parseFloat(credits[i].value);
    const cgpa = parseFloat(cgpas[i].value);

    if (!isNaN(credit) && !isNaN(cgpa)) {
        totalCredits += credit;
        weightedSum += credit * cgpa;
    }
}

const cgpa = weightedSum / totalCredits;
const resultDiv = document.getElementById('result8');
resultDiv.innerHTML = `Your CGPA for Eighth Semester is: ${cgpa.toFixed(2)}`;

document.getElementById('print8').style.display = 'block';
document.getElementById('newSem8').style.display = 'block';
}

function printResult8() {
const courseContainer = document.getElementById('course-container8');
const courseSections = courseContainer.getElementsByClassName('course-section');
let printContent = `<h2>Eighth Semester Course Details</h2><table><tr><th>Course Name</th><th>Credit</th><th>CGPA</th></tr>`;

for (let i = 0; i < courseSections.length; i++) {
    const courseName = courseSections[i].getElementsByClassName('c-name')[0].value;
    const credit = courseSections[i].getElementsByClassName('credit')[0].value;
    const cgpa = courseSections[i].getElementsByClassName('cgpa')[0].value;

    printContent += `<tr><td>${courseName}</td><td>${credit}</td><td>${cgpa}</td></tr>`;
}

printContent += `</table>`;
document.getElementById('print-section8').innerHTML = printContent;
}

function newSemester8() {
alert('This Calculation is only for 8 Semester.');
}
