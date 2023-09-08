// Language speciifc questions for code interview practice. Such as Python, Swift, Javascript, Dart.

// Make sure for all know how to instantiate the specific structures.

const python = [
    {

    }
]

const swift = [
    {
        term: "Using Regex",
        description:  "Check the following regex example.\
        import Foundation\n\
        \n\
        func timeConversion(s: String) -> String {\n\
            do {\n\
                let pattern = \"^(\\d{2}):(\\d{2}):(\\d{2})([APap][Mm])$\"\n\
                let regex = try NSRegularExpression(pattern: pattern, options: [])\n\
                if let match = regex.firstMatch(in: s, options: [], range: NSRange(s.startIndex..., in: s)) {\n\
                    let hoursRange = Range(match.range(at: 1), in: s)!\n\
                    let minutesRange = Range(match.range(at: 2), in: s)!\n\
                    let secondsRange = Range(match.range(at: 3), in: s)!\n\
                    let ampmRange = Range(match.range(at: 4), in: s)!\n\
                    \n\
                    var hours = Int(s[hoursRange])!\n\
                    let minutes = String(s[minutesRange])\n\
                    let seconds = String(s[secondsRange])\n\
                    let ampm = String(s[ampmRange])\n\
                    \n\
                    if (ampm.uppercased() == \"PM\" && hours != 12) {\n\
                        hours += 12\n\
                    } else if (ampm.uppercased() == \"AM\" && hours == 12) {\n\
                        hours = 0\n\
                    }\n\
                    \n\
                    return String(format: \"%02d:%@:%@\", hours, minutes, seconds)\n\
                }\n\
            } catch {\n\
                print(\"Error: \(error)\")\n\
                return \"Error \\(error)\"\n\
            }\n\
            \n\
            return \"\"\n\
        }\n\
        \n\
        let stdout = ProcessInfo.processInfo.environment[\"OUTPUT_PATH\"]!\n\
        FileManager.default.createFile(atPath: stdout, contents: nil, attributes: nil)\n\
        let fileHandle = FileHandle(forWritingAtPath: stdout)!\n\
        \n\
        guard let s = readLine() else { fatalError(\"Bad input\") }\n\
        \n\
        let result = timeConversion(s: s)\n\
        fileHandle.write(result.data(using: .utf8)!)\n\
        fileHandle.write(\"\\n\".data(using: .utf8)!)",
        prompt: "Create regex to match time in 12 hour format. e.g. 07:05:45PM",
        example: "^(\\d{2}):(\\d{2}):(\\d{2})([APap][Mm])$"
    },
    {
        term: "Using Regex II",
        description:  "Check the following regex example.\
        import Foundation\n\
        \n\
        func timeConversion(s: String) -> String {\n\
            do {\n\
                let pattern = \"^(\\d{2}):(\\d{2}):(\\d{2})([APap][Mm])$\"\n\
                let regex = try NSRegularExpression(pattern: pattern, options: [])\n\
                if let match = regex.firstMatch(in: s, options: [], range: NSRange(s.startIndex..., in: s)) {\n\
                    let hoursRange = {TODO #1}\n\
                    let minutesRange = Range(match.range(at: 2), in: s)!\n\
                    let secondsRange = Range(match.range(at: 3), in: s)!\n\
                    let ampmRange = Range(match.range(at: 4), in: s)!\n\
                    \n\
                    var hours = {TODO #2}\n\
                    let minutes = String(s[minutesRange])\n\
                    let seconds = String(s[secondsRange])\n\
                    let ampm = String(s[ampmRange])\n\
                    \n\
                    if (ampm.uppercased() == \"PM\" && hours != 12) {\n\
                        hours += 12\n\
                    } else if (ampm.uppercased() == \"AM\" && hours == 12) {\n\
                        hours = 0\n\
                    }\n\
                    \n\
                    return String(format: \"%02d:%@:%@\", hours, minutes, seconds)\n\
                }\n\
            } catch {\n\
                print(\"Error: \(error)\")\n\
                return \"Error \\(error)\"\n\
            }\n\
            \n\
            return \"\"\n\
        }\n\
        \n\
        let stdout = ProcessInfo.processInfo.environment[\"OUTPUT_PATH\"]!\n\
        FileManager.default.createFile(atPath: stdout, contents: nil, attributes: nil)\n\
        let fileHandle = FileHandle(forWritingAtPath: stdout)!\n\
        \n\
        guard let s = readLine() else { fatalError(\"Bad input\") }\n\
        \n\
        let result = timeConversion(s: s)\n\
        fileHandle.write(result.data(using: .utf8)!)\n\
        fileHandle.write(\"\\n\".data(using: .utf8)!)",
        prompt: "Complete the code to match the hour as an integer",
        example: "Range(match.range(at: 1), in: s)!\n\
        Int(s[hoursRange])!\n"
    },
    {
        term: "Declaring Type Variable",
        prompt: "Can you declare a float variable?",
        example: "var a: Float = 1.0"
    },
    {
        term: "For Loop on Swift",
        prompt: "How to iterate over a range in Swift? (1..5)",
        example: "for i in 1...5 { print(i) }"
    },
    {
        term: "For Loop on Swift II",
        prompt: "How to iterate over an array\n\ e.g let numbers = [1, 2, 3, 4, 5]",
        example: "for i in numbers { print(i) }"
    },
    {
        term: "For Loop enumerate",
        prompt: "How to iterate over an array and get the index and value?",
        example: "for (index, value) in numbers.enumerated() { print(index, value) }"
    },
    {
        term: "Format decimals",
        prompt: "How to print a double in 6 places after the decimal?",
        example: "String(format: \"%.6f\", 1.0)"
    }
]

const js = [
    {
        term: "Check key in map",
        example: "if ('j' in {'j': 1}) { console.log('j is in the map'); }",
        prompt: "How to check if a key is in a map: e.g. j in {'j': 1}?"
    }
]

const dart = [
]


const php = [

]

const java = []

const csharp = []

const cpp = []


export { python, swift, js, dart, php, java, csharp, cpp };


