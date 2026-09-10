$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // 1300, 400, 50 ,50 "red");TODO 2 - Create Platforms
  createPlatform(150, 625, 200, 20, "lime");
    createPlatform(450, 500, 200, 20, "hotpink");
    createPlatform(750, 400, 200, 20, "orange");
    createPlatform(1050, 450, 200, 20, "cyan");
    createPlatform(1350, 350, 200, 20, "yellow");
    createPlatform(1650, 250, 200, 20, "lime");


  // TODO 3 - Create Collectables
createCollectable("diamond", 250, 450);
    createCollectable("steve", 850, 250);
    createCollectable("grace", 1450, 300);



    
    // TODO 4 - Create Cannons
createCannon("left", 300, 2500);
    createCannon("right", 450, 2500);
    createCannon("top", 800, 5000);


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
