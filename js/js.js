window.addEventListener('load',(e)=>
{
    const loadtxt=document.getElementsByClassName('loadercellcover');
    const loadgrid=document.getElementById('loadercontainer');
    const preload=document.getElementById('preloader');
    for(let i=0;i<loadtxt.length;i++)
    {
       
        loadtxt[i].style.animationIterationCount="2";
    
    }
    setTimeout(() => {
        loadgrid.style.transform="scale(10)";
        loadgrid.style.transition="1s";
        preload.style.opacity="0.1";
        preload.style.transition="1s";
        }, 2000);
        setTimeout(() => {
            document.getElementById('preloader').style.display="none";
            }, 3000);
            
});




document.getElementsByClassName('compform')[0].addEventListener('click',(e)=>
{
    if(!(['m11','m12','m13','m14','m15'].includes(e.target.id)))
    {

        document.getElementById('m13').value='';
        // if(document.getElementById('m15').checked)
        // document.getElementById('m15').click();
        document.getElementsByClassName('compform')[0].style.display="none";

    }
});

function showcf()
{
    setTimeout(() => {
        document.getElementsByClassName('compform')[0].style.display="grid";
        document.getElementById('m13').focus();
        document.getElementById('m14').disabled=true;
    }, 150);
    
}




document.getElementsByClassName('humform')[0].addEventListener('click',(e)=>
{
    if(!(['m21','m22','m23','m24', 'm25', 'm26', 'm27', 'm28'].includes(e.target.id)))
    {
        document.getElementById('m27').value='';
        document.getElementById('m24').value='';
        document.getElementsByClassName('humform')[0].style.display="none";
    }
});

function showhf()
{
    setTimeout(() => {
        document.getElementsByClassName('humform')[0].style.display="grid";
        document.getElementById('m24').focus();
        document.getElementById('m28').disabled=true;
    }, 150);
    
}






// comp console
let x=Math.trunc(Math.random()*2);
let vacant=[['#','#','#'],['#','#','#'],['#','#','#']];
function compconsole(c)
{
    
    const compcon=document.getElementById('compcon');
    const outcompgrid=document.getElementById('compgridcon');
    const compgrid=document.getElementById('compgrid');
    const gridwid=outcompgrid.clientWidth;
    const gridhigh=outcompgrid.clientHeight;
    const playername=document.getElementById("m13").value;
    
    document.getElementsByClassName('cpp')[1].textContent=playername.toUpperCase();
    document.getElementsByClassName('cpp')[0].textContent="COMPUTER";

    document.getElementsByClassName('cpc')[x].style.backgroundImage="url('../img/chance.png')";

    document.getElementsByClassName('withwhom')[0].style.display="none";
    compcon.style.display="flex";

    if(gridwid>gridhigh)
        compgrid.style.height= gridhigh*0.8+"px";
        else
        compgrid.style.height=gridwid*0.8+"px";
    
    setTimeout(() => {
        if(c==1)
        compconsole(2);
    }, 0.005);

    const ath = document.getElementsByClassName('compform')[0];
    ath.style.pointerEvents="none";

    setTimeout(() => {
        ath.style.opacity="0";
        ath.style.transition="opacity 1s";

    }, 201);

    setTimeout(() => {
        ath.style.display="none";
       

    }, 1201);
    
    
    if(x==0&&c==1)
    {
        setTimeout(() => {
            compchance();
        }, 1000);
    }
}

function comback()
{
        location.reload();
        
} 

function enablebutcom()
{
    if(document.getElementById("m13").value!="")
    {
        document.getElementById("m14").disabled=false;
    }
    else
    {
        document.getElementById("m14").disabled=true;
    }
}

function enablebuthum()
{
    if(document.getElementById("m24").value!=""&&document.getElementById("m27").value!="")
    {
        document.getElementById("m28").disabled=false;
    }
    else
    {
        document.getElementById("m28").disabled=true;
    }
}

