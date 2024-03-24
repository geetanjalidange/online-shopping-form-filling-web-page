function submitForm() {
    // Get form data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var address = document.getElementById('address').value;
    var item = document.getElementById('item').value;
    var quantity = document.getElementById('quantity').value;
    var price = document.getElementById('price').value;
    var paymentMethod = document.querySelector('input[name="payment"]:checked').value;
    var transactionId = document.getElementById('transaction').value;

    // Calculate total amount
    var total = quantity * price;
    if (paymentMethod === 'cod') {
        total += 100; // Add delivery charge for cash on delivery
    }

    // Display total amount
    alert('Total amount: $' + total.toFixed(2));

    // You can proceed with further processing here, such as sending data to backend
}
