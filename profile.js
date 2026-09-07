const storedUser = localStorage.getItem("currentUser");


if (!storedUser) {
    window.location.href = "index.html";
}

else{



let currentUser = JSON.parse(storedUser);

function displayUser() {
    document.getElementById("profileName").textContent =
        `${currentUser.firstName} ${currentUser.lastName}`;

    document.getElementById("profileDesignation").textContent =
        currentUser.designation;

    document.getElementById("profileAddress").textContent =
        currentUser.address;

    document.getElementById("profilePhone").textContent =
        currentUser.contactNumber;

    document.getElementById("profileEmail").textContent =
        currentUser.email;

    document.getElementById("profileLanguage").textContent =
        currentUser.language;

    const profileLink = document.getElementById("profileLink");

    profileLink.textContent = currentUser.link;
    profileLink.href = currentUser.link;

    document.getElementById("profilePicture").src =
        currentUser.profilePicture;
}

displayUser();


console.log(currentUser);

const signoutButton = document.getElementById("signoutButton");

signoutButton.addEventListener("click", function (event) {
    event.preventDefault();

    localStorage.removeItem("currentUser");

    window.location.href = "index.html";
});


const editProfileButton = document.getElementById("editProfileButton");

editProfileButton.addEventListener("click", function () {

    document.getElementById("editName").value =
        `${currentUser.firstName} ${currentUser.lastName}`;

    document.getElementById("editDesignation").value =
        currentUser.designation;

    document.getElementById("editAddress").value =
        currentUser.address;

    document.getElementById("editPhone").value =
        currentUser.contactNumber;

    document.getElementById("editEmail").value =
        currentUser.email;

    document.getElementById("editLink").value =
        currentUser.link;

    document.getElementById("editLanguage").value =
        currentUser.language;

    document.getElementById("modalProfilePicture").src =
    currentUser.profilePicture;
});


const saveProfileButton =
    document.getElementById("saveProfileButton");

saveProfileButton.addEventListener("click", function () {

    const fullName =
        document.getElementById("editName").value.trim();

    const designation =
        document.getElementById("editDesignation").value.trim();

    const address =
        document.getElementById("editAddress").value.trim();

    const phone =
        document.getElementById("editPhone").value.trim();

    const email =
        document.getElementById("editEmail").value.trim();

    const link =
        document.getElementById("editLink").value.trim();

    const language =
        document.getElementById("editLanguage").value.trim();

    const errors = [];


    // Required fields
    if (
        !fullName ||
        !designation ||
        !address ||
        !phone ||
        !email ||
        !link ||
        !language
    ) {
        errors.push("All fields are required.");
    }


    // Phone
    if (!/^\d{10}$/.test(phone)) {
        errors.push(
            "Contact Number must contain exactly 10 digits."
        );
    }


    // Email
    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        errors.push("Enter a valid email address.");
    }


    // URL
    try {
        new URL(link);
    } catch {
        errors.push("Enter a valid link.");
    }


    // Language
    if (
        language !== "English" &&
        language !== "Hindi"
    ) {
        errors.push(
            "Language must be English or Hindi."
        );
    }


    const errorContainer =
        document.getElementById("editErrors");

    errorContainer.innerHTML = "";


    if (errors.length > 0) {

        errors.forEach(function (error) {
            const paragraph =
                document.createElement("p");

            paragraph.textContent = error;

            errorContainer.appendChild(paragraph);
        });

        return;
    }


    // Only reach here if everything is valid

    const nameParts = fullName.split(" ");

    currentUser.firstName = nameParts[0];
    currentUser.lastName =
        nameParts.slice(1).join(" ");

    currentUser.designation = designation;
    currentUser.address = address;
    currentUser.contactNumber = phone;
    currentUser.email = email;
    currentUser.link = link;
    currentUser.language = language;

    const pictureInput =
        document.getElementById("editPicture");

    const file = pictureInput.files[0];


    if (file) {

        const reader = new FileReader();

        reader.onload = function () {

            currentUser.profilePicture = reader.result;

            saveCurrentUser();
        };

        reader.readAsDataURL(file);

    } else {

        saveCurrentUser();
    }
});

function saveCurrentUser() {

    localStorage.setItem(
        "currentUser",
        JSON.stringify(currentUser)
    );

    displayUser();


    const modalElement =
        document.getElementById("editProfileModal");

    const modal =
        bootstrap.Modal.getInstance(modalElement);

    modal.hide();
}


}