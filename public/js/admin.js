document.addEventListener("DOMContentLoaded",()=>{


const form = document.querySelector("#quoteForm");

const quotesContainer = document.querySelector("#quotes");


const quoteId = document.querySelector("#quoteId");

const quoteInput = document.querySelector("#quote");

const authorInput = document.querySelector("#author");

const categoryInput = document.querySelector("#category");


const submitBtn = document.querySelector("#submitBtn");

const cancelBtn = document.querySelector("#cancelBtn");



let editMode = false;




// Load Quotes

async function loadQuotes(){


const response = await fetch("/api/quotes");


const quotes = await response.json();



quotesContainer.innerHTML="";



quotes.forEach((quote)=>{


quotesContainer.innerHTML += `


<div class="quote-box">


<h3>${quote.author}</h3>


<p>
"${quote.quote}"
</p>


<span>
${quote.category}
</span>


<br><br>


<button onclick="editQuote('${quote._id}')">

Edit

</button>


<button onclick="deleteQuote('${quote._id}')">

Delete

</button>


</div>


`;



});


}






// Add / Update Quote

form.addEventListener("submit",async(e)=>{


e.preventDefault();



const data={

quote:quoteInput.value,

author:authorInput.value,

category:categoryInput.value

};




// UPDATE

if(editMode){


await fetch(`/api/quotes/${quoteId.value}`,{


method:"PUT",

headers:{

"Content-Type":"application/json"

},


body:JSON.stringify(data)


});


}


// CREATE

else{


await fetch("/api/quotes",{


method:"POST",

headers:{

"Content-Type":"application/json"

},


body:JSON.stringify(data)


});


}



resetForm();


loadQuotes();


});








// Edit Quote

window.editQuote = async function(id){


const response = await fetch(`/api/quotes/${id}`);


const quote = await response.json();



quoteId.value = quote._id;


quoteInput.value = quote.quote;


authorInput.value = quote.author;


categoryInput.value = quote.category;



editMode = true;



submitBtn.innerText = "Update Quote";


cancelBtn.style.display="inline-block";


window.scrollTo({

top:0,

behavior:"smooth"

});


}








// Delete Quote

window.deleteQuote = async function(id){


await fetch(`/api/quotes/${id}`,{


method:"DELETE"


});


loadQuotes();


}








// Cancel Edit

cancelBtn.addEventListener("click",()=>{


resetForm();


});







function resetForm(){


quoteId.value="";


quoteInput.value="";


authorInput.value="";


categoryInput.value="";


editMode=false;



submitBtn.innerText="Add Quote";


cancelBtn.style.display="none";


}




loadQuotes();



});