const moveaudio = new Audio('../audio/move.mp3');
const winaudio = new Audio('../audio/win.mp3');
const tieaudio = new Audio('../audio/tie.mp3');   
function compchance()
{
    let sign=(x==0)?'o':'x';
    let sign1=(x==1)?'o':'x';
    document.getElementById("creplay").style.pointerEvents="auto";
    const gridbox=document.getElementsByClassName("cc");
    for(let i=0;i<gridbox.length;i++)
    {
        gridbox[i].style.pointerEvents="none";
    }
    const rancho=[];

    if(vacant[0][0]==sign&&vacant[0][1]==sign&&vacant[0][2]=='#')
    {
        rancho.push([0,2]);
    }
    if(vacant[0][1]==sign&&vacant[0][2]==sign&&vacant[0][0]=='#')
    {
        rancho.push([0,0]);
    }
    if(vacant[0][0]==sign&&vacant[0][2]==sign&&vacant[0][1]=='#')
    {
        rancho.push([0,1]);
    }

    if(vacant[1][0]==sign&&vacant[1][1]==sign&&vacant[1][2]=='#')
    {
        rancho.push([1,2]);
    }
    if(vacant[1][1]==sign&&vacant[1][2]==sign&&vacant[1][0]=='#')
    {
        rancho.push([1,0]);
    }
    if(vacant[1][0]==sign&&vacant[1][2]==sign&&vacant[1][1]=='#')
    {
        rancho.push([1,1]);
    }

    if(vacant[2][0]==sign&&vacant[2][1]==sign&&vacant[2][2]=='#')
    {
        rancho.push([2,2]);
    }
    if(vacant[2][1]==sign&&vacant[2][2]==sign&&vacant[2][0]=='#')
    {
        rancho.push([2,0]);
    }
    if(vacant[2][0]==sign&&vacant[2][2]==sign&&vacant[2][1]=='#')
    {
        rancho.push([2,1]);
    }

    if(vacant[0][0]==sign&&vacant[1][0]==sign&&vacant[2][0]=='#')
    {
        rancho.push([2,0]);
    }
    if(vacant[1][0]==sign&&vacant[2][0]==sign&&vacant[0][0]=='#')
    {
        rancho.push([0,0]);
    }
    if(vacant[0][0]==sign&&vacant[2][0]==sign&&vacant[1][0]=='#')
    {
        rancho.push([1,0]);
    }

    if(vacant[0][1]==sign&&vacant[1][1]==sign&&vacant[2][1]=='#')
    {
        rancho.push([2,1]);
    }
    if(vacant[1][1]==sign&&vacant[2][1]==sign&&vacant[0][1]=='#')
    {
        rancho.push([0,1]);
    }
    if(vacant[0][1]==sign&&vacant[2][1]==sign&&vacant[1][1]=='#')
    {
        rancho.push([1,1]);
    }

    if(vacant[0][2]==sign&&vacant[1][2]==sign&&vacant[2][2]=='#')
    {
        rancho.push([2,2]);
    }
    if(vacant[1][2]==sign&&vacant[2][2]==sign&&vacant[0][2]=='#')
    {
        rancho.push([0,2]);
    }
    if(vacant[0][2]==sign&&vacant[2][2]==sign&&vacant[1][2]=='#')
    {
        rancho.push([1,2]);
    }

    if(vacant[0][0]==sign&&vacant[1][1]==sign&&vacant[2][2]=='#')
    {
        rancho.push([2,2]);
    }
    if(vacant[1][1]==sign&&vacant[2][2]==sign&&vacant[0][0]=='#')
    {
        rancho.push([0,0]);
    }
    if(vacant[0][0]==sign&&vacant[2][2]==sign&&vacant[1][1]=='#')
    {
        rancho.push([1,1]);
    }

    if(vacant[0][2]==sign&&vacant[1][1]==sign&&vacant[2][0]=='#')
    {
        rancho.push([2,0]);
    }
    if(vacant[1][1]==sign&&vacant[2][0]==sign&&vacant[0][2]=='#')
    {
        rancho.push([0,2]);
    }
    if(vacant[0][2]==sign&&vacant[2][0]==sign&&vacant[1][1]=='#')
    {
        rancho.push([1,1]);
    }

    if(rancho.length)
    {
        let ran1= rancho[Math.trunc(Math.random()* rancho.length)];
        vacant[ran1[0]][ran1[1]]=sign;
        compclick(`${ran1[0]}${ran1[1]}`,sign);
    }

    else
    {
        if(vacant[0][0]==sign1&&vacant[0][1]==sign1&&vacant[0][2]=='#')
        {
            rancho.push([0,2]);
        }
        if(vacant[0][1]==sign1&&vacant[0][2]==sign1&&vacant[0][0]=='#')
        {
            rancho.push([0,0]);
        }
        if(vacant[0][0]==sign1&&vacant[0][2]==sign1&&vacant[0][1]=='#')
        {
            rancho.push([0,1]);
        }
    
        if(vacant[1][0]==sign1&&vacant[1][1]==sign1&&vacant[1][2]=='#')
        {
            rancho.push([1,2]);
        }
        if(vacant[1][1]==sign1&&vacant[1][2]==sign1&&vacant[1][0]=='#')
        {
            rancho.push([1,0]);
        }
        if(vacant[1][0]==sign1&&vacant[1][2]==sign1&&vacant[1][1]=='#')
        {
            rancho.push([1,1]);
        }
    
        if(vacant[2][0]==sign1&&vacant[2][1]==sign1&&vacant[2][2]=='#')
        {
            rancho.push([2,2]);
        }
        if(vacant[2][1]==sign1&&vacant[2][2]==sign1&&vacant[2][0]=='#')
        {
            rancho.push([2,0]);
        }
        if(vacant[2][0]==sign1&&vacant[2][2]==sign1&&vacant[2][1]=='#')
        {
            rancho.push([2,1]);
        }
    
        if(vacant[0][0]==sign1&&vacant[1][0]==sign1&&vacant[2][0]=='#')
        {
            rancho.push([2,0]);
        }
        if(vacant[1][0]==sign1&&vacant[2][0]==sign1&&vacant[0][0]=='#')
        {
            rancho.push([0,0]);
        }
        if(vacant[0][0]==sign1&&vacant[2][0]==sign1&&vacant[1][0]=='#')
        {
            rancho.push([1,0]);
        }
    
        if(vacant[0][1]==sign1&&vacant[1][1]==sign1&&vacant[2][1]=='#')
        {
            rancho.push([2,1]);
        }
        if(vacant[1][1]==sign1&&vacant[2][1]==sign1&&vacant[0][1]=='#')
        {
            rancho.push([0,1]);
        }
        if(vacant[0][1]==sign1&&vacant[2][1]==sign1&&vacant[1][1]=='#')
        {
            rancho.push([1,1]);
        }
    
        if(vacant[0][2]==sign1&&vacant[1][2]==sign1&&vacant[2][2]=='#')
        {
            rancho.push([2,2]);
        }
        if(vacant[1][2]==sign1&&vacant[2][2]==sign1&&vacant[0][2]=='#')
        {
            rancho.push([0,2]);
        }
        if(vacant[0][2]==sign1&&vacant[2][2]==sign1&&vacant[1][2]=='#')
        {
            rancho.push([1,2]);
        }
    
        if(vacant[0][0]==sign1&&vacant[1][1]==sign1&&vacant[2][2]=='#')
        {
            rancho.push([2,2]);
        }
        if(vacant[1][1]==sign1&&vacant[2][2]==sign1&&vacant[0][0]=='#')
        {
            rancho.push([0,0]);
        }
        if(vacant[0][0]==sign1&&vacant[2][2]==sign1&&vacant[1][1]=='#')
        {
            rancho.push([1,1]);
        }
    
        if(vacant[0][2]==sign1&&vacant[1][1]==sign1&&vacant[2][0]=='#')
        {
            rancho.push([2,0]);
        }
        if(vacant[1][1]==sign1&&vacant[2][0]==sign1&&vacant[0][2]=='#')
        {
            rancho.push([0,2]);
        }
        if(vacant[0][2]==sign1&&vacant[2][0]==sign1&&vacant[1][1]=='#')
        {
            rancho.push([1,1]);
        }

        if(rancho.length)
    {
        let ran1= rancho[Math.trunc(Math.random()* rancho.length)];
        vacant[ran1[0]][ran1[1]]=sign;
        compclick(`${ran1[0]}${ran1[1]}`,sign);
    }

    else
    {

        if(vacant[0][0]==sign&&vacant[0][1]=='#'&&vacant[0][2]=='#')
        {
            rancho.push([0,2]);
            rancho.push([0,1]);
        }
        if(vacant[0][1]==sign&&vacant[0][2]=='#'&&vacant[0][0]=='#')
        {
            rancho.push([0,0]);
            rancho.push([0,2]);
        }
        if(vacant[0][0]==sign&&vacant[0][2]=='#'&&vacant[0][1]=='#')
        {
            rancho.push([0,1]);
            rancho.push([0,2]);
        }
    
        if(vacant[1][0]==sign&&vacant[1][1]=='#'&&vacant[1][2]=='#')
        {
            rancho.push([1,2]);
            rancho.push([1,1]);
        }
        if(vacant[1][1]==sign&&vacant[1][2]=='#'&&vacant[1][0]=='#')
        {
            rancho.push([1,0]);
            rancho.push([1,2]);
        }
        if(vacant[1][0]==sign&&vacant[1][2]=='#'&&vacant[1][1]=='#')
        {
            rancho.push([1,1]);
            rancho.push([1,2]);
        }
    
        if(vacant[2][0]==sign&&vacant[2][1]=='#'&&vacant[2][2]=='#')
        {
            rancho.push([2,2]);
            rancho.push([2,1]);
        }
        if(vacant[2][1]==sign&&vacant[2][2]=='#'&&vacant[2][0]=='#')
        {
            rancho.push([2,0]);
            rancho.push([2,2]);
        }
        if(vacant[2][0]==sign&&vacant[2][2]=='#'&&vacant[2][1]=='#')
        {
            rancho.push([2,1]);
            rancho.push([2,2]);
        }
    
        if(vacant[0][0]==sign&&vacant[1][0]=='#'&&vacant[2][0]=='#')
        {
            rancho.push([2,0]);
            rancho.push([1,0]);
        }
        if(vacant[1][0]==sign&&vacant[2][0]=='#'&&vacant[0][0]=='#')
        {
            rancho.push([0,0]);
            rancho.push([2,0]);
        }
        if(vacant[0][0]==sign&&vacant[2][0]=='#'&&vacant[1][0]=='#')
        {
            rancho.push([1,0]);
            rancho.push([2,0]);
        }
    
        if(vacant[0][1]==sign&&vacant[1][1]=='#'&&vacant[2][1]=='#')
        {
            rancho.push([2,1]);
            rancho.push([1,1]);
        }
        if(vacant[1][1]==sign&&vacant[2][1]=='#'&&vacant[0][1]=='#')
        {
            rancho.push([0,1]);
            rancho.push([2,1]);
        }
        if(vacant[0][1]==sign&&vacant[2][1]=='#'&&vacant[1][1]=='#')
        {
            rancho.push([1,1]);
            rancho.push([2,1]);
        }
    
        if(vacant[0][2]==sign&&vacant[1][2]=='#'&&vacant[2][2]=='#')
        {
            rancho.push([2,2]);
            rancho.push([1,2]);
        }
        if(vacant[1][2]==sign&&vacant[2][2]=='#'&&vacant[0][2]=='#')
        {
            rancho.push([0,2]);
            rancho.push([2,2]);
        }
        if(vacant[0][2]==sign&&vacant[2][2]=='#'&&vacant[1][2]=='#')
        {
            rancho.push([1,2]);
            rancho.push([2,2]);
        }
    
        if(vacant[0][0]==sign&&vacant[1][1]=='#'&&vacant[2][2]=='#')
        {
            rancho.push([2,2]);
            rancho.push([1,1]);
        }
        if(vacant[1][1]==sign&&vacant[2][2]=='#'&&vacant[0][0]=='#')
        {
            rancho.push([0,0]);
            rancho.push([2,2]);
        }
        if(vacant[0][0]==sign&&vacant[2][2]=='#'&&vacant[1][1]=='#')
        {
            rancho.push([1,1]);
            rancho.push([2,2]);
        }
    
        if(vacant[0][2]==sign&&vacant[1][1]=='#'&&vacant[2][0]=='#')
        {
            rancho.push([2,0]);
            rancho.push([1,1]);
        }
        if(vacant[1][1]==sign&&vacant[2][0]=='#'&&vacant[0][2]=='#')
        {
            rancho.push([0,2]);
            rancho.push([2,0]);
        }
        if(vacant[0][2]==sign&&vacant[2][0]=='#'&&vacant[1][1]=='#')
        {
            rancho.push([1,1]);
            rancho.push([2,0]);
        }

        if(rancho.length)
    {
        let ran1= rancho[Math.trunc(Math.random()* rancho.length)];
        vacant[ran1[0]][ran1[1]]=sign;
        compclick(`${ran1[0]}${ran1[1]}`,sign);
    }

        else
        {
            for(let i=0;i<3;i++)
            {
                for(let j=0;j<3;j++)
                {
                    if(vacant[i][j]=='#')
                    {
                        rancho.push([i,j]);
                    }
                }
            }
            let ran1= rancho[Math.trunc(Math.random()* rancho.length)];
            vacant[ran1[0]][ran1[1]]=sign;
        compclick(`${ran1[0]}${ran1[1]}`,sign);
        }

    }

    }
    
    if(vacant[0][0]==sign&&vacant[0][1]==sign&&vacant[0][2]==sign)
    {
        document.getElementById("cl1").style.visibility="visible";
        document.querySelector("#cl1>.clg").style.width="100%";
        setTimeout(() => {
            winaudio.play();
        }, 200);
        setTimeout(() => {
            document.getElementById("compwinner").textContent="COMPUTER WINS";
            document.getElementById("creplay").style.animationName="crpop";
            document.getElementById("cps1").textContent++;
        }, 1100);
    }

    else if(vacant[1][0]==sign&&vacant[1][1]==sign&&vacant[1][2]==sign)
    {
        document.getElementById("cl2").style.visibility="visible";
        document.querySelector("#cl2>.clg").style.width="100%";
        setTimeout(() => {
            winaudio.play();
        }, 200);
        setTimeout(() => {
            document.getElementById("compwinner").textContent="COMPUTER WINS";
            document.getElementById("creplay").style.animationName="crpop";
            document.getElementById("cps1").textContent++;
        }, 1100);
    }
    

    else if(vacant[2][0]==sign&&vacant[2][1]==sign&&vacant[2][2]==sign)
    {
        document.getElementById("cl3").style.visibility="visible";
        document.querySelector("#cl3>.clg").style.width="100%";
        setTimeout(() => {
            winaudio.play();
        }, 200);
        setTimeout(() => {
            document.getElementById("compwinner").textContent="COMPUTER WINS";
            document.getElementById("creplay").style.animationName="crpop";
            document.getElementById("cps1").textContent++;
        }, 1100);
    }
    

    else if(vacant[0][0]==sign&&vacant[1][0]==sign&&vacant[2][0]==sign)
    {
        document.getElementById("cl4").style.visibility="visible";
        document.querySelector("#cl4>.clg").style.width="100%";
        setTimeout(() => {
            winaudio.play();
        }, 200);
        setTimeout(() => {
            document.getElementById("compwinner").textContent="COMPUTER WINS";
            document.getElementById("creplay").style.animationName="crpop";
            document.getElementById("cps1").textContent++;
        }, 1100);
    }
    

    else if(vacant[0][1]==sign&&vacant[1][1]==sign&&vacant[2][1]==sign)
    {
        document.getElementById("cl5").style.visibility="visible";
        document.querySelector("#cl5>.clg").style.width="100%";
        setTimeout(() => {
            winaudio.play();
        }, 200);
        setTimeout(() => {
            document.getElementById("compwinner").textContent="COMPUTER WINS";
            document.getElementById("creplay").style.animationName="crpop";
            document.getElementById("cps1").textContent++;
        }, 1100);
    }
    

    else if(vacant[0][2]==sign&&vacant[1][2]==sign&&vacant[2][2]==sign)
    {
        document.getElementById("cl6").style.visibility="visible";
        document.querySelector("#cl6>.clg").style.width="100%";
        setTimeout(() => {
            winaudio.play();
        }, 200);
        setTimeout(() => {
            document.getElementById("compwinner").textContent="COMPUTER WINS";
            document.getElementById("creplay").style.animationName="crpop";
            document.getElementById("cps1").textContent++;
        }, 1100);
    }
    

    else if(vacant[0][0]==sign&&vacant[1][1]==sign&&vacant[2][2]==sign)
    {
        document.getElementById("cl7").style.visibility="visible";
        document.querySelector("#cl7>.clg").style.width="100%";
        setTimeout(() => {
            winaudio.play();
        }, 200);
        setTimeout(() => {
            document.getElementById("compwinner").textContent="COMPUTER WINS";
            document.getElementById("creplay").style.animationName="crpop";
            document.getElementById("cps1").textContent++;
        }, 1100);
    }
    

    else if(vacant[0][2]==sign&&vacant[1][1]==sign&&vacant[2][0]==sign)
    {
        document.getElementById("cl8").style.visibility="visible";
        document.querySelector("#cl8>.clg").style.width="100%";
        setTimeout(() => {
            winaudio.play();
        }, 200);
        setTimeout(() => {
            document.getElementById("compwinner").textContent="COMPUTER WINS";
            document.getElementById("creplay").style.animationName="crpop";
            document.getElementById("cps1").textContent++;
        }, 1100);
    }


    else
    {
        let checkvacant=0;
        for(let i=0;i<3;i++)
        {
            for(let j=0;j<3;j++)
            {
                if(vacant[i][j]=="#")
                {checkvacant=1;
                    break;
                }
            }
        }
        if(checkvacant==0)
        {
            setTimeout(() => {
                document.getElementById("compwinner").textContent="TIE";
            tieaudio.play();
            document.getElementById("creplay").style.animationName="crpop";
            }, 800);
            
        }
    else
    {
        setTimeout(() => {
        for(let i=0;i<3;i++)
        {
            for(let j=0;j<3;j++)
            {
                if(vacant[i][j]=='#')
                {
                    document.getElementById(`cc${i}${j}`).style.pointerEvents="auto";
                }
            }
        }
        
document.getElementsByClassName('cpc')[1].style.backgroundImage="url('../img/chance.png')";
document.getElementsByClassName('cpc')[0].style.backgroundImage="none";
}, 500);
    }

}
}

