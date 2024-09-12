import { jsPDF } from "jspdf";
document.getElementById('resumeForm')!.addEventListener('submit', function (event) {
    event.preventDefault();
    
    const username = (document.getElementById('username') as HTMLInputElement).value;
    
    if (username.trim() === '') {
        alert('Username cannot be empty');
        return;
    }
    
    const resumeUrl = `https://${username}.vercel.app/resume`;
    
    (document.getElementById('resumeLink') as HTMLAnchorElement).href = resumeUrl;
    (document.getElementById('resumeLink') as HTMLAnchorElement).textContent = resumeUrl;
    document.getElementById('resumeDetails')!.classList.remove('hidden');
    
    document.getElementById('downloadPDF')!.addEventListener('click', function () {
        generatePDF(username);
    });
});

function generatePDF(username: string) {
    const doc = new jsPDF();

    doc.text('Resume for ' + username, 10, 10);
    doc.text('Content of the resume goes here...', 10, 20);

    doc.save(`${username}_resume.pdf`);
}
