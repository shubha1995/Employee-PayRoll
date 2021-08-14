window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

const createInnerHtml = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>Sta" +
            "rt Date</th><th>Actions</th>";
    const innerHtml = `${headerHtml}
    <tr>
    <td>Shubha Sankar</td>
    <td>Male</td>
    <td>
        <div class="dept-label">Sales</div>
        <div class="dept-label">Engineer</div>
    </td>
    <td>
        500000</td>
    <td>03 Jan 2021</td>
    <td>
        <img
            id="1"
            onclick="remove(this)"
            alt="delete"
            src="./assets/assets/profile-images/Ellipse -2.png">
        <img
            id="1"
            onclick="update(this)"
            alt="edit"
            src="./assets/assets/images/">
    </td>
</tr>
    `;
    document
        .querySelector("#display")
        .innerHTML = innerHtml;
};