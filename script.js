const seats = document.getElementsByClassName("seat");
const totalSeat = getElementTextById("total-seat");
const selectedSeat = getElementTextById("selected-seat-number");
const total = getElementTextById("total");
const couponButton = document.getElementById("coupon-btn");
const nextButton = document.getElementById("next");

const listedSeat = [];
let totalTaka = parseFloat(total);
let grandTotal = parseFloat(getElementTextById("grand-total"));

const element1 = document.getElementById("selected-seat1");
const element2 = document.getElementById("selected-seat2");

const dynamicElement = document.getElementById("dynamic-ticket");

let ticketNumber = 0;
let totalSeatNumber = parseInt(totalSeat);
let selectedTotalSeats = parseInt(selectedSeat);

for (const seat of seats) {
  seat.addEventListener("click", function () {
    if(listedSeat.includes(seat)){
      alert(`you have already selected ${seat.innerText}`);
    }
    else if (ticketNumber < 4) {
      seat.classList.add("bg-primary");
      listedSeat.push(seat);
      ticketNumber++;
      totalSeatNumber--;
      selectedTotalSeats++;

      setTextElementValueById("total-seat", totalSeatNumber);
      setTextElementValueById("selected-seat-number", selectedTotalSeats);
    
      element1.remove();
      element2.remove();

      const p1 = document.createElement("p");
      const p2 = document.createElement("p");
      const p3 = document.createElement("p");
      const d = document.createElement("div");

      p1.innerText = seat.innerText;
      p2.innerText = "Economoy";
      p3.innerText = 550;

      d.appendChild(p1);
      d.appendChild(p2);
      d.appendChild(p3);
      dynamicElement.appendChild(d);

      p1.classList.add("inter", "font-medium");
      d.classList.add("flex", "justify-between", "py-4", "inter", "font-medium");

    // total amount
      totalTaka = selectedTotalSeats*550;
      setTextElementValueById("total", totalTaka);

    // grand total amount
    couponButton.addEventListener('click', function(){
        const givenCoupon = document.getElementById("coupon-text").value;
        if(givenCoupon === "NEW 15"){
            let discount = 0.15*totalTaka;
            let grandTaka = totalTaka - discount;

            setTextElementValueById("grand-total", grandTaka);
            const coupon = document.getElementById("coupon");
            coupon.classList.add("hidden");  
            
            // next
            console.log(nextButton);
            nextButton.addEventListener('click', function() {
                document.getElementById("vissible-section").classList.add("hidden");
                document.getElementById("hidden-section").classList.remove("hidden");

            })
        }
        else if(givenCoupon === "Couple20"){
            let discount = 0.2*totalTaka;
            let grandTaka = totalTaka - discount;

            setTextElementValueById("grand-total", grandTaka);
            const coupon = document.getElementById("coupon");
            coupon.classList.add("hidden");  
            
            // next
            console.log(nextButton);
            nextButton.addEventListener('click', function() {
                // console.log("shamim");
                document.getElementById("vissible-section").classList.add("hidden");
                document.getElementById("hidden-section").classList.remove("hidden");

            })
        }
        else{
            alert("Please enter correct coupon code.");
        }
    })

    } else {
      alert("You have selected your maximum limit.");
    }
  });
}

// Alhamdulillah, completed...




