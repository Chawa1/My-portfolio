function resize(){
    let url=document.getElementById('url').value;
    let height=document.getElementById('height').value;
    let width=document.getElementById('width').value;

    let lastIndex = url.lastIndexOf('/'); /* only returns index number of last occurence of the forward slash : 27 */
let lastPart= url.substring(lastIndex); //la / waridagret ta kotaii
let generateurl = `https://source.unsplash.com${lastPart}/${height}x${width}`
    //let generateurl = `https://source.unsplash.com${lastPart}/${height}x${width}`;

    alert(generateurl);
}