const picturesArray = [];
let imageSource = '';

function PuratanPicture(title, date, location, people) {
    this.title = title;
    this.date = date;
    this.location = location;
    this.people = people;
}

let pics = document.getElementById("pic");
let inputFile = document.getElementById("input-file");
const myDialog = document.getElementById("myDialog");
const closeDialogButton = document.getElementById("closeDialog");

inputFile.onchange = function () {
    imageSource = URL.createObjectURL(inputFile.files[0]);
    pics.src = imageSource;

    
}

// Function to open the dialog
function openDialog() {
    myDialog.showModal();
}


function closeDialog() {
    myDialog.close();
    window.location.href = "index.html";
}//

// Function to close the dialog
inputFile.addEventListener("change", openDialog);

//closeDialogButton.addEventListener("click", closeDialog);


const confirmButton = document.getElementById("closeDialog");

confirmButton.addEventListener("click", function () {
// Get the input values
    const description = document.getElementById("exampleFormControlDescription").value;
    const date = document.getElementById("exampleFormControlDate").value;
    const location = document.getElementById("exampleFormControlLocation").value;
    const people = document.getElementById("exampleFormControlPeople").value;

    // Create a new PuratanPicture object with correct parameter order
    const newPicture = new PuratanPicture(description, date, location, people);

    // Add the newPicture object to the picturesArray
    picturesArray.push(newPicture);
    
    const newPictureDiv = document.createElement("div");
    newPictureDiv.classList.add("col"); // Apply the appropriate class to style the div

    // Create an img element and set its source to the selected image
    const imgElement = document.createElement("img");
    imgElement.src = imageSource; // Set the source of the image

    // Append the img element to the div
    newPictureDiv.appendChild(imgElement);

    // Add more content or metadata to the div if needed

    // Append the new div to the row collumns
    const container = document.querySelector(".row-cols-3");
    container.appendChild(newPictureDiv);

    
    //Create List items of image details 
    const newPictureDetailList = document.createElement("ul");

    //create list items based off of image details 
    const descriptionItem = document.createElement("li");
    descriptionItem.textContent = description;
    newPictureDetailList.appendChild(descriptionItem);

    const dateItem = document.createElement("li");
    dateItem.textContent = date;
    newPictureDetailList.appendChild(dateItem);

    const locationItem = document.createElement("li");
    locationItem.textContent = location;
    newPictureDetailList.appendChild(locationItem);

    const peopleItem = document.createElement("li");
    peopleItem.textContent = people;
    newPictureDetailList.appendChild(peopleItem);

    //add ul to image element 
    newPictureDiv.appendChild(newPictureDetailList);



    // Reset the form
    document.getElementById("formId").reset();

    // Close the dialog
    myDialog.close();
    
    // Perform any other actions you need with the newPicture object.
});


