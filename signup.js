const currentUser = localStorage.getItem("currentUser");

if (currentUser) {
    window.location.replace("profile.html");
}

const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // 1. Read form values
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const dob = document.getElementById("dob").value;
    const employeeId = document.getElementById("employeeId").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const designation = document.getElementById("designation").value.trim();
    const contactNumber =
        document.getElementById("contactNumber").value.trim();

    const address = document.getElementById("address").value.trim();
    const link = document.getElementById("link").value.trim();
    const language = document.getElementById("language").value;

    const profilePictureInput =
        document.getElementById("profilePicture");

    const errorContainer =
        document.getElementById("signupErrors");

    const errors = [];


    // 2. All fields required
    if (
        !firstName ||
        !lastName ||
        !dob ||
        !employeeId ||
        !email ||
        !password ||
        !designation ||
        !contactNumber ||
        !address ||
        !link ||
        !language ||
        profilePictureInput.files.length === 0
    ) {
        errors.push("All fields are required.");
    }


    // 3. Employee ID must contain only numbers
    if (!/^\d+$/.test(employeeId)) {
        errors.push("Employee ID must contain numbers only.");
    }


    // 4. Employee ID must be unique
    const users = getUserList();

    const duplicateEmployee = users.find(function (user) {
        return user.employeeId === employeeId;
    });

    if (duplicateEmployee) {
        errors.push("Employee ID already exists.");
    }


    // 5. Contact number validation
    if (!/^\d{10}$/.test(contactNumber)) {
        errors.push(
            "Contact Number must contain exactly 10 digits."
        );
    }


    // 6. Age validation
    if (dob) {
        const age = calculateAge(dob);

        if (age < 20) {
            errors.push(
                "User must be at least 20 years old."
            );
        }
    }


    // 7. Language validation
    if (language !== "English" && language !== "Hindi") {
        errors.push(
            "Language must be English or Hindi."
        );
    }


    // 8. Display errors
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


    // 9. Read uploaded profile picture
    const file = profilePictureInput.files[0];

    const reader = new FileReader();

    reader.onload = function () {

        // 10. Create new user
        const newUser = {
            firstName: firstName,
            lastName: lastName,
            dob: dob,
            employeeId: employeeId,

            // Employee ID will act as username
            username: employeeId,

            email: email,
            password: password,
            designation: designation,
            contactNumber: contactNumber,
            address: address,
            link: link,
            language: language,

            profilePicture: reader.result
        };


        // 11. Add user to userList
        users.push(newUser);

        saveUserList(users);


        // 12. Log in the newly-created user
        localStorage.setItem(
            "currentUser",
            JSON.stringify(newUser)
        );


        // 13. Go to profile page
        window.location.href = "profile.html";
    };


    // Starts reading the image.
    // When finished, reader.onload above runs.
    reader.readAsDataURL(file);
});



function calculateAge(dateOfBirth) {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);

    let age =
        today.getFullYear() - birthDate.getFullYear();

    const monthDifference =
        today.getMonth() - birthDate.getMonth();

    if (
        monthDifference < 0 ||
        (
            monthDifference === 0 &&
            today.getDate() < birthDate.getDate()
        )
    ) {
        age--;
    }

    return age;
}