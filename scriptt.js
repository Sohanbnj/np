const select = document.querySelectorAll('.selectBtn');
const option = document.querySelectorAll('.option');
let index = 1;

select.forEach(a => {
    a.addEventListener('click', b => {
        const next = b.target.nextElementSibling;
        next.classList.toggle('toggle');
        next.style.zIndex = index++;
    })
})
option.forEach(a => {
    a.addEventListener('click', b => { 
        b.target.parentElement.classList.remove('toggle');
        const parent = b.target.closest('.select').children[0];

        parent.setAttribute('data-type', b.target.innerHTML);

        parent.innerHTML = b.target.innerHTML;

        // Update the selected option in the Ticket-Information section
        const selectType = parent.getAttribute('data-type');
        const selectText = b.target.innerHTML;

        // Update the corresponding <td> based on the selectType
        switch (selectType) {
            case 'firstOption':
                document.getElementById('selectedIssueValue').innerText = selectText;
                break;
            case 'secondOption':
                document.getElementById('selectedForValue').innerText = selectText;
                break;
            case 'thirdOption':
                document.getElementById('selectedIssueExplainValue').innerText = selectText;
                break;
            default:
                break;
        }
    })
});
$( function() {
    $( "#sourcedatepicker" ).datepicker();
    $( "#destinationdatepicker" ).datepicker();
} );

