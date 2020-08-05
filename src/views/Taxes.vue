<template>
    <div class="page">
        <h2>Taxes</h2>
        <h3>How to pay</h3>
        <p>Every month, you will receive a tax card. Attach money and send back.</p>
        <h3>Calculator</h3>
        <input type="text" id="salary" placeholder="Hourly Salary" />
        <button v-on:click="tax()">Calculate</button>
        <br />
        <br />
        <b id="taxes"></b>
    </div> 
</template>
<script>
export default {
    methods: {
        tax: function() {
            var sal = document.querySelector("#salary").value;
            if (sal < 12){
                document.querySelector("#taxes").innerHTML = "You owe $" + 0 + " per month.";
            } else if (sal < 18) {
                document.querySelector("#taxes").innerHTML = "You owe $" + (sal * 6) * 1 + " per month."
            } else if (sal < 30) {
                document.querySelector("#taxes").innerHTML = "You owe $" + (sal * 6) * 2 + " per month."
            } else {
                document.querySelector("#taxes").innerHTML = "You owe $" + (sal * 6) * 3 + " per month."
            }
        }
    }
}
</script>