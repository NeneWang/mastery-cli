function get_random(list) {
    return list[Math.floor((Math.random() * list.length))];
}
const MAID_NAME = "Maid";

const MAID_EMOJIS = ["genie_woman", "elf_woman", "construction_worker_woman", "zombie_woman", "policewoman",
    "mage_woman", "sauna_woman", "woman_juggling", "woman_pilot", "woman_office_worker",
    "woman_health_worker"];

const CURRENCY_SIMBOLS = {
    "AED": "United Arab Emirates Dirham",
    "AFN": "Afghan Afghani",
    "ALL": "Albanian Lek",
    "AMD": "Armenian Dram",
    "ANG": "Netherlands Antillean Guilder",
    "AOA": "Angolan Kwanza",
    "ARS": "Argentine Peso",
    "AUD": "Australian Dollar",
    "AWG": "Aruban Florin",
    "AZN": "Azerbaijani Manat",
    "BAM": "Bosnia-Herzegovina Convertible Mark",
    "BBD": "Barbadian Dollar",
    "BDT": "Bangladeshi Taka",
    "BGN": "Bulgarian Lev",
    "BHD": "Bahraini Dinar",
    "BIF": "Burundian Franc",
    "BMD": "Bermudan Dollar",
    "BND": "Brunei Dollar",
    "BOB": "Bolivian Boliviano",
    "BRL": "Brazilian Real",
    "BSD": "Bahamian Dollar",
    "BTC": "Bitcoin",
    "BTN": "Bhutanese Ngultrum",
    "BWP": "Botswanan Pula",
    "BYN": "New Belarusian Ruble",
    "BYR": "Belarusian Ruble",
    "BZD": "Belize Dollar",
    "CAD": "Canadian Dollar",
    "CDF": "Congolese Franc",
    "CHF": "Swiss Franc",
    "CLF": "Chilean Unit of Account (UF)",
    "CLP": "Chilean Peso",
    "CNY": "Chinese Yuan",
    "COP": "Colombian Peso",
    "CRC": "Costa Rican Col\u00f3n",
    "CUC": "Cuban Convertible Peso",
    "CUP": "Cuban Peso",
    "CVE": "Cape Verdean Escudo",
    "CZK": "Czech Republic Koruna",
    "DJF": "Djiboutian Franc",
    "DKK": "Danish Krone",
    "DOP": "Dominican Peso",
    "DZD": "Algerian Dinar",
    "EGP": "Egyptian Pound",
    "ERN": "Eritrean Nakfa",
    "ETB": "Ethiopian Birr",
    "EUR": "Euro",
    "FJD": "Fijian Dollar",
    "FKP": "Falkland Islands Pound",
    "GBP": "British Pound Sterling",
    "GEL": "Georgian Lari",
    "GGP": "Guernsey Pound",
    "GHS": "Ghanaian Cedi",
    "GIP": "Gibraltar Pound",
    "GMD": "Gambian Dalasi",
    "GNF": "Guinean Franc",
    "GTQ": "Guatemalan Quetzal",
    "GYD": "Guyanaese Dollar",
    "HKD": "Hong Kong Dollar",
    "HNL": "Honduran Lempira",
    "HRK": "Croatian Kuna",
    "HTG": "Haitian Gourde",
    "HUF": "Hungarian Forint",
    "IDR": "Indonesian Rupiah",
    "ILS": "Israeli New Sheqel",
    "IMP": "Manx pound",
    "INR": "Indian Rupee",
    "IQD": "Iraqi Dinar",
    "IRR": "Iranian Rial",
    "ISK": "Icelandic Kr\u00f3na",
    "JEP": "Jersey Pound",
    "JMD": "Jamaican Dollar",
    "JOD": "Jordanian Dinar",
    "JPY": "Japanese Yen",
    "KES": "Kenyan Shilling",
    "KGS": "Kyrgystani Som",
    "KHR": "Cambodian Riel",
    "KMF": "Comorian Franc",
    "KPW": "North Korean Won",
    "KRW": "South Korean Won",
    "KWD": "Kuwaiti Dinar",
    "KYD": "Cayman Islands Dollar",
    "KZT": "Kazakhstani Tenge",
    "LAK": "Laotian Kip",
    "LBP": "Lebanese Pound",
    "LKR": "Sri Lankan Rupee",
    "LRD": "Liberian Dollar",
    "LSL": "Lesotho Loti",
    "LTL": "Lithuanian Litas",
    "LVL": "Latvian Lats",
    "LYD": "Libyan Dinar",
    "MAD": "Moroccan Dirham",
    "MDL": "Moldovan Leu",
    "MGA": "Malagasy Ariary",
    "MKD": "Macedonian Denar",
    "MMK": "Myanma Kyat",
    "MNT": "Mongolian Tugrik",
    "MOP": "Macanese Pataca",
    "MRO": "Mauritanian Ouguiya",
    "MUR": "Mauritian Rupee",
    "MVR": "Maldivian Rufiyaa",
    "MWK": "Malawian Kwacha",
    "MXN": "Mexican Peso",
    "MYR": "Malaysian Ringgit",
    "MZN": "Mozambican Metical",
    "NAD": "Namibian Dollar",
    "NGN": "Nigerian Naira",
    "NIO": "Nicaraguan C\u00f3rdoba",
    "NOK": "Norwegian Krone",
    "NPR": "Nepalese Rupee",
    "NZD": "New Zealand Dollar",
    "OMR": "Omani Rial",
    "PAB": "Panamanian Balboa",
    "PEN": "Peruvian Nuevo Sol",
    "PGK": "Papua New Guinean Kina",
    "PHP": "Philippine Peso",
    "PKR": "Pakistani Rupee",
    "PLN": "Polish Zloty",
    "PYG": "Paraguayan Guarani",
    "QAR": "Qatari Rial",
    "RON": "Romanian Leu",
    "RSD": "Serbian Dinar",
    "RUB": "Russian Ruble",
    "RWF": "Rwandan Franc",
    "SAR": "Saudi Riyal",
    "SBD": "Solomon Islands Dollar",
    "SCR": "Seychellois Rupee",
    "SDG": "Sudanese Pound",
    "SEK": "Swedish Krona",
    "SGD": "Singapore Dollar",
    "SHP": "Saint Helena Pound",
    "SLE": "Sierra Leonean Leone",
    "SLL": "Sierra Leonean Leone",
    "SOS": "Somali Shilling",
    "SRD": "Surinamese Dollar",
    "STD": "S\u00e3o Tom\u00e9 and Pr\u00edncipe Dobra",
    "SVC": "Salvadoran Col\u00f3n",
    "SYP": "Syrian Pound",
    "SZL": "Swazi Lilangeni",
    "THB": "Thai Baht",
    "TJS": "Tajikistani Somoni",
    "TMT": "Turkmenistani Manat",
    "TND": "Tunisian Dinar",
    "TOP": "Tongan Pa\u02bbanga",
    "TRY": "Turkish Lira",
    "TTD": "Trinidad and Tobago Dollar",
    "TWD": "New Taiwan Dollar",
    "TZS": "Tanzanian Shilling",
    "UAH": "Ukrainian Hryvnia",
    "UGX": "Ugandan Shilling",
    "USD": "United States Dollar",
    "UYU": "Uruguayan Peso",
    "UZS": "Uzbekistan Som",
    "VEF": "Venezuelan Bol\u00edvar Fuerte",
    "VES": "Sovereign Bolivar",
    "VND": "Vietnamese Dong",
    "VUV": "Vanuatu Vatu",
    "WST": "Samoan Tala",
    "XAF": "CFA Franc BEAC",
    "XAG": "Silver (troy ounce)",
    "XAU": "Gold (troy ounce)",
    "XCD": "East Caribbean Dollar",
    "XDR": "Special Drawing Rights",
    "XOF": "CFA Franc BCEAO",
    "XPF": "CFP Franc",
    "YER": "Yemeni Rial",
    "ZAR": "South African Rand",
    "ZMK": "Zambian Kwacha (pre-2013)",
    "ZMW": "Zambian Kwacha",
    "ZWL": "Zimbabwean Dollar"
}



