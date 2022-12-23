function reverceNumber(num) {
  if (!isNaN(num)) {
    num = num + "";
    return num.split("").reverse().join("");
  } else {
    console.log("Error");
    return (num = 0);
  }
}
console.log(reverceNumber(12345));
