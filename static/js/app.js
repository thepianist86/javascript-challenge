// from data.js
var tableData = data;

// YOUR CODE HERE!
var table = d3.select("#ufo-table");
var button = d3.select("#filter-btn");

button.on("click", filterData);

function populateTable(filtered) {
    table.select("tbody").remove();
    table.append("tbody");
    filtered.forEach((ufoSighting) => {
        var row = table.select("tbody").append("tr");
        Object.entries(ufoSighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};

function filterData() {
    d3.event.preventDefault();

    var dateField = d3.select("#datetime");
    var cityField = d3.select("#city");
    var stateField = d3.select("#state");

    var dateValue = dateField.property("value");
    var cityValue = cityField.property("value");
    var stateValue = stateField.property("value");


    if (dateValue === "" && cityValue === "" && stateValue === "") {
        populateTable(tableData);
    } 
    else if (dateValue != "" && cityValue ==="" && stateValue === "") {
        var filteredBy = tableData.filter(sighting => sighting.datetime === dateValue);
        populateTable(filteredBy);
    }else if (dateValue === "" && cityValue !="" && stateValue === "") {
        var filteredBy = tableData.filter(sighting => sighting.city === cityValue);
        populateTable(filteredBy);
    }else if (dateValue === "" && cityValue ==="" && stateValue != "") {
        var filteredBy = tableData.filter(sighting => sighting.state === stateValue);
        populateTable(filteredBy);
    }else if (dateValue != "" && cityValue !="" && stateValue === "") {
        var filteredBy = tableData.filter(sighting => sighting.datetime === dateValue && sighting.city === cityValue);
        populateTable(filteredBy);
    } else if (dateValue != "" && cityValue ==="" && stateValue != "") {
        var filteredBy = tableData.filter(sighting => sighting.datetime === dateValue && sighting.state === stateValue);
        populateTable(filteredBy);
    }else if (dateValue === "" && cityValue != "" && stateValue != "") {
        var filteredBy = tableData.filter(sighting => sighting.state === stateValue && sighting.city === cityValue && sighting.state === stateValue);
        populateTable(filteredBy);
    }
    else if (dateValue != "" && cityValue != "" && stateValue != "") {
        var filteredBy = tableData.filter(sighting => sighting.datetime === dateValue && sighting.city === cityValue && sighting.state === stateValue);
        populateTable(filteredBy);
    } 
    else{
        console.log("No Results")
    };
}

populateTable(tableData);
