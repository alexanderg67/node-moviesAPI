let searchString,searchGenre,searchRating
const tasksDOM = document.querySelector('.filmlist')
const showTasks = async () => {
 
  try {
	  
	  let data = {   };
	  if(searchRating!=='>') {
	  data.rating=searchRating;
	  }
	  if(searchString) {
	  data.name=searchString
	  }
	  if(searchGenre && searchGenre!=='Жанр') {
	  data.genre=searchGenre
	  }
      let url = new URL("http://localhost:5000/api/v1/films");
for (let k in data) { url.searchParams.append(k, data[k]); } 
console.log('request api url:',url.href)
 
  const result = await axios.get(url.href)
    const resultArr=result.data 
    
   
     const allTasks = resultArr
      .map((task) => {
        const {  nameRu,description,year,imdbRating} = task
		let star1=''
		let star2=''
		let star3=''
		let star4=''
		let star5=''
		if (imdbRating >=2 && imdbRating <4) {
		 star1='selected'	
		}
		if (imdbRating >=4 && imdbRating <6) {
		 star1='selected'	
		 star2='selected'
		}
		if (imdbRating >=6 && imdbRating <8) {
		 star1='selected'	
		 star2='selected'
		 star3='selected'
		}
		if (imdbRating >=8 && imdbRating <9) {
		 star1='selected'	
		 star2='selected'
		 star3='selected'
		 star4='selected'
		}
		if (imdbRating >=9  ) {
		 star1='selected'	
		 star2='selected'
		 star3='selected'
		 star4='selected'
		 star5='selected'
		}
		
        return `<div class="col-lg-4 col-md-6">						 
<div class="product-item bg-light">
	<div class="card">
		<div class="thumb-content">
			 
			<a href="#">
				<img class="card-img-top img-fluid" src="images/products/products-2.jpg" alt="Card image cap">
			</a>
		</div>
		<div class="card-body">
		    <h4 class="card-title"><a href="#">${nameRu}</a></h4>
		    <ul class="list-inline product-meta">
		    	
		    	<li class="list-inline-item">
		    		<a href="#"><i class="fa fa-calendar"></i>${year}</a>
		    	</li>
		    </ul>
		    <p class="card-text">${description}</p>
		    <div class="product-ratings">
		    	<ul class="list-inline">
		    		<li class="list-inline-item ${star1}"><i class="fa fa-star"></i></li>
		    		<li class="list-inline-item ${star2}"><i class="fa fa-star"></i></li>
		    		<li class="list-inline-item ${star3}"><i class="fa fa-star"></i></li>
		    		<li class="list-inline-item ${star4}"><i class="fa fa-star"></i></li>
		    		<li class="list-inline-item ${star5}"><i class="fa fa-star"></i></li>
		    	</ul>
		    </div>
		</div>
	</div>
</div></div>`
      })
      .join('')
    tasksDOM.innerHTML = allTasks
   
    
  } catch (error) {
    console.log(error)
  }
  }
  
window.addEventListener("load", function() {
  document.getElementById('my-form').addEventListener("submit", function(e) {
    e.preventDefault(); // before the code
    /* do what you want with the form */

    // Should be triggered on form submit
    //console.log('pressed btn');
	
	
	 searchString = document.getElementById('inputtext4').value;
     searchGenre= document.getElementById('inputgenre4').value;
	 searchRating='>'+document.getElementById('inputrating4').value;
     showTasks()
 
  })
});

