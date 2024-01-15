module.exports = Settings = {
    // User ID Provided Mastery Site.
    "account_id": 1,

    // Developer Settings
    "show_http_errors": false, // If failed connection to the server, it will show the error.
    "dev_mode": true, //If true, it will print communication receips

    // DSA 
    "ask_quiz_when_commit": true,
    "quiz_enabled": [
        "math",
        "term",
    ], //math, term sopported ONLY
    "ask_if_algo_missing_when_commit": true,
    //Quick quizes enabled when commiting, 
    "terms_force_mode_cards": 3, //Cards fetched when in force mode.
    "show_again_failed_terms": true, // If a user commits a mistake in a term, it will be stored to be used on next quiz.
    "commit_categories": [
        {
            "code": "feat",
            "description": "Personal Projects Feature Label",
            "icon_list": [
                ":hammer:",
                ":shipit:",
                ":ambulance:"
            ],
            "feature_name": "feat"
        },
        {
            "code": "pro",
            "description": "Professional Projects Feature Label",
            "icon_list": [],
            "feature_name": "pro"
        }
    ],

    // Reporting
    "report_show": {
        "week_features": true,
        "performance_summary": true,
        "weather": false,
        "missing_report": true,
        "Objectives Journal": true,
        "ask_if_algo_missing": true, // Prompts if the users wants to do an algorithm practice if the user has not done any yet.
    },
    "week_is_since_today": true, // If true, it will count the week since today. Otherwise, it will count the week since the current days sunday.
    "table_feat_show": ["commits", "feat", "algo_w", "pro", "math_ss"], // commits │ feat │ math_ss │ ref │ fix  │ algo │ acad │ pro  │ terms │ algo_w │ test │ tesrasd │ commits} │ terms}
    "objectives_features": [
        { 
            "feature_key": "commits" ,
            "description": "The number of git commits to be done",
            "req_type": "day",
            "requirement": 3
        },
        {
            "feature_key": "feat",
            "description": "The amount of Personal Project Features to be released",
            "req_type": "week",
            "requirement": 11
        },
        {
            "feature_key": "math_ss",
            "description": "The number of math problems to be solved",
            "req_type": "day",
            "requirement": 1
        },
        {
            "feature_key": "algo_w",
            "description": "The number of algorithm Weight Score to be solved in a week \n\
            1 - Cloze with comments\n\
            1 - Easy \n\
            2 - Medium \n\
            3 - Hard",
            "req_type": "week",
            "requirement": 1
        },
        {
            "feature_key": "pro",
            "description": "The number of professional projects done in a day",
            "req_type": "week",
            "requirement": 14
        },
        {
            "feature_key": "terms",
            "description": "The number of terms to be learned",
            "req_type": "week",
            "requirement": 100
        },
    ],

    // DSA Problems.
    "cloze_dsa_randomized": true, // If true, it will randomize the cloze problems. Otherwise it will be ordered by the problem type + category
}