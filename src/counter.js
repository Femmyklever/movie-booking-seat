const container = document.querySelector('.container')
const movieSelect = document.getElementById('movie')
const seats = document.querySelectorAll('.row .seat:not(.occupied)')
const count = document.getElementById('count')
const total = document.getElementById('total')

 let selectedMovie = +movieSelect.value

function updatedSelectedCount() {
  const seatSelected = document.querySelectorAll('.row .seat.selected')

  const seatIndex = [...seatSelected].map(seat => [...seats].indexOf(seat))

  localStorage.setItem('selectedSeat', JSON.stringify(seatIndex))

     let seatCount = seatSelected.length 
    count.innerText = seatCount
    total.innerText = seatCount * selectedMovie
    
}
  
function StoreselectedMovie(movieIndex, moviePrice) {
  localStorage.setItem('movieIndex', movieIndex)
  localStorage.setItem('moviePrice', moviePrice)
}
  
function movieSelected(e) {
  const movieSelected = +e.target.value
  
  selectedMovie = movieSelected

  StoreselectedMovie(movie.selectedIndex, +e.target.value);
  updatedSelectedCount()
  
 }


function selectSeat(e) {
  if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
    e.target.classList.toggle('selected')
    updatedSelectedCount()
  }
}

updatedSelectedCount()


container.addEventListener('click', selectSeat)
movieSelect.addEventListener('change', movieSelected)