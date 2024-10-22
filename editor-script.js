document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.editor-form');
    const preview = document.getElementById('preview-content');
    const addExperienceBtn = document.getElementById('add-experience');
    const addEducationBtn = document.getElementById('add-education');
    const downloadPdfBtn = document.getElementById('download-pdf');
    const downloadDocxBtn = document.getElementById('download-docx');
    const downloadTxtBtn = document.getElementById('download-txt');

    function updatePreview() {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const summary = document.getElementById('summary').value;
        const skills = document.getElementById('skills').value;

        let experienceHtml = '';
        document.querySelectorAll('.experience-entry').forEach(entry => {
            const title = entry.querySelector('input[placeholder="Job Title"]').value;
            const company = entry.querySelector('input[placeholder="Company"]').value;
            const date = entry.querySelector('input[placeholder="Date Range"]').value;
            const description = entry.querySelector('textarea').value;

            experienceHtml += `
                <div class="experience-item">
                    <h3>${title} at ${company}</h3>
                    <p>${date}</p>
                    <p>${description}</p>
                </div>
            `;
        });

        let educationHtml = '';
        document.querySelectorAll('.education-entry').forEach(entry => {
            const degree = entry.querySelector('input[placeholder="Degree"]').value;
            const institution = entry.querySelector('input[placeholder="Institution"]').value;
            const year = entry.querySelector('input[placeholder="Graduation Year"]').value;

            educationHtml += `
                <div class="education-item">
                    <h3>${degree}</h3>
                    <p>${institution}, ${year}</p>
                </div>
            `;
        });

        preview.innerHTML = `
            <h1>${name}</h1>
            <p>${email} | ${phone}</p>
            <h2>Professional Summary</h2>
            <p>${summary}</p>
            <h2>Work Experience</h2>
            ${experienceHtml}
            <h2>Education</h2>
            ${educationHtml}
            <h2>Skills</h2>
            <p>${skills}</p>
        `;
    }

    form.addEventListener('input', updatePreview);

    addExperienceBtn.addEventListener('click', function() {
        const newExperience = document.createElement('div');
        newExperience.className = 'experience-entry';
        newExperience.innerHTML = `
            <input type="text" placeholder="Job Title">
            <input type="text" placeholder="Company">
            <input type="text" placeholder="Date Range">
            <textarea placeholder="Job Description"></textarea>
        `;
        document.getElementById('work-experience').appendChild(newExperience);
    });

    addEducationBtn.addEventListener('click', function() {
        const newEducation = document.createElement('div');
        newEducation.className = 'education-entry';
        newEducation.innerHTML = `
            <input type="text" placeholder="Degree">
            <input type="text" placeholder="Institution">
            <input type="text" placeholder="Graduation Year">
        `;
        document.getElementById('education').appendChild(newEducation);
    });

    // Note: These download functions are placeholders and would need to be implemented with a proper PDF/DOCX generation library
    downloadPdfBtn.addEventListener('click', function() {
        alert('PDF download functionality would be implemented here');
    });

    downloadDocxBtn.addEventListener('click', function() {
        alert('DOCX download functionality would be implemented here');
    });

    downloadTxtBtn.addEventListener('click', function() {
        const text = preview.innerText;
        const blob = new Blob([text], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'resume.txt';
        a.click();
        URL.revokeObjectURL(url);
    });

    // Initial preview update
    updatePreview();
});

document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});