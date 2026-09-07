const defaultUsers = [
    {
        firstName: "Admin",
        lastName: "User",
        dob: "1990-05-15",
        employeeId: "1001",
        email: "admin@beehyv.com",
        username: "admin",
        password: "admin",
        designation: "Administrator",
        contactNumber: "9876543210",
        address: "Hyderabad, Telangana",
        link: "https://beehyv.com",
        language: "English",
        profilePicture: "https://i.pravatar.cc/300?img=12"
    },

    {
        firstName: "Vineet Kumar",
        lastName: "Singh",
        dob: "1993-03-18",
        employeeId: "1002",
        email: "vineet@beehyv.com",
        username: "vineetks",
        password: "vineetks",
        designation: "Programmer",
        contactNumber: "9450788108",
        address: "Masjid Banda, Hyderabad",
        link: "http://home.iitk.ac.in/~vineetks",
        language: "English",
        profilePicture: "https://i.pravatar.cc/300?img=11"
    },

    {
        firstName: "Aarav",
        lastName: "Sharma",
        dob: "1994-07-21",
        employeeId: "1003",
        email: "aarav.sharma@beehyv.com",
        username: "aarav",
        password: "aarav123",
        designation: "Software Engineer",
        contactNumber: "9812345678",
        address: "Bengaluru, Karnataka",
        link: "https://github.com/aarav",
        language: "Hindi",
        profilePicture: "https://i.pravatar.cc/300?img=3"
    },

    {
        firstName: "Neha",
        lastName: "Verma",
        dob: "1992-11-08",
        employeeId: "1004",
        email: "neha.verma@beehyv.com",
        username: "neha",
        password: "neha123",
        designation: "UI Developer",
        contactNumber: "9898765432",
        address: "Pune, Maharashtra",
        link: "https://github.com/neha",
        language: "English",
        profilePicture: "https://i.pravatar.cc/300?img=5"
    }
];




if (!localStorage.getItem("userList")) {
    localStorage.setItem(
        "userList",
        JSON.stringify(defaultUsers)
    );
}

function getUserList() {
    return JSON.parse(localStorage.getItem("userList")) || [];
}

function saveUserList(users) {
    localStorage.setItem(
        "userList",
        JSON.stringify(users)
    );
}