function passvalue(){

    const name = sessionStorage.getItem('name');

    document.getElementsById('name-content').innerHTML = name;
    
}