const insert = document.querySelector('#insert')

window.addEventListener('keypress', function (event) {
    insert.innerHTML = `
        <div class="color">
            <table>
            <tr>
                <th>Key</th>
                <th>KeyCode</th>
                <th>Code</th>
            </tr>
            <tr>
                <td>${event.key === " " ? "Space" :event.key }</td>
                <td>${event.keyCode}</td>
                <td>${event.code}</td>
            </tr>   
            </table>    
        <div/>
    `
});