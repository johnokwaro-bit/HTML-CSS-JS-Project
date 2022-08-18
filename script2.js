const myObject = document.getElementsByClassName("myObject");
console.log(myObject);

const address= {
    name: 'Okanda Research Centre',
    street: {
        Line1: '680 Moi Drive, Umoja',
        Line2: 'Kayole-Spine Road'
    },
    city: 'Nairobi',
    zipCode: '00100',
    country: 'Kenya',
    phone: {
        Tel: +254707240185,
        Mobile: +254785060403

    }
}

myObject.apppent(address.name)

if(typeof address=== "object"){else{
    myObject.append(address[key]);
}