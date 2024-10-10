document.addEventListener('DOMContentLoaded', function() {
    fetch('/static/cheat_data.json')
        .then(response => response.json())
        .then(data => {
            const tbody = document.getElementById('dataBody');
            data.forEach(item => {
                const row = document.createElement('tr');
                const submitTeamName = item.is_self_recommendation ? 
                    `<span style="color: red;">自荐</span>` : 
                    item.submitTeam.team.name;
                row.innerHTML = `
                    <td>${submitTeamName}</td>
                    <td>${item.ownedTeam.team.name}</td>
                    <td>${item.submission.challenge}</td>
                    <td>
                        <span class="year">${item.submission.formatted_time.year}</span>
                        <span class="date">${item.submission.formatted_time.date}</span>
                        <span class="time">${item.submission.formatted_time.hour}<span class="ke">${item.submission.formatted_time.ke}</span></span>
                    </td>
                `;
                tbody.appendChild(row);
            });
        });
});