function cplayerchance(clickedcc)
{
    let sign=(x==1)?'o':'x';
    vacant[clickedcc[0]][clickedcc[1]]=sign;
    compclick(`${clickedcc[0]}${clickedcc[1]}`,sign);
    
    setTimeout(() => {
        const gridbox=document.getElementsByClassName("cc");
    for(let i=0;i<gridbox.length;i++)
    {
        gridbox[i].style.pointerEvents="none";
    }
    }, 1);
    if(vacant[0][0]==sign&&vacant[0][1]==sign&&vacant[0][2]==sign)
    {
        document.getElementById("cl1").style.visibility="visible";
        document.querySelector("#cl1>.clg").style.width="100%";
        setTimeout(() => {
            winaudio.play();
        }, 200);
        setTimeout(() => {
            document.getElementById("compwinner").textContent=document.getElementById("cpp2").textContent+" "+"WINS";
            document.getElementById("creplay").style.animationName="crpop";
            document.getElementById("cps2").textContent++;
        }, 1100);
    }

    else if(vacant[1][0]==sign&&vacant[1][1]==sign&&vacant[1][2]==sign)
    {
        document.getElementById("cl2").style.visibility="visible";
        document.querySelector("#cl2>.clg").style.width="100%";
        setTimeout(() => {
            winaudio.play();
        }, 200);
        setTimeout(() => {
            document.getElementById("compwinner").textContent=document.getElementById("cpp2").textContent+" "+"WINS";
            document.getElementById("creplay").style.animationName="crpop";
            document.getElementById("cps2").textContent++;
        }, 1100);
    }
    

    else if(vacant[2][0]==sign&&vacant[2][1]==sign&&vacant[2][2]==sign)
    {
        document.getElementById("cl3").style.visibility="visible";
        document.querySelector("#cl3>.clg").style.width="100%";
        setTimeout(() => {
            winaudio.play();
        }, 200);
        setTimeout(() => {
            document.getElementById("compwinner").textContent=document.getElementById("cpp2").textContent+" "+"WINS";
            document.getElementById("creplay").style.animationName="crpop";
            document.getElementById("cps2").textContent++;
        }, 1100);
    }
    

    else if(vacant[0][0]==sign&&vacant[1][0]==sign&&vacant[2][0]==sign)
    {
        document.getElementById("cl4").style.visibility="visible";
        document.querySelector("#cl4>.clg").style.width="100%";
        setTimeout(() => {
            winaudio.play();
        }, 200);
        setTimeout(() => {
            document.getElementById("compwinner").textContent=document.getElementById("cpp2").textContent+" "+"WINS";
            document.getElementById("creplay").style.animationName="crpop";
            document.getElementById("cps2").textContent++;
        }, 1100);
    }
    

    else if(vacant[0][1]==sign&&vacant[1][1]==sign&&vacant[2][1]==sign)
    {
        document.getElementById("cl5").style.visibility="visible";
        document.querySelector("#cl5>.clg").style.width="100%";
        setTimeout(() => {
            winaudio.play();
        }, 200);
        setTimeout(() => {
            document.getElementById("compwinner").textContent=document.getElementById("cpp2").textContent+" "+"WINS";
            document.getElementById("creplay").style.animationName="crpop";
            document.getElementById("cps2").textContent++;
        }, 1100);
    }
    

    else if(vacant[0][2]==sign&&vacant[1][2]==sign&&vacant[2][2]==sign)
    {
        document.getElementById("cl6").style.visibility="visible";
        document.querySelector("#cl6>.clg").style.width="100%";
        setTimeout(() => {
            winaudio.play();
        }, 200);
        setTimeout(() => {
            document.getElementById("compwinner").textContent=document.getElementById("cpp2").textContent+" "+"WINS";
            document.getElementById("creplay").style.animationName="crpop";
            document.getElementById("cps2").textContent++;
        }, 1100);
    }
    

    else if(vacant[0][0]==sign&&vacant[1][1]==sign&&vacant[2][2]==sign)
    {
        document.getElementById("cl7").style.visibility="visible";
        document.querySelector("#cl7>.clg").style.width="100%";
        setTimeout(() => {
            winaudio.play();
        }, 200);
        setTimeout(() => {
            document.getElementById("compwinner").textContent=document.getElementById("cpp2").textContent+" "+"WINS";
            document.getElementById("creplay").style.animationName="crpop";
            document.getElementById("cps2").textContent++;
        }, 1100);
    }
    

    else if(vacant[0][2]==sign&&vacant[1][1]==sign&&vacant[2][0]==sign)
    {
        document.getElementById("cl8").style.visibility="visible";
        document.querySelector("#cl8>.clg").style.width="100%";
        setTimeout(() => {
            winaudio.play();
        }, 200);
        setTimeout(() => {
            document.getElementById("compwinner").textContent=document.getElementById("cpp2").textContent+" "+"WINS";
            document.getElementById("creplay").style.animationName="crpop";
            document.getElementById("cps2").textContent++;
        }, 1100);
    }
    else
    {
        let checkvacant=0;
        for(let i=0;i<3;i++)
        {
            for(let j=0;j<3;j++)
            {
                if(vacant[i][j]=="#")
                {checkvacant=1;
                    break;
                }
            }
        }
       
        if(checkvacant==0)
        {
            setTimeout(() => {
                document.getElementById("compwinner").textContent="TIE";
            tieaudio.play();
            document.getElementById("creplay").style.animationName="crpop";
            }, 800);
            
        }
    else
    {
        setTimeout(() => {
    document.getElementsByClassName('cpc')[0].style.backgroundImage="url('../img/chance.png')";
    document.getElementsByClassName('cpc')[1].style.backgroundImage="none";
    setTimeout(() => {
        compchance();
    }, 500);
}, 500);
    }

}

}

