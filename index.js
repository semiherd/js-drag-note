let createButton= document.getElementById('createBtn');
let container= document.getElementById('container');

let cursor= {
    x: null, y: null
}
let note= {
    dom: null, x: null, y: null
}
createButton.onclick= () => {
    let newNote= document.createElement('div');
    newNote.classList.add('note');
    newNote.innerHTML=`
        <span class="close">x</span>
        <textarea
            placeholder=""write content..."
            rows="10"
            cols="20"
        ></textarea>
    `;  
    container.appendChild(newNote); 
}
document.addEventListener('click',(event) => {
    console.log(event.target);
    if(event.target.classList.contains('close')){
       event.target.parentNode.remove();
    }
})
document.addEventListener('mousedown',(event) => {
    if(event.target.classList.contains('note')){
        cursor={
            x: event.clientX,
            y: event.clientY
        }
        note={
            dom: event.target,
            x: event.target.getBoundingClientRect().left,
            y: event.target.getBoundingClientRect().top
            
        }
    }
})
document.addEventListener('mousemove',(event) => {
    if(note.dom == null) return;
    let currentCursor={
        x: event.clientX,
        y: event.clientY
    }
    let distance= {
        x: currentCursor.x - cursor.x,
        y: currentCursor.y - cursor.y,
    }
    note.dom.style.left= `${note.x+distance.x}px`;
    note.dom.style.top= `${note.y+distance.y}px`;
    note.dom.style.cursor= 'grab';
})
document.addEventListener("mouseup", () => {
    if(note.dom == null) return;
    note.dom.style.cursor= 'auto';
    note.dom=null;
})