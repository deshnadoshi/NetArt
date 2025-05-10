$(document).ready(function() {
    $("a[data-personality]").click(function(e) {
        const personality = $(this).data("personality");
        let scores = JSON.parse(localStorage.getItem("timeTravelScores")) || {
            observer: 0,
            drifter: 0,
            paradox: 0,
            hiddenhand: 0
        };

        if (personality) {
            scores[personality]++;
            localStorage.setItem("timeTravelScores", JSON.stringify(scores));
            console.log("Updated scores:", scores); // For debugging
        }
    });

    if ($("#final-result").length) {
        const scores = JSON.parse(localStorage.getItem("timeTravelScores")) || {
            observer: 0,
            drifter: 0,
            paradox: 0,
            hiddenhand: 0
        };
        
        let maxScore = 1;
        let finalPersonality = "paradox"; // setting asdefault

        for (const personality in scores) {
            if (scores[personality] > maxScore) {
                maxScore = scores[personality];
                finalPersonality = personality;
            }
        }

        console.log("Final personality:", finalPersonality, "with score:", maxScore);

        let resultText = "";
        let pageLink = "";

        if (finalPersonality === "observer") {
            resultText = "You're an Observer! (You watch history happen, like a cool ghost.)";
            pageLink = "observer.html";
        } else if (finalPersonality === "drifter") {
            resultText = "You're a Drifter! (Wandering through time like a lost tourist.)";
            pageLink = "drifter.html";
        } else if (finalPersonality === "paradox") {
            resultText = "You're a Paradox! (You break time for fun. Dangerous.)";
            pageLink = "paradox.html";
        } else if (finalPersonality === "hiddenhand") {
            resultText = "You're the Hidden Hand! (Changing history sneakily.)";
            pageLink = "hiddenhand.html";
        }

        //$("finalPersonality").html(`${resultText}<br><br><a href="${pageLink}">Read more</a>`);

        $("#final-result").html(`${resultText}<br><br><a href="${pageLink}">Read More!</a>`);
    }

    if ($("body:contains('Oops, You Invented a Time Machine!')").length) {
        localStorage.removeItem("timeTravelScores");
    }
});