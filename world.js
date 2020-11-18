window.onload = mystarter;
function mystarter(){
    let searchbtn = document.getElementById('lookup1');
    let searchbtn2 = document.getElementById('lookup2');
    let msg = document.getElementById('result');
    searchbtn.addEventListener('click', function(element) {
        element.preventDefault();
        var myform = document.getElementById("country").value; 
        //do
        console.log("This is 1");
        fetch("world.php"+"? country="+myform)
        .then(response => {
            if (response.ok) {
                return response.text()
            } else {
                return Promise.reject('something went wrong!')
            }
        })
        .then(data => {
            msg.innerHTML = data;
        })
        .catch(error => console.log('There was an error: ' + error));
           
    });

    searchbtn2.addEventListener('click', function(element) {
        element.preventDefault();
        var myform = document.getElementById("country").value; 
        var cities = document.getElementById("country").value; 
        //do
        console.log("This is 2");
        fetch("world.php"+"?country="+myform +"&context=cities")
        .then(response => {
            if (response.ok) {
                return response.text()
            } else {
                return Promise.reject('something went wrong!')
            }
        })
        .then(data => {
            msg.innerHTML = data;
        })
        .catch(error => console.log('There was an error: ' + error));
           
    });
}
