//Define img variable as empty
img = "";
status = "";

function preload()
{
    //Write preload function
    img = loadImage("dog_cat.jpg");
}

function setup()
{
    //Create the Canvas and place it in center of the screen
    canvas = createCanvas(640 , 420);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd" , modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded()
{
    console.log("Model is Loaded");
    status = true;
    objectDetector.detect(img , gotResults);
}

function gotResults(error , results)
{
    if(error)
    {
        console.error(error);
    }

    console.log(results);

}

function draw()
{
    //Write Draw Function
    image(img , 0 , 0 , 640 , 420);
    fill("#FF0000");
    text("Dog" , 40 , 75);
    noFill();
    stroke("#FF0000");
    rect(30 , 60 , 450 , 350);

    fill("#FF0000");
    text("Cat" , 310 , 110);
    noFill();
    stroke("#FF0000");
    rect(300 , 90 , 270 , 320);
}

