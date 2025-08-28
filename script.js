// card-heart // card vutton class
//  header-heart // header heart id



/*heart count increase functionality*/
const cardHearts = document.getElementsByClassName('card-heart');
for (const heart of cardHearts) {
    heart.addEventListener('click', function () {
        const a = document.getElementById('header-heart');
        const b = a.innerText;
        const c = parseInt(a.innerText);
        const d = c + 1;
        a.innerText = d;
        console.log(b);

    })

}



const callData = [];
/*Call button functionality*/

// id="coin-count"....id of total coins vutton
// id="emergency-call"....id of call button1
// id="emergency-text....emergency text(for alert)
// id="emergency-num"....emergency number(for alert)
// id =   call-history....call history vutton id 

document.getElementById('emergency-call').addEventListener('click', function (e) {


    const text = document.getElementById('emergency-text').innerText;
    const num = document.getElementById('emergency-num').innerText;
    alert("Calling" + " " + text + " " + num);


    let a = document.getElementById('coin-count');
    let b = a.innerText;
    let c = parseInt(a.innerText);
    if (c >= 20) {
        let d = (c - 20);
        a.innerText = d;
        console.log(b);
    }

    else{
        alert('You do not have enough balance');
    }

    const data = {
        name : "National Emergency Number" ,
        call : "999" ,
        date : new Date().toLocaleTimeString()
    }
    callData.push(data);

    const historyFCrad =document.getElementById('call-history');

    
       const div = document.createElement('div')
       div.innerHTML = `
        <div
                        class="w-[350px] h-[80px] bg-gray-100 rounded-[20px] mt-5 flex justify-between items-center p-5">

                        <!-- history vox content -->
                        <div>
                            <h1 class="font-bold text-[20px]">${data.name}</h1>
                            <p class="text-[20px]">${data.call}</p>

                        </div>

                        <!-- date content -->
                        <div>
                            <p class="text-[25px]">${data.date}</p>

                        </div>


                    </div>
       
       
       `
       historyFCrad.appendChild(div)

    
    















})


