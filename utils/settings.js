module.exports = Settings = {
    // User ID Provided Mastery Site.
    "account_id": 2,

    // Developer Settings
    "show_http_errors": false, // If failed connection to the server, it will show the error.
    "dev_mode": true, // If true, it will print communication receipts

    // DSA 
    "quiz_enabled": [
        "math",
        "term",
    ], // math, term, algorithm, cloze-algo
    // Quick quizes enabled when commiting, 
    "terms_force_mode_cards": 3, //Cards fetched when in force mode.
    "blog_special_commits": true, // If true, when a special commit category is commited, it will store the commit message.
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
    "ask_quiz_when_commit": true,
    "ask_if_algo_missing_when_commit": true,
    'show_past_commits_features_after_quiz': true, // If true, it will show the past commits features after the quiz.
    "journal_notes": "Work hard every day",
    // Reporting
    "report_show": {
        "performance_summary": true,
        "weather": true,
        "missing_report": true,
        "obj_ournal": true, // Only works if missing_report is true
        "ask_if_algo_missing": true,  // Only works if missing_report is true. If true, it will ask if the user wants to solve the missing algo problems.
    },
    "week_is_since_today": true, // If true, it will count the week since today. Otherwise, it will count the week since the current days sunday.
    "table_feat_show": ["commits", "feat", "algo_w", "pro", "math_ss"], // commits │ feat │ math_ss │ ref │ fix  │ algo │ acad │ pro  │ terms │ algo_w │ test │ tesrasd │ commits} │ terms}
    "objectives_features": [
        {
            "feature_key": "commits",
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

}