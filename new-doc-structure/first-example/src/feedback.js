// src/feedback.js
document.querySelector('#feedback-form').addEventListener('submit', async (event) => {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const response = await fetch(form.action, {
    method: 'POST',
    body: formData,
  });
  if (response.ok) {
    // Handle successful submission, e.g., display a confirmation message
    alert('Feedback submitted successfully! Thank you for your feedback.');
    form.reset();
  } else {
    // Handle submission error
    alert('Failed to submit feedback. Please try again later.');
  }
});
