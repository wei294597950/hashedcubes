var view_schemas = {

    "twitter": {
        PLOTTING: "black",
        PLOTTING_MODE: "circle",
        PLOTTING_COLOR_SCALE: "ryw",
        PLOTTING_TRANSFORM: "density_scaling",
        title: "Twitter (full)",
        tile: [{
            title: "Location",
            value: "0",
            color: "#ff7800"
        }, ],
        views: [
				{
				    type: "histogram",
				    title: "App",
				    on_menu: true,
				    div: "#section",
				    size: 20,
				    field: {
				        name: "app",
				        values: ["None", "Twitter", "Foursquare", "Instagram"]
				    }
				},
				{
				    type: "histogram",
				    title: "Device",
				    on_menu: true,
				    div: "#section",
				    size: 20,
				    field: {
				        name: "device",
				        values: ["None", "iPhone", "Android", "iPad", "Windows"]
				    }
				},
                {
                    type: "histogram",
                    title: "Language",
                    on_menu: true,
                    div: "#section",
                    size: 20,
                    field: {
                        name: "language",
                        values: ["None", "EN", "ES", "DE", "EL", "FR", "IT", "JA", "KO", "NL", "PL", "PT", "RU", "TR", "VI"]
                    }
                },
                {
                    type: "time-series",
                    title: "Timeline",
                    on_menu: true,
                    div: "#section",
                    size: 40,
                    field: {
                        name: "tseries",
                    }
                }, ]
    },

    "twitter-small": {
        PLOTTING: "black",
        PLOTTING_MODE: "circle",
        PLOTTING_COLOR_SCALE: "ryw",
        PLOTTING_TRANSFORM: "density_scaling",
        title: "Twitter (small)",
        tile: [{
            title: "Location",
            value: "0",
            color: "#0000ff"
        }, ],
        views: [
				{
				    type: "histogram",
				    title: "Device",
				    on_menu: true,
				    div: "#section",
				    size: 25,
				    field: {
				        name: "device",
				        values: ["None", "iPhone", "Android", "iPad", "Windows"]
				    }
				},
                {
                    type: "time-series",
                    title: "Timeline",
                    on_menu: true,
                    div: "#section",
                    size: 75,
                    field: {
                        name: "tseries",
                    }
                }, ]
    },

    "twitter-mysql": {
        PLOTTING: "black",
        PLOTTING_MODE: "circle",
        PLOTTING_COLOR_SCALE: "ryw",
        PLOTTING_TRANSFORM: "density_scaling",
        title: "Twitter SQL Example",
        tile: [{
            title: "Location",
            value: "0",
            color: "#ff7800"
        }, ],
        views: [
                {
                    type: "mysql",
                    title: "MySQL",
                    on_menu: false,
                    div: "#right-section",
                    size: 100,
                    field: {
                        name: "mysql",
                        values: [
                            /*{
                                label: "Id",
                                name: "id",
                                type: "number",
                                width: 10,
                                align : "center",
                            }, {
                                label: "Lat",
                                name: "lat0",
                                type: "number",
                                width: 10
                            }, {
                                label: "Lon",
                                name: "lon0",
                                type: "number",
                                width: 10
                            },*/ {
                                label: "Tweet",
                                name: "text",
                                type: "tweet",
                                width: 650,
                                align: "left",
                                formatter:
                                    function formatRating(cellValue, options, rowObject) {

                                        function replaceAll (str, search) {
                                            var user = str.match(search);
                                            var replacement = "<a style='color: DeepSkyBlue;'  href='https://twitter.com/" + user + "' target='_blank'><img height='16' width='16' style='vertical-align: middle;' src='/images/twitter-icon.png'/>" + user + "</a>";
                                            return str.replace(new RegExp(search), replacement);
                                        };

                                        var str = replaceAll(cellValue, /@[\w]+/);
                                        var cellHtml = "<span originalValue='" + cellValue + "'>" + str + "</span>";
                                        return cellHtml;
                                    }
                            }, {
                                label: "Date",
                                name: "time",
                                type: "date",
                                width: 250,
                                align: "center",
                                formatter:
                                    function formatRating(cellValue, options, rowObject) {
                                        var format = d3.time.format("%Y/%m/%d %H:%m");
                                        return format(new Date(cellValue * 1000));
                                    }
                            }, {
                                label: "Vendor",
                                name: "app",
                                type: "category",
                                width: 100,
                                align: "center",
                                formatter:
                                    function formatRating(cellValue, options, rowObject) {
                                        var vendor = String(cellValue);
                                        vendor = vendor.replace("0", "<img style='vertical-align: middle;' src='/images/other-icon.png'/>");
                                        vendor = vendor.replace("1", "<img style='vertical-align: middle;' src='/images/android-icon.png'/>");
                                        vendor = vendor.replace("2", "<img style='vertical-align: middle;' src='/images/apple-icon.ico'/>");
                                        vendor = vendor.replace("3", "<img style='vertical-align: middle;' src='/images/chrome-icon.png'/>");
                                        vendor = vendor.replace("4", "<img style='vertical-align: middle;' src='/images/android-icon.png'/>");
                                        vendor = vendor.replace("5", "<img style='vertical-align: middle;' src='/images/apple-icon.ico'/>");
                                        vendor = vendor.replace("6", "<img style='vertical-align: middle;' src='/images/windows-icon.ico'/>");

                                        var cellHtml = "<span originalValue='" + cellValue + "'>" + vendor + "</span>";
                                        return cellHtml;
                                    }
                            }
                        ]
                    }
                },
				{
				    type: "histogram",
				    title: "App",
				    on_menu: true,
				    div: "#section",
				    size: 25,
				    field: {
				        name: "app",
				        values: ["Other", "Twitter for Android", "Twitter for iPhone", "Mobile Web", "TweetCaster for Android", "TweetCaster for iOS", "Twitter for Windows Phone"]
				    }
				},
                {
                    type: "time-series",
                    title: "Timeline",
                    on_menu: true,
                    div: "#section",
                    size: 75,
                    field: {
                        name: "time",
                    }
                }, ]
    },

    "trips_green": {
        PLOTTING: "white",
        PLOTTING_MODE: "circle",
        PLOTTING_COLOR_SCALE: "ryw",
        PLOTTING_TRANSFORM: "density_scaling",
        title: "TLC Trip Record Data",
        tile: [{
            title: "Pickup",
            value: "0",
            color: "#0000ff"
        }, {
            title: "Drop off",
            value: "1",
            color: "#ff0000"
        }, ],
        views: [
				{
				    type: "histogram",
				    title: "Day of Week",
				    on_menu: true,
				    div: "#section",
				    size: 50,
				    field: {
				        name: "day_of_week",
				        values: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat",
								"Sun"]
				    }
				},
				{
				    type: "histogram",
				    title: "Hour of Day",
				    on_menu: true,
				    div: "#section",
				    size: 50,
				    field: {
				        name: "hour_of_day",
				        values: ["00", "01", "02", "03", "04", "05", "06",
								"07", "08", "09", "10", "11", "12", "13", "14",
								"15", "16", "17", "18", "19", "20", "21", "22",
								"23"]
				    }
				},
            ],
    },

    "trips_yellow": {
        PLOTTING: "black",
        PLOTTING_MODE: "circle",
        PLOTTING_COLOR_SCALE: "ryw",
        PLOTTING_TRANSFORM: "density_scaling",
        title: "TLC Trip Record Data",
        tile: [{
            title: "Pickup",
            value: "0",
            color: "#0000ff"
        }, {
            title: "Drop off",
            value: "1",
            color: "#ff0000"
        }, ],
        views: [
				{
				    type: "histogram",
				    title: "Day of Week",
				    on_menu: true,
				    div: "#section",
				    size: 50,
				    field: {
				        name: "day_of_week",
				        values: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat",
								"Sun"]
				    }
				},
				{
				    type: "histogram",
				    title: "Hour of Day",
				    on_menu: true,
				    div: "#section",
				    size: 50,
				    field: {
				        name: "hour_of_day",
				        values: ["00", "01", "02", "03", "04", "05", "06",
								"07", "08", "09", "10", "11", "12", "13", "14",
								"15", "16", "17", "18", "19", "20", "21", "22",
								"23"]
				    }
				}, {
				    type: "time-series",
				    title: "Timeline",
				    on_menu: true,
				    div: "#top-section",
				    size: 50,
				    field: {
				        name: "day",
				    }
				},
            ],
    },

    "delay": {
        PLOTTING: "white",
        PLOTTING_MODE: "circle",
        PLOTTING_COLOR_SCALE: "bbb",
        PLOTTING_TRANSFORM: "density_scaling",
        title: "Airline On-Time Statistics",
        tile: [],
        views: [
                {
                    type: "histogram",
                    title: "Carrier",
                    on_menu: true,
                    div: "#section",
                    size: 20,
                    field: {
                        name: "carrier",
                        values: ["PS", "TW", "UA", "WN", "EA", "HP", "NW",
								"PA (1)", "PI", "CO", "DL", "AA", "US", "AS",
								"ML (1)", "AQ", "MQ", "OO", "XE", "TZ", "EV",
								"FL", "B6", "DH", "HA", "OH", "F9", "YV", "9E"]

                    }
                },
                {
                    type: "histogram",
                    title: "Year",
                    on_menu: true,
                    div: "#section",
                    size: 20,
                    field: {
                        name: "year",
                        values: ["1987", "1988", "1989", "1990", "1991", "1992", "1993", "1994", "1995", "1996", "1997", "1998", "1999", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008"]

                    }
                },
                {
                    type: "histogram",
                    title: "Day of Week",
                    on_menu: true,
                    div: "#section",
                    size: 20,
                    field: {
                        name: "day_of_week",
                        values: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
                    }
                },
				{
				    type: "binned-scatterplot",
				    title: "Dep. Delay x Arr. Delay",
				    on_menu: false,
				    div: "#top-section",
				    size: 25,
				    field: {
				        name: "binned"
				    },
				    field_x: {
				        name: "dep_delay",
				        title: "Dep. Delay",
				        values: ["0-15", "15-30", "30-45", "45-60", "60-75", "75-90", "90-105", "105-120", "120-135", "135-150", "150-165", "165-180", "180-195", "195-210", "210-225", "225-240", "240-255", "255-270", "270-285", "285-300", "300-315", "315-330", "330-345", "345-360", "360-375", "375-390", "390-405", "405-420", "420-435", "435-450", "450-465", "465-480", "480-495", "495-510", "510-525", "525-540", "540-555", "555-570", "570-585", "585-600", "600-615", "615-630", "630-645", "645-660", "660-675", "675-690", "690-705", "705-720", "720-735", "735-750", "750-765", "765-780", "780-795", "795-810", "810-825", "825-840", "840-855", "855-870", "870-885", "885-900", "900-915", "915-930", "930-945", "945-960", "960-975", "975-990", "990-1005", "1005-1020", "1020-1035", "1035-1050", "1050-1065", "1065-1080", "1080-1095", "1095-1110", "1110-1125", "1125-1140", "1140-1155", "1155-1170", "1170-1185", "1185-1200", "1200-1215", "1215-1230", "1230-1245", "1245-1260", "1260-1275", "1275-1290", "1290-1305", "1305-1320", "1320-1335", "1335-1350", "1350-1365", "1365-1380", "1380-1395", "1395-1410", "1410-1425", "1425-1440", "1440-1455", "1455-1470", "1470-1485", "1485-1500", "1500-1515", "1515-1530", "1530-1545", "1545-1560", "1560-1575", "1575-1590", "1590-1605", "1605-1620", "1620-1635", "1635-1650", "1650-1665", "1665-1680", "1680-1695", "1695-1710", "1710-1725", "1725-1740", "1740-1755", "1755-1770", "1770-1785", "1785-1800", "1800-1815", "1815-1830", "1830-1845", "1845-1860", "1860-1875", "1875-1890", "1890-1905", "1905-1920", "1920-1935", "1935-1950", "1950-1965", "1965-1980", "1980-1995", "1995-2010", "2010-2025", "2025-2040", "2040-2055", "2055-2070", "2070-2085", "2085-2100", "2100-2115", "2115-2130", "2130-2145", "2145-2160", "2160-2175", "2175-2190", "2190-2205", "2205-2220", "2220-2235", "2235-2250", "2250-2265", "2265-2280", "2280-2295", "2295-2310", "2310-2325", "2325-2340", "2340-2355", "2355-2370", "2370-2385", "2385-2400", "2400-2415", "2415-2430", "2430-2445", "2445-2460", "2460-2475", "2475-2490", "2490-2505", "2505-2520", "2520-2535", "2535-2550", "2550-2565", "2565-2580", "2580-2595", "2595-2610"]
				    },
				    field_y: {
				        name: "arr_delay",
				        title: "Arr. Delay",
				        values: ["0-15", "15-30", "30-45", "45-60", "60-75", "75-90", "90-105", "105-120", "120-135", "135-150", "150-165", "165-180", "180-195", "195-210", "210-225", "225-240", "240-255", "255-270", "270-285", "285-300", "300-315", "315-330", "330-345", "345-360", "360-375", "375-390", "390-405", "405-420", "420-435", "435-450", "450-465", "465-480", "480-495", "495-510", "510-525", "525-540", "540-555", "555-570", "570-585", "585-600", "600-615", "615-630", "630-645", "645-660", "660-675", "675-690", "690-705", "705-720", "720-735", "735-750", "750-765", "765-780", "780-795", "795-810", "810-825", "825-840", "840-855", "855-870", "870-885", "885-900", "900-915", "915-930", "930-945", "945-960", "960-975", "975-990", "990-1005", "1005-1020", "1020-1035", "1035-1050", "1050-1065", "1065-1080", "1080-1095", "1095-1110", "1110-1125", "1125-1140", "1140-1155", "1155-1170", "1170-1185", "1185-1200", "1200-1215", "1215-1230", "1230-1245", "1245-1260", "1260-1275", "1275-1290", "1290-1305", "1305-1320", "1320-1335", "1335-1350", "1350-1365", "1365-1380", "1380-1395", "1395-1410", "1410-1425", "1425-1440", "1440-1455", "1455-1470", "1470-1485", "1485-1500", "1500-1515", "1515-1530", "1530-1545", "1545-1560", "1560-1575", "1575-1590", "1590-1605", "1605-1620", "1620-1635", "1635-1650", "1650-1665", "1665-1680", "1680-1695", "1695-1710", "1710-1725", "1725-1740", "1740-1755", "1755-1770", "1770-1785", "1785-1800", "1800-1815", "1815-1830", "1830-1845", "1845-1860", "1860-1875", "1875-1890", "1890-1905", "1905-1920", "1920-1935", "1935-1950", "1950-1965", "1965-1980", "1980-1995", "1995-2010", "2010-2025", "2025-2040", "2040-2055", "2055-2070", "2070-2085", "2085-2100", "2100-2115", "2115-2130", "2130-2145", "2145-2160", "2160-2175", "2175-2190", "2190-2205", "2205-2220", "2220-2235", "2235-2250", "2250-2265", "2265-2280", "2280-2295", "2295-2310", "2310-2325", "2325-2340", "2340-2355", "2355-2370", "2370-2385", "2385-2400", "2400-2415", "2415-2430", "2430-2445", "2445-2460", "2460-2475", "2475-2490", "2490-2505", "2505-2520", "2520-2535", "2535-2550", "2550-2565", "2565-2580", "2580-2595", "2595-2610"]
				    }
				}],
    },

    "performance": {
        PLOTTING: "black",
        PLOTTING_MODE: "circle",
        PLOTTING_COLOR_SCALE: "bbb",
        PLOTTING_TRANSFORM: "density_scaling",
        title: "Airline On-Time Statistics",
        tile: [{
            title: "Origin",
            value: "0",
            color: "#0000ff"
        }, {
            title: "Destination",
            value: "1",
            color: "#ff0000"
        }, ],
        views: [
				{
				    type: "histogram",
				    title: "Delay",
				    on_menu: true,
				    div: "#section",
				    size: 25,
				    field: {
				        name: "dep_delay",
				        values: ["61+min early", "31-60min early",
								"16-30min early", "6-15min early",
								"5min early/late", "6-15min late",
								"16-30min late", "31-60min late", "61+min late"]
				    }
				},
				{
				    type: "time-series",
				    title: "Timeline",
				    on_menu: true,
				    div: "#section",
				    size: 50,
				    field: {
				        name: "tseries",
				    }
				},
				{
				    type: "histogram",
				    title: "Carrier",
				    on_menu: true,
				    div: "#section",
				    size: 20,
				    field: {
				        name: "carrier",
				        values: ["PS", "TW", "UA", "WN", "EA", "HP", "NW",
								"PA (1)", "PI", "CO", "DL", "AA", "US", "AS",
								"ML (1)", "AQ", "MQ", "OO", "XE", "TZ", "EV",
								"FL", "B6", "DH", "HA", "OH", "F9", "YV", "9E"]

				    }
				}],
    },

    "brightkite": {
        PLOTTING : "black",
        PLOTTING_MODE: "rect",
        PLOTTING_COLOR_SCALE: "ryw",
        PLOTTING_TRANSFORM: "density_scaling",
        title: "Brightkite Checkins",
        tile: [{
            title: "Location",
            value: "0",
            color: "#ffffff"
        }, ],
        views: [
				{
				    type: "histogram",
				    title: "Day of Week",
				    on_menu: true,
				    div: "#section",
				    size: 25,
				    field: {
				        name: "day_of_week",
				        values: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat",
								"Sun"]
				    }
				},
				{
				    type: "time-series",
				    title: "Timeline",
				    on_menu: false,
				    div: "#section",
				    size: 50,
				    field: {
				        name: "tseries",
				    }
				},
				{
				    type: "histogram",
				    title: "Hour Of Day",
				    on_menu: true,
				    div: "#section",
				    size: 25,
				    field: {
				        name: "hour_of_day",
				        values: ["00", "01", "02", "03", "04", "05", "06",
								"07", "08", "09", "10", "11", "12", "13", "14",
								"15", "16", "17", "18", "19", "20", "21", "22",
								"23"]
				    }
				},
				{
				    type: "binned-scatterplot",
				    title: "Day of Week x Hour of Day",
				    on_menu: false,
				    div: "#top-section",
				    size: 25,
				    field: {
				        name: "binned"
				    },
				    field_x: {
				        name: "hour_of_day",
				        title: "Hour of Day",
				        values: ["00", "01", "02", "03", "04", "05", "06",
								"07", "08", "09", "10", "11", "12", "13", "14",
								"15", "16", "17", "18", "19", "20", "21", "22",
								"23"]
				    },
				    field_y: {
				        name: "day_of_week",
				        title: "Day of Week",
				        values: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat",
								"Sun"]
				    }
				}]
    },

    "gowalla": {
        PLOTTING: "black",
        PLOTTING_MODE: "rect",
        PLOTTING_COLOR_SCALE: "ryw",
        PLOTTING_TRANSFORM: "density_scaling",
        title: "Gowalla Checkins",
        tile: [{
            title: "Location",
            value: "0",
            color: "#ff7800"
        }, ],
        views: [
				{
				    type: "histogram",
				    title: "Day of Week",
				    on_menu: true,
				    div: "#section",
				    size: 25,
				    field: {
				        name: "day_of_week",
				        values: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat",
								"Sun"]
				    }
				},
				{
				    type: "histogram",
				    title: "Hour Of Day",
				    on_menu: true,
				    div: "#section",
				    size: 25,
				    field: {
				        name: "hour_of_day",
				        values: ["00", "01", "02", "03", "04", "05", "06",
								"07", "08", "09", "10", "11", "12", "13", "14",
								"15", "16", "17", "18", "19", "20", "21", "22",
								"23"]
				    }
				},
				{
				    type: "time-series",
				    title: "Timeline",
				    on_menu: true,
				    div: "#section",
				    size: 50,
				    field: {
				        name: "tseries",
				    }
				},
				{
				    type: "binned-scatterplot",
				    title: "Day of Week x Hour of Day",
				    on_menu: false,
				    div: "#top-section",
				    size: 25,
				    field: {
				        name: "binned"
				    },
				    field_x: {
				        name: "hour_of_day",
				        title: "Hour of Day",
				        values: ["00", "01", "02", "03", "04", "05", "06",
								"07", "08", "09", "10", "11", "12", "13", "14",
								"15", "16", "17", "18", "19", "20", "21", "22",
								"23"]
				    },
				    field_y: {
				        name: "day_of_week",
				        title: "Day of Week",
				        values: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat",
								"Sun"]
				    }
				}]
    }
};