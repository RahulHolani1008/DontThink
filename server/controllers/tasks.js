class Task {
    constructor(title, severity, priority, description, imageURL, dueDate) {
        this.title = title;
        this.severity = severity;
        this.priority = priority;
        this.description = description;
        this.imageURL = imageURL;
        this.dueDate = dueDate;
    }

    save() {

    }
}

module.exports = Task;