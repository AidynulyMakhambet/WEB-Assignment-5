//Task 1:
const userProfile = {
    name: "Makhambet",
    birthYear: 2008,
    isDeveloper: true,
    hobbies: ["Coding", "Reading"]
};

//Task 2:
function updateDisplay() {
    const currentYear = new Date().getFullYear();
    const age = currentYear - userProfile.birthYear;
    const ageInMonths = age * 12;
    const hobbiesCount = userProfile.hobbies.length;

    console.log("Profile:", userProfile);
    console.log("Age:", age, "| Months:", ageInMonths, "| Hobbies count:", hobbiesCount);

    document.getElementById("profileDisplay").innerText =
        `Name: ${userProfile.name} | Birth Year: ${userProfile.birthYear} | Developer: ${userProfile.isDeveloper} | Age: ${age} (${ageInMonths} months) | Hobbies count: ${hobbiesCount}`;
}

//Task 4:
document.getElementById("profileForm").addEventListener("submit", function (event) {
    event.preventDefault();
    userProfile.name = document.getElementById("usernameInput").value;
    userProfile.birthYear = Number(document.getElementById("birthYearInput").value);
    updateDisplay();
});

//Task 5:
const hobbiesList = document.getElementById("hobbiesList");

function renderList() {
    hobbiesList.innerHTML = "";
    for (let i = 0; i < userProfile.hobbies.length; i++) {
        const li = document.createElement("li");
        li.innerText = userProfile.hobbies[i];
        hobbiesList.appendChild(li);
    }
}

document.getElementById("addItemBtn").addEventListener("click", function () {
    const input = document.getElementById("itemInput");
    if (input.value.trim() !== "") {
        userProfile.hobbies.push(input.value.trim());
        const li = document.createElement("li");
        li.innerText = input.value.trim();
        hobbiesList.appendChild(li);
        input.value = "";
        updateDisplay();
    }
});

document.getElementById("removeItemBtn").addEventListener("click", function () {
    if (hobbiesList.lastElementChild) {
        hobbiesList.removeChild(hobbiesList.lastElementChild);
        userProfile.hobbies.pop();
        updateDisplay();
    }
});

renderList();
updateDisplay();

