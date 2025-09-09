
    const loadval = ()=>{
        const a = parseInt(document.getElementById("a").value);
         var b = parseInt(document.getElementById("b").value);
           return { a, b };
        
    }
    const sum  = () =>{
        var {a,b} = loadval();
        document.getElementById("result").innerText =(`sum is ${a+b}`);
    }
    const diff = () =>{
         var { a, b } = loadval();
        document.getElementById("result").innerText = "Difference = " + (a - b);

    }

   const mul = () =>{
     var{a,b} = loadval();
    

   }
    

    function load() {
        alert("The page is loaded");
    }
    
  

