// 1. localStorage
const systemInfo = {
    platform: navigator.platform,
    userAgent: navigator.userAgent,
    language: navigator.language
};
localStorage.setItem('systemInfo', JSON.stringify(systemInfo));

const systemData = JSON.parse(localStorage.getItem('systemInfo'));

const formatted = `
    <h3>Інформація про систему</h3>
    <div class="system-info-center">
        <p><strong>Платформа:</strong> ${systemData.platform}</p>
        <p><strong>Браузер:</strong> ${systemData.userAgent}</p>
        <p><strong>Мова:</strong> ${systemData.language}</p>
    </div>
`;

document.getElementById('localDataFooter').innerHTML = formatted;


// 2. JSONPlaceholder коментарі (номер варіанту 1)
fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
    .then(response => response.json())
    .then(comments => {
        const container = document.getElementById('commentsContainer');
        comments.forEach(comment => {
            const div = document.createElement('div');
            div.innerHTML = `<strong>${comment.name}</strong><p>${comment.body}</p>`;
            container.appendChild(div);
        });
    });

// 3. Модальне вікно через 60 сек
setTimeout(() => {
    document.getElementById('feedbackModal').classList.add('show');
}, 60000);

document.getElementById('closeModal').onclick = () => {
    document.getElementById('feedbackModal').classList.remove('show');
};

// 4. Тема: авто + ручне перемикання
const themeToggle = document.getElementById('themeToggle');
const applyTheme = theme => {
    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(`${theme}-theme`);
};
const hour = new Date().getHours();
const autoTheme = hour >= 7 && hour < 21 ? 'light' : 'dark';
applyTheme(autoTheme);

themeToggle.onclick = () => {
    const isDark = document.body.classList.contains('dark-theme');
    applyTheme(isDark ? 'light' : 'dark');
};
