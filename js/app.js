console.log("hello welcome to site");
shownotes();
//if usser add a note to local storage

let addbtn = document.getElementById("addbtn");
addbtn.addEventListener("click", function (e) {
  let addtext = document.getElementById("addtext");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesobj = [];
  } else {
    notesobj = JSON.parse(notes);
  }
  notesobj.push(addtext.value);
  localStorage.setItem("notes", JSON.stringify(notesobj));
  addtext.value = "";
  //console.log(notesobj);
  shownotes();
});
//function to show elements by local storage
function shownotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesobj = [];
  } else {
    notesobj = JSON.parse(notes);
  }
  let html = "";
  notesobj.forEach(function (element, index) {
    html += `
          <div class="my-2 mx-2 card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">Note${index + 1}</h5>
              <p class="card-text"> ${element} </p>
              <button id="${index}"onclick ="deletenote(this.id)" class="btn btn-primary">Delete Note</button>
            </div>
          </div>`;
  });
  let notesElm = document.getElementById("notes");
  if (notesobj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
  }
}

//function ot delete a note
function deletenote(index) {
  //console.log("i am deleting", index);

  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesobj = [];
  } else {
    notesobj = JSON.parse(notes);
  }
  notesobj.splice(index,1);
  localStorage.setItem("notes", JSON.stringify(notesobj));
  shownotes();
}