let APIDICT = {
    CHUCK: 'http://api.chucknorris.io/jokes/random',
    WEATHER: 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/New%20york?unitGroup=metric&include=days%2Cevents&key=WR8T3G2K9PYXY26YF6VCRV7YN&contentType=json',
    LOCAL_MAID: 'http://127.0.0.1:8000',
    DEPLOYED_MAID: 'http://127.0.0.1:8000',
    // DEPLOYED_MAID: 'https://jmmgskxdgn.us-east-1.awsapprunner.com',
    CURRENCY_EXCHANGE: 'https://api.apilayer.com/exchangerates_data',
    CURRENCY_EXCHANGE_KEY: '3zPc7CzmznmueYsu3SttUWIE2QZ3ODYd',

}

// APIDICT.DEPLOYED_MAID = 'https://jmmgskxdgn.us-east-1.awsapprunner.com'

const CONSTANTS = {
    ACCOUNT_ID: 1,
}



// https://api.apilayer.com/exchangerates_data/convert?to={to}&from={from}&amount={amount}

const getRandomMaidEmoji = () => {
    return `:${get_random(MAID_EMOJIS)}:`
}

const appendQuotes = (message) => {
    return `"${message}"`;
}


const formatLastTwoDecimals = (original) => {
    return (Math.round(original * 100) / 100);
}

