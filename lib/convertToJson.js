export const convertToJson = (inputArray) => {
    const columnNames = inputArray[0];

    const json = inputArray.slice(1).map((row) => {
        return row.reduce((json, cell, index) => {
            json[columnNames[index]] = cell;
            return json;
        }, {});
    });
    console.log(json)
    return json;
}