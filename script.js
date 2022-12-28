const tableRows = document.getElementsByTagName("tr");
for (let row of Array.from(tableRows)) {
    if(row.hasChildNodes()) {
        const firstCell = row.firstChild
        if (firstCell.nodeName == "TD") {
            const dateAndType = firstCell.querySelector('p');
            let dateString = dateAndType.querySelector('strong').textContent;
            const recurring = dateAndType.querySelector('small').textContent === ("Weekly lesson" || "School Lesson") ? true : false;
            const [day, date, month, time] = dateString.split(' ');
            const [hours, minutes] = time.split(':');
            console.log(day,date,month,hours,minutes)
            const td = document.createElement('td');
            const div = document.createElement('div');
            const button = document.createElement('a');
            div.className = "r_button__submenu--wrapper";
            //button.style.display = 'inline-block'
            button.className = "r_button r_button--s r_button--secondary js-dualbutton";
            button.style.width = '100%';
            button.style.height = '100%';
            button.style.verticalAlign = 'middle';
            button.style.verticalAlign = 'middle';
            button.textContent = 'Calendar';
            div.appendChild(button)
            td.appendChild(div)
            row.insertBefore(td, row.lastChild)
        }
    }
}
//Tue 20 Dec, 18:00
