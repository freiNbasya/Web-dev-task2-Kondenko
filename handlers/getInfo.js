function handlerInfo(req, res) {
    const info = {
        "APIs": [
            {
                request_link: "/page1",
                purpose: "Sends first html page",
                result: "HTML page"
            },
            {
                request_link: "/page2",
                purpose: "Sends second html page",
                result: "HTML page"
            },
            {
                request_link: "/file/:filename",
                purpose: "Sends file depending on entered file",
                result: "PNG, MP3 or TXT file"
            },
            {
                request_link: "/objects",
                purpose: "Sends json of objects (Ducks, geese, hens)",
                result: "JSON"
            },
            {
                request_link: "/objects/:type",
                purpose: "Sends json of specific type of objects (Ducks, geese, hens)",
                result: "JSON"
            },
            {
                request_link: "/objects/:type/:id",
                purpose: "Sends json object of specifc type with specific id (Ducks, geese, hens)",
                result: "JSON"
            },
            {
                request_link: "/info",
                purpose: "Sends this page",
                result: "JSON"
            }
        ]
    }
    res.json(info)
}
module.exports = handlerInfo;