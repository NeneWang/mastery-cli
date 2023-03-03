
class ProblemMetadata {
    constructor(slug, { name = "", description = "", difficulty = "EASY", tags = [] } = {}) {
        this.slug = slug;
        this.file_path = `.${slug}.js`;
        this.test_slug = slug;
        this.name = name;
        this.description = description;
        this.difficulty = difficulty;
        this.tags = tags;
    }

    get asJson() {
        return {
            slug: this.slug,
            file_path: this.file_path,
            test_slug: this.test_slug,
            name: this.name,
            description: this.description,
            difficulty: this.difficulty,
            tags: this.tags
        }
    }
}

module.exports = { ProblemMetadata };


