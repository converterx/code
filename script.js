document.getElementById("convertBtn").addEventListener("click", function() {
    let jsCode = document.getElementById("jsInput").value;

    // Simple converter function
    let phpCode = jsCode
        .replace(/let|var|const/g, "$")
        .replace(/console.log/g, "echo")
        .replace(/function/g, "function")
        .replace(/true/g, "true")
        .replace(/false/g, "false")
        .replace(/;/g, ";");

    // Results are shown on PHP output
    document.getElementById("phpOutput").value = "<?php\n" + phpCode + "\n?>";
});