const formatObjectFeatures = (userPerformanceData) => {
    for (const feat of Object.keys(userPerformanceData)) {
        userPerformanceData[feat] = formatLastTwoDecimals(userPerformanceData[feat]);
    }
    return userPerformanceData;
}


const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
}

// const ANS_CONTSTRAING =

// dtypes allowed
const dtypes = {
    // 2-20
    sd_1: 'sd_1',
    sd_2: 'sd_2',
    sd_3: 'sd_3',
    sd_4: 'sd_4',
    sd_5: 'sd_5',
    sd_6: 'sd_6',

    // 2-50
    md_1: 'md_1',
    md_2: 'md_2',
    md_3: 'md_3',
    md_4: 'md_4',
    md_5: 'md_5',
    md_6: 'md_6',


    // 2-100
    d_1: 'd_1',
    d_2: 'd_2',
    d_3: 'd_3',
    d_4: 'd_4',
    d_5: 'd_5',
    d_6: 'd_6',


    // 100-1000
    ld_1: 'ld_1',
    ld_2: 'ld_2',
    ld_3: 'ld_3',
    ld_4: 'ld_4',
    ld_5: 'ld_5',
    ld_6: 'ld_6',


    Y: "y"

}

const qmathformulas = {
    "sum_simple": { "form": "y = sd_1 + sd_2 ", "replace": [dtypes.sd_1, dtypes.sd_2], "calculates": ['y'], },
    "neg_subs": { "form": "y = sd_1 - md_2 ", "replace": [dtypes.sd_1, dtypes.md_2], "calculates": ['y'], },
    "sub_simple": { "form": "y = sd_1 - sd_2 ", "replace": [dtypes.sd_1, dtypes.sd_2], "calculates": ['y'] },
    "mult_simple": { "form": "y = sd_1 * sd_2", "replace": [dtypes.sd_1, dtypes.sd_2], "calculates": ['y'] },
    "div_simple": { "form": "y = sd_1 / sd_2 ", "replace": [dtypes.sd_1, dtypes.sd_2], "calculates": ['y'], "ans_constraint": ".2" },
    // "sum_apples": { "form": "y = sd_1 + sd_2 ", "replace": [dtypes.SD_1, dtypes.SD_2], "calculates": ['y'], "human": "I bought sd_1 apples today, and then will buy sd_2 apples tomorrow, how many apples will I have?"},
    // "sum_apples": { "form": "y = sd_1 + sd_2 ", "replace": [dtypes.SD_1, dtypes.SD_2], "calculates": ['y'], "human": "It goes sppeed "},
    "precedence": { "form": "y=sd_2/sd_3*sd_4+3*sd_5+sd_1%1/2", "replace": [dtypes.sd_1, dtypes.sd_2, "sd_3", "sd_4", "sd_5"], "calculates": ["y"], "ans_constraint": ".0" },

    "bus-conversion-rate": { "form": `${dtypes.Y} = ${dtypes.sd_1} / ${dtypes.sd_2} * 100`, "replace": [dtypes.sd_1, dtypes.sd_2], "calculates": ["y"], "ans_constraint": ".0", "human": `Calculate conversion rate (in percentage): \nnumber of conversions: ${dtypes.sd_1}\n number of visitors : ${dtypes.sd_2}\n` },
    "bus-clv": { "form": `${dtypes.Y} = ${dtypes.sd_1} * ${dtypes.sd_2} * ${dtypes.sd_3}`, "replace": [dtypes.sd_1, dtypes.sd_2, dtypes.sd_3], "calculates": ["y"], "ans_constraint": ".0", "human": `Calculate Customer Lifetime Value (CLV): \nAverage purchase value: ${dtypes.sd_1}\n number of purchases per year: ${dtypes.sd_2}\n Naverage customer lifespan: ${dtypes.sd_3}\n` },
    "bus-roi": { "form": `${dtypes.Y} = (${dtypes.ld_1} - ${dtypes.ld_2})/ ${dtypes.ld_2}`, "replace": [dtypes.ld_1, dtypes.ld_2], "calculates": ["y"], "ans_constraint": ".0", "human": `Calculate ROI (Return of Investment): \nnGain from Investments: ${dtypes.ld_1}\n Cost of Investment: ${dtypes.ld_2}\n` },
    "bus-retention": { "form": `${dtypes.Y} = (${dtypes.d_1} - ${dtypes.md_2}) / ${dtypes.d_3}`, "replace": [dtypes.d_1, dtypes.md_2, dtypes.d_3], "calculates": ["y"], "ans_constraint": ".1", "human": `Calculate customer retention rate: \nCustomers at the beginning of the year: ${dtypes.d_3}\n adquires ${dtypes.md_2} this year\n and at the end of the year has ${dtypes.d_1} customers\n` },

    "stats-variance": { "form": `y = ((sd_1 - (sd_1 + 15) / 2)^2 + (15 - (sd_1 + 15) / 2)^2) / 2`, "replace": [dtypes.sd_1], "calculates": ["y"], "ans_constraint": ".3", "human": `Calculate the variance of [ sd_1, 15 ]` },
    "stats-std": { "form": `y = sqrt(${dtypes.d_1})`, "replace": [dtypes.d_1], "calculates": ["y"], "ans_constraint": ".1", "human": `Provided that the variance is ${dtypes.d_1}, calculate the standard deviation` },
    "stats-chose": { "form": `y = (${dtypes.sd_1}/(${dtypes.sd_1} + ${dtypes.d_2}))*100`, "replace": [dtypes.sd_1, dtypes.d_2], "calculates": ["y"], "ans_constraint": ".1", "human": `A bag contains ${dtypes.sd_1} red marbles and ${dtypes.d_2} blue marbles. If you choose a marble at random, what is the probability that it will be red? (percentage %)` },
    "stats-select-consecutive": { "form": `y = (${dtypes.sd_1}/(${dtypes.sd_1} + ${dtypes.d_2}) * (${dtypes.sd_1}- 1)/(${dtypes.sd_1} + ${dtypes.d_2} - 1))`, "replace": [dtypes.sd_1, dtypes.d_2], "calculates": ["y"], "ans_constraint": ".2", "human": `A bag contains ${dtypes.sd_1} red marbles and ${dtypes.d_2} blue marbles. . If you draw two balls at random without replacement, what is the probability that both will be red?` },


}

