let fullName = 'david vaughan' //full name

let career = 'Full stack engineer'  //anticipated carrer path

let bio = 'I am an adventurous person who always likes to learn new things.' //description

console.log("Name: " + fullName.toUpperCase);
console.log("Carrer: " +career);
console.log("Description: " +bio);
console.log("");


//----------------------interests---------------------------------------------------------------------------

let interests = ['Outdoors', 'Movies', 'Sports', 'Reading', 'Cooking'];
console.log("My Interests:")
for(i=0; i<interests.length; i++){
    console.log("*" +interests[i])
};
console.log("");




//--------------------------------------Jobs---------------------------------------------------------------

let previous_jobs = [
   {
    Company: 'United Consulting',
    Position: 'Geotechnical Engineer',
    Description: 'Tested soil and concrete to make sure they met the requirements for building'
},
    {
    Company: 'Y2 Consulting',
    Position: 'Structural Engineer',
    Description: 'Designed structures to be mathematically sound'
},
    {
    Company: 'Mateosky Construction',
    Position: 'Carpenter',
    Description: 'Built houses'
    }
];
function displayPosition(job, position, description){
    console.log("*"+ position +" at "+job+" - "+description+".")
}
console.log('My Previous Experiences:')
for(i=0; i<previous_jobs.length; i++){
    displayPosition(previous_jobs[i].Company, previous_jobs[i].Position, previous_jobs[i].Description );
}
console.log("");


//-----------------------------------Skills--------------------------------------------------------------------------------------

let skills = [
    {skill: 'Structural Design', isCool: true},
    {skill: 'Concrete Design', isCool: false},
    {skill: 'Wood Design', isCool: true},
    {skill: 'Python', isCool: true}, 
    {skill: 'JavaScript', isCool: true},
    {skill: 'CSS', isCool: false},
    {skill: 'HTML', isCool: false}
];

function displaySkill(skill, isCool){
    if (isCool == true){
        console.log('*Bam: '+skill);
    }else{
        console.log(skill);
    }
}
console.log('My Skills:')
for(j=0; j<skills.length; j++){
    displaySkill(skills[j].skill, skills[j].isCool);
}