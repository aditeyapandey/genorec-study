//Feature List
//Allow moving back to the stimuli and updating the score
//Adding the task id in the response score
//Randomizing the tasks after first three tasks
//Make the last button as the end study button

(function () {
  // Global Variables
  const responseInputLabels = {
    5: "5 - Yes, I would use this visualization",
    4: "4 - Yes, but with minor modifications",
    3: "3 - Unsure",
    2: "2 - No, not without major modifications",
    1: "1 - No, I would not use this visualization",
  };

  let currentTaskIndex = 0;
  let totalTasks = 9;
  let responseData = {};
  const mode = "normal";

  //Read data
  let data = window.data;
  createTask(data, currentTaskIndex);

  // select box
  $("select").change(function () {
    var optionSelected = $(this).find("option:selected");
    var valueSelected = optionSelected.val();
    clear();
    currentTaskIndex = valueSelected - 1;
    createTask(data, currentTaskIndex);
  });

    // select box
    $("#download").click(function () {
      var data =
      "text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(responseData));
      $("#download").attr("download","data.json")
      $("#download").attr("href","data:"+data)

    });

  function createTask(data, index) {
    //Add task header
    $("#taskHeader").append(`<h3>Task ${index + 1}/${totalTasks}</h3>`);

    //Create the progress bar
    $("#progressBar").append(`<div
    class="progress-bar progress-bar-striped progress-bar-animated"
    role="progressbar"
    aria-valuenow=${0}
    aria-valuemin=${totalTasks}
    aria-valuemax=${14}
    style="width: ${((index + 1) / totalTasks) * 100}%"></div>`);

    //Create Data Description
    let dataDescriptionObj = data["tasks"][index]["dataDescription"];

    let task = data["tasks"][index]["taskDescription"];

    $("#dataDescription").append(
      `<h3><i class="fa fa-table" aria-hidden="true"></i> Data</h3>`
    );

    $("#dataDescription").append(
      `<div id="dataFileContainer" class="row"></div>`
    );
    dataDescriptionObj.forEach((val, fileIndex) => {
      let id = `Task_${index}_File_${fileIndex}`;
      $("#dataFileContainer").append(`<div id=${id} class="col-4"></div>`);
      $("#" + id).append(`<h6 >#${fileIndex + 1}</h6>`);
      $("#" + id).append(`<h6>File Format: ${val["fileFormat"]}</h6>`);
      $("#" + id).append(`<h6>Attributes: ${val["attributes"]}</h6>`);
      $("#" + id).append(`<h6>Extent: ${val["featureExtent"]}</h6>`);
      $("#" + id).append(`<h6>Density: ${val["featureDensity"]}</h6>`);
      $("#" + id).append(`<h6>Connection: ${val["connection"]}</h6>`);
    });

    $("#taskDescription").append(
      `<h3><i class="fa fa-list-ul" aria-hidden="true"></i> Task</h3>`
    );
    $("#taskDescription").append(`<h6>Task: ${task}</h6>`);

    //Create Visualization
    let stimuli = data["tasks"][index]["stimuli"];
    //Randomize order
    let stimuliShuffled = _.shuffle(stimuli);

    //Render stimuli
    d3.json("jsonspecupdated/" + stimuliShuffled[0]["spec"]).then((data) => {
      createStimuli(data, index, stimuliShuffled[0]["output"], 0);
    });

    //Create Next Vis Button
    if (mode !== "test") {
      $("#nextStimuli").addClass("disabledBtnParent");

      $("#nextStimuli").append(
        ` <button type="button" id="nextStimuliBtn" class=" btn btn-secondary btn-sm disabledBtn"> Next Stimulus </button>`
      );
    } else {
      $("#nextStimuli").append(
        ` <button type="button" id="nextStimuliBtn" class=" btn btn-secondary btn-sm"> Next Stimulus </button>`
      );
    }

    $("#nextStimuliBtn").on("click", function () {
      d3.json("jsonspecupdated/" + stimuliShuffled[1]["spec"]).then((data) => {
        createStimuli(data, index, stimuliShuffled[1]["output"], 1);
      });
    });
  }

  /**
   *
   * @param {*} visSpec
   * @param {*} taskId
   * @param {*} stimuliId
   * @param {*} stimuliIndex
   */
  function createStimuli(visSpec, taskId, stimuliId, stimuliIndex) {
    //Empty current response
    $("#responseInput").empty();
    $("#stimuliId").empty();

    //Add Vis after changing dimension
    visSpec["width"] = $(".stimuliContainer").width() * 0.9;
    gosling.embed(document.getElementById("vis"), visSpec);

    $(".gosling-component").css("padding","0px")
    $(".gosling-component").css("margin","auto")


    if (mode !== "test") {
      $("#stimuliId").append(`<p> Stimuli ${stimuliIndex + 1}/2 </p>`);
    } else {
      $("#stimuliId").append(`<p> Stimuli: ${stimuliId} </p>`);
    }

    //Create Response Options
    let responseOptionsHTML = "";
    Object.keys(responseInputLabels)
      .sort((a, b) => b - a)
      .forEach((val) => {
        responseOptionsHTML = responseOptionsHTML.concat(
          `<div class="form-check">
         <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault${val}"
          value=${val}
        />
        <label class="form-check-label" for="flexRadioDefault${val}">${responseInputLabels[val]}</label>
        </div>
        `
        );
      });
    $("#responseInput").append(responseOptionsHTML);

    //Register an event listener
    $(".form-check-input").on("change", function () {
      if (responseData[taskId] === undefined) {
        responseData[taskId] = {};
      }
      responseData[taskId][stimuliId] = $(this).val();
      console.log(responseData);

      //Remove disabled  btn class
      $("#nextStimuli").removeClass("disabledBtnParent");
      $("#nextStimuliBtn").removeClass("disabledBtn");
      $("#nextTaskBtn").removeClass("disabledBtn");
    });

    //Check for second stimuli and update the controls
    if (stimuliIndex === 1) {
      $("#nextStimuli").empty();

      $("#nextStimuli").addClass("disabledBtnParent");

      $("#nextStimuli").append(
        `<button id="nextTaskBtn" type="button" class="btn btn-primary btn-sm disabledBtn">Next Task</button>`
      );

      $("#nextTaskBtn").on("click", function () {
        currentTaskIndex++;
        if (!checkLastTask(currentTaskIndex)) {
          clear();
          createTask(window.data, currentTaskIndex);
        } else {
          // clear();
          $('.study').css('display', 'none');
          $('.finalMessage').css('visibility', 'visible');
          var data =
            "text/json;charset=utf-8," +
            encodeURIComponent(JSON.stringify(responseData));
          $(
            '<a href="data:' + data + '" download="data.json">Download Data</a>'
          ).appendTo(".downloadBtn");
        }
      });
    }
  }

  function clear() {
    $("#taskHeader").empty();
    $("#responseInput").empty();
    $("#nextStimuli").empty();
    $("#dataDescription").empty();
    $("#taskDescription").empty();
    $("#progressBar").empty();
    $("#responseInput").empty();
    $("#stimuliId").empty();
  }

  function checkLastTask(taskIndex) {
    if (taskIndex === totalTasks) {
      return true;
    }
    return false;
  }
})();
