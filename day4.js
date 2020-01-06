
let i = 136777;
let pmatch = [];
let date1 = new Date();

while ( i < 589999 ) {

    let i1 = parseInt(i.toString().charAt(0))
    let i2 = parseInt(i.toString().charAt(1))
    let i3 = parseInt(i.toString().charAt(2))
    let i4 = parseInt(i.toString().charAt(3))
    let i5 = parseInt(i.toString().charAt(4))
    let i6 = parseInt(i.toString().charAt(5))

   let numRep = 0;
 
        if(i2 < i1) { 
            i2 = i1;
            i3 = i1;
            i4 = i1;
            i5 = i1;
            i6 = i1;
            numRep = parseInt(i1.toString() + i2.toString() + i3.toString() + i4.toString() + i5.toString() + i6.toString())
            i = numRep
            pmatch.push(i)
          } else if ( i3 < i2 ) {
            i3 = i2;
            i4 = i2;
            i5 = i2;
            i6 = i2;
            numRep = parseInt(i1.toString() + i2.toString() + i3.toString() + i4.toString() + i5.toString() + i6.toString())
            i = numRep
            pmatch.push(i)

          } else if ( i4 < i3 ) {
            i4 = i3;
            i5 = i3;
            i6 = i3;        
            numRep = parseInt(i1.toString() + i2.toString() + i3.toString() + i4.toString() + i5.toString() + i6.toString())
            i = numRep
            pmatch.push(i)


          } else if ( i5 < i4 ) {
            i5 = i4;
            i6 = i4;
            numRep = parseInt(i1.toString() + i2.toString() + i3.toString() + i4.toString() + i5.toString() + i6.toString())
            i = numRep
            pmatch.push(i)

          } else if ( i6 < i5 ) {
            i6 = i5;
            numRep = parseInt(i1.toString() + i2.toString() + i3.toString() + i4.toString() + i5.toString() + i6.toString())
            i = numRep
            pmatch.push(i)


          } else if (i1 === i2 || i2 === i3 ||  i3===i4 || i4===i5 || i5===i6) {
            numRep = parseInt(i1.toString() + i2.toString() + i3.toString() + i4.toString() + i5.toString() + i6.toString())
            i = numRep
            pmatch.push(i)
          }

        

		i++
}
console.log(pmatch.length)
console.log(pmatch[pmatch.length - 1])

