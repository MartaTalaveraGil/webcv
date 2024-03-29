// const sectionPresentation=document.getElementById("presentation")
// const sectionExperience=document.getElementById("experience")
// const sectionCourses=document.getElementById("courses")

// function showPresentation(){
//     sectionExperience.classList.remove("show-section")
//     sectionCourses.classList.remove("show-section")
//     sectionPresentation.classList.add("show-section")
// }

// function showExperience(){
//     sectionPresentation.classList.remove("show-section")
//     sectionCourses.classList.remove("show-section")
//     sectionExperience.classList.add("show-section")
// }

// function showCourses(){
//     sectionExperience.classList.remove("show-section")
//     sectionPresentation.classList.remove("show-section")
//     sectionCourses.classList.add("show-section")
// }

//refactorizamos todo este código porque se puede mejorar
function showSection(section){
    clearSections()
    document.getElementById(section).classList.add("show-section")

}

// function clearSections(){
//    const sections=document.querySelectorAll(".show-section")
//    for(const section of sections){
//     section.classList.remove("show-section")
//    }
// }

function removeSection(section){
    const sectionHtml = document.getElementById(section)
    sectionHtml.classList.remove("show-section")
}


function clearSections(){
    const sections=document.querySelectorAll(".show-section")
    sections.forEach(section => {
        section.classList.remove("show-section")
    });
}