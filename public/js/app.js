$(function () {
    //search database
    $("#searchSubmit").on("click", function (event) {
        var newSearch = {
            breed: $("#breedSearch").val().trim(),
            color: $("#colorSearch").val().trim(),
            sex: $("#sexSearch").val().trim(),
            age: $("#ageSearch").val().trim()
        };

        $.ajax("/api/strays", {
            type: "GET",
            data: newSearch
        }).then(function (data) {
            console.log(data);

            // for (var i = 0; i < data.length; i++) {
            //     var searchDiv = $("<div class='searchDiv'></div>");
            // var p1 = $("<p>").html("<span id='descriptionHeader'>Found Location: </span>" + data[i]["Found Location"]);
            //     var p2 = $("<p>").html("<span id='descriptionHeader'>At AAC: </span>" + data[i]["At AAC"]);
            //     var p3 = $("<p>").html("<span id='descriptionHeader'>Intake Date: </span>" + data[i]["Intake Date"]);
            //     var p4 = $("<p>").html("<span id='descriptionHeader'>Type: </span>" + data[i]["Type"]);
            //     var p5 = $("<p>").html("<span id='descriptionHeader'>Looks Like: </span>" + data[i]["Looks Like"]);
            //     var p6 = $("<p>").html("<span id='descriptionHeader'>Color: </span>" + data[i]["Color"]);
            //     var p7 = $("<p>").html("<span id='descriptionHeader'>Sex: </span>" + data[i]["Sex"]);
            //     var p8 = $("<p>").html("<span id='descriptionHeader'>Age: </span>" + data[i]["Age"]);
            //     var image = $("<img>").attr("src", data[i]["Image Link"]);
            //     searchDiv.append(image, p1, p2, p6, p3, p4, p5, p6, p7, p8);
            // }
        });
    });

    //submit lost pet
    

    //submit found pet
});