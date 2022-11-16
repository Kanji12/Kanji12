var convters = {
    getFoot: function (inch)
    {
        return inch * 0.0833
    },
    getMeter: function (inch)
    {
        return inch * 0.0254
    },
    getKm: function (inch)
    {
        return inch /39370.1
        }
}
module.exports = convters