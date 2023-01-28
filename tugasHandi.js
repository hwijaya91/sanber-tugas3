// soal 1
var x = -1;
console.log(calculateX(x))
var x = 1;
console.log(calculateX(x))
var x = 2;
console.log(calculateX(x))

function calculateX(x) {
  return (
    x < 0 ? "Tidak bisa inpu bilangan negatif" :
      x % 2 != 0 ? "Tidak bisa input bilangan ganjil" :
        Math.sqrt(x)
  )
}

// soal 2
let productBin = {
  "requestId": null,
  "data": [
    {
      "id": 100000057465,
      "storageId": 10000008207,
      "code": "A01-01-01-A",
      "productId": 110000081009,
      "productName": "FloBrand-DressBSPink",
      "productCode": "FBR00040101",
      "quantity": 76,
      "createdTime": "2021-12-21T13:54:48Z",
    },
    {
      "id": 100000057466,
      "storageId": 10000002181,
      "code": "A01-01-01-B",
      "productId": 110000081009,
      "productName": "FloBrand-DressBSPink",
      "productCode": "FBR00040101",
      "quantity": 71,
      "createdTime": "2021-12-21T13:54:48Z",
    },
    {
      "id": 100000065224,
      "storageId": 10000008884,
      "code": "Tgt00-A-A-01",
      "productId": 110000081009,
      "productName": "FloBrand-DressBSPink",
      "productCode": "FBR00040101",
      "quantity": 10,
      "createdTime": "2022-02-08T10:35:19Z",
    }
  ],
  "message": "success"
}

totalQty = 0;
productBin.data.forEach(data => {
  if (data.productCode == "FBR00040101") {
    totalQty += data.quantity
  }
})
console.log(totalQty)