// (sd_1 + 20) / 3
const getQmathEnabled = (listOfProblemSets, debugLast=false, lasts=0) => {
    let qmathEnabled = []
    for (problemSet of listOfProblemSets) {
        qmathEnabled = qmathEnabled.concat(problemSet)
    }

    // For debugging purposes
    if(lasts > 0) return qmathEnabled.slice(-lasts)
    if(debugLast) return [qmathEnabled.at(qmathEnabled.length-1)]
    return qmathenabled;
}


let simple = ["div_simple", "precedence", "neg_subs"];
const bus_marketing = ["bus-conversion-rate", "bus-clv", "bus-roi", "bus-retention"];
const stats = ["stats-variance", "stats-std", "stats-chose", "stats-select-consecutive"]



const qmathenabled = getQmathEnabled([
    simple,
    bus_marketing,
    stats
], null, 3);



// qmathenabled = qmathenabled.concat(bus_marketing);
// qmathenabled = bus_marketing;
// qmathenabled = stats;
// qmathenabled = ["stats-select-consecutive"]

const countDecimals = (value) => {
    if (Math.floor(value) !== value)
        return value.toString().split(".")[1].length || 0;
    return 0;
}

module.exports = {
    MAID_NAME, MAID_EMOJIS, getRandomMaidEmoji, get_random,
    appendQuotes, APIDICT, CURRENCY_SIMBOLS, CONSTANTS, formatObjectFeatures,
    qmathformulas, qmathenabled, getRandomInt, countDecimals
};




