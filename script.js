function addEmailToInbox() {
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;
    const fileInput = document.getElementById("myfile");
    const attachment = fileInput.files[0] ? fileInput.files[0].name : "Žiadna";

    if (!subject || !message) {
        alert("Vyplňte všetky polia!");
        return;
    }

    const inboxList = document.getElementById("inbox-list");
    const newMessage = document.createElement("li");
    newMessage.innerHTML = `
        <span>Predmet: ${subject}</span>
        <button onclick="showModal('${subject}', 'ja@example.com', '${attachment}', '${message}')">Detail</button>
    `;
    inboxList.appendChild(newMessage);

    alert("Správa bola odoslaná!");
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";
    fileInput.value = ""; // Vyčistí pole pre prílohu
}



function showDetails(type, title, details) {
    alert(`${type}: ${title}\n${details}`);
}

function showModal(title, sender, attachments, message) {
    document.getElementById("modal-title").innerText = title;
    document.getElementById("modal-sender").innerText = sender;
    document.getElementById("modal-attachments").innerHTML = attachments; // Použitie innerHTML pre odkaz
    document.getElementById("modal-message").innerText = message;

    document.getElementById("modal").style.display = "block";
}


function closeModal() {
    document.getElementById("modal").style.display = "none";
}

function addEmailToInbox() {
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    if (!subject || !message) {
        alert("Vyplňte všetky polia!");
        return;
    }

    const inboxList = document.getElementById("inbox-list");
    const newMessage = document.createElement("li");
    newMessage.innerHTML = `
        <span>Predmet: ${subject}</span>
        <button onclick="showModal('${subject}', 'ja@example.com', 'Žiadna', '${message}')">Detail</button>
    `;
    inboxList.appendChild(newMessage);

    alert("Správa bola odoslaná!");
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";
}

function openForm(type) {
    const item = prompt(`Zadajte ${type === 'domain' ? 'doménu' : type === 'problem' ? 'popis problému' : type === 'invitation' ? 'email' : 'používateľa'}:`);
    const date = new Date().toLocaleDateString();
    const admin = 'admin1'; // Admin meno
    const reason = type === 'ban' ? prompt("Zadajte dôvod banu:") : null;
    const status = type === 'problem' ? 'Čaká na vyriešenie' : null;

    if (item) {
        const tableId = 
            type === 'domain' ? 'domain-list' : 
            type === 'problem' ? 'problem-list' :
            type === 'invitation' ? 'invitation-list' : 'ban-list';
        const tableBody = document.getElementById(tableId);

        const row = document.createElement("tr");
        if (type === 'domain') {
            row.innerHTML = `
                <td>${item}</td>
                <td>${date}</td>
                <td>${admin}</td>
                <td><button onclick="removeItem(this)">Odstrániť</button></td>
            `;
        } else if (type === 'problem') {
            row.innerHTML = `
                <td>${item}</td>
                <td>${date}</td>
                <td>${status}</td>
                <td>${admin}</td>
                <td><button onclick="removeItem(this)">Odstrániť</button></td>
            `;
        } else if (type === 'invitation') {
            row.innerHTML = `
                <td>${item}</td>
                <td>${date}</td>
                <td>${admin}</td>
                <td><button onclick="removeItem(this)">Odstrániť</button></td>
            `;
        } else if (type === 'ban') {
            row.innerHTML = `
                <td>${item}</td>
                <td>${date}</td>
                <td>${reason || 'Neuvedený dôvod'}</td>
                <td>${admin}</td>
                <td><button onclick="removeItem(this)">Odbanovať</button></td>
            `;
        }
        tableBody.appendChild(row);
    }
}

function removeItem(button) {
    const row = button.parentElement.parentElement;
    row.remove();
}


function removeItem(button) {
    const row = button.parentElement.parentElement;
    row.remove();
}



