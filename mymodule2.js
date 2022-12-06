var BillPrint = function () {
    console.log("bill has been printed.....");
}
var GeneratedPDF = function () {
    console.log("Generated PDF has been printed...");
}
var sentEmail = function () {
    console.log("SentEmail has been saved...");
}

module.exports.BillPrint = BillPrint;
module.exports.GeGeneratedPDF =GeneratedPDF;
module.exports.sentEmail = sentEmail;