function compclick(box,sign)
{
    document.getElementById("cc"+box).style.backgroundImage="url(../img/"+sign+".png)";
    moveaudio.play();
}

function creplay()
{
    x=Math.trunc(Math.random()*2);
    document.getElementById("creplay").style.animationName="none";
    for(let i=0;i<3;i++)
    {
        for(let j=0;j<3;j++)
        {
            vacant[i][j]="#";
            document.getElementById(`cc${i}${j}`).style.backgroundImage="none";
        }
    }
    document.getElementById("compwinner").textContent="";
    const clg=document.getElementsByClassName('clg');
    const cl=document.getElementsByClassName('cl');
    for(let i=0;i<clg.length;i++)
    {
        clg[i].style.width=0;
        cl[i].style.visibility="hidden";
    }
    
    document.getElementsByClassName('cpc')[0].style.backgroundImage="none";
    document.getElementsByClassName('cpc')[1].style.backgroundImage="none";
    setTimeout(() => {
        document.getElementsByClassName('cpc')[x].style.backgroundImage="url('../img/chance.png')";
    }, 500);
    setTimeout(() => {
        document.getElementById("creplay").style.pointerEvents="none";
    }, 1);
    if(x==0)
    {
        setTimeout(() => {
            compchance();
        }, 500);
    }
    setTimeout(() => {
        document.getElementById("creplay").style.pointerEvents="auto";
        const cc=document.getElementsByClassName("cc");
        for(let i=0;i<cc.length;i++)
        {
            cc[i].style.pointerEvents="auto";
        }
    }, 600);
}




