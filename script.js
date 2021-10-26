$(document).ready(function() {
    var nounSelect = ["Bugs Bunny", "Mickey Mouse", "Scooby Doo", "Homer Simpson", "Charlie Brown", "Snoopy", "Peter Griffin", "Goofy", "Stewie Griffin", "Patrick Star", "Tweety Bird","Porky Pig","Bart Simpson","Eric Cartman", "Donald Duck", "Fred Flintstone", "Popeye", "Johnny Bravo", "Daffy Duck", "Winnie the Pooh", "SpongeBob Squarepants", "Timmy Turner", "Garfield", "Woody Woodpecker", "Pink Panther", "Elmer Fudd"];

    var verbSelect = ["swims","skyrockets", "crawls", "zooms", "creeps", "inches", "slides"];
    var verbSelect2 = ["increased", "enlarged", "expanded", "lifted", "elevated"];
    var verbSelect3 = ["beat", "overcome", "defeat", "trounce", "knock out"];
    var verbSelect4 = ["destroys", "demolishes", "annihilates", "smashes", "obliterates"]

    var adjSelect = ["fattest", "most hated", "ugliest", "most annoying", "dumbest","iconic"]
    var adjSelect1 = ["fattest", "most hated", "ugliest", "most annoying", "dumbest","least intelligent","smartest"]
    var adjSelect2 = ["infamous","greedy","selfish","ugly","repulsive","creepy"];
    var adjSelect3 = ["huge", "immense", "excessive","colossal","tremendous","mammoth"]

    $("button").click(function() {
        $(".adj3").each(function() {
            let randomIndex = Math.floor 
            (Math.random() * adjSelect3.length);
            $(this).text(adjSelect3[randomIndex]);  
        });

    });

    $("button").click(function() {
        $(".adj2").each(function() {
            let randomIndex = Math.floor 
            (Math.random() * adjSelect2.length);
            $(this).text(adjSelect2[randomIndex]);  
        });

    });

    $("button").click(function() {
        $(".adj1").each(function() {
            let randomIndex = Math.floor 
            (Math.random() * adjSelect1.length);
            $(this).text(adjSelect1[randomIndex]);  
        });

    });

    $("button").click(function() {
        $(".adj").each(function() {
            let randomIndex = Math.floor 
            (Math.random() * adjSelect.length);
            $(this).text(adjSelect[randomIndex]);  
        });

    });

    $("button").click(function() {
        $(".verb4").each(function() {
            let randomIndex = Math.floor 
            (Math.random() * verbSelect4.length);
            $(this).text(verbSelect4[randomIndex]);  
        });

    });

    $("button").click(function() {
        $(".verb3").each(function() {
            let randomIndex = Math.floor 
            (Math.random() * verbSelect3.length);
            $(this).text(verbSelect3[randomIndex]);  
        });

    }); 

    $("button").click(function() {
        $(".verb2").each(function() {
            let randomIndex = Math.floor 
            (Math.random() * verbSelect2.length);
            $(this).text(verbSelect2[randomIndex]);  
        });

    }); 

    $("button").click(function() {
        $(".verb").each(function() {
            let randomIndex = Math.floor 
            (Math.random() * verbSelect.length);
            $(this).text(verbSelect[randomIndex]);  
        });

    });

    $("button").click(function() {
        $(".noun").each(function() {
            let randomIndex = Math.floor 
            (Math.random() * nounSelect.length);
            $(this).text(nounSelect[randomIndex]);  
        });

    });

    $("p").click(changeParStyle)
    
    function changeParStyle(){
        $(this).toggleClass("clicked");
    }
});
   