module.exports = Settings = {
    "username": "Nelson",
    "account_id": 1,
    "disable_maid_commit_cateogory": true,
    "disable_maid_all": false,
    "commit_categories": [
        {
            "code": "feat",
            "icon_list": [
                ":hammer:",
                ":shipit:",
                ":ambulance:"
            ],
            "feature_name": "feat"
        }
    ],
    "maid_name": "Lily",
    "maid_icons": [
        "genie_woman",
        "elf_woman",
        "construction_worker_woman",
        "zombie_woman",
        "policewoman",
        "mage_woman",
        "sauna_woman",
        "woman_juggling",
        "woman_pilot",
        "woman_office_worker",
        "woman_health_worker"
    ],
    "report_settings": {
        "week_features": true,
        "performance_summary": true,
        "weather": false,
        "missing_report": true
    }, //Order matters,    "quiz_enabled"
    "quiz_enable": [
        "math"
    ], //Quick quizes enabled when commiting, 
    "quiz_allow_reattempts": 3,
    "strict_commit": false,
    "features_ignore": [
        "features",
        "boba_tea_drank"
    ], //Fetures to ignore on the report.
    "monday_ses": [
        ""
    ]
}