window.onload = function() {
    const savedData = localStorage.getItem('userData');

    if (savedData !== null) {
        const userData = JSON.parse(savedData);
        document.getElementById("capital").value = userData.capital;
        document.getElementById("couta").value = userData.cuota;
        document.getElementById("interes").value = userData.interes;
    }
};

function gen_table(){
    document.getElementById("tab").innerHTML="";
    let n=Number(document.getElementById("capital").value);
    let n2=Number(document.getElementById("couta").value);
    let n3=Number(document.getElementById("interes").value);
    if(n>0){  
        const userData = {
            capital: n,
            cuota: n2,
            interes: n3
        };
    
        localStorage.setItem('userData', JSON.stringify(userData));


        for(i=1;i<=n2;i++){
            ca=n/n2;
            d1=ca.toFixed(2);
            i2=((n*n3)/100)/n2;
            d2=i2.toFixed(2);
            r=ca+i2;
            d3=r.toFixed(2);
            document.getElementById("tab").innerHTML=document.getElementById("tab").innerHTML+
                    `<tr>
                        <td> ${i}</td>
                        <td> ${d1}</td>
                        <td> ${d2}</td>
                        <td> ${d3}</td>
                    </tr>`;
        }

        n1=n.toFixed(2);
        t_i=i2*n2;
        d4=t_i.toFixed(2);
        t_p=r*n2;
        d5=t_p.toFixed(2);

        document.getElementById("t1").innerHTML=n1;
        document.getElementById("t2").innerHTML=d4;
        document.getElementById("t3").innerHTML=d5;        
    }else{
        alert("Falta ingresar un Número");
    }
}

function limpiar() {
    document.getElementById("capital").value = "";
    document.getElementById("couta").value = "";
    document.getElementById("interes").value = "";

    localStorage.removeItem('userData');

    document.getElementById("tab").innerHTML = "";
    document.getElementById("t1").innerHTML = "";
    document.getElementById("t2").innerHTML = "";
    document.getElementById("t3").innerHTML = "";
}

function confirmar(){
  const m = parseFloat(document.getElementById("capital").value).toLocaleString();
  const c = document.getElementById("couta").value
  const i = document.getElementById("interes").value

  Swal.fire({
    icon: 'info',
    title: 'Tabla de amortización',
    html: `
      <p>¿Confirma los datos ingresados?</p>
      <p><strong>Capital:</strong> ${m}</p>
      <p><strong>Cuotas:</strong> ${c}</p>
      <p><strong>Interes:</strong> ${i}%</p>
      `,
    showCancelButton: true,  
    confirmButtonText: 'Confirmo'
  }).then((result) => { 
    if (result.isConfirmed) {
      gen_table();
    }
  });
}
