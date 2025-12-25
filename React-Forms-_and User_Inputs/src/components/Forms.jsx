import React, { Component } from "react";

class Forms extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
      topic: "",
      errors: {},
      success: "",
    };
  }
  validateUsername = (username) => {
    const trimmed = username.trim();
    if (!trimmed) return "Username is required";
    if (trimmed.length < 3) return "Username must be at least 3 characters";
    return "";
  };

  validateComments = (comments) => {
    const trimmed = comments.trim();
    if (!trimmed) return "Comments are required";
    if (trimmed.length < 10) return "Comments must be at least 10 characters";
    return "";
  };

  validateTopic = (topic) => {
    if (!topic) return "Please select a topic";
    return "";
  };

  handleUserNameChange = (event) => {
    const username = event.target.value;
    const err = this.validateUsername(username);
    this.setState((prev) => ({
      username,
      errors: { ...prev.errors, username: err },
      success: "",
    }));
  };

  handleUserNameBlur = () => {
    const { username } = this.state;
    const err = this.validateUsername(username);
    this.setState((prev) => ({ errors: { ...prev.errors, username: err } }));
  };

  handleCommentsChange = (event) => {
    const comments = event.target.value;
    const err = this.validateComments(comments);
    this.setState((prev) => ({
      comments,
      errors: { ...prev.errors, comments: err },
      success: "",
    }));
  };

  handleCommentsBlur = () => {
    const { comments } = this.state;
    const err = this.validateComments(comments);
    this.setState((prev) => ({ errors: { ...prev.errors, comments: err } }));
  };

  handleTopicChange = (event) => {
    const topic = event.target.value;
    const err = this.validateTopic(topic);
    this.setState((prev) => ({
      topic,
      errors: { ...prev.errors, topic: err },
      success: "",
    }));
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, comments, topic } = this.state;
    const errors = {
      username: this.validateUsername(username),
      comments: this.validateComments(comments),
      topic: this.validateTopic(topic),
    };
    const hasError = Object.values(errors).some(Boolean);
    if (hasError) {
      this.setState({ errors, success: "" });
      return;
    }

    // Success - proceed with submission (placeholder)
    alert(`${username} ${comments} ${topic}`);
    this.setState({ errors: {}, success: "Form submitted successfully." });
  };
  render() {
    const { username, comments, topic, errors, success } = this.state;
    const hasError = Object.values(errors).some(Boolean);
    const isSubmitDisabled =
      hasError || !username.trim() || !comments.trim() || !topic;

    return (
      <form className="form-card" onSubmit={this.handleSubmit} noValidate>
        <div className="form-group">
          <label className="form-label" htmlFor="username">
            Username
          </label>
          <input
            className={`form-input ${errors.username ? "input-error" : ""}`}
            id="username"
            name="username"
            type="text"
            value={username}
            onChange={this.handleUserNameChange}
            onBlur={this.handleUserNameBlur}
            aria-invalid={!!errors.username}
            aria-describedby={errors.username ? "username-error" : undefined}
          />
          {errors.username && (
            <div id="username-error" role="alert" className="error">
              {errors.username}
            </div>
          )}
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="comments">
            Comments
          </label>
          <textarea
            className={`form-textarea ${errors.comments ? "input-error" : ""}`}
            id="comments"
            name="comments"
            value={comments}
            onChange={this.handleCommentsChange}
            onBlur={this.handleCommentsBlur}
            aria-invalid={!!errors.comments}
            aria-describedby={errors.comments ? "comments-error" : undefined}
          ></textarea>
          {errors.comments && (
            <div id="comments-error" role="alert" className="error">
              {errors.comments}
            </div>
          )}
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="topic">
            Topic
          </label>
          <select
            className={`form-select ${errors.topic ? "input-error" : ""}`}
            id="topic"
            name="topic"
            value={topic}
            onChange={this.handleTopicChange}
            aria-invalid={!!errors.topic}
            aria-describedby={errors.topic ? "topic-error" : undefined}
          >
            <option value="">Select topic</option>
            <option value="Red">Red</option>
            <option value="Green">Green</option>
            <option value="Yellow">Yellow</option>
          </select>
          {errors.topic && (
            <div id="topic-error" role="alert" className="error">
              {errors.topic}
            </div>
          )}
        </div>

        <div className="form-actions">
          <button className="btn" type="submit" disabled={isSubmitDisabled}>
            Submit
          </button>
        </div>

        {success && (
          <div role="status" className="success">
            {success}
          </div>
        )}

        <div className="preview">
          <h4>Preview</h4>
          <p>
            <strong>Username:</strong> {username || <em>—</em>}
          </p>
          <p>
            <strong>Comments:</strong> {comments || <em>—</em>}
          </p>
          <p>
            <strong>Topic:</strong> {topic || <em>—</em>}
          </p>

          {hasError && (
            <div className="preview-errors">
              <strong>Errors:</strong>
              <ul>
                {Object.entries(errors)
                  .filter(([, v]) => v)
                  .map(([k, v]) => (
                    <li key={k}>{v}</li>
                  ))}
              </ul>
            </div>
          )}
        </div>
      </form>
    );
  }
}

export default Forms;
