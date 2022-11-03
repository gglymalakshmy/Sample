let arr=[
    {
        name:"Reena",
        age:50,
        city:"pvr"
    },
    {
        name:"seena",
        age:40,
        city:"mkm"
    },
    {
        name:"Leena",
        age:45,
        city:"pkld"
    },
    {
        name:"Jeena",
        age:15,
        city:"Ktym"
    },
    {
        name:"meena",
        age:35,
        city:"Tvm"
    }
]
function myFn()
{
    let control =()=>{setTimeout(() => {
        
    let data = document.getElementById("demo");
    let data1 = document.getElementById("demo1");
    let data2 = document.getElementById("demo2");
    arr.forEach((item)=>{
        console.log(item);
        data.innerHTML+=`<li>${
            item.name
        }
        </li>`
        data1.innerHTML+=`<li>${
            item.city
        }
        </li>`
        data2.innerHTML+=`<li>${
            item.age
        }
        </li>`
        // data.innerHTML+="<li>"+"name:"+item.name+item.city
        // "</li>"
    })
}, 3000);
}
   function fn1(new_user,control){
    setTimeout(() => {
        arr.push(new_user);
        control();
    },4000);

}
fn1( {
    name:"Teena",
    age:23,
    city:"Ekm"
},control);

}






