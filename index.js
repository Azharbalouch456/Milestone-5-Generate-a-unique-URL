"use strict";
import { jsPDF } from "jspdf";
Object.defineProperty(exports, "__esModule", { value: true });
const jspdf_1 = require("jspdf");
document.getElementById('resumeForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    if (username.trim() === '') {
        alert('Username cannot be empty');
        return;
    }
    const resumeUrl = `https://${username}.vercel.app/resume`;
    document.getElementById('resumeLink').href = resumeUrl;
    document.getElementById('resumeLink').textContent = resumeUrl;
    document.getElementById('resumeDetails').classList.remove('hidden');
    document.getElementById('downloadPDF').addEventListener('click', function () {
        generatePDF(username);
    });
});
function generatePDF(username) {
    const doc = new jspdf_1.jsPDF();
    doc.text('Resume for ' + username, 10, 10);
    doc.text('Content of the resume goes here...', 10, 20);
    doc.save(`${username}_resume.pdf`);
}