// human console
let y=Math.trunc(Math.random()*2);
let t=y;
let vacant1=[['#','#','#'],['#','#','#'],['#','#','#']];
function humconsole(c)
{
    
    const humcon=document.getElementById('humcon');
    const outhumgrid=document.getElementById('humgridcon');
    const humgrid=document.getElementById('humgrid');
    const gridwid=outhumgrid.clientWidth;
    const gridhigh=outhumgrid.clientHeight;
    const player1name=document.getElementById("m24").value;
    const player2name=document.getElementById("m27").value;
    
    document.getElementsByClassName('hpp')[0].textContent=player1name.toUpperCase();
    document.getElementsByClassName('hpp')[1].textContent=player2name.toUpperCase();
    

    document.getElementsByClassName('hpc')[y].style.backgroundImage="url('../img/chance.png')";

    document.getElementsByClassName('withwhom')[0].style.display="none";
    humcon.style.display="flex";

    if(gridwid>gridhigh)
        humgrid.style.height= gridhigh*0.8+"px";
        else
        humgrid.style.height=gridwid*0.8+"px";
    
    setTimeout(() => {
        if(c==1)
        humconsole(2);
    }, 0.005);

    const ath = document.getElementsByClassName('humform')[0];
    ath.style.pointerEvents="none";

    setTimeout(() => {
        ath.style.opacity="0";
        ath.style.transition="opacity 1s";

    }, 201);

    setTimeout(() => {
        ath.style.display="none";
       

    }, 1201);
    
}


