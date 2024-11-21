// let user ={
//     customerName:document.getElementById("customerName"),
//     adharID:document.getElementById("customerName"),
//     fromDate:document.getElementById("customerName"),
//     toDate:document.getElementById("customerName"),
//     noOfAdul:document.getElementById("customerName"),
//     noOfChild:document.getElementById("customerName"),
//     id:document.getElementById("customerName"),
// }
//    let customerName=document.getElementById("customerName");
//    let adharID=document.getElementById("adhar");
//    let fromDate=document.getElementById("start");
//    let toDate=document.getElementById("end");
//    let noOfAdul=document.getElementById("adul");
//    let noOfChild=document.getElementById("child");
//    let id=document.getElementById("mobile");

//    console.log(customerName);

// Select the form element
const form = document.getElementById('myForm');

// Add an event listener for form submission
form.addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent default form submission

    // Create a new FormData object, passing the form as a parameter
    const formData = new FormData(form);
    // Convert FormData to a plain object
    const data = Object.fromEntries(formData.entries());


    try {
        // Use fetch to post the form data to the API endpoint
        const response = await fetch('https://673ebc4ba9bc276ec4b579c0.mockapi.io/com/Hotel_Ambassador', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            const result = await response.json();
                    // console.log('Form submitted successfully:', result);
                    // console.log("Result ",result);

                    // alert ('Thank You... For Booking Room In Our Hotel_Ambassador')
            
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Thank You For Booking Room In Our Hotel Ambassador Plaza Our Receptionist call You",
                showConfirmButton: false,
                timer: 5000
            });
        } else {
            console.error('Form submission failed:', response.statusText);
        }
    } catch (error) {
        console.error('Error submitting form:', error);
    }
});
