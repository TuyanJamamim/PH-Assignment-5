

/*heart count increase functionality*/
const cardHearts = document.getElementsByClassName('card-heart');
for (const heart of cardHearts) {
    heart.addEventListener('click', function () {
        const a = document.getElementById('header-heart');
        const b = a.innerText;
        const c = parseInt(a.innerText);
        const d = c + 1;
        a.innerText = d;

    })

}





const callData = [];




/*Reusavle function for call vutton */

function callFeature(content, numver) {
    const text = document.getElementById(content).innerText;
    const num = document.getElementById(numver).innerText;
    // alert("Calling" + " " + text + " " + num);


    let a = document.getElementById('coin-count');
    let b = a.innerText;
    let c = parseInt(a.innerText);
    if (c >= 20) {
        let d = (c - 20);
        a.innerText = d;
        console.log(b);
        alert("Calling" + " " + text + " " + num);
    }

    else {
        alert('You do not have enough balance');


    }
    const data = {
        name: text,
        call: num,
        date: new Date().toLocaleTimeString()
    }
    callData.push(data);

    const historyFCrad = document.getElementById('history-container');

    const div = document.createElement('div')
    div.innerHTML = `
        <div
                        id="history-body" class="w-[350px] h-[80px] bg-gray-100 rounded-[20px] mt-5 flex justify-between items-center p-5">

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
}







/*clear history functionality*/

// id = clear-history...id of clear vutton
// id =   call-history....call history section 
// id="history-body"....call history body
//history-container ....call history container id(where history adds)
document.getElementById('clear-history').addEventListener('click', function (e) {
    e.preventDefault();
    const historyFCard = document.getElementById('history-container');
    historyFCard.innerText = "";

})



/*copy button functionality(card-1)*/

// id="copy-vtn"....copy vutton id
// id="copy-count"....copy count vutton id
// "emergency-num" ....emergency number(999)

document.getElementById('copy-vtn').addEventListener('click', function (e) {
    e.preventDefault();
    alert('999 Number copied');
    let a = document.getElementById('copy-count');
    let b = a.innerText;
    let c = parseInt(a.innerText);
    let d = c + 1;
    a.innerText = d;

    const num = document.getElementById('emergency-num').innerText;
    navigator.clipboard.writeText(num);
})

