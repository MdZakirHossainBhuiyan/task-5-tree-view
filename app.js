document.getElementById('list-level-one').addEventListener('click', () => {
    const listEvent1 = document.getElementById('list-level-two-f');
    const listEvent2 = document.getElementById('list-level-two-s');
    const listEvent3 = document.getElementById('list-level-two-t');

    if(listEvent1.style.display == "block" && listEvent3.style.display == "block" && listEvent2.style.display == "block"){
        listEvent1.style.display = "none";
        listEvent2.style.display = "none";
        listEvent3.style.display = "none";
    }
    else{
        listEvent1.style.display = "block";
        listEvent2.style.display = "block";
        listEvent3.style.display = "block";
    }
});

document.getElementById('list-level-two-f').addEventListener('click', () => {
    const listEvent = document.getElementById('list-level-three');
    if(listEvent.style.display == "block"){
        listEvent.style.display = "none"
    }
    else{
        listEvent.style.display = "block";
    }
});

document.getElementById('list-level-two-s').addEventListener('click', () => {
    const listEvent1 = document.getElementById('list-level-five-12');
    const listEvent2 = document.getElementById('list-level-five-13');
    
    if(listEvent1.style.display == "block" && listEvent2.style.display == "block"){
        listEvent1.style.display = "none";
        listEvent2.style.display = "none";
    }
    else{
        listEvent1.style.display = "block";
        listEvent2.style.display = "block";
    }
});

document.getElementById('list-level-two-t').addEventListener('click', () => {
    const listEvent1 = document.getElementById('list-level-five-14');
    const listEvent2 = document.getElementById('list-level-five-15');
    
    if(listEvent1.style.display == "block" && listEvent2.style.display == "block"){
        listEvent1.style.display = "none";
        listEvent2.style.display = "none";
    }
    else{
        listEvent1.style.display = "block";
        listEvent2.style.display = "block";
    }
});

document.getElementById('list-level-three').addEventListener('click', () => {
    const listEvent1 = document.getElementById('list-level-four-1');
    const listEvent2 = document.getElementById('list-level-four-2');
    const listEvent3 = document.getElementById('list-level-four-3');
    
    if(listEvent1.style.display == "block" && listEvent3.style.display == "block" && listEvent2.style.display == "block"){
        listEvent1.style.display = "none";
        listEvent2.style.display = "none";
        listEvent3.style.display = "none";
    }
    else{
        listEvent1.style.display = "block";
        listEvent2.style.display = "block";
        listEvent3.style.display = "block";
    }
});

document.getElementById('list-level-four-1').addEventListener('click', () => {
    const listEvent1 = document.getElementById('list-level-five-1');
    const listEvent2 = document.getElementById('list-level-five-2');
    const listEvent3 = document.getElementById('list-level-five-3');
    
    if(listEvent1.style.display == "block" && listEvent3.style.display == "block" && listEvent2.style.display == "block"){
        listEvent1.style.display = "none";
        listEvent2.style.display = "none";
        listEvent3.style.display = "none";
    }
    else{
        listEvent1.style.display = "block";
        listEvent2.style.display = "block";
        listEvent3.style.display = "block";
    }
});

document.getElementById('list-level-four-2').addEventListener('click', () => {
    const listEvent1 = document.getElementById('list-level-five-4');
    const listEvent2 = document.getElementById('list-level-five-5');
    const listEvent3 = document.getElementById('list-level-five-6');
    const listEvent4 = document.getElementById('list-level-five-7');
    
    if(listEvent1.style.display == "block" && listEvent3.style.display == "block" && listEvent2.style.display == "block" && listEvent4.style.display == "block"){
        listEvent1.style.display = "none";
        listEvent2.style.display = "none";
        listEvent3.style.display = "none";
        listEvent4.style.display = "none";
    }
    else{
        listEvent1.style.display = "block";
        listEvent2.style.display = "block";
        listEvent3.style.display = "block";
        listEvent4.style.display = "block";
    }
});

document.getElementById('list-level-four-3').addEventListener('click', () => {
    const listEvent1 = document.getElementById('list-level-five-8');
    const listEvent2 = document.getElementById('list-level-five-9');
    const listEvent3 = document.getElementById('list-level-five-10');
    const listEvent4 = document.getElementById('list-level-five-11');
    
    if(listEvent1.style.display == "block" && listEvent3.style.display == "block" && listEvent2.style.display == "block" && listEvent4.style.display == "block"){
        listEvent1.style.display = "none";
        listEvent2.style.display = "none";
        listEvent3.style.display = "none";
        listEvent4.style.display = "none";
    }
    else{
        listEvent1.style.display = "block";
        listEvent2.style.display = "block";
        listEvent3.style.display = "block";
        listEvent4.style.display = "block";
    }
});

document.getElementById('list-level-five-1').addEventListener('click', () => {
    const listEvent = document.getElementById('list-level-six-1');
    
    if(listEvent.style.display == "block"){
        listEvent.style.display = "none"
    }
    else{
        listEvent.style.display = "block";
    }
});

document.getElementById('list-level-five-2').addEventListener('click', () => {
    const listEvent = document.getElementById('list-level-six-2');
    
    if(listEvent.style.display == "block"){
        listEvent.style.display = "none"
    }
    else{
        listEvent.style.display = "block";
    }
});

document.getElementById('list-level-five-3').addEventListener('click', () => {
    const listEvent1 = document.getElementById('list-level-six-3');
    const listEvent2 = document.getElementById('list-level-six-4');
    
    if(listEvent1.style.display == "block" && listEvent2.style.display == "block"){
        listEvent1.style.display = "none";
        listEvent2.style.display = "none";
    }
    else{
        listEvent1.style.display = "block";
        listEvent2.style.display = "block";
    }
});

document.getElementById('list-level-five-4').addEventListener('click', () => {
    const listEvent = document.getElementById('list-level-six-5');
    
    if(listEvent.style.display == "block"){
        listEvent.style.display = "none"
    }
    else{
        listEvent.style.display = "block";
    }
});

document.getElementById('list-level-five-6').addEventListener('click', () => {
    const listEvent = document.getElementById('list-level-six-6');
    
    if(listEvent.style.display == "block"){
        listEvent.style.display = "none"
    }
    else{
        listEvent.style.display = "block";
    }
});

document.getElementById('list-level-five-10').addEventListener('click', () => {
    const listEvent = document.getElementById('list-level-six-7');
    if(listEvent.style.display == "block"){
        listEvent.style.display = "none"
    }
    else{
        listEvent.style.display = "block";
    }
});