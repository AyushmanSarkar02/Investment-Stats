const ctx = document.getElementById('myChart').getContext('2d');

  new Chart(ctx, {
    type: 'bar',
    data: {

      labels: [20, 25, 30, 35, 40,60,65,75,85,105,120,130,140],
      datasets: [{
        label:"Contributions Overtime",
        data: [25,35,50,70,90,110,130,140,150,160,170,180,200],
        backgroundColor: createGradient(ctx, [ 'rgb(126, 124, 245)', ' rgb(47, 44, 244)','rgb(9, 5, 188)']),
        borderWidth: 0,
        barThickness:15,
      },
    //   {
    //     data: [20,40,60,80,100,120,140],
    //     borderWidth: 1,
    //     barThickness:15,
    //     backgroundColor: createGradient(ctx, [ 'rgb(126, 124, 245)', ' rgb(47, 44, 244)','rgb(9, 5, 188)']),

   

       
    //   }],
      ]
    },
   
    options: {
        indexAxis: 'x',
        responsive:false,
        scales: {
            x: {
                // stacked: true,
                // type: 'category',
                display:false,

               grid: {
                  display: false
               }
            },
            y: {
                display:false,
               grid: {
                  display: false
               }
            }
       },   
        y: {
          beginAtZero: true
        },
        plugins: {
            legend: {
                display: false
            }
        },
       
       

    
    }

  });  
  function createGradient(ctx, colors) {
    var gradient = ctx.createLinearGradient(0, 0, 0, 200);
    var step = 1 / (colors.length - 1);

    for (var i = 0; i < colors.length; i++) {
        gradient.addColorStop(i * step, colors[i]);
    }

    return gradient;
}
var rangeslider = document.getElementById("sliderRange");
var output = document.getElementById("demo");
output.innerHTML = rangeslider.value;
rangeslider.oninput = function() {
    output.innerHTML = this.value;
  }

  var rangeslider1 = document.getElementById("sliderRange2");
var output1 = document.getElementById("demo2");
output1.innerHTML = rangeslider1.value;
rangeslider1.oninput = function() {
    output1.innerHTML = this.value;
  }


 let circularProgress=document.querySelector(".circular-progress"),
 progressValue=document.querySelector(".progress-value");

 let progressStartValue=0,
 progressEndValue=78,
 speed=100;
 let progress=setInterval(()=>{
    progressStartValue++;
    progressValue.textContent=`${progressStartValue}%`;
    circularProgress.style.background=`conic-gradient(rgb(62, 236, 189) ${ progressStartValue* 3.6}deg, rgb(207, 237, 229) 0deg)`
    if(progressStartValue==progressEndValue){
        clearInterval(progress);
    }
    


 },speed);


 
 let circularProgress1=document.querySelector("#circular-progress-1"),
 progressValue1=document.querySelector("#progress-value-1");

 let progressStartValue1=0,
 progressEndValue1=95,
 speed1=100;
 let progress1=setInterval(()=>{
    progressStartValue1++;
    progressValue1.textContent=`${progressStartValue1}%`;
    circularProgress1.style.background=`conic-gradient(rgb(62, 236, 189) ${ progressStartValue1* 3.6}deg, rgb(207, 237, 229) 0deg)`
    if(progressStartValue1==progressEndValue1){
        clearInterval(progress1);
    }
    


 },speed1);


 
 let circularProgress2=document.querySelector("#circular-progress-2"),
 progressValue2=document.querySelector("#progress-value-2");

 let progressStartValue2=0,
 progressEndValue2=59,
 speed2=100;
 let progress2=setInterval(()=>{
    progressStartValue2++;
    progressValue2.textContent=`${progressStartValue2}%`;
    circularProgress2.style.background=`conic-gradient(rgb(62, 236, 189) ${ progressStartValue2* 3.6}deg, rgb(207, 237, 229) 0deg)`
    if(progressStartValue2==progressEndValue2){
        clearInterval(progress2);
    }
    


 },speed2);
