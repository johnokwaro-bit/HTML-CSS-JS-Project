const extent = document.getElementsByClassName("extent")[0]
console.log(extent)

const address = {
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

extent.textContent = address.name;









