function getSum(){
    let t1 = +document.getElementById("1").value
    let t2 = +document.getElementById("2").value
    let sum = t1 + t2
      document.getElementById("result").innerText="Result Division" + sum
}
function getDiff(){
    let t1 = +document.getElementById("1").value
    let t2 = +document.getElementById("2").value
    let hieu = t1 - t2
    document.getElementById("result").innerText="Result Division" + hieu
}
function getEqual(){
    let t1 = +document.getElementById("1").value
    let t2 = +document.getElementById("2").value
    let tich = t1 * t2
    document.getElementById("result").innerText="Result Division" + tich
}
function getDiv(){
    let t1 = +document.getElementById("1").value
    let t2 = +document.getElementById("2").value
    let thuong = t1 / t2
    document.getElementById("result").innerText="Result Division" + thuong
}