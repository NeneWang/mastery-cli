module.exports = Settings = {
    "account_id": 1,
    "ask_quiz_when_commit": true,
    "quiz_enabled": [
        "math",
        "term",
    ], //Quick quizes enabled when commiting, 
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
    "report_settings": {
        "week_features": true,
        "performance_summary": true,
        "weather": false,
        "missing_report": true,
        "Objectives Journal": true,
    },
    "terms_force_mode_cards": 3, //Cards fetched when in force mode.
    "long_term_storage_of_fail_terms": true, // If a user commits a mistake in a term, it will be stored to be used on next quiz.
    "table_feat_show": ["commits", "feat", "algo_w", "pro", "math_ss"], // commits │ feat │ math_ss │ ref │ fix  │ algo │ acad │ pro  │ terms │ algo_w │ test │ tesrasd │ commits} │ terms}
    "show_http_errors": false,
    "dev_mode": false, //If true, it will print communication receips
    "account_settings": {
        "access_credentials_enabled": true,
    }
}