const aCourse = {
    code: "CSE122b",
    name: "Javascript Language",
    sections: [
            {sectionNum: 1,
            roomNum: "STC 353",
            enrolled: 26,
            days: "TTh",
            instructor: "Bro T"},
            {sectionNum: 2,
            roomNum: "STC 347",
            enrolled: 28,
            days: "TTh",
            instructor: "Sis A"}
    ],
    enrollStudent: function(sectionNum){
        const sectionIndex = this.sections.findIndex(
            (section) => section.sectionNum == sectionNum
        );

        if (sectionNum >= 0) {
            this.sections[sectionIndex].enrolled++;
            renderedsction(this.sections);
        };
    },
    dropStudent: function(sectionNum){
        const sectionIndex = this.sections.findIndex(
            (section) => section.sectionNum == sectionNum
        );

        if (sectionNum >= 0) {
            this.sections[sectionIndex].enrolled--;
            renderedsction(this.sections);
        };
    },
};

function setCourseName (course) {
    const courseName = document.querySelector("#courseName");
    const courseCode = document.querySelector("#courseCode");

    courseName.textContent = aCourse.name;
    courseCode.textContent = aCourse.code;
};

function sectionTemplate (sections) {
    return `<tr>
                <td>${sections.sectionNum}</td>
                <td>${sections.roomNum}</td>
                <td>${sections.enrolled}</td>
                <td>${sections.days}</td>
                <td>${sections.instructor}</td>
            </tr>`;
};

function renderedsction (sections) {
    const html = sections.map(sectionTemplate);
    document.querySelector("#sections").innerHTML = html.join(" ");
};

document.querySelector('#enrollStudent').addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber");
    aCourse.enrollStudent(sectionNum);
});

document.querySelector('#dropStudent').addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber");
    aCourse.dropStudent(sectionNum);
});

setCourseName(aCourse);
renderedsction(aCourse.sections);