function hplayerchance(clickedhc)
{
    let sign=(t==y)?'o':'x';
    vacant1[clickedhc[0]][clickedhc[1]]=sign;
    humclick(`${clickedhc[0]}${clickedhc[1]}`,sign);
    
    setTimeout(() => {
        const gridbox=document.getElementsByClassName("hc");
    for(let i=0;i<gridbox.length;i++)
    {
        gridbox[i].style.pointerEvents="none";
    }
    }, 1);
    if(vacant1[0][0]==sign&&vacant1[0][1]==sign&&vacant1[0][2]==sign)
    {
        document.getElementById("hl1").style.visibility="visible";
        document.querySelector("#hl1>.hlg").style.width="100%";
        setTimeout(() => {
            winaudio.play();
        }, 200);
        setTimeout(() => {
            document.getElementById("humwinner").textContent=document.getElementById(`hpp${t+1}`).textContent+" "+"WINS";
            document.getElementById("hreplay").style.animationName="hrpop";
            document.getElementById(`hsp${t+1}`).textContent++;
        }, 1100);
    }

    else if(vacant1[1][0]==sign&&vacant1[1][1]==sign&&vacant1[1][2]==sign)
    {
        document.getElementById("hl2").style.visibility="visible";
        document.querySelector("#hl2>.clg").style.width="100%";
        setTimeout(() => {
            winaudio.play();
        }, 200);
        setTimeout(() => {
            document.getElementById("humwinner").textContent=document.getElementById(`hpp${t+1}`).textContent+" "+"WINS";
            document.getElementById("hreplay").style.animationName="hrpop";
            document.getElementById(`hps${t+1}`).textContent++;
        }, 1100);
    }
    

    else if(vacant1[2][0]==sign&&vacant1[2][1]==sign&&vacant1[2][2]==sign)
    {
        document.getElementById("hl3").style.visibility="visible";
        document.querySelector("#hl3>.hlg").style.width="100%";
        setTimeout(() => {
            winaudio.play();
        }, 200);
        setTimeout(() => {
            document.getElementById("humwinner").textContent=document.getElementById(`hpp${t+1}`).textContent+" "+"WINS";
            document.getElementById("hreplay").style.animationName="hrpop";
            document.getElementById(`hps${t+1}`).textContent++;
        }, 1100);
    }
    

    else if(vacant1[0][0]==sign&&vacant1[1][0]==sign&&vacant1[2][0]==sign)
    {
        document.getElementById("hl4").style.visibility="visible";
        document.querySelector("#hl4>.hlg").style.width="100%";
        setTimeout(() => {
            winaudio.play();
        }, 200);
        setTimeout(() => {
            document.getElementById("humwinner").textContent=document.getElementById(`hpp${t+1}`).textContent+" "+"WINS";
            document.getElementById("hreplay").style.animationName="hrpop";
            document.getElementById(`hps${t+1}`).textContent++;
        }, 1100);
    }
    

    else if(vacant1[0][1]==sign&&vacant1[1][1]==sign&&vacant1[2][1]==sign)
    {
        document.getElementById("hl5").style.visibility="visible";
        document.querySelector("#hl5>.hlg").style.width="100%";
        setTimeout(() => {
            winaudio.play();
        }, 200);
        setTimeout(() => {
            document.getElementById("humwinner").textContent=document.getElementById(`hpp${t+1}`).textContent+" "+"WINS";
            document.getElementById("hreplay").style.animationName="hrpop";
            document.getElementById(`hps${t+1}`).textContent++;
        }, 1100);
    }
    

    else if(vacant1[0][2]==sign&&vacant1[1][2]==sign&&vacant1[2][2]==sign)
    {
        document.getElementById("hl6").style.visibility="visible";
        document.querySelector("#hl6>.hlg").style.width="100%";
        setTimeout(() => {
            winaudio.play();
        }, 200);
        setTimeout(() => {
            document.getElementById("humwinner").textContent=document.getElementById(`hpp${t+1}`).textContent+" "+"WINS";
            document.getElementById("hreplay").style.animationName="hrpop";
            document.getElementById(`hps${t+1}`).textContent++;
        }, 1100);
    }
    

    else if(vacant1[0][0]==sign&&vacant1[1][1]==sign&&vacant1[2][2]==sign)
    {
        document.getElementById("hl7").style.visibility="visible";
        document.querySelector("#hl7>.hlg").style.width="100%";
        setTimeout(() => {
            winaudio.play();
        }, 200);
        setTimeout(() => {
            document.getElementById("humwinner").textContent=document.getElementById(`hpp${t+1}`).textContent+" "+"WINS";
            document.getElementById("hreplay").style.animationName="hrpop";
            document.getElementById(`hps${t+1}`).textContent++;
        }, 1100);
    }
    

    else if(vacant1[0][2]==sign&&vacant1[1][1]==sign&&vacant1[2][0]==sign)
    {
        document.getElementById("hl8").style.visibility="visible";
        document.querySelector("#hl8>.hlg").style.width="100%";
        setTimeout(() => {
            winaudio.play();
        }, 200);
        setTimeout(() => {
            document.getElementById("humwinner").textContent=document.getElementById(`hpp${t+1}`).textContent+" "+"WINS";
            document.getElementById("hreplay").style.animationName="hrpop";
            document.getElementById(`hps${t+1}`).textContent++;
        }, 1100);
    }
    else
    {
        let checkvacant1=0;
        for(let i=0;i<3;i++)
        {
            for(let j=0;j<3;j++)
            {
                if(vacant1[i][j]=="#")
                {checkvacant1=1;
                    break;
                }
            }
        }
       
        if(checkvacant1==0)
        {
            setTimeout(() => {
                document.getElementById("humwinner").textContent="TIE";
            tieaudio.play();
            document.getElementById("hreplay").style.animationName="hrpop";
            }, 800);
            
        }
    else
    {
        
        setTimeout(() => {
            for(let i=0;i<3;i++)
        {
            for(let j=0;j<3;j++)
            {
                if(vacant1[i][j]=='#')
                {
                    document.getElementById(`hc${i}${j}`).style.pointerEvents="auto";
                }
            }
        }
            document.getElementsByClassName('hpc')[t].style.backgroundImage="none";
            t=(t+1)%2;
    document.getElementsByClassName('hpc')[t].style.backgroundImage="url('../img/chance.png')";
    
}, 500);
    }

}

}






