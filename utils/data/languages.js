// Language speciifc questions for code interview practice. Such as Python, Swift, Javascript, Dart.

// Make sure for all know how to instantiate the specific structures.

const python = [
]

const swift = [
    {
        term: "Using Regex",
        description: "Check the following regex example.\
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
        description: "Check the following regex example.\
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
    },
    {
        term: "Dict | Swift",
        prompt: "Create a dictionary with key as string and value as int",
        example: "var dict: [String: Int] = [:]"
    },
    {
        term: "Dict | Add, , update",
        prompt: "How to add, update a dictionary?",
        example: "dict[\"a\"] = 1\n\
        dict[\"b\"] = 2"
    },
    {
        term: "Dict | Remove",
        prompt: "How to remove a key from a dictionary?",
        example: "dict.removeValue(forKey: \"a\")"
    },
    {
        term: "Set | init",
        prompt: "How to initialize a set of Integers?",
        example: "var set: Set<Int> = []\n\
        var set: Set<Int> = [1, 2, 3]\n\
        "
    },
    {
        term: "Set | Add, check if contains",
        prompt: "How to add an element to a set and check if it contains an element?",
        example: "set.insert(1)\n\
        set.contains(1)"
    },
    {
        term: "Set | Remove & Remove All",
        prompt: "How to remove an element from a set and remove all elements?",
        example: "set.remove(1)\n\
        set.removeAll()"
    },
    {
        term: "For loop from 2 to count",
        prompt: "How to iterate from 2 to count?",
        example: "for i in 2..<count { print(i) }"
    },
    {
        term: "Get first and second half array",
        prompt: "How to get the first and second half of an array? from middle = nums.count - ( k % nums.count )",
        example: "let firstHalf = nums[0..<middle]\n\
        let secondHalf = nums[middle..<nums.count]"
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

const matlab = []

const r = []

const kotlin = []

const php = [
]

const java = []

const csharp = []

const cpp = []

const typescript = [
    {
        term: "Create a tuple",
        prompt: "How to create a tuple? of number, string and last element as boolean | named tuple",
        example: "let tuple: [number, string, boolean] = [1, 'a', true]"
    },
    {
        term: "Create an Enum",
        prompt: "How to create an enum? of Bajo: 10, Normal: 50, Alto: 100",
        example: "enum Priority {\n\
            Bajo = 10,\n\
            Normal = 50,\n\
            Alto = 100\n\
        }"
    },
    {
        term: "Declare a variable of Enum",
        prompt: "How to declare a variable of Enum type Priority which starts as Bajo?",
        example: "let priority: Priority = Priority.Bajo"
    },
    {
        term: "Create an array of String",
        prompt: "How to create an array of String?",
        example: "let array: string[] = []"
    },
    {
        term: "Create an array  II",
        prompt: "How to create an array of String and Numbers",
        example: "let array: (string | number)[] = []"
    },
    {
        term: "Create an array III",
        prompt: "How to create an array of any type?",
        example: "let array: any[] = []"
    },
    {
        term: "Method that returns a String",
        prompt: "How to create a method that returns a String?",
        example: "function sayHello(name: string): string {\n\
            return `Hello ${name}`\n\
        }"
    },
    {
        term: "Create an interface",
        prompt: "How to create an interface of a Person with name and age?",
        example: "interface Person {\n\
            name: string,\n\
            age: number\n\
        }"
    },
    {
        term: "Use Person Interface in an array",
        prompt: "How to create an array of interface Person that has name and age??",
        example: "let people: Person[] = []"
    }
]


module.exports = { python, swift, js, dart, php, java, csharp, cpp, typescript, r, matlab, kotlin };


