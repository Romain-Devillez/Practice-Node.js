const square = function (x)
{
    return x * x

}
console.log(square(3))


const squareArrow = (x) =>
{
    return x * x

}
console.log(squareArrow(4))



const squareArrowShort = (x) => x * x
console.log(squareArrowShort(4))


const event = {
    name: 'Birthday Party',
    printGuestList: function () {
        console.log('Guest list for' + this.name)
    }
}
event.printGuestList()

const eventShort = {
    name: 'Birthday Party',
    printGuestList() {
        console.log('Guest list for' + this.name)
    }
}
eventShort.printGuestList()



const eventTest = {
    name: 'Birthday Party',
    guestList: ['Andrew', 'Jen', 'Mike'],
    printGuestList: function () {
        console.log('Guest list for' + this.name)

        this.guestList.forEach( (guest) => {
            console.log(guest + 'is attending' + this.name)
        })
    }
}
eventTest.printGuestList()