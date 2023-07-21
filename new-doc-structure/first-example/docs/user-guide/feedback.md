 ---
id: feedback
title: Feedback Form
   ---
## Feedback Form
   <form
     action="https://formspree.io/f/mzblzgry"
     method="POST"
     target="_blank"
   >
     <div>
       <label for="name">Name:</label>
       <input type="text" id="name" name="name" required />
     </div>
     <div>
       <label for="email">Email:</label>
       <input type="email" id="email" name="email" required />
     </div>
     <div>
       <label for="message">Feedback:</label>
       <textarea id="message" name="message" rows="4" required></textarea>
     </div>
     <div>
       <button type="submit">Submit Feedback</button>
     </div>
   </form>

<script src="/js/feedback.js"></script>
