<template>
    <div class="data">
        <ul></ul>
    </div>
</template>

<script>
export default {
    mounted: function() {
        fetch('https://api.samuelville.tk/')
            .then(response => response.json())
            .then(data => {
                data.forEach((element) => {
                    document.querySelector('ul').innerHTML += `<li><a href="https://api.samuelville.tk/${element.id}">${element.name}</a></li>`;
                });
            });
    }
}
</script>