function humclick(box,sign)
{
    document.getElementById("hc"+box).style.backgroundImage="url(../img/"+sign+".png)";
    moveaudio.play();
}

function hreplay()
{
    y=Math.trunc(Math.random()*2);
    t=y;
    document.getElementById("hreplay").style.animationName="none";
    for(let i=0;i<3;i++)
    {
        for(let j=0;j<3;j++)
        {
            vacant1[i][j]="#";
            document.getElementById(`hc${i}${j}`).style.backgroundImage="none";
        }
    }
    document.getElementById("humwinner").textContent="";
    const hlg=document.getElementsByClassName('hlg');
    const hl=document.getElementsByClassName('hl');
    for(let i=0;i<hlg.length;i++)
    {
        hlg[i].style.width=0;
        hl[i].style.visibility="hidden";
    }
    
    document.getElementsByClassName('hpc')[0].style.backgroundImage="none";
    document.getElementsByClassName('hpc')[1].style.backgroundImage="none";
    setTimeout(() => {
        document.getElementsByClassName('hpc')[y].style.backgroundImage="url('../img/chance.png')";
    }, 500);
    setTimeout(() => {
        document.getElementById("hreplay").style.pointerEvents="none";
    }, 1);
    setTimeout(() => {
        document.getElementById("hreplay").style.pointerEvents="auto";
        const hc=document.getElementsByClassName("hc");
        for(let i=0;i<hc.length;i++)
        {
            hc[i].style.pointerEvents="auto";
        }
    }, 600);
}