
    const loadval = ()=>{
        const a = parseInt(document.getElementById("a").value);
         var b = parseInt(document.getElementById("b").value);
           return { a, b };
        
    }
    const sum  = () =>{
        var {a,b} = loadval();
        document.getElementById("result").innerText = "Sum = " +(a+b);
    }
    const diff = () =>{
         var { a, b } = loadval();
        document.getElementById("result").innerText = "Difference = " + (a - b);

    }

   const mul = () =>{
     var{a,b} = loadval();
        document.getElementById("result").innerText = "Multiplication = " + (a * b);
   }
    
    const div = () =>{
        var { a, b } = loadval();
        document.getElementById("result").innerText = "Division = " + (a / b);
    }

    function load() {
        alert("The page is loaded");
    }
    
  

