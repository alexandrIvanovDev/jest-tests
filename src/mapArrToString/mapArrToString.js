const mapArrToString = (arr) => {
    return arr
        .filter(n => Number.isInteger(n))
        .map(String)
}

module.exports = mapArrToString