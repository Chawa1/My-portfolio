function resize(){
   let url=document.getElementById('url').value; 
   let height=document.getElementById('height').value;
   let width=document.getElementById('width').value;

   let lastIndex=url.lastIndexOf('/'); //axer dana / waragret
   let lastPart=url.substring(lastIndex); // la am / awa wariagret linkaka ta axer
   
   let generateurl=`https://source.unsplash.com${lastPart}/${width}x${height}`; // url aka bam shewaya le bka

/* bo awai image aka wenai aw linka wargret ka peman dawa */
let  ourImage=document.getElementById('ourImage');
ourImage.src=`${generateurl}`;
ourImage.style.display='block';


/* bo awai aw paragraphai daman nawa bbeta url a tazaka dwai resize krdn */
let urlSpan=document.getElementById('new-url');
urlSpan.style.display='inline-block';
urlSpan.innerHTML= ` <i class="bi bi-clipboard"></i> ${generateurl}`;

   //alert(generateurl);
}

function handleCopy(){
    let innerText=document.getElementById('new-url').innerText;
    copyToClipboard(innerText);
}

function copyToClipboard(text){
    navigator.clipboard.writeText(text).then
    (function() {
        console.log('Async: Copying to clipboard was successful!');
      }, function(err) {
        console.error('Async: Could not copy text: ', err);
      });
}