
const currentUser = localStorage.getItem("currentUser");

if (currentUser) {
    window.location.href = "profile.html";
}



const loginForm = document.getElementById("loginForm");



loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    const errorElement = document.getElementById("loginError");
    errorElement.textContent = "";

    const users = getUserList();

    const foundUser = users.find(function (user) {
        const matchesUser =
            user.username === username ||
            user.email === username ||
            user.contactNumber === username ||
            user.employeeId === username;

        return matchesUser && user.password === password;
    });

    if (foundUser) {
        localStorage.setItem(
            "currentUser",
            JSON.stringify(foundUser)
        );

        window.location.href = "profile.html";
    } else {
        errorElement.textContent = "Invalid username or password";
    }
});
